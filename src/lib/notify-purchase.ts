import { Resend } from "resend";
import type Stripe from "stripe";
import { getStoreProduct } from "./store";

const DEFAULT_TO = "kyn@bykyndall.com";
const DEFAULT_FROM = "bykyndall <onboarding@resend.dev>";

function formatUsd(cents: number | null | undefined) {
  if (cents == null) return "unknown";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function purchaseNotifyEmail() {
  return process.env.PURCHASE_NOTIFY_EMAIL?.trim() || DEFAULT_TO;
}

export async function notifyPurchase(session: Stripe.Checkout.Session) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("purchase notify skipped: RESEND_API_KEY missing");
    return { ok: false as const, error: "RESEND_API_KEY missing" };
  }

  const productId = session.metadata?.productId?.trim() || "";
  const product = productId ? getStoreProduct(productId) : null;
  const kind = session.metadata?.kind?.trim() || product?.kind || "unknown";
  const when = session.metadata?.when?.trim() || "";
  const buyerEmail =
    session.customer_details?.email || session.customer_email || "";
  const buyerName = session.customer_details?.name || "";
  const amount = formatUsd(session.amount_total);
  const title = product?.title || productId || "checkout";

  const booked = kind === "booking";
  const subject = booked
    ? `booked: ${title} · ${amount}`
    : `paid: ${title} · ${amount}`;

  const lines = [
    booked ? "new booking" : "new payment",
    "",
    `product: ${title}`,
    `amount: ${amount}`,
    buyerEmail ? `buyer: ${buyerEmail}` : "buyer: (no email)",
    buyerName ? `name: ${buyerName}` : null,
    when ? `when: ${when}` : null,
    productId ? `productId: ${productId}` : null,
    `session: ${session.id}`,
    `dashboard: https://dashboard.stripe.com/payments/${typeof session.payment_intent === "string" ? session.payment_intent : session.id}`,
  ].filter((line): line is string => Boolean(line));

  const resend = new Resend(apiKey);
  const from = process.env.PURCHASE_NOTIFY_FROM?.trim() || DEFAULT_FROM;
  const to = purchaseNotifyEmail();

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text: lines.join("\n"),
  });

  if (error) {
    console.error("purchase notify failed", error);
    return { ok: false as const, error: error.message };
  }

  return { ok: true as const };
}
