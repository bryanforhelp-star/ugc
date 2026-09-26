"use client";

import { useEffect, useState } from "react";

const PROMPT = "hey, i want some animations to this. on brand. useful ones.";

export function CursorPromptDemo() {
  const [length, setLength] = useState(PROMPT.length);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setLength((position) => Math.min(position + 1, PROMPT.length));
    }, 50);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    if (length === PROMPT.length) setPlaying(false);
  }, [length]);

  function replay() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLength(PROMPT.length);
      setPlaying(false);
      return;
    }
    setLength(0);
    setPlaying(true);
  }

  return (
    <figure className="kit-course__cursor-demo">
      <div className="kit-course__cursor-window">
        <div className="kit-course__cursor-toolbar">
          <span>Cursor / Agent</span><span>prompt example</span>
        </div>
        <div className="kit-course__cursor-body">
          <div className="kit-course__cursor-file">finished-cut.mp4 <span>example file</span></div>
          <p className="kit-course__cursor-prompt">
            <span className="kit-course__sr-only">{PROMPT}</span>
            <span aria-hidden="true">{PROMPT.slice(0, length)}{playing && <span className="kit-course__typing-caret">▏</span>}</span>
          </p>
          <div className="kit-course__cursor-controls">
            <span>an animation request in plain words</span>
            <button type="button" onClick={playing ? () => setPlaying(false) : replay}>
              {playing ? "pause" : "replay typing"}
              <span aria-hidden="true">{playing ? "Ⅱ" : "↻"}</span>
            </button>
          </div>
        </div>
      </div>
      <figcaption>Example prompt · illustrated interface.</figcaption>
    </figure>
  );
}
