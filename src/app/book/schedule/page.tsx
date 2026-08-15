import { redirect } from "next/navigation";

/** 1:1s now pick a time and pay on the calendar, so this unlock page is unused. */
export default function ScheduleRedirect() {
  redirect("/work-with-me");
}
