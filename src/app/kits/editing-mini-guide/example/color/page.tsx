import type { Metadata } from "next";
import Link from "next/link";
import { LessonShell } from "../lesson-shell";
import { HUB } from "../course-data";
import { CourseGif } from "../course-gif";

export const metadata: Metadata = {
  title: { absolute: "color + LUTs · the course" },
  robots: { index: false, follow: false },
};

export default function ColorPage() {
  return (
    <LessonShell current="color + LUTs" title="color + LUTs"
      lead="bring the color back and add your look">
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>bring the color back to the flat footage, then apply the look.</p>
      </div>
      <section className="kit-course__module-card">
        <header className="kit-course__module-header">
          <p className="kit-course__eyebrow">01 · color</p>
          <h2>color and LUTs</h2>
        </header>
        <p>I shoot in D-Log, so the original looks flat. These clips show
          the LUT and curve adjustments inside CapCut.</p>
        <h3>choose a LUT and adjust the strength</h3>
        <p>Select the footage, then open Adjust → Basic. In the LUT section,
          choose a LUT and move the Intensity slider while watching the preview.</p>
        <CourseGif
          src="/kits/editing-mini-guide/color/01-lut-intensity.gif"
          alt="Choosing a LUT in CapCut and adjusting the Intensity slider while watching the video preview"
          caption="Watch how much the picture changes as the intensity moves. This shows where the controls are and what they change."
        />
        <p className="kit-course__small-note">
          The LUT in this example is S-LOG_3_to_Rec709_v2.cube at 30%
          intensity. The exact name and upload steps are in the resource library.
        </p>
        <h3>adjust the curve</h3>
        <p>Open Curves and move a point on the line. Watch the picture as you
          move it so you can see what that adjustment is doing.</p>
        <CourseGif
          src="/kits/editing-mini-guide/color/02-curves.gif"
          alt="Moving points on the brightness curve in CapCut and checking the video preview"
          caption="The curve changes the brightness and contrast. Make an adjustment, then check the picture."
        />
      </section>
      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">resources</p>
        <h2>the LUTs from the examples</h2>
        <p>See the exact LUT and how to import your own .cube file into CapCut.</p>
        <Link className="kit-course__tool-link" href={`${HUB}/resources#luts`}>open LUT resources →</Link>
      </aside>
    </LessonShell>
  );
}
