import type { Metadata } from "next";
import { HomeAsciiBg } from "@/components/HomeAsciiBg";
import { LiquidGlassProvider } from "@/components/LiquidGlassProvider";
import { MatchaCursorFollower } from "@/components/MatchaCursorFollower";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
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
  description: "Guides, work, AI.",
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
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
