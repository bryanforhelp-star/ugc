import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CheckoutButton } from "@/components/store/CheckoutButton";
import { StoreLink } from "@/components/store/StoreLink";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { canCheckout, getDisplayPrice } from "@/lib/stripe";
import {
  DIGITAL_PRODUCTS,
  EDITING_COURSE,
  STORE_COPY,
  getDigitalProduct,
  productPath,
} from "@/lib/store";
import "../../links/links.css";

export const dynamic = "force-dynamic";

type Params = { slug: string };

export function generateStaticParams() {
  return DIGITAL_PRODUCTS.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getDigitalProduct(slug);
  if (!product) return {};

  const url = absoluteUrl(productPath(product));
  const title = product.title;
  const description = product.description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
    },
  };
}

export default async function ShopProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getDigitalProduct(slug);
  if (!product) notFound();

  const live = canCheckout(product);
  const price = (await getDisplayPrice(product)) ?? product.priceLabel;
  const presale = product.status === "presale";
  const course = product.id === EDITING_COURSE.id ? EDITING_COURSE : null;
  const kicker = course?.kicker ?? product.status ?? "shop";
  const headline = course?.headline ?? `${product.title}.`;
  const lead = course?.lead ?? product.description;
  const includes = course?.includes ?? [];
  const launchLabel = course?.launchLabel;
  const href = productPath(product);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    brand: { "@type": "Person", name: SITE.name },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(href),
      priceCurrency: "USD",
      ...(product.amountCents
        ? { price: (product.amountCents / 100).toFixed(2) }
        : {}),
      availability: presale
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
      ...(course?.launchDate ? { availabilityStarts: course.launchDate } : {}),
    },
  };

  return (
    <div className="links-store">
      <JsonLd data={jsonLd} />
      <section className="links-book-copy">
        <p className="links-kicker">{kicker}</p>
        <h1 className="links-name">{headline}</h1>
        {price ? <p className="links-book-price">{price}</p> : null}
        {launchLabel ? (
          <p className="links-course-launch">{launchLabel}</p>
        ) : null}
        <p className="links-tagline">{lead}</p>
      </section>

      <section className="links-product">
        <div
          className={
            product.image ? "links-product-photo has-photo" : "links-product-photo"
          }
          style={
            product.image
              ? { backgroundImage: `url('${product.image}')` }
              : undefined
          }
        >
          {product.image ? "" : product.photoLabel || "course"}
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

      {includes.length > 0 ? (
        <>
          <div className="links-label">what&apos;s in it</div>
          <ul className="links-book-topics">
            {includes.map((item) => (
              <li key={item.name}>
                <span className="links-book-topic-name">{item.name}</span>
                <span className="links-book-topic-blurb">{item.blurb}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <StoreLink href="/kits" className="links-back">
        back to shop
      </StoreLink>
    </div>
  );
}
