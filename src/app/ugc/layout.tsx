import type { Metadata } from "next";
import { UGC_SITE } from "@/lib/ugc";

export const metadata: Metadata = {
  title: "kyndall — ugc creator & creative strategist",
  description: UGC_SITE.seoDescription,
  openGraph: {
    title: "kyndall — ugc creator & creative strategist",
    description:
      "Short-form UGC and organic content for apps and tech. Built to feel human and perform.",
    type: "website",
  },
};

export default function UgcLayout({ children }: { children: React.ReactNode }) {
  return children;
}
