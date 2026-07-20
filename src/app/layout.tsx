import type { Metadata } from "next";
import { HomeAsciiBg } from "@/components/HomeAsciiBg";
import { JsonLd } from "@/components/JsonLd";
import { LiquidGlassProvider } from "@/components/LiquidGlassProvider";
import { MatchaCursorFollower } from "@/components/MatchaCursorFollower";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import { websiteJsonLd } from "@/lib/seo";
import "./brand.css";
import "./globals.css";
import "./liquid-glass.css";
import "./matcha-cursor.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.seoDescription,
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/kyndall-poster.jpg",
        width: 1200,
        height: 1600,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero/kyndall-poster.jpg"],
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
