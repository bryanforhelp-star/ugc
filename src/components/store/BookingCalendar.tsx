"use client";

import { useMemo, useState } from "react";
import type { BookingSlot } from "@/lib/booking";
import { SESSION } from "@/lib/store";

export function BookingCalendar({
  initialSlots,
  bookable,
}: {
  initialSlots: BookingSlot[];
  bookable: boolean;
}) {
  const [slots, setSlots] = useState(initialSlots);
  const days = useMemo(() => {
    const map = new Map<string, { dayKey: string; dayLabel: string; times: BookingSlot[] }>();
    for (const slot of slots) {
      const day = map.get(slot.dayKey) ?? {
        dayKey: slot.dayKey,
        dayLabel: slot.dayLabel,
        times: [],
      };
      day.times.push(slot);
      map.set(slot.dayKey, day);
    }
    return [...map.values()];
  }, [slots]);

  const [dayKey, setDayKey] = useState(days[0]?.dayKey ?? "");
  const [startISO, setStartISO] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const selectedDay = days.find((day) => day.dayKey === dayKey) ?? days[0];
  const selected = slots.find((slot) => slot.startISO === startISO);

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

  if (days.length === 0) {
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
      <div className="links-day-row" role="list">
        {days.map((day) => (
          <button
            key={day.dayKey}
            type="button"
            className={
              day.dayKey === selectedDay?.dayKey
                ? "links-day-chip is-on"
                : "links-day-chip"
            }
            onClick={() => {
              setDayKey(day.dayKey);
              setStartISO("");
              setError("");
            }}
          >
            {day.dayLabel}
          </button>
        ))}
      </div>
      <div className="links-time-grid">
        {selectedDay?.times.map((slot) => (
          <button
            key={slot.startISO}
            type="button"
            className={
              slot.startISO === startISO ? "links-time-chip is-on" : "links-time-chip"
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
              : "pick a time"}
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
