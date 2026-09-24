"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { type UgcCaseVariant, type UgcOrganicPiece, type UgcWorkPiece } from "@/lib/ugc";

function pauseOtherUgcVideos(current: HTMLVideoElement) {
  document.querySelectorAll<HTMLVideoElement>(".ugc-work__video").forEach((video) => {
    if (video !== current && !video.paused) video.pause();
  });
}

export function UgcVideoFrame({ src, poster, label }: { src?: string; poster?: string; label?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadSrc, setLoadSrc] = useState(false);
  const hasMedia = Boolean(src);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !hasMedia) return;
    if (!("IntersectionObserver" in window)) {
      setLoadSrc(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setLoadSrc(true);
        io.disconnect();
      },
      { rootMargin: "240px" },
    );

    io.observe(frame);
    return () => io.disconnect();
  }, [hasMedia]);

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
    <div
      ref={frameRef}
      className={`ugc-work__frame${isPlaying ? " is-playing" : ""}`}
    >
      {hasMedia && loadSrc ? (
        <video
          ref={videoRef}
          className="ugc-work__video"
          src={src}
          aria-label={label ?? "portfolio video"}
          {...(poster ? { poster } : {})}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          playsInline
          preload="none"
          onContextMenu={(e) => e.preventDefault()}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
        />
      ) : hasMedia ? (
        <div
          className="ugc-work__video ugc-work__video--still"
          style={poster ? { backgroundImage: `url(${poster})` } : undefined}
          aria-hidden="true"
        />
      ) : (
        <div className="ugc-work__placeholder" aria-label="video coming soon" />
      )}
    </div>
  );
}

export function UgcProjectPlayer({ variants, brand }: { variants: UgcCaseVariant[]; brand: string }) {
  const [activeId, setActiveId] = useState(() => (variants.find((v) => v.featured) ?? variants[0])?.id);
  const active = variants.find((v) => v.id === activeId) ?? variants[0];
  if (!active) return null;

  return (
    <div className="ugc-project-player">
      <UgcVideoFrame key={active.id} src={active.video} poster={active.poster} label={`${brand}: ${active.label}`} />
      {variants.length > 1 && (
        <div className="ugc-version-picker" role="group" aria-label={`${brand} video versions`}>
          {variants.map((variant) => (
            <button key={variant.id} type="button" aria-pressed={active.id === variant.id} onClick={() => setActiveId(variant.id)}>
              {variant.label}
              {variant.featured && <span className="ugc-version-winner">top performer</span>}
            </button>
          ))}
        </div>
      )}
      <p className="ugc-player-caption" aria-live="polite">{active.label}{active.featured ? " · top performer" : ""}</p>
    </div>
  );
}

type AdCardProps = {
  piece: UgcWorkPiece;
};

function AdCard({ piece }: AdCardProps) {
  return (
    <article className="ugc-work__card">
      {piece.variants ? <UgcProjectPlayer variants={piece.variants} brand={piece.brand} /> : <UgcVideoFrame src={piece.video} poster={piece.poster} label={`${piece.brand}: ${piece.category}`} />}
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
        <h3 className="ugc-work__product">{piece.product}</h3>
        <p className="ugc-work__format">{piece.category}</p>
        {piece.summary && <p className="ugc-work__summary">{piece.summary}</p>}
      </footer>
    </article>
  );
}

function OrganicCard({ piece }: { piece: UgcOrganicPiece }) {
  return (
    <article className="ugc-work__card">
      <UgcVideoFrame src={piece.video} poster={piece.poster} label={piece.title} />
      <div className="ugc-work__meta">
        {piece.title && <h3 className="ugc-work__organic-title">{piece.title}</h3>}
        {piece.edits && <p className="ugc-work__format">{piece.edits.slice(0, 2).join(" · ")}</p>}
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
  return (
    <section id={id} className="ugc-work">
      <div className="wrap">
        <div className="ugc-work__intro">
          <h2 className="s-head">{title}</h2>
          {intro ? <p className="s-sub">{intro}</p> : null}
        </div>
        <div className="ugc-work__grid">
          {pieces.map((piece) => (
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateControls = () => {
      setCanGoBack(track.scrollLeft > 2);
      setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
    };
    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    track.addEventListener("scroll", updateControls, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateControls);
    };
  }, [pieces.length]);

  const move = (direction: number) => {
    const track = trackRef.current;
    const slide = track?.firstElementChild;
    if (!track || !slide) return;
    const step = slide.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section id={id} className="ugc-work ugc-work--organic" aria-roledescription="carousel" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="ugc-organic-heading">
          <div className="ugc-work__intro">
            <h2 className="s-head" id={`${id}-title`}>{title}</h2>
            {intro ? <p className="s-sub">{intro}</p> : null}
          </div>
          <div className="ugc-slider-controls" role="group" aria-label="Browse organic videos">
            <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label="Previous organic video" aria-controls={`${id}-videos`}>←</button>
            <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label="Next organic video" aria-controls={`${id}-videos`}>→</button>
          </div>
        </div>
        <div
          className="ugc-organic-track"
          id={`${id}-videos`}
          ref={trackRef}
          tabIndex={0}
          role="group"
          aria-label="Organic videos. Use the arrow keys to browse."
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          {pieces.map((piece, index) => (
            <div className="ugc-organic-slide" key={piece.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${pieces.length}`}>
              <OrganicCard piece={piece} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
