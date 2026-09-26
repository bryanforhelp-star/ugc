"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LESSONS } from "./course-data";
import { EMPTY_PROGRESS, PROGRESS_KEY, parseProgress, toggleLesson, type CourseProgress } from "./progress-state";

const ProgressContext = createContext<{
  progress: CourseProgress;
  ready: boolean;
  saved: boolean;
  toggle: (name: string) => void;
}>({ progress: EMPTY_PROGRESS, ready: false, saved: true, toggle: () => {} });

export function CourseProgressProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [progress, setProgress] = useState<CourseProgress>(EMPTY_PROGRESS);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(true);

  useEffect(() => {
    try {
      setProgress(parseProgress(localStorage.getItem(PROGRESS_KEY)));
    } catch {
      setSaved(false);
    }
    setReady(true);
    const sync = (event: StorageEvent) => {
      if (event.key === PROGRESS_KEY || event.key === null) {
        setProgress(parseProgress(event.newValue));
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    if (ready && LESSONS.some((lesson) => lesson.href === pathname)) {
      setProgress((previous) => previous.lastVisited === pathname
        ? previous : { ...previous, lastVisited: pathname });
    }
  }, [pathname, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }, [progress, ready]);

  return (
    <ProgressContext.Provider value={{ progress, ready, saved, toggle: (name) => setProgress((p) => toggleLesson(p, name)) }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useCourseProgress = () => useContext(ProgressContext);

export function ProgressSummary() {
  const { progress, ready, saved } = useCourseProgress();
  const count = progress.completed.length;
  return (
    <div className="kit-course__progress">
      <div className="kit-course__progress-label">
        <span>your progress</span><span>{count} / {LESSONS.length}</span>
      </div>
      <progress value={count} max={LESSONS.length} aria-label={`${count} of ${LESSONS.length} lessons completed`} />
      <p>{ready && !saved ? "progress saved for this visit only" : "saved in this browser"}</p>
    </div>
  );
}
