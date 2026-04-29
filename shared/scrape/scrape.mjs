#!/usr/bin/env node
import { fal } from "@fal-ai/client";
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, join } from "node:path";

if (!process.env.FAL_KEY) {
  console.error("Missing FAL_KEY. Copy .env.example to .env and set FAL_KEY.");
  process.exit(1);
}
fal.config({ credentials: process.env.FAL_KEY });

const args = process.argv.slice(2);
const flag = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : def;
};
const url = args.find((a) => !a.startsWith("--") && (a.startsWith("http://") || a.startsWith("https://")));
const frameCount = parseInt(flag("--frames", "6"), 10);
const cookiesBrowser = flag("--cookies-from-browser", "chrome");
const cookiesFile = flag("--cookies", null);
const skipTranscript = args.includes("--no-transcript");

if (!url) {
  console.error(
    'Usage: pnpm scrape <url> [--frames N] [--cookies-from-browser chrome|safari|firefox|edge] [--cookies path] [--no-transcript]\n' +
    'Supports: Instagram, TikTok, YouTube Shorts, X/Twitter, anything yt-dlp handles.\n' +
    'Instagram reels typically require browser cookies — defaults to --cookies-from-browser chrome.'
  );
  process.exit(1);
}

function which(cmd) {
  return spawnSync("sh", ["-c", `command -v ${cmd}`]).status === 0;
}
if (!which("yt-dlp")) {
  console.error("yt-dlp not found. Install: `pip install yt-dlp` or `brew install yt-dlp`.");
  process.exit(1);
}
if (!which("ffmpeg")) {
  console.error("ffmpeg not found. Install: `brew install ffmpeg` (macOS) or your platform's package manager.");
  process.exit(1);
}

const cookieFlags = cookiesFile
  ? ["--cookies", cookiesFile]
  : cookiesBrowser
  ? ["--cookies-from-browser", cookiesBrowser]
  : [];

function runYtdlp(extra) {
  const r = spawnSync("yt-dlp", ["--no-playlist", "--no-warnings", ...cookieFlags, ...extra], { encoding: "utf8" });
  if (r.status !== 0) {
    console.error(`yt-dlp failed:\n${r.stderr || r.stdout}`);
    process.exit(1);
  }
  return r.stdout;
}

console.log(`[scrape] resolving ${url}`);
const meta = JSON.parse(runYtdlp(["--dump-json", url]));

const platform = (meta.extractor_key || meta.extractor || "unknown").toLowerCase().replace(/[^a-z0-9]/g, "");
const id = meta.id || "unknown";
const slug = `${platform}-${id}`;
const outDir = resolve(`output/${slug}`);
mkdirSync(join(outDir, "frames"), { recursive: true });

console.log(`[scrape] -> ${outDir}`);
writeFileSync(join(outDir, "meta.json"), JSON.stringify(meta, null, 2));

const videoPath = join(outDir, "video.mp4");
if (!existsSync(videoPath) || statSync(videoPath).size < 1024) {
  console.log("[scrape] downloading video");
  runYtdlp(["-f", "mp4/bestvideo*+bestaudio/best", "--merge-output-format", "mp4", "-o", videoPath, url]);
}

const duration = meta.duration || 30;
console.log(`[scrape] extracting ${frameCount} frames across ${duration}s`);
for (let i = 1; i <= frameCount; i++) {
  const t = ((duration * i) / (frameCount + 1)).toFixed(2);
  const framePath = join(outDir, "frames", `frame-${String(i).padStart(2, "0")}.jpg`);
  const r = spawnSync("ffmpeg", [
    "-y", "-loglevel", "error", "-ss", t, "-i", videoPath,
    "-frames:v", "1", "-q:v", "2", framePath,
  ]);
  if (r.status !== 0) console.warn(`[scrape] frame ${i} failed`);
}

const audioPath = join(outDir, "audio.mp3");
console.log("[scrape] extracting audio");
spawnSync("ffmpeg", [
  "-y", "-loglevel", "error", "-i", videoPath,
  "-vn", "-acodec", "libmp3lame", "-q:a", "5", audioPath,
]);

let transcriptText = "";
if (!skipTranscript && existsSync(audioPath)) {
  console.log("[scrape] transcribing via fal whisper");
  try {
    const buf = readFileSync(audioPath);
    const file = new File([buf], "audio.mp3", { type: "audio/mpeg" });
    const audioUrl = await fal.storage.upload(file);
    const result = await fal.subscribe("fal-ai/whisper", {
      input: { audio_url: audioUrl, task: "transcribe" },
      logs: false,
    });
    transcriptText = result?.data?.text || "";
    writeFileSync(join(outDir, "transcript.txt"), transcriptText);
    writeFileSync(join(outDir, "transcript.json"), JSON.stringify(result?.data ?? {}, null, 2));
  } catch (e) {
    console.warn(`[scrape] transcription failed: ${e.message}`);
  }
}

const frames = readdirSync(join(outDir, "frames")).filter((f) => f.endsWith(".jpg")).sort();
const caption = (meta.description || meta.title || "").trim();
const account = meta.uploader_id || meta.uploader || meta.channel || "unknown";

const summary = `# ${meta.title || slug}

- **URL:** ${url}
- **Platform:** ${platform}
- **Account:** @${account}
- **Duration:** ${duration}s
- **Posted:** ${meta.upload_date || "unknown"}
- **Likes:** ${meta.like_count ?? "n/a"} · **Plays:** ${meta.view_count ?? meta.play_count ?? "n/a"} · **Comments:** ${meta.comment_count ?? "n/a"}

## Caption

${caption ? caption.split("\n").map((l) => `> ${l}`).join("\n") : "_(no caption)_"}

## Transcript

${transcriptText ? transcriptText : "_(no transcript — run without --no-transcript)_"}

## Frames

${frames.length ? frames.map((f) => `![${f}](./frames/${f})`).join("\n\n") : "_(no frames)_"}

## Files

- \`video.mp4\` — original video
- \`audio.mp3\` — extracted audio
- \`meta.json\` — full yt-dlp metadata
- \`transcript.txt\` / \`transcript.json\` — whisper output
- \`frames/\` — ${frames.length} JPEG frames at evenly-spaced timestamps
`;

writeFileSync(join(outDir, "summary.md"), summary);
console.log(`[scrape] done`);
console.log(`         ${outDir}/summary.md`);
