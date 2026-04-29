# Reference scraper

Pull a video from Instagram / TikTok / YouTube Shorts / X and produce a single
`summary.md` that Claude can read in any future session — caption, transcript,
key frames, metadata, all in one place.

## Setup (once per machine)

```bash
# system deps
brew install yt-dlp ffmpeg          # macOS
# or: pip install yt-dlp && apt-get install ffmpeg   (linux)

# repo deps
cd shared/scrape
pnpm install                        # or: npm install
cp .env.example .env                # paste your FAL_KEY (same one as Seedance)
```

## Use

```bash
# Instagram (uses Chrome cookies by default — log in to IG in Chrome first)
pnpm scrape https://www.instagram.com/reel/DVvfytviR4f/

# TikTok / YouTube Shorts (no cookies needed)
pnpm scrape https://www.tiktok.com/@user/video/...

# Different browser for cookies
pnpm scrape https://instagram.com/reel/... --cookies-from-browser safari

# Skip transcription (faster, no API cost)
pnpm scrape <url> --no-transcript

# More / fewer frames (default 6)
pnpm scrape <url> --frames 10
```

Output lands in `shared/scrape/output/<platform>-<id>/`:

```
output/instagram-DVvfytviR4f/
├── summary.md          ← read this in Claude (everything in one file)
├── video.mp4
├── audio.mp3
├── transcript.txt
├── transcript.json     ← timestamped if whisper returns segments
├── meta.json           ← full yt-dlp metadata
└── frames/
    ├── frame-01.jpg
    ├── frame-02.jpg
    └── ...
```

## Use it from any Claude session

After scraping, just tell Claude:

> "Read `shared/scrape/output/instagram-DVvfytviR4f/summary.md`"

That single file has the caption, full transcript, and embedded frames — Claude
reads images directly, so it can describe the visual style, hook, and pacing
without you copying anything by hand.

## Notes

- **Instagram requires login.** yt-dlp reads cookies from your installed browser
  (Chrome by default). If you're not logged in to IG in your browser, the scrape
  will 403. Log in once, scrape forever.
- **Output is gitignored.** Videos are large and often copyrighted reference material.
- **Sandbox limits.** This tool needs your browser cookies + network access — works
  on your Mac, not from a remote Claude Code sandbox session.
