import Link from "next/link";
import { EDITING_GUIDE } from "@/lib/store";

const HUB = "/kits/editing-mini-guide/example";

export type CourseChapter = {
  n: string;
  name: string;
  blurb: string;
  result: string;
  href: string;
};

export const COURSE_CHAPTERS: CourseChapter[] = [
  {
    n: "01",
    name: "film the original",
    blurb: "my camera, other camera options, d-log, microphone, framing, and how i give myself clean footage to edit.",
    result: "one talking-head take ready for capcut",
    href: `${HUB}/film`,
  },
  {
    n: "02",
    name: "make the tight cut",
    blurb: "chatcut transcript cut for free, then export to capcut so the talking head is tight before anything else.",
    result: "a tight talking-head cut inside capcut",
    href: `${HUB}/tight-cut`,
  },
  {
    n: "03",
    name: "add the text",
    blurb: "how i make my captions, where i put them, the fonts i use, and when i make words part of the visual.",
    result: "finished captions and on-screen copy",
    href: `${HUB}/captions`,
  },
  {
    n: "04",
    name: "choose the visuals",
    blurb: "how i decide where the video needs a screenshot, meme, logo, screen recording, or other extra bit.",
    result: "a visual plan tied to the finished cut",
    href: `${HUB}/visuals`,
  },
  {
    n: "05",
    name: "cut out and layer",
    blurb: "how i remove my background, add an overlay, and build the moments where everything sits together.",
    result: "the visual layers in place",
    href: `${HUB}/layers`,
  },
  {
    n: "06",
    name: "add movement",
    blurb: "where i use keyframes, zooms, and animations, plus the exact capcut steps for making them.",
    result: "movement added to the right moments",
    href: `${HUB}/motion`,
  },
  {
    n: "07",
    name: "finish the video",
    blurb: "the sound effects, color, luts, final checks, and export settings i use.",
    result: "a finished video ready to post",
    href: `${HUB}/finish`,
  },
  {
    n: "bonus",
    name: "watch the whole build",
    blurb: "one real video from the original talking-head take through every capcut layer.",
    result: "the complete process in one place",
    href: `${HUB}/full-edit`,
  },
];

export function CourseMark() {
  return (
    <p className="kit-course__mark">
      <Link href={HUB}>{EDITING_GUIDE.headline}</Link>
    </p>
  );
}

export function courseChapters() {
  return COURSE_CHAPTERS;
}

export function CourseNav({ current }: { current?: string }) {
  return (
    <nav className="kit-course__nav" aria-label="chapters">
      <p className="kit-course__nav-label">chapters</p>
      <ol>
        {COURSE_CHAPTERS.map((item) => {
          const on = item.name === current;
          const body = (
            <>
              {item.n} {item.name}
            </>
          );
          return (
            <li key={item.name}>
              <Link href={item.href} className={on ? "is-on" : undefined}>
                {body}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
