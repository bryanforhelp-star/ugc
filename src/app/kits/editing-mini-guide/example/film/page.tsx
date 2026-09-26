import type { Metadata } from "next";
import Image from "next/image";
import "../course.css";
import { LessonShell } from "../lesson-shell";
import { ToolBrand } from "../tool-brand";
import { CursorPromptDemo } from "../cursor-prompt-demo";

export const metadata: Metadata = {
  title: { absolute: "tools · kit example" },
  robots: { index: false, follow: false },
};

export default function FilmExamplePage() {
  return (
    <LessonShell
      current="tools"
      title="tools"
      lead="what i use to film and edit"
    >
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>know what each tool is for before we start editing.</p>
      </div>

      <div className="kit-course__tool-stack">
        <section className="kit-course__tool-card">
          <header className="kit-course__tool-header">
            <p className="kit-course__eyebrow">film</p>
            <h2>DJI Osmo Pocket 3</h2>
          </header>
          <p>
            This is the camera I use for my talking-head videos. I film
            vertically and shoot in D-Log, which is why the original footage
            looks flat and washed out before I add the color back.
          </p>
          <figure className="kit-course__photo">
            <Image
              src="/kits/editing-mini-guide/dji-osmo-pocket-3.jpg"
              alt="DJI Osmo Pocket 3 camera in Kyndall's hand"
              width={2468}
              height={3290}
              sizes="(max-width: 840px) calc(100vw - 72px), 720px"
              priority
            />
          </figure>
          <div className="kit-course__subtool">
            <p className="kit-course__eyebrow">for audio</p>
            <h3>DJI Mic 2 + DJI Mic Mini</h3>
            <p>
              When I film with the Pocket 3, I use the DJI Mic 2. It connects
              directly to the camera without a separate receiver. When I film
              on my phone, I use the DJI Mic Mini.
            </p>
            <p>
              You do not need either of these specific mics, but if you do not
              have a microphone at all, I would definitely invest in one.
              Clear audio matters more than having a fancy camera.
            </p>
          </div>
        </section>

        <section className="kit-course__tool-card">
          <header className="kit-course__tool-header">
            <p className="kit-course__eyebrow">first cut</p>
            <ToolBrand name="ChatCut" />
          </header>
          <p>
            This is where I chop up the talking head from the transcript. I
            delete the words I do not want, and that part of the video gets
            deleted with them.
          </p>
          <p>
            ChatCut is free on desktop. You can do this in CapCut too, but my
            CapCut plan will not update and I refuse to cancel it and pay more,
            so this is what I use.
          </p>
          <a className="kit-course__tool-link" href="https://chatcut.io" target="_blank" rel="noreferrer">
            open ChatCut ↗
          </a>
        </section>

        <section className="kit-course__tool-card">
          <header className="kit-course__tool-header">
            <p className="kit-course__eyebrow">main edit</p>
            <ToolBrand name="CapCut" />
          </header>
          <p>This is where the actual edit comes together. I use it for:</p>
          <ul className="kit-course__use-grid">
            <li>captions and on-screen text</li>
            <li>screenshots, memes, clips, and other visuals</li>
            <li>removing backgrounds and stacking layers</li>
            <li>keyframes, zooms, animations, and transitions</li>
            <li>sound effects</li>
            <li>color, LUTs, and exporting</li>
          </ul>
          <p>
            I&apos;m on the basic plan. Once the ChatCut project is inside
            CapCut, I stay there until the video is finished.
          </p>
          <a className="kit-course__tool-link" href="https://www.capcut.com" target="_blank" rel="noreferrer">
            open CapCut ↗
          </a>
        </section>

        <section className="kit-course__tool-card">
          <header className="kit-course__tool-header">
            <p className="kit-course__eyebrow">custom animations</p>
            <ToolBrand name="Cursor" />
          </header>
          <p>
            Sometimes the visual I want does not exist, so I make it. I drop
            the finished cut into Cursor, explain the animation in normal human
            words, and then put the video it makes on top of my original in
            CapCut.
          </p>
          <p>
            You do not need Cursor for every edit. It is just what I use when I
            want one of the weird little moving things you see in my videos.
          </p>
          <a className="kit-course__tool-link" href="https://www.cursor.com" target="_blank" rel="noreferrer">
            open Cursor ↗
          </a>
          <CursorPromptDemo />
        </section>
      </div>

      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">included with the course</p>
        <h2>the extra bits</h2>
        <p>
          The fonts, sound effects, visual sources, Pinterest board, and LUTs I
          actually use are included throughout the guide. They are the pieces I
          pull into CapCut while I&apos;m editing.
        </p>
      </aside>
    </LessonShell>
  );
}
