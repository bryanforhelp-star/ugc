import type { Metadata, Viewport } from "next";
import Image from "next/image";
import type { ComponentType } from "react";
import {
  EmailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";
import { MatchaSupport } from "@/components/store/MatchaSupport";
import { StoreLink } from "@/components/store/StoreLink";
import { liveButtons, LINKS_PAGE, type LinksSocial } from "@/lib/links";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { canCheckout, getDisplayPrice } from "@/lib/stripe";
import {
  COFFEE,
  STORE_COPY,
  getAffiliates,
  listedDigitalProducts,
  productPath,
} from "@/lib/store";
import "./links.css";

export const dynamic = "force-dynamic";

const PAGE_URL = "/links";

const SOCIAL_ICONS: Record<
  LinksSocial["label"],
  ComponentType<{ className?: string }>
> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  email: EmailIcon,
};

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
    })),
  );
  const coffeeLive = canCheckout(COFFEE);
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
      </section>

      {buttons.map((button) => (
        <StoreLink key={button.title} href={button.href} className="links-btn">
          {button.emoji ? (
            <span className="links-btn-emoji" aria-hidden="true">
              {button.emoji}
            </span>
          ) : null}
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
          {products.map(({ product, price }) => (
            <StoreLink
              key={product.id}
              href={productPath(product)}
              className="links-product"
            >
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
                <span className="links-product-buy">
                  <span>
                    {product.status === "presale" ? "see the guide" : "get it"}
                  </span>
                  {price ? <span className="links-price">{price}</span> : null}
                </span>
              </div>
            </StoreLink>
          ))}
        </>
      ) : null}

      {coffeeLive ? (
        <MatchaSupport />
      ) : (
        <StoreLink
          href={`mailto:${SITE.workWithMe.email}?subject=${encodeURIComponent("matcha")}`}
          className="links-btn"
        >
          <span className="links-btn-emoji" aria-hidden="true">
            🍵
          </span>
          <div className="links-btn-text">
            <div className="links-btn-title">{COFFEE.title}</div>
            <div className="links-btn-sub">{COFFEE.description}</div>
          </div>
          <span className="links-aff-perk">{COFFEE.priceLabel}</span>
          <span className="links-chev" aria-hidden="true">
            →
          </span>
        </StoreLink>
      )}

      <div className="links-label">{STORE_COPY.affiliatesLabel}</div>
      {getAffiliates().map((aff) => (
        <StoreLink
          key={aff.name}
          href={aff.href}
          className="links-aff"
          rel={aff.affiliate ? "sponsored" : undefined}
        >
          {aff.logo ? (
            <Image
              src={aff.logo}
              alt=""
              width={36}
              height={36}
              className="links-aff-logo"
            />
          ) : null}
          <span className="links-aff-name">{aff.name}</span>
          {aff.perk ? <span className="links-aff-perk">{aff.perk}</span> : null}
        </StoreLink>
      ))}
      <p className="links-disclosure">{STORE_COPY.disclosure}</p>

      <footer className="links-footer">
        <div className="links-social">
          {LINKS_PAGE.social.map((item) => {
            const Icon = SOCIAL_ICONS[item.label];
            return (
              <StoreLink
                key={item.label}
                href={item.href}
                className="links-social-link"
                aria-label={item.label}
              >
                <Icon />
              </StoreLink>
            );
          })}
        </div>
        <div className="links-copy">
          © {year} {SITE.name}
        </div>
      </footer>
    </div>
  );
}
