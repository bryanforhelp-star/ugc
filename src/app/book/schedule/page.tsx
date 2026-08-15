import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { StoreLink } from "@/components/store/StoreLink";
import { getPaidCheckoutSession, getSessionCalendarUrl } from "@/lib/stripe";
import { getStoreProduct } from "@/lib/store";
import "../../links/links.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "pick a time" },
  robots: { index: false, follow: false },
};

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  if (!sessionId) redirect("/work-with-me");

  const checkout = await getPaidCheckoutSession(sessionId);
  const product = checkout?.metadata?.productId
    ? getStoreProduct(checkout.metadata.productId)
    : null;
  if (!checkout || product?.kind !== "booking") {
    redirect("/work-with-me?error=unpaid");
  }

  const email = checkout.customer_details?.email;
  const cal = getSessionCalendarUrl(product, email);

  return (
    <div className="links-store">
      <section className="links-profile">
        <p className="links-kicker">you&apos;re in</p>
        <h1 className="links-name">pick a time.</h1>
        <p className="links-tagline">
          {product.title} is paid. grab a slot. if the calendar doesn&apos;t
          load, i&apos;ll email {email || "you"} to lock it in.
        </p>
      </section>

      {cal ? (
        <div className="links-cal">
          <iframe
            title="pick a time"
            src={cal}
            className="links-cal-frame"
          />
          <StoreLink href={cal} className="links-btn">
            <div className="links-btn-text">
              <div className="links-btn-title">open calendar</div>
              <div className="links-btn-sub">if the embed is being weird</div>
            </div>
            <span className="links-chev" aria-hidden="true">
              →
            </span>
          </StoreLink>
        </div>
      ) : (
        <section className="links-product">
          <div className="links-product-body">
            <h2 className="links-product-title">i&apos;ll send the time options</h2>
            <p className="links-product-desc">
              you&apos;re paid. i&apos;ll email{" "}
              {email || "the address you used at checkout"} with times.
            </p>
          </div>
        </section>
      )}

      <StoreLink href="/work-with-me" className="links-back">
        back to sessions
      </StoreLink>
    </div>
  );
}
