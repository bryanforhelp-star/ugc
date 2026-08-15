import Stripe from "stripe";
import { BOOKING, type StoreProduct } from "./store";

let client: Stripe | null | undefined;

export function getStripe() {
  if (client !== undefined) return client;
  const key = process.env.STRIPE_SECRET_KEY;
  client = key ? new Stripe(key) : null;
  return client;
}

export function getStripePriceId(product: StoreProduct) {
  const id = process.env[product.stripePriceEnv];
  return id?.startsWith("price_") ? id : null;
}

export function canCheckout(product: StoreProduct) {
  return Boolean(
    product.forSale && getStripe() && getStripePriceId(product),
  );
}

export function isBookingLive() {
  return canCheckout(BOOKING);
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
