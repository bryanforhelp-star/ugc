"use client";

import { useEffect, useMemo, useState } from "react";
import { parseBookingIntake, type BookingSlot } from "@/lib/booking";
import { SESSION } from "@/lib/store";

const WEEKDAYS = ["s", "m", "t", "w", "t", "f", "s"];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function dayKey(year: number, month: number, day: number) {
  return `${year}-${pad(month)}-${pad(day)}`;
}

function parseKey(key: string) {
  const [year, month, day] = key.split("-").map(Number);
  return { year, month, day };
}

function weekdayFromKey(key: string) {
  const { year, month, day } = parseKey(key);
  return new Date(year, month - 1, day).getDay();
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function monthLabel(year: number, month: number) {
  return new Date(year, month - 1, 1).toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
}

function prettyDate(key: string) {
  const { year, month, day } = parseKey(key);
  return new Date(year, month - 1, day)
    .toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
    .toLowerCase();
}

function shiftMonth(year: number, month: number, delta: number) {
  const date = new Date(year, month - 1 + delta, 1);
  return { year: date.getFullYear(), month: date.getMonth() + 1 };
}

function monthGrid(year: number, month: number) {
  const first = weekdayFromKey(dayKey(year, month, 1));
  const last = daysInMonth(year, month);
  const cells: { key: string | null; day: number | null }[] = [];
  for (let i = 0; i < first; i += 1) cells.push({ key: null, day: null });
  for (let day = 1; day <= last; day += 1) {
    cells.push({ key: dayKey(year, month, day), day });
  }
  while (cells.length % 7 !== 0) cells.push({ key: null, day: null });
  return cells;
}

function partsInZone(iso: string, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  }).formatToParts(new Date(iso));
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    timeLabel: new Intl.DateTimeFormat(undefined, {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(iso)),
    dayKey: `${get("year")}-${get("month")}-${get("day")}`,
  };
}

function tzShort(timeZone: string) {
  const label = new Intl.DateTimeFormat(undefined, {
    timeZone,
    timeZoneName: "short",
    hour: "numeric",
  })
    .formatToParts(new Date())
    .find((part) => part.type === "timeZoneName")?.value;
  return label ?? timeZone;
}

