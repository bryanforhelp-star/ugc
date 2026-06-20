import type { Metadata } from "next";
import { GuidesHub } from "@/components/GuidesHub";
import { getGuideListItems } from "@/lib/guides";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE.guides.label,
  description: SITE.guides.seoDescription,
  alternates: { canonical: absoluteUrl("/guides") },
  openGraph: {
    title: SITE.guides.label,
    description: SITE.guides.seoDescription,
    url: absoluteUrl("/guides"),
    siteName: SITE.name,
  },
};

export default function GuidesPage() {
  const guides = getGuideListItems();

  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page-title">{SITE.guides.navLabel}</h1>
        <p className="page-lead">{SITE.guides.hubLead}</p>
        <GuidesHub guides={guides} />
      </div>
    </div>
  );
}
