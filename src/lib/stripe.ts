import Stripe from "stripe";
import { SESSION } from "./store";
import type { StoreProduct } from "./store";

let client: Stripe | null | undefined;

export function getStripe() {
  if (client !== undefined) return client;
  const key = process.env.STRIPE_SECRET_KEY;
  client = key ? new Stripe(key) : null;
  return client;
}

export function getStripePriceId(product: StoreProduct) {
  if (!product.stripePriceEnv) return null;
  const id = process.env[product.stripePriceEnv];
  return id?.startsWith("price_") ? id : null;
}

export function lineItemsForProduct(
  product: StoreProduct,
  amountCents = product.amountCents,
) {
  const priceId = product.id === "coffee" ? null : getStripePriceId(product);
  if (priceId) return [{ price: priceId, quantity: 1 }];
  if (amountCents && amountCents > 0) {
    const image = product.image?.startsWith("http")
      ? product.image
      : product.image
        ? storeUrl(product.image)
        : null;
    const name =
      product.id === "coffee"
        ? "a matcha 🍵"
        : product.status === "presale"
          ? `${product.title} (presale)`
          : product.title;
    return [
      {
        price_data: {
          currency: "usd" as const,
          unit_amount: amountCents,
          product_data: {
            name,
            description: product.description,
            ...(image ? { images: [image] } : {}),
          },
        },
        quantity: 1,
      },
    ];
  }
  return null;
}

export function canCheckout(product: StoreProduct) {
  if (product.id === "coffee") {
    return Boolean(product.forSale && getStripe());
  }
  return Boolean(product.forSale && getStripe() && lineItemsForProduct(product));
}

export function canTakePayments() {
  return Boolean(getStripe());
}

function formatAmount(unitAmount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: unitAmount % 100 === 0 ? 0 : 2,
  }).format(unitAmount / 100);
}

export async function getDisplayPrice(product: StoreProduct) {
  const stripe = getStripe();
  const priceId = getStripePriceId(product);
  if (stripe && priceId) {
    try {
      const price = await stripe.prices.retrieve(priceId);
      if (price.unit_amount != null) {
        return formatAmount(price.unit_amount, price.currency);
      }
    } catch {
      // fall back to the copy in store.ts
    }
  }
  if (product.amountCents) {
    return formatAmount(product.amountCents, "usd");
  }
  return product.priceLabel || null;
}

export function storeUrl(path: string) {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://bykyndall.com").replace(
    /\/$/,
    "",
  );
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function getPaidCheckoutSession(sessionId: string) {
  const stripe = getStripe();
  if (!stripe || !sessionId.startsWith("cs_")) return null;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (session.payment_status !== "paid") return null;
  return session;
}

async function listCheckoutSessions(
  stripe: Stripe,
  params: Stripe.Checkout.SessionListParams,
) {
  const sessions: Stripe.Checkout.Session[] = [];
  let startingAfter: string | undefined;
  for (let page = 0; page < 5; page += 1) {
    const result = await stripe.checkout.sessions.list({
      ...params,
      limit: 100,
      starting_after: startingAfter,
    });
    sessions.push(...result.data);
    if (!result.has_more || result.data.length === 0) break;
    startingAfter = result.data[result.data.length - 1]?.id;
  }
  return sessions;
}

/** Paid bookings plus open (unpaid) checkout holds, so two people cannot take the same hour. */
export async function getHeldBookingStarts() {
  const stripe = getStripe();
  const held = new Set<string>();
  if (!stripe) return held;

  const created = {
    gte: Math.floor(Date.now() / 1000) - (SESSION.daysAhead + 2) * 24 * 60 * 60,
  };
  const [open, complete] = await Promise.all([
    listCheckoutSessions(stripe, { status: "open", created }),
    listCheckoutSessions(stripe, { status: "complete", created }),
  ]);

  for (const session of [...open, ...complete]) {
    if (session.metadata?.kind !== "booking") continue;
    if (session.status === "complete" && session.payment_status !== "paid") {
      continue;
    }
    const startISO = session.metadata.startISO?.trim();
    if (startISO) held.add(startISO);
  }
  return held;
}