export function BookingCalendar({
  initialSlots,
  bookable,
}: {
  initialSlots: BookingSlot[];
  bookable: boolean;
}) {
  const [slots, setSlots] = useState(initialSlots);
  const [viewerTz, setViewerTz] = useState<string | null>(null);
  const [dayKeyState, setDayKey] = useState("");
  const [startISO, setStartISO] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [reasons, setReasons] = useState<string[]>([]);
  const [need, setNeed] = useState("");

  useEffect(() => {
    setViewerTz(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC");
  }, []);

  const byDay = useMemo(() => {
    if (!viewerTz) return new Map<string, BookingSlot[]>();
    const map = new Map<string, BookingSlot[]>();
    for (const slot of slots) {
      const key = partsInZone(slot.startISO, viewerTz).dayKey;
      const list = map.get(key) ?? [];
      list.push(slot);
      map.set(key, list);
    }
    return map;
  }, [slots, viewerTz]);

  const openDays = useMemo(() => new Set(byDay.keys()), [byDay]);
  const firstParts = useMemo(() => {
    if (!viewerTz || slots.length === 0) return null;
    return parseKey(partsInZone(slots[0].startISO, viewerTz).dayKey);
  }, [slots, viewerTz]);
  const lastParts = useMemo(() => {
    if (!viewerTz || slots.length === 0) return null;
    return parseKey(partsInZone(slots[slots.length - 1].startISO, viewerTz).dayKey);
  }, [slots, viewerTz]);

  const [view, setView] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  useEffect(() => {
    if (!firstParts) return;
    setView({ year: firstParts.year, month: firstParts.month });
  }, [firstParts?.year, firstParts?.month]);

  const cells = monthGrid(view.year, view.month);
  const times = dayKeyState ? (byDay.get(dayKeyState) ?? []) : [];
  const selected = slots.find((slot) => slot.startISO === startISO);
  const canPrev =
    firstParts != null &&
    (view.year > firstParts.year ||
      (view.year === firstParts.year && view.month > firstParts.month));
  const canNext =
    lastParts != null &&
    (view.year < lastParts.year ||
      (view.year === lastParts.year && view.month < lastParts.month));

  async function refreshSlots() {
    const response = await fetch("/api/booking/slots");
    const data = (await response.json()) as { slots?: BookingSlot[] };
    if (data.slots) setSlots(data.slots);
  }

  async function pay() {
    const intake = parseBookingIntake({ firstName, email, reasons, need });
    if (!intake.ok) {
      setError(intake.error);
      return;
    }
    if (!selected) {
      setError("pick a day and a time first.");
      return;
    }
    if (!bookable) {
      setError("stripe is not connected yet, so this hour cannot be paid for.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/booking/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          startISO: selected.startISO,
          firstName: intake.intake.firstName,
          email: intake.intake.email,
          reasons: intake.intake.reasons,
          need: intake.intake.need,
        }),
      });
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) {
        setError(data.error || "checkout did not start");
        await refreshSlots();
        setBusy(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("checkout did not start");
      setBusy(false);
    }
  }

  function toggleReason(reason: string) {
    const on = reasons.includes(reason);
    setReasons(
      on ? reasons.filter((item) => item !== reason) : [...reasons, reason],
    );
    setError("");
  }

  if (!viewerTz) {
    return (
      <div className="links-native-cal">
        <p className="links-native-cal-kicker">{SESSION.durationMin} min</p>
        <p className="links-cal-times-empty">loading times</p>
      </div>
    );
  }

  if (openDays.size === 0) {
    return (
      <div className="links-product">
        <div className="links-product-body">
          <h2 className="links-product-title">pick a time</h2>
          <p className="links-product-desc">
            no open hours in the next few weeks. email me and we will find one.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="links-native-cal">
      <div className="links-intake">
        <p className="links-native-cal-kicker">who you are</p>
        <label className="links-intake-field">
          <span>first name</span>
          <input
            type="text"
            autoComplete="given-name"
            name="given-name"
            value={firstName}
            disabled={busy}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className="links-intake-field">
          <span>email</span>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            name="email"
            value={email}
            disabled={busy}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <div className="links-intake-field">
          <span>what is this for</span>
          <div className="links-intake-chips" role="group" aria-label="what this is for">
            {SESSION.reasons.map((reason) => {
              const on = reasons.includes(reason);
              return (
                <button
                  key={reason}
                  type="button"
                  className={on ? "links-intake-chip is-on" : "links-intake-chip"}
                  aria-pressed={on}
                  disabled={busy}
                  onClick={() => toggleReason(reason)}
                >
                  {reason}
                </button>
              );
            })}
          </div>
        </div>
        <label className="links-intake-field">
          <span>what do you need help with</span>
          <textarea
            name="need"
            rows={4}
            value={need}
            disabled={busy}
            placeholder="a reel that will not sit still. a page. whatever is actually on your plate."
            onChange={(event) => setNeed(event.target.value)}
          />
        </label>
      </div>
      <p className="links-native-cal-kicker">
        select a date · {tzShort(viewerTz)}
      </p>
      <div className="links-cal-split">
        <div className="links-cal-month">
          <div className="links-cal-head">
            <h2 className="links-cal-title">{monthLabel(view.year, view.month)}</h2>
            <div className="links-cal-nav">
              <button
                type="button"
                className="links-cal-arrow"
                aria-label="previous month"
                disabled={!canPrev}
                onClick={() => setView((current) => shiftMonth(current.year, current.month, -1))}
              >
                ‹
              </button>
              <button
                type="button"
                className="links-cal-arrow"
                aria-label="next month"
                disabled={!canNext}
                onClick={() => setView((current) => shiftMonth(current.year, current.month, 1))}
              >
                ›
              </button>
            </div>
          </div>
          <div className="links-cal-weekdays">
            {WEEKDAYS.map((label, index) => (
              <span key={`${label}-${index}`}>{label}</span>
            ))}
          </div>
          <div className="links-cal-grid" role="grid" aria-label="available days">
            {cells.map((cell, index) => {
              if (!cell.key || cell.day == null) {
                return <span key={`empty-${index}`} className="links-cal-cell" />;
              }
              const open = openDays.has(cell.key);
              const on = cell.key === dayKeyState;
              return (
                <button
                  key={cell.key}
                  type="button"
                  role="gridcell"
                  aria-pressed={on}
                  aria-disabled={!open}
                  disabled={!open}
                  className={
                    on
                      ? "links-cal-day is-on"
                      : open
                        ? "links-cal-day is-open"
                        : "links-cal-day"
                  }
                  onClick={() => {
                    setDayKey(cell.key as string);
                    setStartISO("");
                    setError("");
                  }}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="links-cal-times">
          {dayKeyState ? (
            <>
              <p className="links-cal-times-label">{prettyDate(dayKeyState)}</p>
              <div className="links-time-list">
                {times.map((slot) => (
                  <button
                    key={slot.startISO}
                    type="button"
                    className={
                      slot.startISO === startISO
                        ? "links-time-chip is-on"
                        : "links-time-chip"
                    }
                    onClick={() => {
                      setStartISO(slot.startISO);
                      setError("");
                    }}
                  >
                    {partsInZone(slot.startISO, viewerTz).timeLabel}
                    <span className="links-time-chip-dur">{SESSION.durationMin} min</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="links-cal-times-empty">select a day</p>
          )}
        </div>
      </div>
      <button
        type="button"
        className="links-product-buy"
        onClick={pay}
        disabled={busy}
      >
        <span>
          {busy
            ? "sending you to checkout"
            : selected
              ? `pay ${SESSION.priceLabel}`
              : dayKeyState
                ? "pick a time"
                : "pick a day"}
        </span>
      </button>
      <p className="links-native-cal-note">
        times are in your timezone. she is in bali, so some days shift by a night.
      </p>
      {error ? <p className="links-checkout-error">{error}</p> : null}
      {!bookable ? (
        <p className="links-native-cal-note">
          times are up. payment goes live once stripe is connected.
        </p>
      ) : null}
    </div>
  );
}
