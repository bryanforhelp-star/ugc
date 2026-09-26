import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";
import { FontShelf } from "../font-shelf";

export const metadata: Metadata = {
  title: { absolute: "resources · kit example" },
  robots: { index: false, follow: false },
};

const EXTRA_LUTS = [
  "02",
  "04",
  "07",
  "09",
  "10",
  "15",
  "19",
  "21",
  "23",
  "24",
  "28",
  "29",
  "31",
  "34",
  "37",
] as const;

export default function ResourcesExamplePage() {
  return (
    <LessonShell
      current="resources"
      title="resources"
      lead="everything from the course, in one place."
    >
      <section id="luts" className="kit-course__module-card">
        <header className="kit-course__module-header">
          <p className="kit-course__eyebrow">color + LUTs</p>
          <h2>the LUT i use + 15 more</h2>
        </header>
        <p>
          In the course recording, I use <strong>S-LOG_3_to_Rec709_v2.cube</strong>{" "}
          at 30% intensity. That is the exact LUT and strength you see in the
          example. Use 30% as a starting point, then adjust it based on your
          footage and lighting.
        </p>
        <div className="kit-course__lut-actions">
          <a
            className="kit-course__tool-link"
            href="/kits/editing-mini-guide/luts/S-LOG_3_to_Rec709_v2.cube"
            download
          >
            download my go-to LUT (.cube) ↓
          </a>
          <a
            className="kit-course__tool-link"
            href="/kits/editing-mini-guide/luts/kyndall-lut-pack-16.zip"
            download
          >
            download all 16 LUTs (.zip) ↓
          </a>
        </div>

        <h3>15 more looks to try</h3>
        <p>
          These are all made for LOG footage. The previews give you a rough idea
          of the color, but try them on your own clip and adjust the intensity.
          You can download one at a time or grab the full pack above.
        </p>
        <div className="kit-course__lut-grid">
          {EXTRA_LUTS.map((number) => (
            <article className="kit-course__lut-card" key={number}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/kits/editing-mini-guide/luts/cinematic-v1-log-${number}.jpg`}
                alt={`Preview of Cinematic V1 LOG ${number}`}
              />
              <div>
                <strong>Cinematic V1 · LOG {number}</strong>
                <a
                  href={`/kits/editing-mini-guide/luts/cinematic-v1-log-${number}.cube`}
                  download
                >
                  download .cube ↓
                </a>
              </div>
            </article>
          ))}
        </div>

        <h3>how to upload a LUT to CapCut</h3>
        <ol className="kit-course__caption-steps">
          <li>
            <strong>Start with the LUT file on your computer.</strong>
            <span>CapCut can import .cube or .3dl files.</span>
          </li>
          <li>
            <strong>Select your video clip.</strong>
            <span>Open Video → Adjust → Basic, then turn on LUT.</span>
          </li>
          <li>
            <strong>Import the LUT.</strong>
            <span>Open the Name menu, choose Import, and select the LUT file from your computer.</span>
          </li>
          <li>
            <strong>Adjust the intensity.</strong>
            <span>Choose the LUT you imported and move the Intensity slider while watching the preview.</span>
          </li>
        </ol>
      </section>

      <section id="fonts" className="kit-course__module-card kit-course__font-library">
        <header className="kit-course__module-header">
          <p className="kit-course__eyebrow">font sources</p>
          <h2>the fonts i use</h2>
        </header>
        <p>
          There are a lot of fonts you can download from{" "}
          <a href="https://www.dafont.com/" target="_blank" rel="noreferrer">
            dafont.com
          </a>{" "}
          and then upload into CapCut. If you find one you like, download the
          font file to your computer, then add it to CapCut from the font menu.
        </p>
        <FontShelf />
      </section>
    </LessonShell>
  );
}
