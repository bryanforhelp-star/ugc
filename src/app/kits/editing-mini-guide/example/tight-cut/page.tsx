import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "cut the talking head · kit example" },
  robots: { index: false, follow: false },
};

const GIFS = [
  {
    src: "/kits/editing-mini-guide/tight-cut/01-drop-into-chatcut.gif",
    alt: "ChatCut transcript going from Processing to the full text",
    caption: "1. drop in your talking head. chatcut builds the transcript.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/02-cut-from-transcript.gif",
    alt: "Selecting a repeated line in the ChatCut transcript and deleting it",
    caption:
      "2. chop it up in the transcription editor. delete the text and that part of the video goes with it. keep going until there is no dead space.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/03-export-to-capcut.gif",
    alt: "Exporting the ChatCut project to CapCut",
    caption:
      "3. export to capcut. the project opens there already cut the same way.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/04-open-in-capcut.gif",
    alt: "The cut opened as a CapCut project",
    caption: "4. open that capcut project and start the rest of the edit.",
  },
] as const;

export default function TightCutExamplePage() {
  return (
    <LessonShell
      current="cut the talking head"
      number="02 / 07"
      title="cut the talking head"
      lead="this is the base of every edit. i chop up the talking-head video first, then i keep editing in capcut."
      next={{
        href: "/kits/editing-mini-guide/example/captions",
        label: "add the text",
      }}
    >
      <h2>the tools i use</h2>
      <ol className="kit-course__tools">
        <li>
          <p>
            <strong>
              <a href="https://chatcut.io" target="_blank" rel="noreferrer">
                ChatCut
              </a>
            </strong>
          </p>
          <p>
            I make the first cut here from the transcript. Delete pauses,
            repeats, and dead space by deleting words. It is free on desktop.
            You can do this inside CapCut too. My CapCut plan will not update, I
            have been paying for it for years, and I do not want to cancel,
            update, and pay more. So I use ChatCut, then export into CapCut.
          </p>
        </li>
        <li>
          <p>
            <strong>CapCut</strong>
          </p>
          <p>
            This is where I do all of my core editing. I am on the basic plan.
            After ChatCut, I open the exported project here and add text,
            visuals, layers, movement, and sound.
          </p>
        </li>
      </ol>

      <h2>the steps</h2>
      <ol>
        <li>
          drop your talking head into{" "}
          <a href="https://chatcut.io" target="_blank" rel="noreferrer">
            ChatCut
          </a>
          .
        </li>
        <li>
          chop it up in the transcription editor. deleting text deletes that
          part of the video. keep going until there is no dead space.
        </li>
        <li>
          export to CapCut. it opens there already cut the same way.
        </li>
        <li>start the rest of the edit in that CapCut project.</li>
      </ol>

      <h2>what the gifs show</h2>
      <div className="kit-course__gifs">
        {GIFS.map((gif) => (
          <figure key={gif.src} className="kit-course__gif">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gif.src} alt={gif.alt} loading="lazy" />
            <figcaption>{gif.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="kit-course__do">
        <h2>stop here before lesson three</h2>
        <p>
          You leave this chapter with a chopped talking-head cut inside CapCut.
          No text, no overlays, no movement yet. Do not use an overlay to hide
          a section that still needs a better cut.
        </p>
      </div>
    </LessonShell>
  );
}
