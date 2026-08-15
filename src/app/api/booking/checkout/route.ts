import { NextResponse } from "next/server";
import { formatSlotRange, isBookableSlot } from "@/lib/booking";
import { SESSION, SESSION_PRODUCT } from "@/lib/store";
import {
  getHeldBookingStarts,
  getStripe,
  lineItemsForProduct,
  storeUrl,
} from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let startISO = "";
  try {
    const body = (await request.json()) as { startISO?: string };
    startISO = body.startISO?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  if (!startISO) {
    return NextResponse.json({ error: "pick a time first" }, { status: 400 });
  }

  const stripe = getStripe();
  const lineItems = lineItemsForProduct(SESSION_PRODUCT);
  if (!stripe || !lineItems) {
    return NextResponse.json(
      { error: "checkout is not connected yet" },
      { status: 503 },
    );
  }

  const held = await getHeldBookingStarts();
  if (!isBookableSlot(startISO, held)) {
    return NextResponse.json(
      { error: "that time just got taken. pick another." },
      { status: 409 },
    );
  }

  const when = formatSlotRange(startISO);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    allow_promotion_codes: true,
    billing_address_collection: "auto",
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    submit_type: "book",
    metadata: {
      productId: SESSION.id,
      kind: "booking",
      startISO,
      when,
    },
    payment_intent_data: {
      description: `1:1 with kyndall. ${when}`,
    },
    custom_text: {
      submit: {
        message: when,
      },
    },
    success_url: `${storeUrl("/thanks")}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: storeUrl("/work-with-me"),
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "stripe did not return a checkout url" },
      { status: 502 },
    );
  }

  return NextResponse.json({ url: session.url });
}
