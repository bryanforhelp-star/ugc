"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { SocialVideoPiece } from "@/lib/video-portfolio";

function pauseOtherVideos(current: HTMLVideoElement) {
  document.querySelectorAll<HTMLVideoElement>(".video-portfolio__video").forEach((video) => {
    if (video !== current && !video.paused) video.pause();
  });
}

type CardProps = {
  piece: SocialVideoPiece;
};

function aspectClass(aspect: SocialVideoPiece["aspect"]) {
  return aspect === "16/9" ? " video-portfolio__card--landscape" : "";
}

function VideoCard({ piece }: CardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    pauseOtherVideos(video);
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
    <article
      className={`video-portfolio__card${aspectClass(piece.aspect)}`}
      aria-label={piece.title}
    >
      <div
        ref={frameRef}
        className={`video-portfolio__frame${piece.aspect === "16/9" ? " video-portfolio__frame--landscape" : ""}${isPlaying ? " is-playing" : ""}`}
        style={
          piece.aspect
            ? ({ aspectRatio: piece.aspect.replace("/", " / ") } as CSSProperties)
            : undefined
        }
      >
        <video
          ref={videoRef}
          className="video-portfolio__video"
          src={piece.video}
          {...(piece.poster ? { poster: piece.poster } : {})}
          aria-label={piece.title}
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
    </article>
  );
}

type Props = {
  pieces: SocialVideoPiece[];
};

export function VideoPortfolioGrid({ pieces }: Props) {
  return (
    <div className="video-portfolio__grid">
      {pieces.map((piece) => (
        <VideoCard key={piece.id} piece={piece} />
      ))}
    </div>
  );
}
