import { NextResponse } from "next/server";
import { getStoreProduct } from "@/lib/store";
import {
  canCheckout,
  getStripe,
  lineItemsForProduct,
  storeUrl,
} from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let productId = "";
  try {
    const body = (await request.json()) as { productId?: string };
    productId = body.productId?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  const product = getStoreProduct(productId);
  if (!product) {
    return NextResponse.json({ error: "unknown product" }, { status: 404 });
  }
  if (product.kind === "booking") {
    return NextResponse.json(
      { error: "book a time on /work-with-me" },
      { status: 409 },
    );
  }
  if (!canCheckout(product)) {
    return NextResponse.json(
      { error: "checkout is not live for this yet" },
      { status: 409 },
    );
  }

  const stripe = getStripe();
  const lineItems = lineItemsForProduct(product);
  if (!stripe || !lineItems) {
    return NextResponse.json(
      { error: "checkout is not connected" },
      { status: 503 },
    );
  }

  const coffee = product.id === "coffee";
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    allow_promotion_codes: !coffee,
    ...(coffee
      ? {
          submit_type: "pay" as const,
          custom_text: {
            submit: {
              message: "for a little matcha. thank you.",
            },
          },
        }
      : {
          billing_address_collection: "auto" as const,
        }),
    metadata: {
      productId: product.id,
      kind: product.kind,
    },
    success_url: `${storeUrl("/thanks")}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: storeUrl("/links"),
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "stripe did not return a checkout url" },
      { status: 502 },
    );
  }

  return NextResponse.json({ url: session.url });
}
