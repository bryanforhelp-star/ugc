import { NextResponse } from "next/server";
import { getStoreProduct } from "@/lib/store";
import {
  canCheckout,
  getStripe,
  getStripePriceId,
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
  if (!canCheckout(product)) {
    return NextResponse.json(
      { error: "checkout is not live for this yet" },
      { status: 409 },
    );
  }

  const stripe = getStripe();
  const priceId = getStripePriceId(product);
  if (!stripe || !priceId) {
    return NextResponse.json(
      { error: "checkout is not connected" },
      { status: 503 },
    );
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    billing_address_collection: "auto",
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
