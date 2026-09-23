import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "add movement · kit example" },
  robots: { index: false, follow: false },
};

export default function MotionExamplePage() {
  return (
    <LessonShell
      current="add movement"
      number="06 / 07"
      title="add movement"
      lead="once the layers are in place, i add the keyframes, zooms, and animations that make the frame move."
      watch="the movement pass in capcut, with every keyframe, zoom, and animation added to a real edit."
      next={{
        href: "/kits/editing-mini-guide/example/finish",
        label: "finish the video",
      }}
    >
      <h2>keyframes</h2>
      <p>
        I will show where I place the first and second keyframe, what I change
        between them, and how I use that movement on a talking head, cutout,
        screenshot, or other overlay.
      </p>

      <h2>zooms</h2>
      <p>
        The walkthrough will separate a regular scale change from the zooms I
        use for emphasis. You will see the start size, end size, timing, and
        where the zoom belongs in the cut.
      </p>

      <h2>animations and transitions</h2>
      <p>
        I use these when a piece needs to enter, leave, or change into the next
        part of the frame. I will show the small group I repeat instead of
        sending you through every animation in CapCut.
      </p>

      <div className="kit-course__do">
        <h2>short gifs included here</h2>
        <ul>
          <li>add and adjust a keyframe</li>
          <li>make a push in or pull out</li>
          <li>move an overlay across the frame</li>
          <li>add the animations I use most</li>
          <li>copy movement to another clip</li>
        </ul>
      </div>
    </LessonShell>
  );
}
