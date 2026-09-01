# Guide page standard

Every guide at `bykyndall.com/guides/[slug]` uses the same layout and typography. The site handles rendering. Follow this when writing or editing `content/guides/*.md`.

## Frontmatter (required)

```yaml
title: "lowercase guide title"
description: "One sentence for previews, SEO, and the lead paragraph under the title."
summary: "One direct-answer sentence for AEO / schema (what someone gets if they only read one line)."
category: guide          # guide | workflow | claude skills
topics: []
tools: []                # e.g. claude
cover: "reel cover line. must match instagram"
commentKeyword: KEYWORD  # ManyChat DM keyword, or null
affiliate: arcads        # optional. name from getAffiliates() in src/lib/store.ts
pillars:
  - how-to
tags: []
published: true
date: 2026-06-12
updated: 2026-06-12      # optional — last meaningful edit
```

## On-page typography (automatic)

| Element | Style |
|---------|--------|
| Cover line (`cover`) | Small uppercase blue label above title |
| Title (`title`) | Bootzy, large, black |
| Lead (`description`) | NewPixel, black |
| Body | Helvetica Neue, condensed, black |
| Tables (`\| col \| col \|`) | Helvetica Neue, same readable size as body |
| Section subheaders (`##`) | Bootzy, white on tight royal blue block |
| Prompts | Mono “code block” look, click to copy |

Do not try to style these in markdown. Use structure only.

## Section headings

- Use `## lowercase section name` for every major section.
- Title Case in source is fine (CSS lowercases), but prefer lowercase in markdown for consistency.
- Examples: `## the prompt`, `## steal this`, `## what to do next`

**Tables:** pipe tables render correctly on the site (`| col | col |` with a `|---|---|` separator row). Use them for comparisons and checklists. Table text renders in **Helvetica Neue** (readable sans), not pixel fonts. Do not use tables inside prompt blocks.

## Copy-paste prompts

Use **either** blockquotes or fenced code blocks. Both render as click-to-copy prompt areas.

**Blockquote (multi-line):**

```markdown
> paste this into claude.
>
> second paragraph of the prompt.
```

**Code fence (long prompts / skills):**

````markdown
```
your full prompt or SKILL.md content here
```
````

Do not use plain indented text for prompts.

## Content shape

1. `description` is the intro. Do not write a second intro in the body.
2. Body starts with useful `##` sections: steps, prompts, setup. Skip restating the lead.
3. End with a concrete next action only if it adds something new. Not required.

Someone should finish the page knowing how to do the thing.

## Checklist before publishing

- [ ] `summary` is a direct answer, not a repeat of `description`
- [ ] `cover` matches the reel
- [ ] Every copy-paste prompt is in `>` or ` ``` ` form
- [ ] Major sections use `##` headings
- [ ] `published: true` only when ready for the site
