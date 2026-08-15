import type { Metadata } from "next";
import { StoreLink } from "@/components/store/StoreLink";
import { bookingIcs } from "@/lib/booking";
import { getPaidCheckoutSession } from "@/lib/stripe";
import { COFFEE, getStoreProduct } from "@/lib/store";
import "../links/links.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "you're in" },
  robots: { index: false, follow: false },
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const session = sessionId ? await getPaidCheckoutSession(sessionId) : null;
  const productId = session?.metadata?.productId;
  const product = productId ? getStoreProduct(productId) : null;
  const email = session?.customer_details?.email;
  const kind = session?.metadata?.kind;
  const when = session?.metadata?.when;
  const startISO = session?.metadata?.startISO;
  const booked = kind === "booking" && Boolean(when);
  const coffee = product?.id === COFFEE.id;
  const digital = Boolean(session && product?.kind === "digital" && !coffee);
  const ics =
    booked && startISO
      ? `data:text/calendar;charset=utf-8,${encodeURIComponent(bookingIcs(startISO))}`
      : null;

  let kicker = "thanks";
  let title = "if you paid, you're in.";
  let tagline =
    "if checkout bounced you here without paying, head back and try again.";

  if (booked) {
    kicker = "booked";
    title = "you're on the calendar.";
    tagline = `${when}. stripe sent a receipt to ${email || "the email you used at checkout"}. add it below if you want it on your phone.`;
  } else if (coffee) {
    kicker = "thank you";
    title = "that's kind.";
    tagline = "it actually helps. truly.";
  } else if (digital) {
    kicker = "paid";
    title = "i'll send it over.";
    tagline = `the ${product?.title ?? "files"} go to ${email || "the email you used at checkout"}. if it doesn't show up, reply to the stripe receipt.`;
  }

  return (
    <div className="links-store">
      <section className="links-profile">
        <p className="links-kicker">{kicker}</p>
        <h1 className="links-name">{title}</h1>
        <p className="links-tagline">{tagline}</p>
      </section>

      {ics ? (
        <a href={ics} className="links-btn" download="session-with-kyndall.ics">
          <div className="links-btn-text">
            <div className="links-btn-title">add to calendar</div>
            <div className="links-btn-sub">works in apple, google, outlook</div>
          </div>
          <span className="links-chev" aria-hidden="true">
            →
          </span>
        </a>
      ) : null}

      <StoreLink href="/links" className="links-btn">
        <div className="links-btn-text">
          <div className="links-btn-title">back to links</div>
          <div className="links-btn-sub">everything else is here</div>
        </div>
        <span className="links-chev" aria-hidden="true">
          →
        </span>
      </StoreLink>
    </div>
  );
}
