import type { Metadata } from "next";
import Link from "next/link";
import { SiteSocials } from "@/components/SiteSocials";
import { VideoPortfolioGrid } from "@/components/video/VideoPortfolioGrid";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { SOCIAL_VIDEOS } from "@/lib/video-portfolio";
import "./video.css";

const PAGE_TITLE = "editing";
const PAGE_DESCRIPTION = "Video editing portfolio by Kyndall Ramirez.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: absoluteUrl("/video") },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: absoluteUrl("/video"),
    siteName: SITE.name,
    images: [{ url: "/showcase/05-poster.jpg", alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/showcase/05-poster.jpg"],
  },
};

export default function VideoPage() {
  return (
    <div className="page page--video">
      <div className="wrap">
        <h1 className="page-title">{PAGE_TITLE}</h1>
        <VideoPortfolioGrid pieces={SOCIAL_VIDEOS} />
        <section className="video-portfolio__follow">
          <SiteSocials />
          <p className="video-portfolio__work-link">
            <Link href="/work-with-me">work with me</Link>
            {" · "}
            <Link href="/ugc">ugc portfolio</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
