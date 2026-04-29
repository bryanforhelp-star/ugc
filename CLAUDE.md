# CLAUDE.md

UGC monorepo for client work. See `README.md` for the layout.

## Auto-scrape reference URLs

When the user pastes an Instagram, TikTok, YouTube Shorts, or X/Twitter URL pointing
to a single video/reel/short, **do not** ask them to describe it. Instead:

1. Run the scraper:
   ```bash
   cd shared/scrape && pnpm scrape <url>
   ```
   If `shared/scrape/node_modules/` doesn't exist yet, run `pnpm install` there first.
2. Read the resulting `shared/scrape/output/<platform>-<id>/summary.md` — the script
   writes a single file containing caption, full transcript, and embedded frames.
3. Use that to answer the user's question.

If the URL is a profile (e.g. `instagram.com/<handle>`), tell the user the scraper
works on individual posts and ask for 2–3 specific reel URLs from that profile.

If the scrape fails (no IG cookies in browser, no network, missing yt-dlp/ffmpeg,
running in a remote sandbox), say so explicitly and ask the user to either install
the missing piece, scrape on their Mac, or send screenshots — don't fake it.

## Clients

Each client lives at `clients/<brand>/`. **Always read `clients/<brand>/brief.md`
first** before generating content for that brand. The brief has product, audiences,
voice, and conversion notes.

## Scripts

- `clients/<brand>/scripts/` — production-ready scripts with shot direction
- `clients/<brand>/prompts/` — raw Seedance prompts for B-roll generation

## Skills

- `/organic-script` — short-form social UGC (TikTok/Reels, ≤45s). Use for organic content.
- `/ad-script` — full direct-response ad scripts (30–90s) with AIP framework. Use for paid.
- `/ad-concept`, `/ad-hook`, `/ad-headline`, `/ad-audit` — supporting skills.

For Speak Indo specifically, organic scripting style is the default. There's also
a brand-specific calibration in `clients/speak-indo/scripting-style.md`.

## Tools

- `shared/seedance/` — Seedance text-to-video via fal.ai. Generates B-roll from prompts.
- `shared/scrape/` — pulls reference reels into `summary.md` for analysis.

Both reuse the same `FAL_KEY`. Output dirs are gitignored.

## Branching

Branches are for in-progress changes, not separate projects. Commit to `main` for
small content/script edits. Use feature branches only when you're touching shared
tooling or doing experimental work that might break.
