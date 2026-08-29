"use client";

import { useEffect, useState } from "react";

export function AnywayShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-anyway", "");
    return () => {
      document.documentElement.removeAttribute("data-anyway");
    };
  }, []);

  return <div className="anyway">{children}</div>;
}

export function GrabCan() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(0);

  return (
    <div className="anyway-buy" id="product">
      <span className="anyway-price">$4</span>
      <div className="anyway-qty" role="group" aria-label="quantity">
        <button
          type="button"
          onClick={() => setQty((n) => Math.max(1, n - 1))}
          aria-label="fewer cans"
        >
          -
        </button>
        <span>{qty}</span>
        <button
          type="button"
          onClick={() => setQty((n) => Math.min(12, n + 1))}
          aria-label="more cans"
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="anyway-btn"
        onClick={() => setAdded((n) => n + qty)}
      >
        grab a can
      </button>
      {added > 0 ? (
        <span className="anyway-bag">{added} in bag</span>
      ) : null}
    </div>
  );
}
