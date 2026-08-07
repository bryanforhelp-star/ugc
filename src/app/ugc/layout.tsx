import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import { UGC_SITE } from "@/lib/ugc";

const PAGE_TITLE = "kyndall: ugc creator and creative strategist";
const OG_IMAGE = "/og/ugc.jpg";
const OG_DESCRIPTION =
  "Short-form ads and organic content for apps and tech. Built to feel human and perform.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: UGC_SITE.seoDescription,
  alternates: { canonical: absoluteUrl("/ugc") },
  openGraph: {
    title: PAGE_TITLE,
    description: OG_DESCRIPTION,
    url: absoluteUrl("/ugc"),
    siteName: "kyndall",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function UgcLayout({ children }: { children: React.ReactNode }) {
  return children;
}
