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
    kind: "color downloads",
    lesson: "09 color + LUTs",
    description: "the looks I use on my videos.",
  },
  {
    number: "04",
    name: "everything else",
    kind: "course files",
    lesson: "throughout the course",
    description:
      "every other downloadable file I give you throughout the course.",
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
            <div className="kit-course__resource-meta"><span>{resource.lesson}</span><span className="kit-course__pending">coming soon</span></div>
          </section>
        ))}
      </div>

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
