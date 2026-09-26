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
      lead="change the look of your footage with color">
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>understand how to color grade and change the visual appearance of your video.</p>
      </div>
      <section className="kit-course__module-card">
        <header className="kit-course__module-header">
          <p className="kit-course__eyebrow">color grading</p>
          <h2>how i color my videos</h2>
        </header>
        <p>
          Color grading is the part where you change the color, brightness, and
          contrast so the video looks the way you want it to look.
        </p>
        <p>
          I shoot in D-Log. D-Log is a camera profile that makes the original
          footage look flat and washed out. I use it because it saves more
          detail and gives me more control when I add the color later.
        </p>
        <p>
          To bring the color back, I add a LUT. A LUT is a color file that
          changes the overall look of the video. Think of it like a starting
          filter that you can make stronger or softer. You can download a LUT
          as a .cube file and upload it to CapCut.
        </p>

        <h3>add the LUT in CapCut</h3>
        <p>
          Select your clip, then open Adjust → Basic → LUT. Choose a LUT you
          already imported, or use Import to add a .cube file from your computer.
        </p>

        <h3>adjust how strong it looks</h3>
        <p>
          Move the Intensity slider while watching the video. I use
          S-LOG_3_to_Rec709_v2.cube at 30% in this example. You do not have to
          use 30% every time. Stop when the color looks right on your footage.
        </p>
        <CourseGif
          src="/kits/editing-mini-guide/color/01-lut-intensity.gif"
          alt="Choosing a LUT in CapCut and adjusting the Intensity slider while watching the video preview"
          caption="Choose the LUT, then move the Intensity slider. Watch the image instead of worrying about landing on one exact number."
        />
        <p className="kit-course__small-note">
          The exact LUT from this example and 15 more options are in the resource library.
        </p>

        <h3>make small curve adjustments</h3>
        <p>
          The curve controls brightness and contrast. Open Curves and move one
          point a little at a time. If the image starts looking harsh or too
          dark, pull it back. This is a small finishing adjustment after the LUT.
        </p>
        <CourseGif
          src="/kits/editing-mini-guide/color/02-curves.gif"
          alt="Moving points on the brightness curve in CapCut and checking the video preview"
          caption="Move one point, check the picture, and keep the adjustment small."
        />
      </section>
      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">resources</p>
        <h2>the LUTs from the examples</h2>
        <p>Download the exact LUT from the demo or try 15 more LOG looks.</p>
        <Link className="kit-course__tool-link" href={`${HUB}/resources#luts`}>open LUT resources →</Link>
      </aside>
    </LessonShell>
  );
}
