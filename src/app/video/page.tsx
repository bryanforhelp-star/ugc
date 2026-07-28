import type { Metadata } from "next";
import { VideoPortfolioGrid } from "@/components/video/VideoPortfolioGrid";
import { absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { SOCIAL_VIDEOS, VIDEO_PAGE_INTRO } from "@/lib/video-portfolio";
import "./video.css";

const PAGE_TITLE = "editing";
const PAGE_DESCRIPTION = `${VIDEO_PAGE_INTRO.scope} ${VIDEO_PAGE_INTRO.capabilities.join(", ")}.`;

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
        <header className="video-portfolio__intro">
          <h1 className="page-title">{PAGE_TITLE}</h1>
          <p className="page-lead">{VIDEO_PAGE_INTRO.scope}</p>
          <ul className="video-portfolio__capabilities" aria-label="editing scope">
            {VIDEO_PAGE_INTRO.capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </header>

        <VideoPortfolioGrid pieces={SOCIAL_VIDEOS} />
      </div>
    </div>
  );
}
