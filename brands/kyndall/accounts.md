# Accounts, Platforms, and Keyword CTAs

Where her content actually goes, and what each comment keyword unlocks. This is the file to
check before writing a CTA into a script.

_Last updated: Sep 1, 2026._

---

## Handles

| Platform | Handle | URL |
|----------|--------|-----|
| Instagram | `@withkyndall` | https://instagram.com/withkyndall |
| TikTok | `@withkyndall` | https://tiktok.com/@withkyndall |
| YouTube | `@withkyndall` | https://youtube.com/@withkyndall |
| Site | bykyndall.com | https://bykyndall.com |
| Email | kyn@bykyndall.com | |
| Newsletter | Substack | see `SITE.newsletter` in `src/lib/site.ts` |

Handles are also configured in `src/lib/site.ts`. If one changes, update both.

## Which platform is primary

**Instagram is the account of record.** Strategy, lanes, cadence, and the keyword funnel are
all built for Instagram Reels. Covers are designed for the IG grid.

TikTok and YouTube are cross-posts of the same vertical cut. `TODO: confirm she is actually
cross-posting right now, and whether covers get remade per platform.`

| Platform | Adaptation |
|----------|-----------|
| Instagram | Native. Cover matters, must work on mute. Keyword CTA in the spoken line and caption. |
| TikTok | Same cut. No ManyChat, so keyword CTAs do not work. Swap to a spoken "link in bio" or no CTA. |
| YouTube Shorts | Same cut. Description can hold the real guide link. |

**Rule:** a keyword CTA is Instagram-only, because ManyChat only watches IG comments. Never
carry a keyword CTA to TikTok unedited.

## Bio and links

**Bio link:** point Instagram / TikTok link-in-bio at `https://bykyndall.com/links`. Page copy and destinations live in `src/lib/links.ts`.

## Caption and cover conventions

Detail on typography and covers: `visual-brand.md`. Voice: `voice-guide.md`.

- Overlay and cover text is **lowercase**, always. No title case, no all caps.
- Keyword CTAs in the spoken line and the caption may be uppercase (`comment APPS`). The
  lowercase rule is for on-screen type.
- No em or en dashes anywhere a viewer reads. See `.cursor/rules/no-dashes.mdc`.
- Cover line must match the guide's `cover` frontmatter field so the reel and the landing page
  read as one thing.

---

## Keyword CTA registry

One reel, one guide, one stable URL. **Never change a slug after the reel is live.**
Guides live at `bykyndall.com/guides/<slug>` where slug is the filename in `content/guides/`.

### Live keywords

All published. Frontmatter `commentKeyword` is the source of truth.

| Keyword | Guide | Slug | Published |
|---------|-------|------|-----------|
| `ADS` | how i made realistic ugc ads in arcads | `arcads` | Sep 1, 2026 |
| `STAN` | how to build your own stan store | `stan-store` | Aug 18, 2026 |
| `APPS` | the three ai systems i actually use (none of them are apps) | `not-apps` | Jul 7, 2026 |
| `ANIMATE` | use ai to make animations for your videos | `cursor-animations` | Jul 18, 2026 |
| `LOOP` | 5 ai loops you can actually use | `building-ai-loops` | Jul 4, 2026 |
| `VOICE` | build your voice files (the simple way) | `claude-voice-setup-skill` | Jun 12, 2026 |
| `AUDIT` | build or buy: the thing i run before i pay for anything | `claude-build-or-buy-skill` | Jun 12, 2026 |
| `LEARN` | the ai learning loop: how to get ai to teach you anything | `ai-learning-loop` | Jun 12, 2026 |
| `STACK` | the one-person stack: every ai tool i actually pay for | `one-person-stack` | Jun 12, 2026 |

`TODO: confirm which of these are actually wired up as ManyChat triggers.` A guide being
published is not the same as the automation being live, and the rule is that the guide must
exist **and** the trigger must fire before the reel posts.

### Orphan keywords, do not use

These appear in scripts but have **no guide behind them.** They are all from the superseded
Phase-2 launch batches in `scripts/2026-06/`, which are archive. Using one sends people to a
dead end.

| Keyword | Appears in | Status |
|---------|-----------|--------|
| `PIPELINE` | `scripts/2026-06/launch-14-scripts.md`, `scripts/2026-06/launch-7-scripts-v2.md` | No guide. Retired UGC-outreach era. |
| `ILLEGAL` | `scripts/2026-06/launch-14-scripts-v3.md` | No guide. Superseded batch. |
| `SETUP` | `scripts/2026-06/launch-14-story-engine.md` | No guide. Superseded batch. |

### Adding a keyword

1. Write the guide first. `content/guides/<slug>.md`, following `content/guides/GUIDE-STANDARD.md`.
2. Set `commentKeyword` in frontmatter and `published: true`.
3. Wire the ManyChat trigger to `https://bykyndall.com/guides/<slug>`.
4. Add the row to the live table above.
5. Only then write the CTA into the script.

Cadence: 1 to 3 keyword posts a week. There is no adjacency rule, they can run back to back.
Lane 1 and lane 3 posts usually earn the follow without a keyword.
