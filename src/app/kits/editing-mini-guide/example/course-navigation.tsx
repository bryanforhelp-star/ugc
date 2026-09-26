"use client";

import Link from "next/link";
import { useRef } from "react";
import { COURSE_CHAPTERS, COURSE_GROUPS, HUB, LESSONS } from "./course-data";
import { ProgressSummary, useCourseProgress } from "./course-progress";

function ChapterLinks({ current, onNavigate }: { current?: string; onNavigate?: () => void }) {
  const { progress } = useCourseProgress();
  return COURSE_GROUPS.map((group) => (
    <div className="kit-course__nav-group" key={group.label}>
      <p className="kit-course__nav-label">{group.label}</p>
      <ol>
        {group.chapters.map((item) => (
          <li key={item.name}>
            <Link href={item.href} aria-current={item.name === current ? "page" : undefined}
              className={item.name === current ? "is-on" : undefined} onClick={onNavigate}>
              <span className="kit-course__nav-number">{item.n}</span>
              <span>{item.name}</span>
              {progress.completed.includes(item.name)
                ? <span className="kit-course__nav-check" aria-label="completed">✓</span>
                : item.name === current ? <span className="kit-course__nav-dot" aria-hidden="true" /> : null}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  ));
}

export function CourseNav({ current }: { current?: string }) {
  const details = useRef<HTMLDetailsElement>(null);
  const chapter = COURSE_CHAPTERS.find((item) => item.name === current);
  return (
    <aside className="kit-course__sidebar">
      <Link className="kit-course__home-link" href={HUB}>← course home</Link>
      <nav className="kit-course__nav kit-course__nav--desktop" aria-label="course chapters">
        <ChapterLinks current={current} />
      </nav>
      <details className="kit-course__mobile-menu" ref={details}>
        <summary>
          <span>{chapter ? `${chapter.n} / ${chapter.name}` : "course contents"}</span>
          <span className="kit-course__menu-toggle">chapters <span aria-hidden="true">⌄</span></span>
        </summary>
        <nav className="kit-course__nav" aria-label="mobile course chapters">
          <ChapterLinks current={current} onNavigate={() => { if (details.current) details.current.open = false; }} />
        </nav>
      </details>
      <ProgressSummary />
    </aside>
  );
}

export function ContinueCourse() {
  const { progress } = useCourseProgress();
  const last = LESSONS.find((item) => item.href === progress.lastVisited);
  const target = last && !progress.completed.includes(last.name)
    ? last : LESSONS.find((item) => !progress.completed.includes(item.name));
  const started = !!last || progress.completed.length > 0;
  return (
    <Link className="kit-course__button kit-course__button--light"
      href={started ? target?.href || `${HUB}/resources` : `${HUB}/intro`}>
      {started ? target ? `continue: ${target.name}` : "open resources" : "start with the intro"}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function LessonFooter({ current }: { current: string }) {
  const { progress, ready, toggle } = useCourseProgress();
  const index = COURSE_CHAPTERS.findIndex((item) => item.name === current);
  const chapter = COURSE_CHAPTERS[index];
  const previous = COURSE_CHAPTERS[index - 1];
  const next = COURSE_CHAPTERS[index + 1];
  const isLesson = LESSONS.some((item) => item.name === current);
  const complete = progress.completed.includes(current);
  if (!chapter) return null;
  return (
    <footer className="kit-course__lesson-footer">
      {isLesson && (
        <div className="kit-course__completion">
          <div><p className="kit-course__eyebrow">before you move on</p><p>{chapter.result}.</p></div>
          <button type="button" className={`kit-course__complete-button${complete ? " is-complete" : ""}`}
            disabled={!ready} aria-pressed={complete} onClick={() => toggle(current)}>
            <span aria-hidden="true">{complete ? "✓" : "+"}</span>
            {complete ? "lesson completed" : "mark complete"}
          </button>
        </div>
      )}
      <nav className="kit-course__lesson-pager" aria-label="lesson navigation">
        {previous ? <Link href={previous.href} className="kit-course__previous">
          <span>← previous</span><strong>{previous.n} / {previous.name}</strong>
        </Link> : <Link href={HUB} className="kit-course__previous"><span>← course home</span></Link>}
        {next ? <Link href={next.href} className="kit-course__following">
          <span>up next <span aria-hidden="true">→</span></span><strong>{next.n} / {next.name}</strong>
        </Link> : <Link href={HUB} className="kit-course__following"><span>back to</span><strong>course home →</strong></Link>}
      </nav>
    </footer>
  );
}
