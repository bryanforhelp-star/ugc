#!/usr/bin/env node
/**
 * render.mjs — brand OG cards → public/og/*.jpg
 *
 * Link previews want 1.91:1. Every photo on the site is portrait, so the
 * cards pair a cropped portrait with the wordmark instead of letting
 * crawlers pick an arbitrary image off the page.
 *
 * Usage:
 *   node render.mjs            # all cards
 *   node render.mjs ugc        # one card
 *
 * Playwright lives in ../overlays/node_modules.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, "../..");
const PUBLIC = path.join(REPO, "public");
const OUT = path.join(PUBLIC, "og");

const require = createRequire(path.join(__dirname, "../overlays/package.json"));
const { chromium } = require("playwright");

const W = 1200;
const H = 630;

const CARDS = {
  home: {
    eyebrow: "bykyndall.com",
    title: "hi, i'm kyndall.",
    lines: ["making ai feel more creative.", "building things and bringing you along."],
    photo: "hero/kyndall-poster.jpg",
    focus: "50% 22%",
  },
  ugc: {
    eyebrow: "bykyndall.com/ugc",
    title: "kyndall.",
    lines: ["short-form ads for brands", "running paid social."],
    photo: "hero/kyndall-poster.jpg",
    focus: "50% 22%",
  },
  video: {
    eyebrow: "bykyndall.com/video",
    title: "editing.",
    lines: ["short-form video editing", "for instagram and tiktok."],
    photo: "showcase/06-poster.jpg",
    focus: "50% 18%",
  },
};

function dataUrl(relPath) {
  const abs = path.join(PUBLIC, relPath);
  const ext = path.extname(abs).slice(1).toLowerCase();
  const mime = ext === "png" ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${fs.readFileSync(abs).toString("base64")}`;
}

// Inlined: Chromium blocks file:// subresources for setContent pages.
function fontUrl(file) {
  const buf = fs.readFileSync(path.join(PUBLIC, "fonts", file));
  return `data:font/woff2;base64,${buf.toString("base64")}`;
}

function html(card) {
  return `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face { font-family: "Bootzy TM"; src: url("${fontUrl("Bootzy-TM.woff2")}") format("woff2"); }
  @font-face { font-family: "NewPixel"; src: url("${fontUrl("NewPixel.woff2")}") format("woff2"); }
  @font-face { font-family: "NewPixelSquare"; src: url("${fontUrl("NewPixelSquare.woff2")}") format("woff2"); }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${W}px; height: ${H}px; }
  body {
    display: grid;
    grid-template-columns: 1fr 430px;
    background: #ffffff;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #0b0b0c;
    overflow: hidden;
  }
  .left { padding: 68px 56px 60px 72px; display: flex; flex-direction: column; justify-content: space-between; }
  .eyebrow {
    font-family: "NewPixelSquare", monospace;
    font-size: 19px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1b2bff;
  }
  h1 {
    font-family: "Bootzy TM", system-ui, sans-serif;
    font-weight: 400;
    font-size: 88px;
    line-height: 0.88;
    letter-spacing: 0.02em;
    text-transform: lowercase;
    margin-bottom: 30px;
  }
  p {
    font-family: "NewPixel", Georgia, serif;
    font-size: 31px;
    line-height: 1.24;
    color: #0b0b0c;
  }
  .rule { width: 86px; height: 6px; background: #1b2bff; margin-top: 34px; }
  .right { position: relative; overflow: hidden; background: #ecebe7; }
  .right img { width: 100%; height: 100%; object-fit: cover; object-position: ${card.focus}; display: block; }
  /* Corner marks, same motif the video frames use */
  .mark { position: absolute; width: 34px; height: 34px; border: 3px solid #1b2bff; }
  .mark--tl { top: 26px; left: 26px; border-right: 0; border-bottom: 0; }
  .mark--br { bottom: 26px; right: 26px; border-left: 0; border-top: 0; }
</style>
<div class="left">
  <div class="eyebrow">${card.eyebrow}</div>
  <div>
    <h1>${card.title}</h1>
    ${card.lines.map((l) => `<p>${l}</p>`).join("\n    ")}
    <div class="rule"></div>
  </div>
</div>
<div class="right">
  <img src="${dataUrl(card.photo)}" alt="">
  <div class="mark mark--tl"></div>
  <div class="mark mark--br"></div>
</div>`;
}

const wanted = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const names = wanted.length ? wanted : Object.keys(CARDS);

fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
});

for (const name of names) {
  const card = CARDS[name];
  if (!card) throw new Error(`unknown card: ${name}`);
  await page.setContent(html(card), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);

  // A silent fallback to Helvetica is easy to miss in a finished jpg.
  const failed = await page.evaluate(() =>
    [...document.fonts].filter((f) => f.status !== "loaded").map((f) => f.family),
  );
  if (failed.length) throw new Error(`fonts did not load: ${failed.join(", ")}`);
  const file = path.join(OUT, `${name}.jpg`);
  await page.screenshot({ path: file, type: "jpeg", quality: 90 });
  console.log(`${path.relative(REPO, file)}  ${W}x${H}`);
}

await browser.close();
