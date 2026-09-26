import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";
import { FontShelf } from "../font-shelf";

export const metadata: Metadata = {
  title: { absolute: "resources · kit example" },
  robots: { index: false, follow: false },
};

const RESOURCE_GROUPS = [
  {
    number: "01",
    name: "my favorite overlays",
    kind: "Pinterest board",
    lesson: "05 visuals + 06 layers",
    description: "the custom Pinterest board with the overlays I actually use.",
  },
  {
    number: "02",
    name: "sound effects",
    kind: "audio downloads",
    lesson: "08 sound effects",
    description: "the sound effects from the course.",
  },
  {
    number: "03",
    name: "LUTs",
    kind: "color guide",
    lesson: "09 color + LUTs",
    description: "the LUT I use in the course and how to add your own to CapCut.",
    href: "#luts",
  },
  {
    number: "04",
    name: "everything else",
    kind: "course files",
    lesson: "throughout the course",
    description:
      "every other downloadable file I give you throughout the course.",
    href: null,
  },
] as const;

export default function ResourcesExamplePage() {
  return (
    <LessonShell
      current="resources"
      title="resources"
      lead="everything from the course, in one place."
    >
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">this page</p>
        <p>
          every link will live here so you can download the files to your
          computer instead of hunting through each lesson again.
        </p>
      </div>

      <div className="kit-course__resource-grid">
        {RESOURCE_GROUPS.map((resource) => (
          <section key={resource.name} className="kit-course__resource-card">
            <header className="kit-course__module-header">
              <p className="kit-course__eyebrow">{resource.number} / {resource.kind}</p>
              <h2>{resource.name}</h2>
            </header>
            <p>{resource.description}</p>
            <div className="kit-course__resource-meta">
              <span>{resource.lesson}</span>
              {"href" in resource && resource.href ? (
                <a href={resource.href}>open below ↓</a>
              ) : (
                <span className="kit-course__pending">coming soon</span>
              )}
            </div>
          </section>
        ))}
      </div>

      <section id="luts" className="kit-course__module-card">
        <header className="kit-course__module-header">
          <p className="kit-course__eyebrow">color + LUTs</p>
          <h2>the LUT i use</h2>
        </header>
        <p>
          In the course recording, I use <strong>S-LOG_3_to_Rec709_v2.cube</strong>{" "}
          at 30% intensity. That is the exact LUT and strength you see in the
          example. Use 30% as a starting point, then adjust it based on your
          footage and lighting.
        </p>

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
        <FontShelf samples={false} />
      </section>
    </LessonShell>
  );
}
