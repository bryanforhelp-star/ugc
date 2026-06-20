"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type FadeRect = { left: number; top: number; right: number; bottom: number };

const MASK_SELECTORS =
  "nav, .site-nav, .site-header, .h-sub, .h-actions, .s-sub, .about-grid, .showcase, .card, .foot, " +
  ".page-lead, .prose, .meta, .back, .guide-card, .guides-hub, " +
  ".work-card, .site-footer__links";

/** Bottom-left anchor for inner pages (normalized 0–1) */
const ANCHOR = { x: 0.2, y: 0.84 };

export function HomeAsciiBg() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const canvas = document.getElementById("bg") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas;
    const cctx = ctx;
    const ramp = " .:-=+*#%@";
    const root = document.documentElement;
    const styles = () => getComputedStyle(root);
    const POP = styles().getPropertyValue("--pop").trim() || "#1B2BFF";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cols: number;
    let rows: number;
    let cw: number;
    let ch: number;
    let W: number;
    let H: number;
    let dpr: number;
    let fadeGrid: Float32Array | null = null;
    let fadeRects: FadeRect[] = [];
    let maskRaf = 0;

    const FONT = 13;
    const ASPECT = 0.58;
    const BEHIND_TEXT = 0.1;
    const FEATHER = 28;
    const mouse = { x: 0.5, y: 0.4, on: false };

    function collectFadeRects() {
      fadeRects = [];
      root.querySelectorAll(MASK_SELECTORS).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) return;
        fadeRects.push({
          left: r.left - 6,
          top: r.top - 6,
          right: r.right + 6,
          bottom: r.bottom + 6,
        });
      });
    }

    function fadeAt(px: number, py: number) {
      let min = 1;
      for (const r of fadeRects) {
        const insideX = px >= r.left && px <= r.right;
        const insideY = py >= r.top && py <= r.bottom;
        if (insideX && insideY) {
          min = Math.min(min, BEHIND_TEXT);
          continue;
        }

        const dx = insideX ? 0 : Math.min(Math.abs(px - r.left), Math.abs(px - r.right));
        const dy = insideY ? 0 : Math.min(Math.abs(py - r.top), Math.abs(py - r.bottom));
        const dist = insideX ? dy : insideY ? dx : Math.hypot(dx, dy);
        if (dist < FEATHER) {
          const t = dist / FEATHER;
          const eased = t * t * (3 - 2 * t);
          min = Math.min(min, BEHIND_TEXT + (1 - BEHIND_TEXT) * eased);
        }
      }
      return min;
    }

    function buildFadeGrid() {
      collectFadeRects();
      fadeGrid = new Float32Array(cols * rows);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * cw + cw * 0.5;
          const py = y * ch + ch * 0.5;
          fadeGrid[y * cols + x] = fadeAt(px, py);
        }
      }
    }

    function scheduleMaskUpdate() {
      cancelAnimationFrame(maskRaf);
      maskRaf = requestAnimationFrame(() => {
        if (cols > 0 && rows > 0) {
          buildFadeGrid();
          if (!isHome) draw(0);
        }
      });
    }

    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth;
      H = innerHeight;
      c.width = W * dpr;
      c.height = H * dpr;
      c.style.width = `${W}px`;
      c.style.height = `${H}px`;
      cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cw = FONT * ASPECT;
      ch = FONT;
      cols = Math.max(1, Math.ceil(W / cw));
      rows = Math.max(1, Math.ceil(H / ch));
      cctx.font = `${FONT}px ${styles().getPropertyValue("--mono")}`;
      cctx.textBaseline = "top";
      scheduleMaskUpdate();
    }

    const d2 = (ax: number, ay: number, bx: number, by: number) => {
      const dx = ax - bx;
      const dy = ay - by;
      return dx * dx + dy * dy;
    };

    function field(nx: number, ny: number, t: number) {
      const mx = isHome
        ? mouse.on
          ? mouse.x
          : 0.5 + 0.16 * Math.sin(t * 0.25)
        : ANCHOR.x;
      const my = isHome
        ? mouse.on
          ? mouse.y
          : 0.42 + 0.12 * Math.cos(t * 0.3)
        : ANCHOR.y;
      let v = 0.012 / (d2(nx, ny, mx, my) + 0.005);
      v *= 0.8 + 0.2 * Math.sin(nx * 9 + ny * 7 + (isHome ? t * 1.4 : 0));
      return v;
    }

    function draw(t: number) {
      cctx.clearRect(0, 0, W, H);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const nx = x / (cols - 1);
          const ny = y / (rows - 1);
          let v = Math.max(0, Math.min(1, field(nx, ny, t)));
          if (v < 0.13) continue;
          const chr = ramp[Math.min(ramp.length - 1, Math.floor(v * ramp.length))];
          if (chr === " ") continue;

          const fade = fadeGrid ? fadeGrid[y * cols + x] : 1;
          cctx.globalAlpha = (0.45 + v * 0.55) * fade;
          cctx.fillStyle = POP;
          cctx.fillText(chr, x * cw, y * ch);
        }
      }
      cctx.globalAlpha = 1;
    }

    let t0 = performance.now();
    let last = 0;
    let raf = 0;

    function loop(now: number) {
      if (now - last > 40) {
        draw((now - t0) / 1000);
        last = now;
      }
      raf = requestAnimationFrame(loop);
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isHome) return;
      mouse.x = e.clientX / W;
      mouse.y = e.clientY / H;
      mouse.on = true;
    };
    const onPointerLeave = () => {
      if (!isHome) return;
      mouse.on = false;
    };
    const onResize = () => size();
    const onScroll = () => scheduleMaskUpdate();

    if (isHome) {
      addEventListener("pointermove", onPointerMove);
      addEventListener("pointerleave", onPointerLeave);
    }
    addEventListener("resize", onResize);
    addEventListener("scroll", onScroll, { passive: true });

    size();

    if (!isHome || reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(maskRaf);
      removeEventListener("pointermove", onPointerMove);
      removeEventListener("pointerleave", onPointerLeave);
      removeEventListener("resize", onResize);
      removeEventListener("scroll", onScroll);
    };
  }, [isHome, pathname]);

  return <canvas id="bg" aria-hidden="true" />;
}
