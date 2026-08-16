import { NextResponse } from "next/server";
import { formatSlotRange, isBookableSlot, parseBookingIntake, stripeMeta } from "@/lib/booking";
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
  let rawIntake: {
    firstName?: unknown;
    email?: unknown;
    reasons?: unknown;
    need?: unknown;
  } = {};
  try {
    const body = (await request.json()) as {
      startISO?: string;
      firstName?: unknown;
      email?: unknown;
      reasons?: unknown;
      need?: unknown;
    };
    startISO = body.startISO?.trim() ?? "";
    rawIntake = body;
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  if (!startISO) {
    return NextResponse.json({ error: "pick a time first" }, { status: 400 });
  }

  const parsed = parseBookingIntake(rawIntake);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  const { firstName, email, reasons, need } = parsed.intake;
  const bookingFor = reasons.join(", ");

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
    customer_email: email,
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    submit_type: "book",
    metadata: {
      productId: SESSION.id,
      kind: "booking",
      startISO,
      when,
      firstName: stripeMeta(firstName),
      guestEmail: stripeMeta(email),
      bookingFor: stripeMeta(bookingFor),
      need: stripeMeta(need),
    },
    payment_intent_data: {
      description: `1:1 with kyndall. ${firstName}. ${bookingFor || "the hour"}. ${when}`,
      metadata: {
        firstName: stripeMeta(firstName),
        guestEmail: stripeMeta(email),
        bookingFor: stripeMeta(bookingFor),
        need: stripeMeta(need),
        startISO,
      },
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
