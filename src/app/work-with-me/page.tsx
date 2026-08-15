import type { Metadata } from "next";
import { StoreLink } from "@/components/store/StoreLink";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import {
  SESSION,
  STORE_COPY,
  getBookingCalendarUrl,
} from "@/lib/store";
import "../links/links.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "work with me",
  description: `1:1 sessions, ${SESSION.priceLabel}. editing, content strategy, and more.`,
  alternates: { canonical: absoluteUrl("/work-with-me") },
};

export default function WorkWithMePage() {
  const calendar = getBookingCalendarUrl();

  return (
    <div className="links-store links-store--book">
      <div className="links-book">
        <section className="links-book-copy">
          <p className="links-kicker">{SESSION.kicker}</p>
          <h1 className="links-name">{SESSION.headline}</h1>
          <p className="links-book-price">{SESSION.priceLabel}</p>
          <p className="links-tagline">{SESSION.lead}</p>

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
        </section>

        <section className="links-book-cal">
          {calendar ? (
            <>
              <iframe
                title="pick a time"
                src={calendar}
                className="links-cal-frame"
                allow="payment"
              />
              <StoreLink href={calendar} className="links-btn">
                <div className="links-btn-text">
                  <div className="links-btn-title">open calendar</div>
                  <div className="links-btn-sub">if the embed is being weird</div>
                </div>
                <span className="links-chev" aria-hidden="true">
                  →
                </span>
              </StoreLink>
            </>
          ) : (
            <div className="links-product">
              <div className="links-product-body">
                <h2 className="links-product-title">pick a time</h2>
                <p className="links-product-desc">{STORE_COPY.calendarPending}</p>
              </div>
            </div>
          )}
        </section>
      </div>

      <StoreLink href="/links" className="links-back">
        back to links
      </StoreLink>
    </div>
  );
}
