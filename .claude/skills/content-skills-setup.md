# Content Skills — Setup & Plumbing

The 5 content skills (from "5 Claude Skills That Run My Content" by Mariah Brunner,
learnaiwithmariah.com), adapted to this repo:

| Skill | What it does | Setup |
|---|---|---|
| `/trend-scout` | 5 ranked weekly video ideas from your industry's live content | **Needs Apify** + source list |
| `/script-writer` | Picked idea → full script in your voice | Zero setup (paste 3 sample scripts) |
| `/carousel-builder` | Idea/script → full carousel | Zero setup (paste 2 sample carousels) |
| `/comment-miner` | Comments → question leaderboard + content orders | **Needs Apify** |
| `/performance-analyst` | Metrics sheet → what works + orders for the other 4 | **Needs a Google Sheet** |

Two of the five (Script Writer, Carousel Builder) run on material you give them in the
moment — no plumbing. The other three pull **live data**; skip the plumbing and they make
things up, which is worse than useless.

## Plumbing 1 — Connect Apify (powers Trend Scout + Comment Miner)

Apify is a scraping platform.
1. Free account at [apify.com](https://apify.com).
2. Connect Apify's MCP server (`https://mcp.apify.com`) to Claude:
   - **Claude apps:** Settings → Connectors → add as a custom connector.
   - **Claude Code:** `claude mcp add` pointed at that URL.
3. Done. Claude finds and runs the right scrapers itself:
   - **Website Content Crawler** — Substacks, newsletters, news (the Scout)
   - **X / Twitter scraper** — industry voices (the Scout)
   - **Instagram Comments Scraper** + **TikTok Comments Scraper** — your post comments
     (the Miner, ~$0.50 per 1,000 comments)

This repo also ships `shared/scrape/` (see CLAUDE.md) for pulling an individual reel/post
into a `summary.md`. Use it as a manual fallback when Apify isn't connected — fine for a
handful of items, not for hundreds.

## Plumbing 2 — Build a Performance Sheet (powers Performance Analyst)

The analyst reads your numbers from a place it can study across months — a **Google Sheet**,
one row per post: `date · hook · format · topic · views · likes · comments · shares · saves`.
Fill it automatically:

- **Accessible (public metrics, fully automatic):** schedule an Apify Instagram/TikTok
  **profile scraper** to run daily and append each new post's views, likes, comments, shares.
- **Complete (adds saves, reach, follows):** these are private analytics, exposed only by the
  Instagram Graph API (Business/Creator account). Pipe them into the same Sheet via Zapier or
  Make (Instagram Business trigger → "add row to Google Sheet"), or a tool like Metricool/Later
  that exports to Sheets.

Then connect **Google Drive** to Claude (Settings → Connectors) so the analyst reads the whole
Sheet every run. Start with the accessible path; add the Graph API path when ready.

## Where the live-data skills should live

Trend Scout, Comment Miner, and Performance Analyst pull live data and are best left running on
their own — build them where Claude can reach those connections **and** run on a schedule:
- **Claude Cowork** → Scheduled Tasks (runs when your computer is on), or
- **Claude Code** → `/schedule` (runs in the cloud).

Point a schedule at each and the briefs are waiting when you wake up. No schedule yet? Run them
manually — same output, you just press go.

## Suggested weekly loop

`/comment-miner` (what they asked for) → `/trend-scout` (what's moving) → `/script-writer` +
`/carousel-builder` (make it) → `/performance-analyst` (grade it, issue orders for next week).
