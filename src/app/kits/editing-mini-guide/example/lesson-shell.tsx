import type { ReactNode } from "react";
import { CourseMark, CourseNav } from "./outline";
import { LessonFooter } from "./course-navigation";
import { COURSE_CHAPTERS, READY_LESSONS } from "./course-data";

type LessonShellProps = {
  current: string;
  title: string;
  lead?: string;
  format?: "video walkthrough" | "gif walkthrough";
  watch?: string;
  children: ReactNode;
};

export function LessonShell({
  current,
  title,
  lead,
  format = "video walkthrough",
  watch,
  children,
}: LessonShellProps) {
  const chapter = COURSE_CHAPTERS.find((item) => item.name === current);
  return (
    <article className="page page--article kit-course">
      <div className="wrap">
        <CourseMark />
        <div className="kit-course__lesson">
          <CourseNav current={current} />

          <div className={`kit-course__main${current === "intro" ? " kit-course__main--intro" : ""}`}>
            <header className="kit-course__lesson-heading">
              <p className="kit-course__eyebrow">{current === "intro" ? "start here" : current === "resources" ? "your library" : "the editing mini course"} <span aria-hidden="true">/</span> {chapter?.n}</p>
              <h1 className="page-title page-title--article">{title}.</h1>
              {lead ? <p className="page-lead">{lead}</p> : null}
              {current !== "intro" && current !== "resources" && !READY_LESSONS.has(current) ? <span className="kit-course__pending kit-course__draft-label">lesson in progress</span> : null}
            </header>

            {watch ? (
              <details className="kit-course__watch">
                <summary><span>{format}</span><span className="kit-course__pending">coming soon</span></summary>
                <p>{watch}</p>
              </details>
            ) : null}

            <div className="prose kit-course__prose">{children}</div>

            <LessonFooter current={current} />
          </div>
        </div>
      </div>
    </article>
  );
}
