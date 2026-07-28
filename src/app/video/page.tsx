import type { Metadata } from "next";
import Link from "next/link";
import { SiteSocials } from "@/components/SiteSocials";
import { VideoPortfolioGrid } from "@/components/video/VideoPortfolioGrid";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { SOCIAL_VIDEOS, VIDEO_PAGE_INTRO } from "@/lib/video-portfolio";
import "./video.css";

const PAGE_TITLE = "video";
const PAGE_DESCRIPTION =
  "Short-form video edits by Kyndall. Kinetic type, UI overlays, greenscreen comps, and CapCut finishing from Instagram and TikTok.";

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
        <p className="page-lead">{VIDEO_PAGE_INTRO}</p>
        <VideoPortfolioGrid pieces={SOCIAL_VIDEOS} />
        <section className="video-portfolio__follow">
          <h2 className="video-portfolio__follow-title">more on social</h2>
          <p className="video-portfolio__follow-lead">
            new reels drop on instagram and tiktok first. follow for the messy
            builds between posts.
          </p>
          <SiteSocials />
          <p className="video-portfolio__work-link">
            want brand or ugc work?{" "}
            <Link href="/work-with-me">work with me</Link>
            {" · "}
            <Link href="/ugc">ugc portfolio</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
