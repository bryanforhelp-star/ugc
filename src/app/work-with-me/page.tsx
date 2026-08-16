import type { Metadata } from "next";
import { BookingCalendar } from "@/components/store/BookingCalendar";
import { StoreLink } from "@/components/store/StoreLink";
import { buildOpenSlots } from "@/lib/booking";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { canTakePayments, getHeldBookingStarts } from "@/lib/stripe";
import { SESSION } from "@/lib/store";
import "../links/links.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "work with me",
  description: `1:1 sessions, ${SESSION.priceLabel}. editing, content strategy, and more.`,
  alternates: { canonical: absoluteUrl("/work-with-me") },
};

export default async function WorkWithMePage() {
  const held = await getHeldBookingStarts();
  const slots = buildOpenSlots(held);

  return (
    <div className="links-store">
      <section className="links-book-copy">
        <p className="links-kicker">{SESSION.kicker}</p>
        <h1 className="links-name">{SESSION.headline}</h1>
        <p className="links-book-price">{SESSION.priceLabel}</p>
        <p className="links-tagline">{SESSION.lead}</p>
      </section>

      <BookingCalendar
        initialSlots={slots}
        bookable={canTakePayments()}
      />

      <ul className="links-book-topics">
        {SESSION.topics.map((topic) => (
          <li key={topic.name}>
            <span className="links-book-topic-name">{topic.name}</span>
            <span className="links-book-topic-blurb">{topic.blurb}</span>
          </li>
        ))}
      </ul>

      <p className="links-disclosure">
        brands and ugc:{" "}
        <a href={`mailto:${SITE.workWithMe.email}`}>
          {SITE.workWithMe.email}
        </a>
      </p>

      <StoreLink href="/links" className="links-back">
        back to links
      </StoreLink>
    </div>
  );
}
