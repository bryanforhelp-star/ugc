import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";
import { ToolBrand } from "../tool-brand";
import { CourseGif } from "../course-gif";

export const metadata: Metadata = {
  title: { absolute: "cut · kit example" },
  robots: { index: false, follow: false },
};

const GIFS = [
  {
    src: "/kits/editing-mini-guide/tight-cut/01-drop-into-chatcut.gif",
    alt: "ChatCut transcript going from Processing to the full text",
    caption:
      "1. Drop in your video. ChatCut transcribes it, and once the full text shows up, you can start text-based editing or cutting.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/02-cut-from-transcript.gif",
    alt: "Selecting a repeated line in the ChatCut transcript and deleting it",
    caption:
      "2. I chop up the talking head in the transcription editor. Delete the text and that part of the video goes with it. I keep going until it is tight, with no pauses or dead space.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/03-export-to-capcut.gif",
    alt: "Exporting the ChatCut project to CapCut",
    caption:
      "3. Once the cut is done in ChatCut, I export to CapCut. That sends the project over already chopped the same way I cut it in ChatCut.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/04-open-in-capcut.gif",
    alt: "The cut opened as a CapCut project",
    caption:
      "4. Open the project in CapCut. Before adding text, do the compound-project step below.",
  },
] as const;

export default function TightCutExamplePage() {
  return (
    <LessonShell
      current="cut"
      title="cut"
      lead="this is where i tighten my talking head video."
    >
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>tighten the talking head, then get it ready for text and layers in CapCut.</p>
      </div>

      <section aria-labelledby="cut-tools-heading">
        <header className="kit-course__section-heading">
          <p className="kit-course__eyebrow">the setup</p>
          <h2 id="cut-tools-heading">the tools i use to edit my videos</h2>
        </header>

        <div className="kit-course__tool-stack">
          <section className="kit-course__tool-card">
            <header className="kit-course__tool-header">
              <p className="kit-course__eyebrow">01 · first cut</p>
              <ToolBrand name="ChatCut" />
            </header>
            <p>
              ChatCut is where I start editing. There&apos;s a transcript editor
              that makes my life so much easier. Plus, it&apos;s free on desktop.
            </p>
            <p>
              You allegedly can do this inside CapCut too. However, I&apos;m on an
              ancient CapCut plan that I refuse to cancel and upgrade to pay
              more. So I cut via the transcript editor in ChatCut, then
              there&apos;s an export option directly into CapCut.
            </p>
            <a
              className="kit-course__tool-link"
              href="https://chatcut.io"
              target="_blank"
              rel="noreferrer"
            >
              open ChatCut ↗
            </a>
          </section>

          <section className="kit-course__tool-card">
            <header className="kit-course__tool-header">
              <p className="kit-course__eyebrow">02 · core edit</p>
              <ToolBrand name="CapCut" />
            </header>
            <p>
              CapCut is where I do all of my core editing. Once the ChatCut
              export is set up using the steps below, I add text, visuals,
              layers, movement, and sound.
            </p>
            <a
              className="kit-course__tool-link"
              href="https://www.capcut.com"
              target="_blank"
              rel="noreferrer"
            >
              open CapCut ↗
            </a>
          </section>
        </div>
      </section>

      <section className="kit-course__walkthrough" aria-labelledby="cut-walkthrough-heading">
        <header className="kit-course__section-heading">
          <p className="kit-course__eyebrow">watch the process</p>
          <h2 id="cut-walkthrough-heading">visual guide for each step</h2>
        </header>
        <div className="kit-course__gifs">
          {GIFS.map((gif) => (
          <figure key={gif.src} className="kit-course__gif">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gif.src} alt={gif.alt} loading="lazy" />
            <figcaption>{gif.caption}</figcaption>
          </figure>
          ))}
        </div>
      </section>

      <section
        id="compound-project"
        className="kit-course__module-card"
        aria-labelledby="compound-project-heading"
      >
        <header className="kit-course__module-header">
          <p className="kit-course__eyebrow">before you add text</p>
          <h2 id="compound-project-heading">finish the move into CapCut</h2>
        </header>
        <p>
          The way ChatCut exports to CapCut doesn&apos;t let you layer text
          the way you need to. So first, turn the cut into a compound clip
          and bring that project into a new one. Once it&apos;s in the new
          timeline, ungroup it so you have your individual clips back.
          Then you can add your text and layers.
        </p>
        <ol className="kit-course__caption-steps">
          <li>
            <strong>Select all the clips.</strong>
            <span>Do this in the timeline of the project you just opened from ChatCut.</span>
          </li>
          <li>
            <strong>Hold Control and left-click the selected clips.</strong>
            <span>This opens the menu for your selection.</span>
          </li>
          <li>
            <strong>Choose Create compound clip (subproject).</strong>
            <span>This puts the selected clips together into one clip.</span>
          </li>
          <li><strong>Let CapCut save, then exit that project.</strong></li>
          <li><strong>Start a new project in CapCut.</strong></li>
          <li>
            <strong>Import the project you just saved.</strong>
            <span>Go to Media → Subprojects → Import, select the saved project, and click Import. Wait for it to finish importing.</span>
          </li>
          <li>
            <strong>Drag the imported project onto the new timeline.</strong>
            <span>It comes in as one clip. There&apos;s one more thing to do before you start editing.</span>
          </li>
          <li>
            <strong>Ungroup the compound clip in this new project.</strong>
            <span>Hold Control and left-click that clip, then choose Undo compound clip (subproject). If it&apos;s still one compound clip, do the same thing again. In the recording, I do this twice.</span>
          </li>
        </ol>
        <p>
          <strong>You&apos;re done when:</strong> you can see your separate clips
          and tracks on the new timeline again. Keep editing in this new project.
          Now you&apos;re ready to add text and layers.
        </p>
        <div className="kit-course__gifs">
          <CourseGif
            src="/kits/editing-mini-guide/tight-cut/05-create-compound.gif"
            alt="Selecting the timeline clips and choosing Create compound clip (subproject) in CapCut"
            caption="Steps 1–3: select everything, open the menu, and create the compound clip. Your cut is now grouped together."
          />
          <CourseGif
            src="/kits/editing-mini-guide/tight-cut/06-import-and-ungroup.gif"
            alt="Importing the saved project into a new CapCut project, adding it to the timeline, and choosing Undo compound clip (subproject) twice to reveal the individual clips and tracks"
            caption="Steps 4–8: start a new project, import the saved one, and drag it onto the timeline. Then choose Undo compound clip (subproject). I do that twice here. Watch through to the end: the separate clips and tracks are back in the new project. Only the import wait is cut out."
          />
        </div>
      </section>

      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">coming up</p>
        <h2>the rest of the edit</h2>
        <p>I go into all of this in more detail in the next chapters.</p>
      </aside>
    </LessonShell>
  );
}
