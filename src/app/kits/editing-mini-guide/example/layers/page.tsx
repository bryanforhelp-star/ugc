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
      title="layers"
      lead="cut out and stack your visuals"
      watch="a plain talking-head frame becoming a finished layered frame inside capcut."
    >
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>turn the talking head and visuals into one frame that still reads.</p>
      </div>

      <div className="kit-course__module-stack">
        <section className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">cutout</p>
            <h2>remove the background when the idea needs it</h2>
          </header>
          <p>
            I do not cut myself out for the whole video. I use it for the
            moments where I want the visual behind me, want to build a
            different background, or need my talking head to become one piece
            of a larger composition.
          </p>
        </section>

        <section className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">stack</p>
            <h2>build the layers in CapCut</h2>
          </header>
          <p>
            The walkthrough will show the exact order: how I create the cutout,
            bring in the overlay, place each layer, crop it, and resize
            everything so the face, text, and visual can all be understood.
          </p>
        </section>

        <section className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">source</p>
            <h2>where the extra bits come from</h2>
          </header>
          <p>
            The lesson will include the places I actually source screenshots,
            memes, images, clips, and design references. The Pinterest board
            lives beside the lesson so you can use it while building your own
            frame.
          </p>
        </section>
      </div>

      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">included</p>
        <h2>short gifs for each move</h2>
        <ul>
          <li>remove a talking-head background in CapCut</li>
          <li>add an overlay above or behind the talking head</li>
          <li>crop, resize, and reposition an overlay</li>
          <li>replace the original background</li>
          <li>keep the captions visible while layering</li>
        </ul>
      </aside>
    </LessonShell>
  );
}
