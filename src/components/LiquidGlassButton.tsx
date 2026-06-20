"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  getLiquidGlassGlobals,
  loadLiquidGlass,
  type LiquidGlassButtonInstance,
} from "@/lib/liquid-glass";

type LiquidGlassButtonProps = {
  children: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: number;
};

export function LiquidGlassButton({
  children,
  href,
  onClick,
  className,
  size = 16,
}: LiquidGlassButtonProps) {
  const mountRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<LiquidGlassButtonInstance | null>(null);
  const router = useRouter();

  useEffect(() => {
    let alive = true;
    const mount = mountRef.current;
    if (!mount) return;

    loadLiquidGlass()
      .then(async () => {
        if (!alive || !mountRef.current) return;
        await document.fonts.ready;
        await new Promise<void>((r) =>
          requestAnimationFrame(() => requestAnimationFrame(() => r())),
        );
        if (!alive || !mountRef.current) return;

        const { Button } = getLiquidGlassGlobals();
        const navigate = () => {
          if (href?.startsWith("#")) {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            return;
          }
          if (href && /^https?:\/\//i.test(href)) {
            window.open(href, "_blank", "noopener,noreferrer");
            return;
          }
          if (href) router.push(href);
          else onClick?.();
        };
        const btn = new Button({
          text: children,
          size,
          type: "pill",
          tintOpacity: 0.14,
          onClick: navigate,
        });

        buttonRef.current = btn;
        mountRef.current.appendChild(btn.element);
      })
      .catch(() => {
        if (!alive || !mountRef.current) return;
        const fallback = document.createElement("a");
        fallback.className = "lg-fallback";
        fallback.textContent = children;
        if (href) fallback.href = href;
        if (href && /^https?:\/\//i.test(href)) {
          fallback.target = "_blank";
          fallback.rel = "noreferrer";
        }
        fallback.onclick = (e) => {
          e.preventDefault();
          if (href?.startsWith("#")) {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
          } else if (href && /^https?:\/\//i.test(href)) {
            window.open(href, "_blank", "noopener,noreferrer");
          } else if (href) {
            router.push(href);
          } else {
            onClick?.();
          }
        };
        mountRef.current.appendChild(fallback);
      });

    return () => {
      alive = false;
      const btn = buttonRef.current;
      const host = mountRef.current;
      if (btn?.element && host?.contains(btn.element)) {
        host.removeChild(btn.element);
      }
      buttonRef.current = null;
    };
  }, [children, href, onClick, size, router]);

  return (
    <span
      ref={mountRef}
      className={className ? `lg-host ${className}` : "lg-host"}
    />
  );
}
