import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { CheckoutButton } from "@/components/store/CheckoutButton";
import { StoreLink } from "@/components/store/StoreLink";
import { liveButtons, LINKS_PAGE } from "@/lib/links";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { canCheckout, getDisplayPrice } from "@/lib/stripe";
import {
  STORE_COPY,
  getAffiliates,
  listedDigitalProducts,
} from "@/lib/store";
import "./links.css";

export const dynamic = "force-dynamic";

const PAGE_URL = "/links";

export const metadata: Metadata = {
  title: { absolute: LINKS_PAGE.title },
  description: LINKS_PAGE.description,
  alternates: { canonical: absoluteUrl(PAGE_URL) },
  openGraph: {
    title: LINKS_PAGE.title,
    description: LINKS_PAGE.description,
    url: absoluteUrl(PAGE_URL),
    siteName: SITE.name,
    images: [
      {
        url: LINKS_PAGE.avatar,
        width: 800,
        height: 800,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: LINKS_PAGE.title,
    description: LINKS_PAGE.description,
    images: [LINKS_PAGE.avatar],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#eceae4",
};

export default async function LinksPage() {
  const buttons = liveButtons();
  const products = await Promise.all(
    listedDigitalProducts().map(async (product) => ({
      product,
      price: await getDisplayPrice(product),
      live: canCheckout(product),
    })),
  );
  const year = new Date().getFullYear();

  return (
    <div className="links-store">
      <section className="links-profile">
        <div className="links-avatar">
          <Image
            src={LINKS_PAGE.avatar}
            alt=""
            width={96}
            height={96}
            priority
          />
        </div>
        <h1 className="links-name">{LINKS_PAGE.name}</h1>
        <p className="links-tagline">{LINKS_PAGE.tagline}</p>
      </section>

      {buttons.map((button) => (
        <StoreLink key={button.title} href={button.href} className="links-btn">
          <div className="links-btn-text">
            <div className="links-btn-title">{button.title}</div>
            <div className="links-btn-sub">{button.sub}</div>
          </div>
          <span className="links-chev" aria-hidden="true">
            →
          </span>
        </StoreLink>
      ))}

      {products.length > 0 ? (
        <>
          <div className="links-label">{STORE_COPY.shopLabel}</div>
          {products.map(({ product, price, live }) => (
            <section key={product.id} className="links-product">
              <div
                className={
                  product.image
                    ? "links-product-photo has-photo"
                    : "links-product-photo"
                }
                style={
                  product.image
                    ? { backgroundImage: `url('${product.image}')` }
                    : undefined
                }
              >
                {product.image ? "" : product.photoLabel || "photo"}
              </div>
              <div className="links-product-body">
                <h2 className="links-product-title">{product.title}</h2>
                <p className="links-product-desc">{product.description}</p>
                {live ? (
                  <CheckoutButton
                    productId={product.id}
                    label={product.cta}
                    price={price}
                  />
                ) : (
                  <StoreLink
                    href={STORE_COPY.waitlistHref}
                    className="links-product-buy links-product-soon"
                  >
                    <span>{STORE_COPY.comingSoonCta}</span>
                    {price ? <span className="links-price">{price}</span> : null}
                  </StoreLink>
                )}
              </div>
            </section>
          ))}
        </>
      ) : null}

      <div className="links-label">{STORE_COPY.affiliatesLabel}</div>
      {getAffiliates().map((aff) => (
        <StoreLink
          key={aff.name}
          href={aff.href}
          className="links-aff"
          rel={aff.affiliate ? "sponsored" : undefined}
        >
          <span className="links-aff-name">{aff.name}</span>
          {aff.perk ? <span className="links-aff-perk">{aff.perk}</span> : null}
        </StoreLink>
      ))}
      <p className="links-disclosure">{STORE_COPY.disclosure}</p>

      <footer className="links-footer">
        <div className="links-social">
          {LINKS_PAGE.social.map((item) => (
            <StoreLink
              key={item.label}
              href={item.href}
              className="links-social-link"
              aria-label={item.label}
            >
              {item.short}
            </StoreLink>
          ))}
        </div>
        <div className="links-copy">
          © {year} {SITE.name}
        </div>
      </footer>
    </div>
  );
}
