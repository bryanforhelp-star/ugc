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
    name: "tools",
    blurb: "what i use to film and edit",
    result: "a clear map of my tools and how i film",
    href: `${HUB}/film`,
  },
  {
    n: "02",
    name: "cut",
    blurb: "tighten the talking head",
    result: "a chopped talking-head cut inside capcut",
    href: `${HUB}/tight-cut`,
  },
  {
    n: "03",
    name: "text",
    blurb: "add captions and on-screen text",
    result: "finished captions and on-screen copy",
    href: `${HUB}/captions`,
  },
  {
    n: "04",
    name: "visuals",
    blurb: "choose what goes on screen",
    result: "a visual plan tied to the finished cut",
    href: `${HUB}/visuals`,
  },
  {
    n: "05",
    name: "layers",
    blurb: "cut out and stack your visuals",
    result: "the visual layers in place",
    href: `${HUB}/layers`,
  },
  {
    n: "06",
    name: "motion",
    blurb: "add movement to keep it watchable",
    result: "movement added to the right moments",
    href: `${HUB}/motion`,
  },
  {
    n: "07",
    name: "finish",
    blurb: "polish, sound, and export",
    result: "a finished video ready to post",
    href: `${HUB}/finish`,
  },
  {
    n: "bonus",
    name: "full edit",
    blurb: "watch the whole build start to finish",
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
