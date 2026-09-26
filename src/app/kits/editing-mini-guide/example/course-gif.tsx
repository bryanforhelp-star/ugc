"use client";

import { useId, useState } from "react";

type CourseGifProps = {
  src: string;
  alt: string;
  caption: string;
};

export function CourseGif({ src, alt, caption }: CourseGifProps) {
  const [playing, setPlaying] = useState(false);
  const id = useId();

  return (
    <figure className="kit-course__gif kit-course__demo">
      {/* Load the animation only when requested; the still also avoids unsolicited motion. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id={id}
        src={playing ? src : src.replace(/\.gif$/, ".jpg")}
        alt={alt}
        width={1200}
        height={674}
        loading="lazy"
      />
      <div className="kit-course__demo-controls">
        <button
          type="button"
          aria-controls={id}
          aria-pressed={playing}
          aria-label={`${playing ? "Stop" : "Play"} demo: ${alt}`}
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "stop demo" : "play demo"}
        </button>
        <a href={src} target="_blank" rel="noreferrer">open larger ↗</a>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
