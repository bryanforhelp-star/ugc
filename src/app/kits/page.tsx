import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { getPublishedProducts } from "@/lib/products";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE.kits.label,
  description: SITE.kits.description,
  alternates: { canonical: absoluteUrl("/kits") },
  openGraph: {
    title: SITE.kits.label,
    description: SITE.kits.description,
    url: absoluteUrl("/kits"),
    siteName: SITE.name,
  },
};

export default function KitsPage() {
  const products = getPublishedProducts();

  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page-title">{SITE.kits.navLabel}</h1>
        <p className="page-lead">{SITE.kits.description}</p>

        {products.length > 0 ? (
          <div className="guide-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="empty">{SITE.kits.emptyMessage}</p>
        )}
      </div>
    </div>
  );
}
