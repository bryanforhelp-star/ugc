import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { StoreLink } from "@/components/store/StoreLink";
import { getPaidCheckoutSession } from "@/lib/stripe";
import { BOOKING } from "@/lib/store";
import "../../links/links.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "pick a time" },
  robots: { index: false, follow: false },
};

function calendarUrl(email?: string | null) {
  const base = process.env.CAL_URL?.replace(/\/$/, "");
  if (!base) return null;
  const url = new URL(base);
  if (email && !url.searchParams.has("email")) {
    url.searchParams.set("email", email);
  }
  if (url.hostname.includes("cal.com") && !url.searchParams.has("embed")) {
    url.searchParams.set("embed", "true");
  }
  return url.toString();
}

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  if (!sessionId) redirect("/book");

  const session = await getPaidCheckoutSession(sessionId);
  if (!session || session.metadata?.productId !== BOOKING.id) {
    redirect("/book?error=unpaid");
  }

  const email = session.customer_details?.email;
  const cal = calendarUrl(email);

  return (
    <div className="links-store">
      <section className="links-profile">
        <p className="links-kicker">you&apos;re in</p>
        <h1 className="links-name">pick a time.</h1>
        <p className="links-tagline">
          payment landed. now grab a slot. if the calendar doesn&apos;t load,
          i&apos;ll email {email || "you"} to lock it in.
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

      <StoreLink href="/links" className="links-back">
        back to links
      </StoreLink>
    </div>
  );
}
