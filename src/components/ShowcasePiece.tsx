"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { ShowcasePiece as Piece } from "@/lib/showcase";

type Props = {
  piece: Piece;
  index: number;
  onPlaybackChange: (video: HTMLVideoElement, playing: boolean) => void;
};

function pauseOtherShowcaseVideos(current: HTMLVideoElement) {
  document.querySelectorAll<HTMLVideoElement>(".showcase-video").forEach((video) => {
    if (video !== current && !video.paused) video.pause();
  });
}

export function ShowcasePiece({ piece, index, onPlaybackChange }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasMedia = Boolean(piece.video);

  const syncPlayback = useCallback(
    (playing: boolean) => {
      const video = videoRef.current;
      if (!video) return;
      setIsPlaying(playing);
      onPlaybackChange(video, playing);
    },
    [onPlaybackChange],
  );

  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    pauseOtherShowcaseVideos(video);
    video.muted = false;
    video.volume = 1;
    syncPlayback(true);
  }, [syncPlayback]);

  const handlePause = useCallback(() => {
    syncPlayback(false);
  }, [syncPlayback]);

  const handleEnded = useCallback(() => {
    syncPlayback(false);
  }, [syncPlayback]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !hasMedia || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) return;
          const video = videoRef.current;
          if (video && !video.paused) {
            video.pause();
            syncPlayback(false);
          }
        });
      },
      { threshold: 0.35 },
    );

    io.observe(frame);
    return () => io.disconnect();
  }, [hasMedia, syncPlayback]);

  return (
    <article
      className={`showcase-piece${isPlaying ? " showcase-piece--playing" : ""}`}
      style={{ "--wave-i": index } as CSSProperties}
    >
      <div className="showcase-piece__motion">
        <div ref={frameRef} className="showcase-frame">
          {hasMedia ? (
            <video
              ref={videoRef}
              className="showcase-video"
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
              onEnded={handleEnded}
            />
          ) : (
            <div className="showcase-placeholder" aria-label="video coming soon" />
          )}
        </div>
      </div>
    </article>
  );
}
