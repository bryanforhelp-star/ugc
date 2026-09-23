import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "add the text · kit example" },
  robots: { index: false, follow: false },
};

export default function CaptionsExamplePage() {
  return (
    <LessonShell
      current="add the text"
      number="03 / 07"
      title="add the text"
      lead="after the talking head is tight, i add the captions and the larger words that become part of the visual."
      watch="the full capcut text pass, including how i create the captions, time them, place them, and style them."
      next={{
        href: "/kits/editing-mini-guide/example/visuals",
        label: "choose the visuals",
      }}
    >
      <h2>spoken captions</h2>
      <p>
        These are the words that follow my voice. I will show the exact CapCut
        process, font, size, color, placement, and timing I use instead of
        giving you a finished preset with no explanation.
      </p>

      <h2>designed text</h2>
      <p>
        Some words are not just captions. They are part of the edit. I use
        larger text for a hook, an important phrase, a list, or a visual beat.
        The walkthrough will show how I decide which words get that treatment.
      </p>

      <h2>leave room for the next layers</h2>
      <p>
        I place the text before adding the overlays so I know what space is
        already taken. Later, I can move or resize a visual without making the
        words hard to read.
      </p>

      <div className="kit-course__do">
        <h2>included beside the lesson</h2>
        <ul>
          <li>the exact fonts I use</li>
          <li>my text colors and starting sizes</li>
          <li>a gif showing how to create and adjust the text in CapCut</li>
          <li>examples of spoken captions and designed text</li>
        </ul>
      </div>
    </LessonShell>
  );
}
