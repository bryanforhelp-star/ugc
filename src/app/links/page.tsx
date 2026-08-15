import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  LINKS_PAGE,
  liveAffiliates,
  liveButtons,
  liveProducts,
} from "@/lib/links";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./links.css";

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

function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

function StoreLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  if (isExternal(href)) {
    const mailto = href.startsWith("mailto:");
    const sponsored =
      typeof rest.rel === "string" && rest.rel.includes("sponsored");
    return (
      <a
        {...rest}
        href={href}
        className={className}
        {...(mailto
          ? {}
          : {
              target: "_blank",
              rel: sponsored ? "sponsored noopener noreferrer" : "noreferrer",
            })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export default function LinksPage() {
  const buttons = liveButtons();
  const products = liveProducts();
  const affiliates = liveAffiliates();
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
          <div className="links-label">the shop</div>
          {products.map((product) => (
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
                {product.image ? "" : "photo"}
              </div>
              <div className="links-product-body">
                <h2 className="links-product-title">{product.title}</h2>
                <p className="links-product-desc">{product.description}</p>
                <StoreLink href={product.href} className="links-product-buy">
                  <span>{product.cta}</span>
                  <span className="links-price">{product.price}</span>
                </StoreLink>
              </div>
            </section>
          ))}
        </>
      ) : null}

      {affiliates.length > 0 ? (
        <>
          <div className="links-label">tools i actually use</div>
          {affiliates.map((aff) => (
            <StoreLink
              key={aff.name}
              href={aff.href}
              className="links-aff"
              rel="sponsored"
            >
              <span className="links-aff-name">{aff.name}</span>
              {aff.perk ? (
                <span className="links-aff-perk">{aff.perk}</span>
              ) : null}
            </StoreLink>
          ))}
          <p className="links-disclosure">{LINKS_PAGE.disclosure}</p>
        </>
      ) : null}

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
        <div className="links-copy">© {year} {SITE.name}</div>
      </footer>
    </div>
  );
}
