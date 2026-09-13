import type { Metadata } from "next";
import { ShopCard } from "@/components/ShopCard";
import { absoluteUrl, SITE_OG_IMAGE } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { listedDigitalProducts } from "@/lib/store";

export const metadata: Metadata = {
  title: SITE.kits.label,
  description: SITE.kits.description,
  alternates: { canonical: absoluteUrl("/kits") },
  openGraph: {
    title: SITE.kits.label,
    description: SITE.kits.description,
    url: absoluteUrl("/kits"),
    siteName: SITE.name,
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE_OG_IMAGE.url],
  },
};

export default function KitsPage() {
  const products = listedDigitalProducts();

  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page-title">{SITE.kits.navLabel}</h1>
        <p className="page-lead">{SITE.kits.description}</p>

        {products.length > 0 ? (
          <div className="guide-grid">
            {products.map((product) => (
              <ShopCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="empty">{SITE.kits.emptyMessage}</p>
        )}
      </div>
    </div>
  );
}
