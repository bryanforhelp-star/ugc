import Link from "next/link";
import { HUB } from "./course-data";

export { CourseNav } from "./course-navigation";

export function CourseMark() {
  return (
    <header className="kit-course__topbar">
      <Link className="kit-course__mark" href={HUB} aria-label="how i edit my yaps — course home">
        <span className="kit-course__brand-dot" aria-hidden="true" />
        <span>how i edit my yaps<span className="kit-course__brand-period">.</span></span>
      </Link>
      <span className="kit-course__preview-label">course preview</span>
    </header>
  );
}
