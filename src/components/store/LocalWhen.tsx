"use client";

import { useEffect, useState } from "react";
import { SESSION } from "@/lib/store";

export function LocalWhen({ startISO }: { startISO: string }) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const start = new Date(startISO);
    const end = new Date(start.getTime() + SESSION.durationMin * 60_000);
    const day = start.toLocaleDateString(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    const time = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
    setLabel(
      `${day}, ${time.format(start)} to ${time.format(end)} your time`.toLowerCase(),
    );
  }, [startISO]);

  if (!label) return null;
  return <p className="links-tagline">{label}</p>;
}
