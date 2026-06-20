"use client";

import { useEffect, useState } from "react";
import type { ShowcasePiece as Piece } from "@/lib/showcase";
import { ShowcasePiece } from "@/components/ShowcasePiece";

type Props = {
  pieces: Piece[];
};

export function ShowcaseFeed({ pieces }: Props) {
  const [marquee, setMarquee] = useState(false);

  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMarquee(pieces.length > 1 && !mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [pieces.length]);

  const loop = marquee ? [...pieces, ...pieces] : pieces;

  return (
    <div className={`showcase-carousel${marquee ? " showcase-carousel--marquee" : ""}`}>
      <div className="showcase-feed">
        <div
          className={`showcase-feed__track${marquee ? " showcase-feed__track--marquee" : ""}`}
        >
          {loop.map((piece, index) => (
            <ShowcasePiece
              key={`${piece.id}-${index}`}
              piece={piece}
              index={index % pieces.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
