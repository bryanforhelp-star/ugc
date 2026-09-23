import type { ReactNode } from "react";
import Link from "next/link";
import { CourseMark, CourseNav } from "./outline";

type LessonShellProps = {
  current: string;
  number: string;
  title: string;
  lead: string;
  format?: "video walkthrough" | "gif walkthrough" | "full edit";
  watch?: string;
  children: ReactNode;
  next?: {
    href: string;
    label: string;
  };
};

export function LessonShell({
  current,
  number,
  title,
  lead,
  format = "video walkthrough",
  watch,
  children,
  next,
}: LessonShellProps) {
  return (
    <article className="page page--article kit-course">
      <div className="wrap">
        <CourseMark />
        <p className="back">
          <Link href="/kits/editing-mini-guide/example" className="text-link">
            <span className="text-link__label">← all chapters</span>
          </Link>
        </p>

        <div className="kit-course__lesson">
          <CourseNav current={current} />

          <div>
            <p className="cover">{number}</p>
            <h1 className="page-title page-title--article">{title}.</h1>
            <p className="page-lead">{lead}</p>

            {watch ? (
              <div className="kit-course__watch">
                <span>{format}</span>
                <strong>{watch}</strong>
              </div>
            ) : null}

            <div className="prose kit-course__prose">{children}</div>

            {next ? (
              <p className="kit-course__next">
                <Link href={next.href}>next: {next.label}</Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
