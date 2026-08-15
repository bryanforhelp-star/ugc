# Site structure & guides

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage — featured guides in "free things", trust marquee, showcase |
| `/guides` | All published guides |
| `/guides/[slug]` | Single guide (ManyChat DM destination) |
| `/work-with-me` | Paid 1:1 sessions (content strategy, ai integrations). Session list in `src/lib/store.ts` |
| `/ugc` | Paid UGC portfolio (grid, brand marquee, services). Config in `src/lib/ugc.ts` |
| `/video` | Editing portfolio for organic reels. Clips in `public/showcase/` |
| `/kits` | Digital products. Live but empty, and pulled from nav until something publishes |
| `/links` | Link in bio / store. Profile, work with me, shop, affiliates. Copy in `src/lib/links.ts` and `src/lib/store.ts` |
| `/book` | Redirects to `/work-with-me` |
| `/book/schedule` | Calendar unlock after a paid session checkout. Noindex. |
| `/book/schedule` | Calendar unlock. Requires a paid Stripe session. Noindex. |
| `/thanks` | Digital product receipt. Requires a paid Stripe session. Noindex. |

Live keyword CTAs and which guide each maps to: `brands/kyndall/accounts.md`.

**Known gaps:** `/ugc` and `/kits` are missing from `src/app/sitemap.ts`. `ugc.ts` and
`site-mode.ts` reference a `ugc.bykyndall.com` subdomain, but `next.config.ts` has no rewrite,
so UGC only renders at the `/ugc` path.

## Add a new guide (5 minutes)

1. **Copy the template**
   ```bash
   cp content/guides/_template.md content/guides/your-slug.md
   ```

2. **Name the file = URL slug**
   - `content/guides/ai-learning-loop.md` → `https://yoursite.com/guides/ai-learning-loop`
   - Slug is always the filename. Frontmatter `slug` is ignored.

3. **Fill frontmatter**
   | Field | What to put |
   |-------|-------------|
   | `title` | Page headline (lowercase matches your voice) |
   | `description` | One sentence — used for SEO, social previews, AI summaries |
   | `cover` | Reel cover line — must match Instagram |
   | `commentKeyword` | ManyChat trigger word (e.g. `LEARN`) — uppercase, no spaces |
   | `pillars` | `how-to`, `problem-solution`, `pain-point`, or `story` |
   | `tags` | For filtering on `/guides` |
   | `published` | `true` when ready to go live |
   | `date` | ISO date (`2026-06-12`) |

4. **Write the body** using the template sections:
   - First paragraph = what this is + who it's for
   - `## The problem` / `## Steal this` / `## What to do next`

5. **Set `published: true`** and restart dev server if needed.

6. **ManyChat** — send people to:
   ```
   https://yoursite.com/guides/your-slug
   ```
   Set `NEXT_PUBLIC_SITE_URL` in `.env` to `https://bykyndall.com`.

## Homepage featured guides

Edit `featuredGuideSlugs` in `src/lib/site.ts` to control which cards show in "free things" and in what order.

## ManyChat flow

1. Reel goes live with cover line + CTA ("comment LEARN")
2. ManyChat watches for comment keyword
3. DM sends: `https://yoursite.com/guides/ai-learning-loop`
4. They land on the full guide page

**Rule:** one reel = one guide = one stable URL. Never change the slug after the reel is live.

## SEO (Google, Bing, etc.)

Built in automatically for each guide:

- **Title + meta description** from frontmatter
- **Canonical URL** (`/guides/your-slug`)
- **Open Graph** tags for social sharing
- **JSON-LD Article schema** (headline, author, date, keywords)
- **Breadcrumb schema** (Home → Guides → Guide)
- **`/sitemap.xml`** — all published guides
- **`/robots.txt`** — points crawlers to sitemap

**Tips for ranking:**
- `description` should answer "what will I learn?" in plain language
- First body paragraph should stand alone as a summary
- Use clear `##` headings (problem → solution → steal this)
- Descriptive slug (`ai-learning-loop` not `guide-1`)
- Set `NEXT_PUBLIC_SITE_URL` to your production domain before launch

## AI search (ChatGPT, Perplexity, etc.)

There's no separate "AI SEO" switch — these systems read the same signals:

- **Clear title + description** (they quote these directly)
- **Structured content** with headings and lists
- **Article schema** so machines know it's a guide by a person
- **Canonical URL** so the right page gets cited
- **First paragraph** written like an answer, not a teaser

Optional: add a `## FAQ` section with real questions people ask — AI tools love Q&A format.

## Dev

```bash
pnpm dev   # http://localhost:4000
```

Copy `.env.example` → `.env` and set your site URL.
