import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const external = Boolean(product.buyUrl);

  return (
    <article className="guide-card product-card">
      <div className="guide-card__link">
        <h2>{product.title}</h2>
        <p className="product-card__desc">{product.description}</p>
        {product.price ? (
          <p className="product-card__price">{product.price}</p>
        ) : null}
      </div>
      <div className="guide-card__row">
        {external ? (
          <LiquidGlassButton href={product.buyUrl!}>get it</LiquidGlassButton>
        ) : (
          <LiquidGlassButton>coming soon</LiquidGlassButton>
        )}
      </div>
    </article>
  );
}
