export const HUB = "/kits/editing-mini-guide/example";

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
    name: "intro",
    blurb: "a note from me before you start",
    result: "the context for how to use this course",
    href: `${HUB}/intro`,
  },
  {
    n: "02",
    name: "tools",
    blurb: "what i use to film and edit",
    result: "a clear map of my tools and how i film",
    href: `${HUB}/film`,
  },
  {
    n: "03",
    name: "cut",
    blurb: "tighten the talking head",
    result: "a chopped talking-head cut inside capcut",
    href: `${HUB}/tight-cut`,
  },
  {
    n: "04",
    name: "text",
    blurb: "add captions and on-screen text",
    result: "finished captions and on-screen copy",
    href: `${HUB}/captions`,
  },
  {
    n: "05",
    name: "visuals",
    blurb: "choose what goes on screen",
    result: "a visual plan tied to the finished cut",
    href: `${HUB}/visuals`,
  },
  {
    n: "06",
    name: "layers",
    blurb: "cut out and stack your visuals",
    result: "the visual layers in place",
    href: `${HUB}/layers`,
  },
  {
    n: "07",
    name: "motion",
    blurb: "add movement to keep it watchable",
    result: "movement added to the right moments",
    href: `${HUB}/motion`,
  },
  {
    n: "08",
    name: "sound effects",
    blurb: "add sound to the moments that need it",
    result: "sound effects timed to the edit and balanced with your voice",
    href: `${HUB}/sound`,
  },
  {
    n: "09",
    name: "color + LUTs",
    blurb: "bring the color back and add your look",
    result: "color adjusted and the look applied",
    href: `${HUB}/color`,
  },
  {
    n: "10",
    name: "finish",
    blurb: "the final check and export",
    result: "a finished video ready to post",
    href: `${HUB}/finish`,
  },
  {
    n: "11",
    name: "resources",
    blurb: "download everything from the course",
    result: "the overlays, sound effects, luts, and files in one place",
    href: `${HUB}/resources`,
  },
];

export const LESSONS = COURSE_CHAPTERS.filter((chapter) =>
  chapter.name !== "intro" && chapter.name !== "resources"
);
export const READY_LESSONS = new Set(["tools", "cut"]);

export const COURSE_GROUPS = [
  { label: "get started", chapters: COURSE_CHAPTERS.slice(0, 3) },
  { label: "build your edit", chapters: COURSE_CHAPTERS.slice(3, 7) },
  { label: "finish + keep", chapters: COURSE_CHAPTERS.slice(7) },
];
