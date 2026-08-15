import type { Metadata } from "next";
import { StoreLink } from "@/components/store/StoreLink";
import { getPaidCheckoutSession } from "@/lib/stripe";
import { getStoreProduct } from "@/lib/store";
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
  const paid = Boolean(session && product?.kind === "digital");

  return (
    <div className="links-store">
      <section className="links-profile">
        <p className="links-kicker">{paid ? "paid" : "thanks"}</p>
        <h1 className="links-name">
          {paid ? "i'll send it over." : "if you paid, you're in."}
        </h1>
        <p className="links-tagline">
          {paid
            ? `the ${product?.title ?? "files"} go to ${email || "the email you used at checkout"}. if it doesn't show up, reply to the stripe receipt.`
            : "if checkout bounced you here without paying, head back and try again."}
        </p>
      </section>

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
