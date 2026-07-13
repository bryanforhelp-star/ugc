"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type { UgcOrganicPiece, UgcWorkPiece } from "@/lib/ugc";

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

function pauseAllUgcVideos() {
  document.querySelectorAll<HTMLVideoElement>(".ugc-work__video").forEach((video) => {
    if (!video.paused) video.pause();
  });
}

export function UgcOrganicGrid({ id, title, intro, pieces }: OrganicGridProps) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(2);

  useEffect(() => {
    const sync = () => setPerView(window.matchMedia("(max-width: 720px)").matches ? 1 : 2);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const maxIndex = Math.max(0, pieces.length - perView);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (next: number) => {
      pauseAllUgcVideos();
      setIndex(Math.max(0, Math.min(next, maxIndex)));
    },
    [maxIndex],
  );

  return (
    <section id={id} className="ugc-work ugc-work--organic">
      <div className="wrap">
        <div className="ugc-work__intro">
          <h2 className="s-head">{title}</h2>
          {intro ? <p className="s-sub">{intro}</p> : null}
        </div>
        <div
          className="ugc-slider"
          style={
            {
              "--ugc-slider-per-view": perView,
            } as CSSProperties
          }
        >
          <button
            type="button"
            className="ugc-slider__arrow ugc-slider__arrow--prev"
            aria-label="previous videos"
            disabled={index <= 0}
            onClick={() => go(index - 1)}
          >
            ←
          </button>
          <div className="ugc-slider__viewport">
            <div
              className="ugc-slider__track"
              style={{
                transform: `translate3d(calc(-${index} * (100% + var(--ugc-slider-gap)) / var(--ugc-slider-per-view)), 0, 0)`,
              }}
            >
              {pieces.map((piece) => (
                <div key={piece.id} className="ugc-slider__slide">
                  <OrganicCard piece={piece} />
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="ugc-slider__arrow ugc-slider__arrow--next"
            aria-label="next videos"
            disabled={index >= maxIndex}
            onClick={() => go(index + 1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
