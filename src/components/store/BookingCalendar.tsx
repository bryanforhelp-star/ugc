"use client";

import { useMemo, useState } from "react";
import type { BookingSlot } from "@/lib/booking";
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
  return new Date(`${key}T12:00:00Z`).getUTCDay();
}

function daysInMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function monthLabel(year: number, month: number) {
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function prettyDate(key: string) {
  return new Date(`${key}T12:00:00Z`)
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
    .toLowerCase();
}

function shiftMonth(year: number, month: number, delta: number) {
  const date = new Date(Date.UTC(year, month - 1 + delta, 1));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1 };
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

export function BookingCalendar({
  initialSlots,
  bookable,
}: {
  initialSlots: BookingSlot[];
  bookable: boolean;
}) {
  const [slots, setSlots] = useState(initialSlots);
  const byDay = useMemo(() => {
    const map = new Map<string, BookingSlot[]>();
    for (const slot of slots) {
      const list = map.get(slot.dayKey) ?? [];
      list.push(slot);
      map.set(slot.dayKey, list);
    }
    return map;
  }, [slots]);

  const openDays = useMemo(() => new Set(byDay.keys()), [byDay]);
  const firstOpen = slots[0]?.dayKey;
  const lastOpen = slots[slots.length - 1]?.dayKey;
  const firstParts = firstOpen ? parseKey(firstOpen) : null;
  const lastParts = lastOpen ? parseKey(lastOpen) : null;

  const [view, setView] = useState(() =>
    firstParts
      ? { year: firstParts.year, month: firstParts.month }
      : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 },
  );
  const [dayKeyState, setDayKey] = useState("");
  const [startISO, setStartISO] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

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
        body: JSON.stringify({ startISO: selected.startISO }),
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
      <p className="links-native-cal-kicker">
        {SESSION.durationMin} min · {SESSION.timezoneLabel} time
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
                    {slot.timeLabel}
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
      {error ? <p className="links-checkout-error">{error}</p> : null}
      {!bookable ? (
        <p className="links-native-cal-note">
          times are up. payment goes live once stripe is connected.
        </p>
      ) : null}
    </div>
  );
}
