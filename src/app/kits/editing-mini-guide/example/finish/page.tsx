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
      title="finish"
      lead="the final check and export"
      watch="the final phone-screen check and the export settings in CapCut."
    >
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>check the whole thing on your phone, then export it.</p>
      </div>

      <div className="kit-course__module-stack">
        <section className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">01 · export</p>
            <h2>final check and export</h2>
          </header>
          <p>
            I watch the finished video on a phone, check the text and overlays
            against the app interface, then export from CapCut. The final guide
            will show the exact export settings.
          </p>
        </section>
      </div>

      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">included</p>
        <h2>beside this lesson</h2>
        <ul>
          <li>my CapCut export settings</li>
          <li>a final phone-screen checklist</li>
        </ul>
      </aside>
    </LessonShell>
  );
}
