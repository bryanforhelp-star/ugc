import type { ReactNode } from "react";
import { CourseProgressProvider } from "./course-progress";
import "./course.css";

export default function CourseLayout({ children }: { children: ReactNode }) {
  return <CourseProgressProvider>{children}</CourseProgressProvider>;
}
