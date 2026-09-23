import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "make the tight cut · kit example" },
  robots: { index: false, follow: false },
};

const GIFS = [
  {
    src: "/kits/editing-mini-guide/tight-cut/01-drop-into-chatcut.gif",
    alt: "ChatCut transcript going from Processing to the full text",
    caption: "1. drop the take in. wait for the transcript.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/02-cut-from-transcript.gif",
    alt: "Selecting a repeated line in the ChatCut transcript and deleting it",
    caption: "2. cut from the transcript. highlight, delete, keep going.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/03-export-to-capcut.gif",
    alt: "Exporting the ChatCut project to CapCut",
    caption: "3. export to CapCut.",
  },
  {
    src: "/kits/editing-mini-guide/tight-cut/04-open-in-capcut.gif",
    alt: "The tight cut opened as a CapCut project",
    caption: "4. open that CapCut project and keep editing.",
  },
] as const;

export default function TightCutExamplePage() {
  return (
    <LessonShell
      current="make the tight cut"
      number="02 / 07"
      title="make the tight cut"
      lead="this is the base of every edit. i chop up the talking-head video in chatcut, then i take that cut into capcut."
      format="gif walkthrough"
      watch="dropping the take into chatcut, cutting from the transcript, exporting to capcut, and opening the tight cut there."
      next={{
        href: "/kits/editing-mini-guide/example/captions",
        label: "add the text",
      }}
    >
      <h2>the tools i use</h2>
      <p>
        CapCut is where I do all of my core editing. I am on the basic plan.
      </p>
      <p>
        I use{" "}
        <a href="https://chatcut.io" target="_blank" rel="noreferrer">
          ChatCut
        </a>{" "}
        to make the first cut from the transcript. You can do this inside
        CapCut too. My plan will not update, I have been paying for it for
        years, and I do not want to cancel, update, and pay more. ChatCut lets
        me edit from the transcript on desktop for free, then export the
        cut-up file into CapCut. That is what I do.
      </p>

      <h2>the steps</h2>
      <ol>
        <li>
          open{" "}
          <a href="https://chatcut.io" target="_blank" rel="noreferrer">
            ChatCut
          </a>{" "}
          on desktop.
        </li>
        <li>drop in the talking-head take.</li>
        <li>
          use the transcription editor to cut out pauses, repeats, and dead
          space.
        </li>
        <li>export to CapCut.</li>
        <li>open that CapCut project and start the rest of the edit.</li>
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
          You leave this chapter with a tight talking-head cut inside CapCut.
          No text, no overlays, no movement yet. Do not use an overlay to hide
          a section that still needs a better cut.
        </p>
      </div>
    </LessonShell>
  );
}
