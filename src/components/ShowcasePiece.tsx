"use client";

import type { CSSProperties } from "react";
import type { ShowcasePiece as Piece } from "@/lib/showcase";

type Props = {
  piece: Piece;
  index: number;
};

export function ShowcasePiece({ piece, index }: Props) {
  const hasMedia = Boolean(piece.video);

  return (
    <article
      className="showcase-piece"
      style={{ "--wave-i": index } as CSSProperties}
    >
      <div className="showcase-piece__motion">
        <div className="showcase-frame">
          {hasMedia ? (
            <video
              className="showcase-video"
              src={piece.video}
              poster={piece.poster}
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="showcase-placeholder" aria-label="video coming soon" />
          )}
        </div>
      </div>
    </article>
  );
}
