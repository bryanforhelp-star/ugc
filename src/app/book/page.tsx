import type { Metadata } from "next";
import { CheckoutButton } from "@/components/store/CheckoutButton";
import { StoreLink } from "@/components/store/StoreLink";
import { absoluteUrl } from "@/lib/seo";
import { getDisplayPrice, isBookingLive } from "@/lib/stripe";
import { BOOKING } from "@/lib/store";
import "../links/links.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "book a 1:1" },
  description: BOOKING.description,
  alternates: { canonical: absoluteUrl("/book") },
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const live = isBookingLive();
  const price = await getDisplayPrice(BOOKING);
  const unpaid = error === "unpaid";

  return (
    <div className="links-store">
      <section className="links-profile">
        <p className="links-kicker">1:1</p>
        <h1 className="links-name">let&apos;s talk.</h1>
        <p className="links-tagline">{BOOKING.description}</p>
      </section>

      <section className="links-product">
        <div className="links-product-body">
          <h2 className="links-product-title">{BOOKING.title}</h2>
          <ul className="links-book-list">
            <li>30 minutes</li>
            <li>content, workflow, or ai. you pick.</li>
            <li>you pay, then you get the calendar</li>
            <li>brands and collabs go to work with me instead</li>
          </ul>
          {unpaid ? (
            <p className="links-checkout-error">
              payment didn&apos;t come through. try again.
            </p>
          ) : null}
          {live ? (
            <CheckoutButton
              productId={BOOKING.id}
              label={BOOKING.cta}
              price={price}
            />
          ) : (
            <p className="links-book-pending">
              paid booking is wired up. checkout goes live once stripe and a
              calendar link are connected.
            </p>
          )}
        </div>
      </section>

      <StoreLink href="/work-with-me" className="links-btn">
        <div className="links-btn-text">
          <div className="links-btn-title">work with me instead</div>
          <div className="links-btn-sub">brands, collabs, paid ugc</div>
        </div>
        <span className="links-chev" aria-hidden="true">
          →
        </span>
      </StoreLink>

      <StoreLink href="/links" className="links-back">
        back to links
      </StoreLink>
    </div>
  );
}
