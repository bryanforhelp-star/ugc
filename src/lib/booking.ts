import { SESSION } from "./store";

export type BookingSlot = {
  startISO: string;
  endISO: string;
  dayKey: string;
  dayLabel: string;
  timeLabel: string;
};

export type BookingIntake = {
  firstName: string;
  email: string;
  reasons: string[];
  need: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const META_MAX = 500;

export function parseBookingIntake(raw: {
  firstName?: unknown;
  email?: unknown;
  reasons?: unknown;
  need?: unknown;
}): { ok: true; intake: BookingIntake } | { ok: false; error: string } {
  const firstName =
    typeof raw.firstName === "string" ? raw.firstName.trim().slice(0, 80) : "";
  const email =
    typeof raw.email === "string"
      ? raw.email.trim().toLowerCase().slice(0, 120)
      : "";
  const reasons = Array.isArray(raw.reasons)
    ? raw.reasons
        .filter(
          (reason): reason is string =>
            typeof reason === "string" &&
            (SESSION.reasons as readonly string[]).includes(reason),
        )
        .slice(0, SESSION.reasons.length)
    : [];
  const need = typeof raw.need === "string" ? raw.need.trim().slice(0, 800) : "";

  if (firstName.length < 2) {
    return { ok: false, error: "add your first name" };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "add a real email" };
  }
  if (reasons.length === 0 && !need) {
    return {
      ok: false,
      error: "click what this is for, or write a bit about what you need",
    };
  }

  return { ok: true, intake: { firstName, email, reasons, need } };
}

export function stripeMeta(value: string) {
  return value.slice(0, META_MAX);
}

const WEEKDAYS: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function tzParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  let hour = Number(get("hour"));
  if (hour === 24) hour = 0;
  return {
    weekday: get("weekday"),
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour,
    minute: Number(get("minute")),
  };
}

/** Interpret a wall-clock time in `timeZone` as a UTC Date. */
export function zonedDate(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
) {
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0);
  const asZone = tzParts(new Date(utcGuess), timeZone);
  const asUtc = Date.UTC(
    asZone.year,
    asZone.month - 1,
    asZone.day,
    asZone.hour,
    asZone.minute,
    0,
  );
  return new Date(utcGuess - (asUtc - utcGuess));
}

export function formatSlotRange(startISO: string, timeZone = SESSION.timezone) {
  const start = new Date(startISO);
  const end = new Date(start.getTime() + SESSION.durationMin * 60_000);
  const day = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(start);
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  });
  return `${day}, ${time.format(start)} to ${time.format(end)} ${SESSION.timezoneLabel}`;
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function toIcsUtc(date: Date) {
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    "T" +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    "Z"
  );
}

export function bookingIcs(startISO: string) {
  const start = new Date(startISO);
  const end = new Date(start.getTime() + SESSION.durationMin * 60_000);
  const description = `1:1 with kyndall. ${formatSlotRange(startISO)}.`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//bykyndall//booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `DTSTAMP:${toIcsUtc(new Date())}`,
    `DTSTART:${toIcsUtc(start)}`,
    `DTEND:${toIcsUtc(end)}`,
    "SUMMARY:1:1 with kyndall",
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function nextCalendarDay(year: number, month: number, day: number) {
  const next = new Date(Date.UTC(year, month - 1, day + 1));
  return {
    year: next.getUTCFullYear(),
    month: next.getUTCMonth() + 1,
    day: next.getUTCDate(),
  };
}

export function buildOpenSlots(booked: Set<string>, from = new Date()) {
  const {
    timezone,
    durationMin,
    days,
    startHour,
    endHour,
    minNoticeDays,
    daysAhead,
  } = SESSION;
  const last = from.getTime() + daysAhead * 24 * 60 * 60 * 1000;
  const startParts = tzParts(from, timezone);
  let year = startParts.year;
  let month = startParts.month;
  let day = startParts.day;
  for (let skip = 0; skip < minNoticeDays; skip += 1) {
    const next = nextCalendarDay(year, month, day);
    year = next.year;
    month = next.month;
    day = next.day;
  }
  const slots: BookingSlot[] = [];

  for (let i = 0; i <= daysAhead + 1; i += 1) {
    const weekday = WEEKDAYS[tzParts(zonedDate(timezone, year, month, day, 12, 0), timezone).weekday] ?? -1;
    if (days.includes(weekday)) {
      for (let hour = startHour; hour < endHour; hour += 1) {
        const start = zonedDate(timezone, year, month, day, hour, 0);
        if (start.getTime() > last) break;
        const startISO = start.toISOString();
        if (booked.has(startISO)) continue;
        slots.push({
          startISO,
          endISO: new Date(start.getTime() + durationMin * 60_000).toISOString(),
          dayKey: `${year}-${pad(month)}-${pad(day)}`,
          dayLabel: new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            weekday: "short",
            month: "short",
            day: "numeric",
          }).format(start),
          timeLabel: new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            hour: "numeric",
            minute: "2-digit",
          }).format(start),
        });
      }
    }
    const next = nextCalendarDay(year, month, day);
    year = next.year;
    month = next.month;
    day = next.day;
  }

  return slots;
}

export function isBookableSlot(startISO: string, booked: Set<string>) {
  return buildOpenSlots(booked).some((slot) => slot.startISO === startISO);
}
