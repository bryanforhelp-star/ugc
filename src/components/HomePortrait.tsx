"use client";

import { useEffect, useRef, useState } from "react";

export function HomePortrait() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  useEffect(() => {
    if (!showVideo) return;
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
  }, [showVideo]);

  // Video stays client-only. iMessage / Discord grab the first <video> in the
  // HTML and ignore og:image, which is why previews kept showing this poster.
  return (
    <>
      <div className="portrait portrait--still" aria-hidden="true" />
      {showVideo ? (
        <video
          ref={videoRef}
          className="portrait"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/hero/kyndall-poster.jpg"
        >
          <source src="/hero/kyndall.mp4" type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
