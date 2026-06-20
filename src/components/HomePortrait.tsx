"use client";

import { useEffect, useRef } from "react";

export function HomePortrait() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    const go = () => {
      const p = v.play();
      if (p?.catch) p.catch(() => {});
    };

    go();
    const events = ["pointerdown", "touchstart", "scroll", "keydown", "mousemove"] as const;
    for (const ev of events) {
      addEventListener(ev, go, { once: true, passive: true });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="portrait"
      autoPlay
      loop
      muted
      playsInline
      poster="/hero/kyndall-poster.jpg"
    >
      <source src="/hero/kyndall.mp4" type="video/mp4" />
    </video>
  );
}
