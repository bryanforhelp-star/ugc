import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "tools · kit example" },
  robots: { index: false, follow: false },
};

export default function FilmExamplePage() {
  return (
    <LessonShell
      current="tools"
      number="01 / 07"
      title="tools"
      lead="what i use to film and edit"
      next={{
        href: "/kits/editing-mini-guide/example/tight-cut",
        label: "cut",
      }}
    >
      <p>
        This chapter is the map. Film first, then the two apps I cut in, then
        the pieces that get added later. Other chapters go deep on each part.
        Here you just need to know what everything is and why it shows up.
      </p>

      <h2>1. how i film</h2>
      <p>
        I shoot on a DJI Osmo Pocket 3. I always use a microphone. Clear voice
        matters more than a fancy camera.
      </p>
      <p>
        I shoot in D-Log. You do not have to. D-Log is a flat color profile. The
        footage looks washed out on purpose so there is more room to grade
        later. I bring the color back in CapCut.
      </p>
      <p>
        You can film on a phone or another camera. What matters is a vertical
        talking-head take, clean sound, a well-lit face, and a background that
        is easy to separate later.
      </p>

      <h2>2. color grading and LUTs</h2>
      <p>
        People ask about my filters and coloring a lot. Color grading is how I
        take that flat D-Log footage and make it look finished. A LUT is a
        preset look I drop on after the base conversion. The finish chapter
        shows the exact pass on a real edit.
      </p>

      <h2>3. ChatCut and CapCut</h2>
      <p>
        These are the two apps for the cut.
      </p>
      <ol>
        <li>
          <a href="https://chatcut.io" target="_blank" rel="noreferrer">
            ChatCut
          </a>
          : first cut from the transcript. Free on desktop.
        </li>
        <li>
          <a href="https://www.capcut.com" target="_blank" rel="noreferrer">
            CapCut
          </a>
          : everything after that. Text, visuals, layers, motion, sound, color.
          I am on the basic plan.
        </li>
      </ol>
      <p>
        I cut in ChatCut, export to CapCut, then keep editing there. The next
        chapter is that handoff.
      </p>

      <h2>4. what gets added later</h2>
      <p>
        Once the talking head is tight in CapCut, I add the rest. You will see
        each of these in its own chapter:
      </p>
      <ul>
        <li>
          <strong>overlays</strong>: extra visuals on top of the talking head
          (visuals + layers)
        </li>
        <li>
          <strong>animations</strong>: motion I add in CapCut or generate
          elsewhere (motion)
        </li>
        <li>
          <strong>sound effects</strong>: hits under specific moments after the
          picture is locked (finish)
        </li>
      </ul>
    </LessonShell>
  );
}
