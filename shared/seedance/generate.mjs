#!/usr/bin/env node
import { fal } from "@fal-ai/client";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

if (!process.env.FAL_KEY) {
  console.error("Missing FAL_KEY. Copy .env.example to .env and set FAL_KEY.");
  process.exit(1);
}
fal.config({ credentials: process.env.FAL_KEY });

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const positional = args.find((a, i) => !a.startsWith("--") && args[i - 1]?.startsWith("--") !== true);

const out = flag("--out") ?? `output/${Date.now()}.mp4`;
const model = flag("--model") ?? "fal-ai/bytedance/seedance/v1/lite/text-to-video";

if (!positional) {
  console.error('Usage: generate "<prompt or path-to-prompt-file>" [--out file.mp4] [--model <fal-model-id>]');
  process.exit(1);
}

const prompt = existsSync(positional) ? readFileSync(positional, "utf8").trim() : positional;

console.log(`[seedance] model:  ${model}`);
console.log(`[seedance] prompt: ${prompt.slice(0, 140)}${prompt.length > 140 ? "…" : ""}`);
console.log(`[seedance] out:    ${out}`);

const result = await fal.subscribe(model, {
  input: { prompt },
  logs: true,
  onQueueUpdate(update) {
    if (update.status === "IN_PROGRESS") {
      update.logs?.forEach((l) => console.log(`[seedance] ${l.message}`));
    }
  },
});

const videoUrl = result?.data?.video?.url;
if (!videoUrl) {
  console.error("No video URL in response:", JSON.stringify(result, null, 2));
  process.exit(1);
}

console.log(`[seedance] downloading ${videoUrl}`);
const res = await fetch(videoUrl);
if (!res.ok) {
  console.error(`Download failed: ${res.status} ${res.statusText}`);
  process.exit(1);
}
mkdirSync(dirname(resolve(out)), { recursive: true });
writeFileSync(out, Buffer.from(await res.arrayBuffer()));
console.log(`[seedance] saved ${out}`);
