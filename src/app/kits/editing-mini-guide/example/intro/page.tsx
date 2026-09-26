import type { Metadata } from "next";
import "../course.css";
import { LessonShell } from "../lesson-shell";

export const metadata: Metadata = {
  title: { absolute: "intro · kit example" },
  robots: { index: false, follow: false },
};

export default function IntroExamplePage() {
  return (
    <LessonShell current="intro" title="intro">
      {null}
    </LessonShell>
  );
}
