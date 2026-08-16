"use client";

import { useState } from "react";
import { COFFEE, MATCHA_TIPS } from "@/lib/store";

function dollarsToCents(raw: string) {
  const cleaned = raw.replace(/[^0-9.]/g, "");
  if (!cleaned) return null;
  const dollars = Number(cleaned);
  if (!Number.isFinite(dollars)) return null;
  return Math.round(dollars * 100);
}

export function MatchaSupport() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [customOpen, setCustomOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  async function checkout(amountCents: number) {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ productId: COFFEE.id, amountCents }),
      });
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) {
        setError(data.error || "checkout did not start");
        setBusy(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("checkout did not start");
      setBusy(false);
    }
  }

  function chooseCustom() {
    setError("");
    setCustomOpen(true);
  }

  function sendCustom() {
    const cents = dollarsToCents(customAmount);
    if (cents == null || cents < MATCHA_TIPS.minCents || cents > MATCHA_TIPS.maxCents) {
      setError("pick an amount between $1 and $500");
      return;
    }
    void checkout(cents);
  }

  return (
    <section className="links-matcha">
      <div className="links-matcha-head">
        <span className="links-btn-emoji" aria-hidden="true">
          🍵
        </span>
        <div className="links-btn-text">
          <div className="links-btn-title">{COFFEE.title}</div>
          <div className="links-btn-sub">{COFFEE.description}</div>
        </div>
      </div>
      <div className="links-matcha-opts" role="group" aria-label="matcha amounts">
        {MATCHA_TIPS.amounts.map((amount) => (
          <button
            key={amount.cents}
            type="button"
            className="links-matcha-opt"
            disabled={busy}
            onClick={() => {
              setCustomOpen(false);
              void checkout(amount.cents);
            }}
          >
            {amount.label}
          </button>
        ))}
        <button
          type="button"
          className={
            customOpen ? "links-matcha-opt is-selected" : "links-matcha-opt"
          }
          disabled={busy}
          aria-expanded={customOpen}
          onClick={chooseCustom}
        >
          {MATCHA_TIPS.customLabel}
        </button>
      </div>
      {customOpen ? (
        <form
          className="links-matcha-custom"
          onSubmit={(event) => {
            event.preventDefault();
            sendCustom();
          }}
        >
          <label className="links-matcha-custom-label">
            <span className="links-matcha-dollar">$</span>
            <input
              className="links-matcha-input"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              autoFocus
              placeholder="amount"
              value={customAmount}
              disabled={busy}
              onChange={(event) => setCustomAmount(event.target.value)}
            />
          </label>
          <button type="submit" className="links-matcha-send" disabled={busy}>
            {busy ? "…" : "go"}
          </button>
        </form>
      ) : null}
      {error ? <p className="links-checkout-error">{error}</p> : null}
    </section>
  );
}
