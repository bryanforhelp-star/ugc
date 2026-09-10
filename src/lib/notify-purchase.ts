import { Resend } from "resend";
import type Stripe from "stripe";
import {
  buyerEmailFrom,
  buyerPaidMail,
  buyerReplyTo,
  wrapBuyerEmail,
} from "./emails";
import { getStoreProduct } from "./store";
import { getStripe } from "./stripe";

const DEFAULT_TO = "kyn@bykyndall.com";
const DEFAULT_FROM = "bykyndall <onboarding@resend.dev>";
const NOTIFIED_META = "purchaseNotified";

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

async function markNotified(session: Stripe.Checkout.Session) {
  const stripe = getStripe();
  if (!stripe) return;
  try {
    await stripe.checkout.sessions.update(session.id, {
      metadata: {
        ...(session.metadata ?? {}),
        [NOTIFIED_META]: "1",
      },
    });
  } catch (error) {
    console.error("purchase notify: could not mark session", error);
  }
}

export async function notifyPurchase(session: Stripe.Checkout.Session) {
  if (session.payment_status !== "paid") {
    return { ok: true as const, skipped: true };
  }
  if (session.metadata?.[NOTIFIED_META] === "1") {
    return { ok: true as const, skipped: true };
  }

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

  const { error } = await resend.emails.send(
    {
      from,
      to,
      subject,
      text: lines.join("\n"),
    },
    { idempotencyKey: session.id },
  );

  if (error) {
    const duplicate =
      error.name === "application_error" &&
      /idempotency/i.test(error.message || "");
    if (!duplicate) {
      console.error("purchase notify failed", error);
      return { ok: false as const, error: error.message };
    }
  }

  if (buyerEmail) {
    const mail = buyerPaidMail({
      product,
      kind,
      when,
      buyerName,
    });
    const wrapped = wrapBuyerEmail(mail);
    const buyerResult = await resend.emails.send(
      {
        from: buyerEmailFrom(),
        to: buyerEmail,
        replyTo: buyerReplyTo(),
        subject: mail.subject,
        html: wrapped.html,
        text: wrapped.text,
      },
      { idempotencyKey: `${session.id}-buyer` },
    );
    if (buyerResult.error) {
      const duplicate =
        buyerResult.error.name === "application_error" &&
        /idempotency/i.test(buyerResult.error.message || "");
      if (!duplicate) {
        console.error("buyer email failed", buyerResult.error);
        return { ok: false as const, error: buyerResult.error.message };
      }
    }
  }

  await markNotified(session);
  return { ok: true as const };
}
