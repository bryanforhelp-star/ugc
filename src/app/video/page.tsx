import type { Metadata } from "next";
import Link from "next/link";
import { HomePortrait } from "@/components/HomePortrait";
import { VideoPortfolioGrid } from "@/components/video/VideoPortfolioGrid";
import { absoluteUrl } from "@/lib/seo";
import {
  SOCIAL_VIDEOS,
  VIDEO_PAGE_HERO,
  VIDEO_PAGE_INTRO,
} from "@/lib/video-portfolio";
import "../home.css";
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
    siteName: "kyndall",
    images: [{ url: "/og/video.jpg", width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og/video.jpg"],
  },
};

export default function VideoPage() {
  return (
    <div className="home home--video">
      <div className="layer">
        <div className="wrap">
          <nav>
            <Link href="/">home</Link>
            <Link href="/work-with-me">work with me</Link>
          </nav>

          <header className="hero">
            <div className="h-left">
              <h1 className="h-name">
                hi, i&apos;m
                <br />
                kyndall.
              </h1>
              <p className="h-sub">
                {VIDEO_PAGE_HERO.sub.map((line, i) => (
                  <span key={line}>
                    {i > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div className="stage">
              <HomePortrait />
            </div>
            <div className="h-actions">
              <a className="h-link" href={VIDEO_PAGE_HERO.scrollTarget}>
                <span className="h-link__text">{VIDEO_PAGE_HERO.scrollLabel}</span>
                <span className="arr-down">↓</span>
              </a>
            </div>
          </header>
        </div>

        <section id="work" className="video-portfolio__work">
          <div className="wrap">
            <ul className="video-portfolio__capabilities" aria-label="editing scope">
              {VIDEO_PAGE_INTRO.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <VideoPortfolioGrid pieces={SOCIAL_VIDEOS} />
          </div>
        </section>
      </div>
    </div>
  );
}
