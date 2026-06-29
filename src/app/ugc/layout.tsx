import type { Metadata } from "next";
import { UGC_SITE } from "@/lib/ugc";

export const metadata: Metadata = {
  title: `${UGC_SITE.title} — ${UGC_SITE.tagline}`,
  description: UGC_SITE.seoDescription,
  openGraph: {
    title: `${UGC_SITE.title} — ${UGC_SITE.tagline}`,
    description: "Short-form video that feels human and built to perform.",
    type: "website",
  },
};

export default function UgcLayout({ children }: { children: React.ReactNode }) {
  return children;
}
