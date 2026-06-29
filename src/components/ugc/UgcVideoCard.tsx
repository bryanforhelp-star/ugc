"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { UgcVideo } from "@/lib/ugc";

type Props = {
  item: UgcVideo;
  showBrand?: boolean;
};

export function UgcVideoCard({ item, showBrand = true }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const pause = useCallback(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame) return;
    video.pause();
    frame.classList.remove("is-playing");
  }, []);

  const play = useCallback(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame) return;

    document.querySelectorAll<HTMLDivElement>(".ugc-video-frame.is-playing").forEach((other) => {
      if (other === frame) return;
      const v = other.querySelector("video");
      if (v && !v.paused) {
        v.pause();
        other.classList.remove("is-playing");
      }
    });

    video.muted = false;
    video
      .play()
      .then(() => frame.classList.add("is-playing"))
      .catch(() => {
        video.muted = true;
        video.play().then(() => frame.classList.add("is-playing")).catch(() => {});
      });
  }, []);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) play();
    else pause();
  }, [pause, play]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) return;
          const v = entry.target.querySelector("video");
          if (v && !v.paused) {
            v.pause();
            entry.target.classList.remove("is-playing");
          }
        });
      },
      { threshold: 0 },
    );

    io.observe(frame);
    return () => io.disconnect();
  }, []);

  return (
    <article className="ugc-card">
      <div
        ref={frameRef}
        className="ugc-video-frame"
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`play ${item.brand ?? item.tag} video`}
      >
        <video
          ref={videoRef}
          playsInline
          muted
          loop
          preload="none"
          poster={item.poster}
        >
          <source src={item.video} type="video/mp4" />
        </video>
        <span className="ugc-video-play" aria-hidden="true" />
      </div>
      <div className="ugc-card__meta">
        {showBrand && item.brand ? (
          <div className="ugc-card__brand">
            {item.brandLogo ? (
              <Image
                src={item.brandLogo}
                alt=""
                width={72}
                height={24}
                className="ugc-card__brand-logo"
              />
            ) : null}
            <h3 className="ugc-card__brand-name">{item.brand}</h3>
          </div>
        ) : null}
        <p className="ugc-card__tag">{item.tag}</p>
        <dl className="ugc-card__details">
          <div>
            <dt>angle</dt>
            <dd>{item.angle}</dd>
          </div>
          <div>
            <dt>goal</dt>
            <dd>{item.goal}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
