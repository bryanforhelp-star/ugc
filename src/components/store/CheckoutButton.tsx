"use client";

import { useState } from "react";

export function CheckoutButton({
  productId,
  label,
  price,
  className = "links-product-buy",
}: {
  productId: string;
  label: string;
  price?: string | null;
  className?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

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
    <div className="links-checkout">
      <button
        type="button"
        className={className}
        onClick={checkout}
        disabled={busy}
      >
        <span>{busy ? "sending you to checkout" : label}</span>
        {price ? <span className="links-price">{price}</span> : null}
      </button>
      {error ? <p className="links-checkout-error">{error}</p> : null}
    </div>
  );
}
