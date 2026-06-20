"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ShowcasePiece as Piece } from "@/lib/showcase";
import { ShowcasePiece } from "@/components/ShowcasePiece";

type Props = {
  pieces: Piece[];
};

const AUTO_MS = 4500;

export function ShowcaseFeed({ pieces }: Props) {
  const feedRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const [mobile, setMobile] = useState(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const feed = feedRef.current;
    if (!feed) return;
    const item = feed.children[index] as HTMLElement | undefined;
    if (!item) return;
    feed.scrollTo({ left: item.offsetLeft, behavior });
    setActive(index);
  }, []);

  useEffect(() => {
    const mq = matchMedia("(max-width: 840px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!mobile || pieces.length <= 1) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (pauseRef.current) return;
      const next = (activeRef.current + 1) % pieces.length;
      scrollToIndex(next);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [mobile, pieces.length, scrollToIndex]);

  useEffect(() => {
    const feed = feedRef.current;
    if (!feed || !mobile) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const items = [...feed.children] as HTMLElement[];
        if (!items.length) return;
        const center = feed.scrollLeft + feed.clientWidth / 2;
        let closest = 0;
        let min = Infinity;
        items.forEach((item, i) => {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const dist = Math.abs(center - itemCenter);
          if (dist < min) {
            min = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    };

    feed.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      feed.removeEventListener("scroll", onScroll);
    };
  }, [mobile]);

  function pauseAuto() {
    pauseRef.current = true;
    window.setTimeout(() => {
      pauseRef.current = false;
    }, AUTO_MS * 2);
  }

  return (
    <div className="showcase-carousel">
      <div
        ref={feedRef}
        className="showcase-feed"
        onTouchStart={pauseAuto}
        onPointerDown={pauseAuto}
      >
        {pieces.map((piece, index) => (
          <ShowcasePiece key={piece.id} piece={piece} index={index} />
        ))}
      </div>

      {mobile && pieces.length > 1 ? (
        <div className="showcase-dots" aria-hidden="true">
          {pieces.map((piece, index) => (
            <button
              key={piece.id}
              type="button"
              className={index === active ? "is-active" : undefined}
              aria-label={`show video ${index + 1}`}
              onClick={() => {
                pauseAuto();
                scrollToIndex(index);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
