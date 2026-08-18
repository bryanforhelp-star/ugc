# brands/

One folder per brand. Two kinds live here and they work differently, so check which you are
in before you write anything. Full map: `SOCIAL.md` at the repo root.

| Folder | Kind | Voice to use |
|--------|------|--------------|
| `kyndall/` | **Her own brand.** Organic content, the audition. | Hers. `kyndall/voice-guide.md` |
| everything else | **Client deal.** Paid deliverables. | The client's, from their `brief.md` |

Her lane rules, kill rules, and cadence in `kyndall/strategy/content-lanes.md` apply **only**
to `kyndall/`. Never apply them to client work.

---

## Required file set

Every brand folder has a `brief.md`. That is the file every agent and every skill reads
first, and it is the only one that is mandatory.

```
brands/<name>/
  brief.md        required. who they are, what they sell, their voice, the audience, the CTA
  research/       their site, their competitors, meeting notes, reference content
  scripts/        shot cards and deliverable scripts
  assets/         overlays, mockups, reference stills
  proposal.md     only if pitching. see brands/deals.md for terms
```

### Starting a new deal

Create the folder and fill this skeleton. Do not copy `kyndall/`, it carries personal-brand
strategy that does not apply to clients.

```markdown
# <Brand> — Brand Brief

> Status: <exploring | pitched | signed | active | wrapped> (<month year>)
> Site: <url> · Contact: <name, handle>

## Product (one line)
## What it actually does
## Positioning vs alternatives
## Audience (who the content targets)
## Brand voice
## Visual and content direction
## Deliverables and terms
See `brands/deals.md` for defaults. Note anything deal-specific here.

## Conversion notes
What the CTA is, and what success means for this engagement.
```

---

## Roster

### Active

| Brand | Status | Folder |
|-------|--------|--------|
| **Twisty** | Pitched Aug 2026. Canvas creator program retainer. Unsigned. Live proposal at `/p/twisty`. | `twisty/` |
| **Orchid** | Collab exploration. Unsigned as of Jul 2026. `TODO: confirm current status.` | `orchid/` |

### Past paid UGC work

No folders exist for these, they predate this structure. Assets are in
`public/ugc/assets/`, portfolio config in `src/lib/ugc.ts`. Listed here so the history is
readable without reverse-engineering filenames.

| Brand | Work | On the live `/ugc` grid |
|-------|------|------------------------|
| **Doola** | 2 hook variants (`doola-h1`, `doola-h2`) | Yes |
| **Opal** | Problem/solution | Yes |
| **Preply** | Testimonial, plus an unused demo cut | Testimonial only |
| **Replit** | Product demo | Yes |
| **Prism AI** | 3 versions (`prism-v1/v2/v3`) | v1 only |
| **Honeydew** | 4 variants (`honeydew-a1/a2/b1/b2`) | No. Logo is in the marquee, videos are not on the grid. |
| **Cantina** | Logo in trust marquee | Logo only |
| **Solvely.ai** | Logo in trust marquee | Logo only |
| **Triips** | Logo asset only | No |

`TODO: confirm whether Honeydew, Cantina, Solvely, and Triips are cleared for portfolio use.`
Usage rights default to 90 days on paid placement unless the deal says otherwise, see
`brands/deals.md`.

---

## Where the pipeline lives

Deal tracking is **not in this repo.** It is a Notion Deals database (Brand, Status, Value,
Contact, Deliverables, Due, Source, Notes), set up by
`scripts/setup-kyndall-os-projects.py`. Outreach research runs through Stardust
(`https://stardust-woad.vercel.app`).

This repo holds the creative work and the written terms. Notion holds the status.
