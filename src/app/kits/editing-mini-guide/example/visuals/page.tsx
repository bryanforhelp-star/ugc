import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "visuals · kit example" },
  robots: { index: false, follow: false },
};

const VISUAL_EXAMPLES = [
  {
    line: "i made 400 ugc ads",
    visual: "show the ads or the screen where the result was created.",
  },
  {
    line: "this is one of the tools in my stack",
    visual: "show the logo, the product, or the part of the tool i am discussing.",
  },
  {
    line: "i built my own stan store",
    visual: "show the finished page and the pieces i used to build it.",
  },
  {
    line: "a joke or reaction in the cut",
    visual: "use a meme or reaction clip when it makes the line land better.",
  },
];

export default function VisualsExamplePage() {
  return (
    <LessonShell
      current="visuals"
      number="04 / 07"
      title="visuals"
      lead="choose what goes on screen"
      watch="one finished talking-head timeline with every visual marked before any overlay is added."
      next={{
        href: "/kits/editing-mini-guide/example/layers",
        label: "layers",
      }}
    >
      <h2>listen to the cut line by line</h2>
      <p>
        I listen for the moments where I name something, make a claim, explain
        a step, or land a joke. Those are the places where a visual can help.
      </p>

      <div className="kit-course__examples">
        {VISUAL_EXAMPLES.map((example) => (
          <section key={example.line}>
            <p>
              <strong>when i say:</strong> {example.line}
            </p>
            <p>
              <strong>i can show:</strong> {example.visual}
            </p>
          </section>
        ))}
      </div>

      <h2>choose the thing that explains the line fastest</h2>
      <p>
        The visual might be a screenshot, screen recording, product shot,
        logo, meme, photo, or another clip. I choose it because of what I am
        saying at that moment, not because the talking head has been on screen
        for a certain number of seconds.
      </p>

      <div className="kit-course__do">
        <h2>make your visual list</h2>
        <ol>
          <li>write down the exact line where a visual should appear.</li>
          <li>write what the viewer needs to see.</li>
          <li>choose the simplest asset that shows it.</li>
          <li>collect those assets before building the layers.</li>
        </ol>
      </div>
    </LessonShell>
  );
}
