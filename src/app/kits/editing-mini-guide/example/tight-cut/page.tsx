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
      "4. Open the project in CapCut and move on to the next editing step.",
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
      <ol>
        <li>
          <a href="https://chatcut.io" target="_blank" rel="noreferrer">
            ChatCut
          </a>
        </li>
        <li>
          <a href="https://www.capcut.com" target="_blank" rel="noreferrer">
            CapCut
          </a>
        </li>
      </ol>
      <p>
        ChatCut is where I make the first cut from the transcript. It is free
        on desktop. You can do this inside CapCut too. My CapCut plan will not
        update, I have been paying for it for years, and I do not want to
        cancel, update, and pay more. So I cut in ChatCut, then export into
        CapCut.
      </p>
      <p>
        CapCut is where I do all of my core editing. I am on the basic plan.
        After the ChatCut export, I open the project here and add text,
        visuals, layers, movement, and sound.
      </p>

      <h2>visual guide for each step</h2>
      <div className="kit-course__gifs">
        {GIFS.map((gif) => (
          <figure key={gif.src} className="kit-course__gif">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gif.src} alt={gif.alt} loading="lazy" />
            <figcaption>{gif.caption}</figcaption>
          </figure>
        ))}
      </div>
    </LessonShell>
  );
}
