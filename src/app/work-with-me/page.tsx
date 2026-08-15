import type { Metadata } from "next";
import { CheckoutButton } from "@/components/store/CheckoutButton";
import { StoreLink } from "@/components/store/StoreLink";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { canCheckout, getDisplayPrice } from "@/lib/stripe";
import { SESSIONS, STORE_COPY } from "@/lib/store";
import "../links/links.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "work with me",
  description: STORE_COPY.sessionsLead,
  alternates: { canonical: absoluteUrl("/work-with-me") },
};

export default async function WorkWithMePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const unpaid = error === "unpaid";
  const sessions = await Promise.all(
    SESSIONS.map(async (session) => ({
      session,
      price: await getDisplayPrice(session),
      live: canCheckout(session),
    })),
  );
  const anyLive = sessions.some((item) => item.live);

  return (
    <div className="links-store">
      <section className="links-profile">
        <p className="links-kicker">{STORE_COPY.sessionsLabel}</p>
        <h1 className="links-name">work with me.</h1>
        <p className="links-tagline">{STORE_COPY.sessionsLead}</p>
      </section>

      {unpaid ? (
        <p className="links-checkout-error">
          payment didn&apos;t come through. try again.
        </p>
      ) : null}

      {!anyLive ? (
        <p className="links-book-pending">{STORE_COPY.sessionsPending}</p>
      ) : null}

      {sessions.map(({ session, price, live }) => (
        <section key={session.id} className="links-product">
          <div className="links-product-body">
            <h2 className="links-product-title">{session.title}</h2>
            <p className="links-product-desc">{session.description}</p>
            {live ? (
              <CheckoutButton
                productId={session.id}
                label={session.cta}
                price={price}
              />
            ) : anyLive ? (
              <p className="links-book-pending">
                this one isn&apos;t open for checkout yet.
              </p>
            ) : null}
          </div>
        </section>
      ))}

      <p className="links-disclosure">
        brands and ugc:{" "}
        <a href={`mailto:${SITE.workWithMe.email}`}>{SITE.workWithMe.email}</a>
      </p>

      <StoreLink href="/links" className="links-back">
        back to links
      </StoreLink>
    </div>
  );
}
