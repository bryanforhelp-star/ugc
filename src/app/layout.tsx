import type { Metadata } from "next";
import { HomeAsciiBg } from "@/components/HomeAsciiBg";
import { JsonLd } from "@/components/JsonLd";
import { LiquidGlassProvider } from "@/components/LiquidGlassProvider";
import { MatchaCursorFollower } from "@/components/MatchaCursorFollower";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import { SITE_OG_IMAGE, websiteJsonLd } from "@/lib/seo";
import "./brand.css";
import "./globals.css";
import "./liquid-glass.css";
import "./matcha-cursor.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.seoDescription,
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE_OG_IMAGE.url],
  },
  other: {
    "p:domain_verify": "b72a3bf73b63f95e37a3243b3b665304",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LiquidGlassProvider>
          <JsonLd data={websiteJsonLd()} />
          <MatchaCursorFollower />
          <HomeAsciiBg />
          <div className="site-shell">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </LiquidGlassProvider>
      </body>
    </html>
  );
}
