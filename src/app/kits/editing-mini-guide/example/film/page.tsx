import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "what i use · kit example" },
  robots: { index: false, follow: false },
};

export default function FilmExamplePage() {
  return (
    <LessonShell
      current="what i use"
      number="01 / 07"
      title="what i use"
      lead="the tools and setup behind every edit. later chapters go deeper on each one. this chapter is the full list, plus how i film."
      next={{
        href: "/kits/editing-mini-guide/example/tight-cut",
        label: "cut the talking head",
      }}
    >
      <h2>the list</h2>
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
        <li>camera and microphone</li>
        <li>overlays</li>
        <li>animations</li>
        <li>sound effects</li>
        <li>color and LUTs</li>
      </ol>

      <h2>ChatCut and CapCut</h2>
      <p>
        ChatCut is where I make the first cut from the transcript. CapCut is
        where I do the rest of the edit. The next chapter walks through that
        handoff in detail.
      </p>

      <h2>how i film</h2>
      <p>
        I shoot on a DJI Osmo Pocket 3. I always use a microphone. Clear voice
        matters more than a fancy camera.
      </p>
      <p>
        I shoot in D-Log. You do not have to. D-Log is a flat color profile. The
        footage looks washed out on purpose so there is more room to grade
        later. I bring the color back in CapCut with adjustments and a LUT.
      </p>
      <p>
        You can film on a phone or another camera. What matters is a vertical
        talking-head take, clean sound, a well-lit face, and a background that
        is easy to separate later.
      </p>

      <h2>color grading and LUTs</h2>
      <p>
        Color grading is how I take flat D-Log footage and make it look finished.
        A LUT is a preset look I drop on after the base conversion. People ask
        about my filters and coloring a lot. This chapter names what that is.
        The finish chapter shows the exact pass I use on a real edit.
      </p>

      <h2>overlays, animations, and sound</h2>
      <p>
        Overlays are the extra visuals I drop on top of the talking head.
        Animations are the motion I add in CapCut or generate elsewhere. Sound
        effects sit under specific moments after the picture is locked. Later
        chapters cover where I source each one and how I place them.
      </p>
    </LessonShell>
  );
}
