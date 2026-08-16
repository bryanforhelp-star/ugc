import { GuideCategory } from "@/components/GuideCategory";
import Link from "next/link";
import type { StoreProduct } from "@/lib/store";
import { productPath } from "@/lib/store";

type Props = {
  product: StoreProduct;
  variant?: "home" | "hub";
};

export function ShopCard({ product, variant = "hub" }: Props) {
  const href = productPath(product);
  const badge = product.status ?? "shop";

  if (variant === "home") {
    return (
      <article className="guide-card guide-card--hub guide-card--home">
        <div className="guide-card__inner">
          <GuideCategory label={badge} />
          <h2>{product.title}</h2>
          <p className="guide-card__desc">{product.description}</p>
          {product.priceLabel ? (
            <p className="product-card__price">{product.priceLabel}</p>
          ) : null}
          <div className="guide-card__row">
            <Link href={href} className="glass-pill">
              {product.cardCta ?? product.cta}
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="guide-card guide-card--hub">
      <Link href={href} className="guide-card__link">
        <GuideCategory label={badge} />
        <h2>{product.title}</h2>
        <p className="guide-card__desc">{product.description}</p>
        {product.priceLabel ? (
          <p className="product-card__price">{product.priceLabel}</p>
        ) : null}
        <span className="guide-card__arrow">
          {product.cardCta ?? product.cta}
        </span>
      </Link>
    </article>
  );
}
