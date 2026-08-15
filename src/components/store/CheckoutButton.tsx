"use client";

import { useState } from "react";

export function CheckoutButton({
  productId,
  label,
  price,
  sub,
  className = "links-product-buy",
}: {
  productId: string;
  label: string;
  price?: string | null;
  sub?: string;
  className?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const row = className.includes("links-btn");

  async function checkout() {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ productId }),
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

  return (
    <div className={row ? "links-checkout links-checkout--row" : "links-checkout"}>
      <button
        type="button"
        className={className}
        onClick={checkout}
        disabled={busy}
      >
        {row ? (
          <>
            <div className="links-btn-text">
              <div className="links-btn-title">
                {busy ? "sending you to checkout" : label}
              </div>
              {sub ? <div className="links-btn-sub">{sub}</div> : null}
            </div>
            {price ? <span className="links-aff-perk">{price}</span> : null}
            <span className="links-chev" aria-hidden="true">
              →
            </span>
          </>
        ) : (
          <>
            <span>{busy ? "sending you to checkout" : label}</span>
            {price ? <span className="links-price">{price}</span> : null}
          </>
        )}
      </button>
      {error ? <p className="links-checkout-error">{error}</p> : null}
    </div>
  );
}
