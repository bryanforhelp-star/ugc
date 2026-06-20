"use client";

import { useEffect, useRef } from "react";

const HIDE_SELECTORS =
  'input:not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]';

const OFFSET_X = 8;
const OFFSET_Y = 10;

export function MatchaCursorFollower() {
  const mugRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;

    const el = mugRef.current;
    if (!el) return;

    let visible = false;

    function move(x: number, y: number) {
      el!.style.transform = `translate3d(${x + OFFSET_X}px, ${y + OFFSET_Y}px, 0)`;
    }

    function show() {
      visible = true;
      el!.style.opacity = "1";
    }

    function hide() {
      visible = false;
      el!.style.opacity = "0";
    }

    function onMove(event: PointerEvent) {
      const target = event.target;
      if (target instanceof Element && target.closest(HIDE_SELECTORS)) {
        hide();
        return;
      }
      if (!visible) show();
      move(event.clientX, event.clientY);
    }

    function onLeave() {
      hide();
    }

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <img
      ref={mugRef}
      src="/cursors/matcha-follower.png"
      alt=""
      aria-hidden="true"
      className="matcha-cursor"
      draggable={false}
    />
  );
}
