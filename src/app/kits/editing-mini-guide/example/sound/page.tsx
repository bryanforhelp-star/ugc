import type { Metadata } from "next";
import Link from "next/link";
import { LessonShell } from "../lesson-shell";
import { HUB } from "../course-data";

export const metadata: Metadata = {
  title: { absolute: "sound effects · the course" },
  robots: { index: false, follow: false },
};

export default function SoundPage() {
  return (
    <LessonShell current="sound effects" title="sound effects"
      lead="add sound to the moments that need it"
      watch="which moments get a sound, how I place it, and how loud it sits under the voice.">
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>time the sound effects to the edit and keep your voice clear.</p>
      </div>
      <section className="kit-course__module-card">
        <header className="kit-course__module-header">
          <p className="kit-course__eyebrow">sound</p>
          <h2>sound effects</h2>
        </header>
        <p>I add sound after the visual timing is finished. The walkthrough will
          show which moments get a sound, how I place it, and how loud it sits under the voice.</p>
      </section>
      <aside className="kit-course__resources">
        <p className="kit-course__eyebrow">resources</p>
        <h2>the sound effects I use</h2>
        <p>The download links will live in the resource library.</p>
        <Link className="kit-course__tool-link" href={`${HUB}/resources`}>open resource library →</Link>
      </aside>
    </LessonShell>
  );
}
