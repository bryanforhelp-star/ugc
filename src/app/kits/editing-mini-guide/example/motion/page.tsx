import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "motion · kit example" },
  robots: { index: false, follow: false },
};

export default function MotionExamplePage() {
  return (
    <LessonShell
      current="motion"
      title="motion"
      lead="add movement to keep it watchable"
      watch="the movement pass in capcut, with every keyframe, zoom, and animation added to a real edit."
    >
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>add movement where it helps the edit instead of moving everything.</p>
      </div>

      <div className="kit-course__module-stack">
        <section className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">move</p>
            <h2>keyframes</h2>
          </header>
          <p>
            I will show where I place the first and second keyframe, what I
            change between them, and how I use that movement on a talking head,
            cutout, screenshot, or other overlay.
          </p>
        </section>

        <section className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">emphasize</p>
            <h2>zooms</h2>
          </header>
          <p>
            The walkthrough will separate a regular scale change from the zooms
            I use for emphasis. You will see the start size, end size, timing,
            and where the zoom belongs in the cut.
          </p>
        </section>

        <section className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">enter + leave</p>
            <h2>animations and transitions</h2>
          </header>
          <p>
            I use these when a piece needs to enter, leave, or change into the
            next part of the frame. I will show the small group I repeat instead
            of sending you through every animation in CapCut.
          </p>
        </section>
      </div>

      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">included</p>
        <h2>short gifs for each move</h2>
        <ul>
          <li>add and adjust a keyframe</li>
          <li>make a push in or pull out</li>
          <li>move an overlay across the frame</li>
          <li>add the animations I use most</li>
          <li>copy movement to another clip</li>
        </ul>
      </aside>
    </LessonShell>
  );
}
