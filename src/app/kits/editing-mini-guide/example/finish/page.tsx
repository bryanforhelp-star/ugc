import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "finish · kit example" },
  robots: { index: false, follow: false },
};

export default function FinishExamplePage() {
  return (
    <LessonShell
      current="finish"
      number="07 / 07"
      title="finish"
      lead="polish, sound, and export"
      watch="the last capcut pass on a finished edit, from the first sound cue through the exported file."
      next={{
        href: "/kits/editing-mini-guide/example/full-edit",
        label: "full edit",
      }}
    >
      <h2>sound effects</h2>
      <p>
        I add sound after the visual timing is finished. The walkthrough will
        show which moments get a sound, how I place it, and how loud it sits
        under the voice.
      </p>

      <h2>color and luts</h2>
      <p>
        I shoot in D-Log, so the original looks flat. I will show the conversion
        and adjustments I make before applying a look, then include the luts
        used in the examples.
      </p>

      <h2>final check and export</h2>
      <p>
        I watch the finished video on a phone, check the text and overlays
        against the app interface, then export from CapCut. The final guide
        will show the exact export settings.
      </p>

      <div className="kit-course__do">
        <h2>included beside the lesson</h2>
        <ul>
          <li>the named sound effects I use</li>
          <li>the luts and starting adjustments from the examples</li>
          <li>my CapCut export settings</li>
          <li>a final phone-screen checklist</li>
        </ul>
      </div>
    </LessonShell>
  );
}
