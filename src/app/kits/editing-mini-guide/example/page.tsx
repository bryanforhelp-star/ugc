import type { Metadata } from "next";
import Link from "next/link";
import { CourseMark, CourseNav } from "./outline";
import { COURSE_GROUPS, COURSE_CHAPTERS, HUB, LESSONS, READY_LESSONS } from "./course-data";
import { ContinueCourse } from "./course-navigation";

export const metadata: Metadata = {
  title: { absolute: "how i edit my yaps · the course" },
  robots: { index: false, follow: false },
};

export default function EditingGuideExamplePage() {
  return (
    <div className="page kit-course">
      <div className="wrap">
        <CourseMark />
        <div className="kit-course__lesson">
          <CourseNav />
          <div className="kit-course__main">
            <header className="kit-course__welcome">
              <p className="kit-course__eyebrow">the editing mini course · by kyndall</p>
              <h1>how i edit<br />my yaps.</h1>
              <p className="kit-course__welcome-copy">one talking-head video. every layer of the edit.</p>
              <ContinueCourse />
              <p className="kit-course__welcome-meta">{LESSONS.length} lessons <span aria-hidden="true">/</span> follow along at your own pace</p>
            </header>

            <div className="kit-course__syllabus-heading">
              <div><p className="kit-course__eyebrow">the course</p><h2>from first take to final edit.</h2></div>
              <span>{COURSE_CHAPTERS[0].n} — {COURSE_CHAPTERS.at(-1)?.n}</span>
            </div>
            <div className="kit-course__syllabus">
              {COURSE_GROUPS.map((group, index) => (
                <section className="kit-course__chapter-group" key={group.label} aria-labelledby={`group-${index}`}>
                  <h3 id={`group-${index}`} className="kit-course__group-heading">{group.label}</h3>
                  <ol>
                    {group.chapters.map((chapter) => (
                      <li key={chapter.name}>
                        <Link className="kit-course__chapter-row" href={chapter.href}>
                          <span className="kit-course__chapter-number">{chapter.n}</span>
                          <span className="kit-course__chapter-copy"><strong>{chapter.name}</strong><span>{chapter.blurb}</span><small className={READY_LESSONS.has(chapter.name) ? "kit-course__ready-label" : "kit-course__draft-note"}>{READY_LESSONS.has(chapter.name) ? "ready to explore" : "in progress"}</small></span>
                          <span className="kit-course__row-arrow" aria-hidden="true">↗</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>

            <Link className="kit-course__library-callout" href={`${HUB}/resources`}>
              <div><p className="kit-course__eyebrow">keep these close</p><h2>the resource library.</h2><p>overlays, sound effects, LUTs, and the other files from the course.</p></div>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
