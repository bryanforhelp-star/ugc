import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "film the original · kit example" },
  robots: { index: false, follow: false },
};

export default function FilmExamplePage() {
  return (
    <LessonShell
      current="film the original"
      number="01 / 07"
      title="film the original"
      lead="before i open capcut, i film one clean talking-head take with clear sound and enough room to build the edit around it."
      watch="the camera, d-log settings, microphone, framing, lighting, and recording setup i actually use."
      next={{
        href: "/kits/editing-mini-guide/example/tight-cut",
        label: "cut the talking head",
      }}
    >
      <h2>my setup</h2>
      <p>
        I film with a DJI Osmo Pocket 3 and shoot in D-Log. The walkthrough
        shows the exact camera settings, the microphone I use, how everything
        is positioned, and what the flat footage looks like before color.
      </p>

      <h2>the other cameras you can use</h2>
      <p>
        You do not need my camera. I will show what matters when filming with a
        phone or another camera so you can get a vertical talking-head video
        with clear sound, a well-lit face, and a background that is easy to
        separate later.
      </p>

      <h2>film with the later layers in mind</h2>
      <p>
        I leave room in the frame for text and visuals. I will show how I frame
        myself, where I look, how I handle multiple takes, and how I leave clean
        moments that are easier to chop up later.
      </p>

      <h2>choose the take</h2>
      <p>
        I pick the talking-head take I like before I start decorating anything.
        It does not need perfect pacing yet. The next lesson is where I remove
        the dead space and turn the original delivery into the tight version.
      </p>

      <div className="kit-course__do">
        <h2>bring this into capcut</h2>
        <ul>
          <li>the talking-head take you like</li>
          <li>clean microphone audio</li>
          <li>any product footage or screen recordings you already know you need</li>
        </ul>
      </div>
    </LessonShell>
  );
}
