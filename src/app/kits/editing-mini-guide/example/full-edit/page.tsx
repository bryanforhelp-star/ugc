import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "full edit · kit example" },
  robots: { index: false, follow: false },
};

const PASSES = [
  "tools and how i film",
  "cut the talking head in chatcut, then open it in capcut",
  "add captions and on-screen text",
  "choose the visuals",
  "cut out and stack the layers",
  "add motion",
  "polish, sound, color, and export",
];

export default function FullEditExamplePage() {
  return (
    <LessonShell
      current="full edit"
      number="bonus"
      title="full edit"
      lead="watch the whole build start to finish"
      format="full edit"
      watch="one continuous walkthrough from the original talking-head footage to the video that was posted."
    >
      <h2>one video, all seven passes</h2>
      <ol>
        {PASSES.map((pass) => (
          <li key={pass}>{pass}</li>
        ))}
      </ol>

      <h2>pause and copy the edit</h2>
      <p>
        Each pass ends with the same stopping point as its lesson. You can
        pause the build, make that pass on your video, then come back for the
        next layer.
      </p>

      <div className="kit-course__comparison">
        <section>
          <p className="kit-course__num">original</p>
          <p>the chosen take and unedited sound.</p>
        </section>
        <section>
          <p className="kit-course__num">finished</p>
          <p>the posted video with every capcut layer turned on.</p>
        </section>
      </div>

      <div className="kit-course__do">
        <h2>files beside the walkthrough</h2>
        <ul>
          <li>the original talking-head footage</li>
          <li>the clean talking-head cut</li>
          <li>the list of visuals used</li>
          <li>the fonts, sound effects, and color resources</li>
          <li>the finished video for side-by-side comparison</li>
        </ul>
      </div>
    </LessonShell>
  );
}
