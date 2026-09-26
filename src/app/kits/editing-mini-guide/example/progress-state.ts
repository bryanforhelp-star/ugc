import { LESSONS } from "./course-data";

export const PROGRESS_KEY = "kyndall-editing-course-progress-v1";
export type CourseProgress = { completed: string[]; lastVisited: string | null };
export const EMPTY_PROGRESS: CourseProgress = { completed: [], lastVisited: null };

export function parseProgress(raw: string | null): CourseProgress {
  try {
    const value = JSON.parse(raw || "null");
    if (!value || typeof value !== "object") return EMPTY_PROGRESS;
    return {
      completed: LESSONS.filter((lesson) =>
        Array.isArray(value.completed) && value.completed.includes(lesson.name)
      ).map((lesson) => lesson.name),
      lastVisited: LESSONS.some((lesson) => lesson.href === value.lastVisited)
        ? value.lastVisited : null,
    };
  } catch {
    return EMPTY_PROGRESS;
  }
}

export function toggleLesson(progress: CourseProgress, name: string): CourseProgress {
  if (!LESSONS.some((lesson) => lesson.name === name)) return progress;
  return {
    ...progress,
    completed: progress.completed.includes(name)
      ? progress.completed.filter((item) => item !== name)
      : [...progress.completed, name],
  };
}
