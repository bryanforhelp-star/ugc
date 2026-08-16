"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { UGC_TAGS, type UgcOrganicPiece, type UgcTag, type UgcWorkPiece } from "@/lib/ugc";

function pauseOtherUgcVideos(current: HTMLVideoElement) {
  document.querySelectorAll<HTMLVideoElement>(".ugc-work__video").forEach((video) => {
    if (video !== current && !video.paused) video.pause();
  });
}

type AdCardProps = {
  piece: UgcWorkPiece;
};

type OrganicCardProps = {
  piece: UgcOrganicPiece;
};

function AdCard({ piece }: AdCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    pauseOtherUgcVideos(video);
    video.muted = false;
    video.volume = 1;
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) return;
          const video = videoRef.current;
          if (video && !video.paused) video.pause();
        });
      },
      { threshold: 0.35 },
    );

    io.observe(frame);
    return () => io.disconnect();
  }, []);

  return (
    <article className="ugc-work__card">
      <div
        ref={frameRef}
        className={`ugc-work__frame${isPlaying ? " is-playing" : ""}`}
      >
        <video
          ref={videoRef}
          className="ugc-work__video"
          src={piece.video}
          poster={piece.poster}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          playsInline
          preload="metadata"
          onContextMenu={(e) => e.preventDefault()}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
        />
      </div>
      <footer className="ugc-work__meta">
        <div className="ugc-work__logo-wrap">
          <Image
            src={piece.brandLogo}
            alt={piece.brand}
            width={piece.brandLogoWidth ?? 120}
            height={piece.brandLogoHeight ?? 32}
            className="ugc-work__logo"
            style={{ width: "auto", height: "100%" }}
          />
        </div>
        {piece.category ? (
          <p className="ugc-work__type">{piece.category}</p>
        ) : null}
        {piece.summary ? (
          <p className="ugc-work__summary">{piece.summary}</p>
        ) : null}
        {piece.tags.length > 0 ? (
          <ul className="ugc-work__tags" aria-label="categories">
            {piece.tags.map((tag) => (
              <li key={tag} className="ugc-work__tag">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </footer>
    </article>
  );
}

function OrganicCard({ piece }: OrganicCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasMedia = Boolean(piece.video);

  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    pauseOtherUgcVideos(video);
    video.muted = false;
    video.volume = 1;
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !hasMedia || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) return;
          const video = videoRef.current;
          if (video && !video.paused) video.pause();
        });
      },
      { threshold: 0.35 },
    );

    io.observe(frame);
    return () => io.disconnect();
  }, [hasMedia]);

  return (
    <article className="ugc-work__card">
      <div
        ref={frameRef}
        className={`ugc-work__frame${isPlaying ? " is-playing" : ""}`}
      >
        {hasMedia ? (
          <video
            ref={videoRef}
            className="ugc-work__video"
            src={piece.video}
            {...(piece.poster ? { poster: piece.poster } : {})}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            playsInline
            preload="metadata"
            onContextMenu={(e) => e.preventDefault()}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handlePause}
          />
        ) : (
          <div className="ugc-work__placeholder" aria-label="video coming soon" />
        )}
      </div>
    </article>
  );
}

type AdsGridProps = {
  id: string;
  title: string;
  intro?: string;
  pieces: UgcWorkPiece[];
};

export function UgcAdsGrid({ id, title, intro, pieces }: AdsGridProps) {
  const [activeTag, setActiveTag] = useState<UgcTag | null>(null);

  const tags = useMemo(
    () => UGC_TAGS.filter((tag) => pieces.some((piece) => piece.tags.includes(tag))),
    [pieces],
  );

  const visible = activeTag
    ? pieces.filter((piece) => piece.tags.includes(activeTag))
    : pieces;

  return (
    <section id={id} className="ugc-work">
      <div className="wrap">
        <div className="ugc-work__intro">
          <h2 className="s-head">{title}</h2>
          {intro ? <p className="s-sub">{intro}</p> : null}
        </div>
        {tags.length > 0 ? (
          <div className="ugc-work__filters" role="toolbar" aria-label="filter by category">
            <button
              type="button"
              className={`ugc-work__filter${activeTag === null ? " is-active" : ""}`}
              aria-pressed={activeTag === null}
              onClick={() => setActiveTag(null)}
            >
              all
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`ugc-work__filter${activeTag === tag ? " is-active" : ""}`}
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        ) : null}
        <div className="ugc-work__grid">
          {visible.map((piece) => (
            <AdCard key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
    </section>
  );
}

type OrganicGridProps = {
  id: string;
  title: string;
  intro?: string;
  pieces: UgcOrganicPiece[];
};

export function UgcOrganicGrid({ id, title, intro, pieces }: OrganicGridProps) {
  return (
    <section id={id} className="ugc-work ugc-work--organic">
      <div className="wrap">
        <div className="ugc-work__intro">
          <h2 className="s-head">{title}</h2>
          {intro ? <p className="s-sub">{intro}</p> : null}
        </div>
        <div className="ugc-work__grid">
          {pieces.map((piece) => (
            <OrganicCard key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
    </section>
  );
}
