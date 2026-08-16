import { NextResponse } from "next/server";
import {
  EDITING_COURSE,
  MATCHA_TIPS,
  getStoreProduct,
  productPath,
} from "@/lib/store";
import {
  canCheckout,
  getStripe,
  lineItemsForProduct,
  storeUrl,
} from "@/lib/stripe";

export const runtime = "nodejs";

function matchaAmountCents(raw: unknown, fallback: number) {
  const cents =
    typeof raw === "number"
      ? raw
      : typeof raw === "string"
        ? Number(raw)
        : fallback;
  if (!Number.isInteger(cents)) return null;
  if (cents < MATCHA_TIPS.minCents || cents > MATCHA_TIPS.maxCents) return null;
  return cents;
}

export async function POST(request: Request) {
  let productId = "";
  let requestedCents: unknown;
  try {
    const body = (await request.json()) as {
      productId?: string;
      amountCents?: unknown;
    };
    productId = body.productId?.trim() ?? "";
    requestedCents = body.amountCents;
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

  const coffee = product.id === "coffee";
  const amountCents = coffee
    ? matchaAmountCents(
        requestedCents,
        product.amountCents ?? MATCHA_TIPS.amounts[0].cents,
      )
    : undefined;
  if (coffee && amountCents == null) {
    return NextResponse.json(
      { error: "pick $5, $10, or a custom amount between $1 and $500" },
      { status: 400 },
    );
  }

  const stripe = getStripe();
  const lineItems = lineItemsForProduct(product, amountCents ?? undefined);
  if (!stripe || !lineItems) {
    return NextResponse.json(
      { error: "checkout is not connected" },
      { status: 503 },
    );
  }

  const presale = product.status === "presale";
  const cancelPath = coffee ? "/links" : productPath(product);
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
          ...(presale
            ? {
                custom_text: {
                  submit: {
                    message:
                      product.id === EDITING_COURSE.id
                        ? EDITING_COURSE.checkoutMessage
                        : "preorder. you get access when it launches.",
                  },
                },
              }
            : {}),
        }),
    metadata: {
      productId: product.id,
      kind: product.kind,
      status: product.status ?? "live",
      ...(amountCents != null ? { amountCents: String(amountCents) } : {}),
    },
    success_url: `${storeUrl("/thanks")}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: storeUrl(cancelPath),
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "stripe did not return a checkout url" },
      { status: 502 },
    );
  }

  return NextResponse.json({ url: session.url });
}
