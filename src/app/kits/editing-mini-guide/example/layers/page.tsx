import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "layers · kit example" },
  robots: { index: false, follow: false },
};

export default function LayersExamplePage() {
  return (
    <LessonShell
      current="layers"
      number="05 / 07"
      title="layers"
      lead="cut out and stack your visuals"
      watch="a plain talking-head frame becoming a finished layered frame inside capcut."
      next={{
        href: "/kits/editing-mini-guide/example/motion",
        label: "motion",
      }}
    >
      <h2>remove the background when the idea needs it</h2>
      <p>
        I do not cut myself out for the whole video. I use it for the moments
        where I want the visual behind me, want to build a different
        background, or need my talking head to become one piece of a larger
        composition.
      </p>

      <h2>build the layers in capcut</h2>
      <p>
        The walkthrough will show the exact order: how I create the cutout,
        bring in the overlay, place each layer, crop it, and resize everything
        so the face, text, and visual can all be understood.
      </p>

      <h2>where the extra bits come from</h2>
      <p>
        The lesson will include the places I actually source screenshots,
        memes, images, clips, and design references. The Pinterest board lives
        beside the lesson so you can use it while building your own frame.
      </p>

      <div className="kit-course__do">
        <h2>short gifs included here</h2>
        <ul>
          <li>remove a talking-head background in CapCut</li>
          <li>add an overlay above or behind the talking head</li>
          <li>crop, resize, and reposition an overlay</li>
          <li>replace the original background</li>
          <li>keep the captions visible while layering</li>
        </ul>
      </div>
    </LessonShell>
  );
}
