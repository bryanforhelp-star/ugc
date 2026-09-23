import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "make the tight cut · kit example" },
  robots: { index: false, follow: false },
};

export default function TightCutExamplePage() {
  return (
    <LessonShell
      current="make the tight cut"
      number="02 / 07"
      title="make the tight cut"
      lead="this is the base of every edit. i chop up the talking-head take, remove the dead space, and rebuild the pacing."
      watch="an uncut talking-head take becoming the complete base edit in capcut, one cut at a time."
      next={{
        href: "/kits/editing-mini-guide/example/captions",
        label: "add the text",
      }}
    >
      <h2>start with only the talking head</h2>
      <p>
        I create a CapCut project and add the chosen take. There are no
        captions, overlays, animations, or sound effects yet. I want to know
        the video works before I add anything.
      </p>

      <h2>chop up the take</h2>
      <ol>
        <li>find where the hook actually begins.</li>
        <li>split the clip before the first useful word.</li>
        <li>move through each sentence or idea.</li>
        <li>remove the dead space before and after it.</li>
        <li>close the gap and listen to the new timing.</li>
        <li>repeat until the full delivery is tight.</li>
      </ol>

      <h2>finish the base before adding visuals</h2>
      <p>
        I watch the entire cut as a plain talking-head video. If I am waiting
        for the next line, I tighten it again. If the video holds without
        anything on top, the foundation is ready.
      </p>

      <div className="kit-course__comparison">
        <section>
          <p className="kit-course__num">before</p>
          <p>the chosen take with its original pauses and dead space.</p>
        </section>
        <section>
          <p className="kit-course__num">after</p>
          <p>the same take as one tight talking-head timeline.</p>
        </section>
      </div>

      <div className="kit-course__do">
        <h2>stop here before lesson three</h2>
        <p>
          You should have a complete video made only from your talking head.
          Do not use an overlay to hide a section that still needs a better
          cut.
        </p>
      </div>
    </LessonShell>
  );
}
