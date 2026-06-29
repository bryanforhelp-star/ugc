"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ShowcasePiece as Piece } from "@/lib/showcase";
import { ShowcasePiece } from "@/components/ShowcasePiece";

type Props = {
  pieces: Piece[];
};

const PX_PER_SEC = 36;
const PAUSE_MS = 3500;

export function ShowcaseFeed({ pieces }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const playbackLockRef = useRef(false);
  const playingVideosRef = useRef(new Set<HTMLVideoElement>());
  const resumeTimerRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const setPlaybackLock = useCallback((video: HTMLVideoElement, playing: boolean) => {
    if (playing) playingVideosRef.current.add(video);
    else playingVideosRef.current.delete(video);

    const locked = playingVideosRef.current.size > 0;
    playbackLockRef.current = locked;
    setIsPlaying(locked);
    if (locked) {
      pausedRef.current = true;
      window.clearTimeout(resumeTimerRef.current);
    }
  }, []);

  const pause = useCallback(() => {
    if (playbackLockRef.current) return;
    pausedRef.current = true;
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      if (!playbackLockRef.current) pausedRef.current = false;
    }, PAUSE_MS);
  }, []);

  useEffect(() => {
    if (pieces.length <= 1) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!pausedRef.current && !playbackLockRef.current) {
        offsetRef.current += PX_PER_SEC * dt;
        const loopWidth = track.scrollWidth / 2;
        if (loopWidth > 0) {
          if (offsetRef.current >= loopWidth) {
            offsetRef.current -= loopWidth;
          }
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onResize = () => {
      const loopWidth = track.scrollWidth / 2;
      if (loopWidth > 0 && offsetRef.current >= loopWidth) {
        offsetRef.current %= loopWidth;
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resumeTimerRef.current);
      window.removeEventListener("resize", onResize);
      track.style.transform = "";
    };
  }, [pieces.length]);

  const marquee = pieces.length > 1;
  const loop = marquee ? [...pieces, ...pieces] : pieces;

  return (
    <div
      className={`showcase-carousel${marquee ? " showcase-carousel--marquee" : ""}${isPlaying ? " showcase-carousel--playing" : ""}`}
      onPointerDown={pause}
      onTouchStart={pause}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (!playbackLockRef.current) pausedRef.current = false;
      }}
    >
      <div className="showcase-feed">
        <div
          ref={trackRef}
          className={`showcase-feed__track${marquee ? " showcase-feed__track--marquee" : ""}`}
        >
          {loop.map((piece, index) => (
            <ShowcasePiece
              key={`${piece.id}-${index}`}
              piece={piece}
              index={index % pieces.length}
              onPlaybackChange={setPlaybackLock}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
