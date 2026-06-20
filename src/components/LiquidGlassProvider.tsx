"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { resetLiquidGlassSnapshot } from "@/lib/liquid-glass";

/** Re-capture page snapshot when route changes so glass refraction matches the page */
export function LiquidGlassProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    resetLiquidGlassSnapshot();
  }, [pathname]);

  return children;
}
