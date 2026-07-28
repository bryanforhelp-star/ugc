"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SocialVideoPiece } from "@/lib/video-portfolio";

function pauseOtherVideos(current: HTMLVideoElement) {
  document.querySelectorAll<HTMLVideoElement>(".video-portfolio__video").forEach((video) => {
    if (video !== current && !video.paused) video.pause();
  });
}

type CardProps = {
  piece: SocialVideoPiece;
};

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
    <article className="video-portfolio__card">
      <div
        ref={frameRef}
        className={`video-portfolio__frame${isPlaying ? " is-playing" : ""}`}
      >
        <video
          ref={videoRef}
          className="video-portfolio__video"
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
      </div>
      <footer className="video-portfolio__meta">
        <p className="video-portfolio__title">{piece.title}</p>
        {piece.note ? <p className="video-portfolio__note">{piece.note}</p> : null}
        <ul className="video-portfolio__tags" aria-label="editing techniques">
          {piece.edits.map((edit) => (
            <li key={edit}>{edit}</li>
          ))}
        </ul>
        {piece.guideSlug ? (
          <Link className="video-portfolio__guide" href={`/guides/${piece.guideSlug}`}>
            read the guide
            <span className="arr">→</span>
          </Link>
        ) : null}
      </footer>
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
