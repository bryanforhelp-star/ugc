import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CheckoutButton } from "@/components/store/CheckoutButton";
import { ProductPhotoCover } from "@/components/store/ProductPhotoCover";
import { StoreLink } from "@/components/store/StoreLink";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { canCheckout, getDisplayPrice } from "@/lib/stripe";
import {
  DIGITAL_PRODUCTS,
  EDITING_GUIDE,
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
      ...(product.image
        ? {
            images: [
              {
                url: product.image.startsWith("http")
                  ? product.image
                  : absoluteUrl(product.image),
              },
            ],
          }
        : {}),
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
  const guide = product.id === EDITING_GUIDE.id ? EDITING_GUIDE : null;
  const kicker = guide?.kicker ?? product.status ?? "shop";
  const headline = guide?.headline ?? `${product.title}.`;
  const lead = guide?.lead ?? product.description;
  const includes = guide?.includes ?? [];
  const launchLabel = guide?.launchLabel;
  const href = productPath(product);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    brand: { "@type": "Person", name: SITE.name },
    image: product.image
      ? product.image.startsWith("http")
        ? product.image
        : absoluteUrl(product.image)
      : undefined,
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
      ...(guide?.launchDate ? { availabilityStarts: guide.launchDate } : {}),
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
        <ProductPhotoCover
          image={product.image}
          photoLabel={product.photoLabel}
        />
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
