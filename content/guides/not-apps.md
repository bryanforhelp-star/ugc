---
title: "the three ai systems i actually use (none of them are apps)"
description: "Three workflows that replaced whole teams for me: digital product pages, brand deal outreach, and a content bank. Copy-paste prompts to build your own versions."
summary: "Build three small AI systems in Cursor or Claude: product pages, brand research and pitches, and a content bank. No coding required."
category: workflow
topics:
  - workflows
  - building
tools:
  - cursor
  - claude
cover: "most useful things I build with AI aren't even apps"
commentKeyword: APPS
pillars:
  - how-to
  - problem-solution
tags:
  - ai
  - workflows
  - cursor
  - claude
  - content
published: true
date: 2026-07-07
---

Everyone thinks building with AI means launching a startup, shipping a SaaS tool, becoming a tech founder.

It doesn't.

The most useful things I've built aren't apps at all. They're small systems that eat boring, repetitive work so I can move faster on the stuff that actually matters.

This guide breaks down the three I use every week:

1. **Digital product pages**: landing page, checkout, and delivery emails in one workflow
2. **Brand deal pipeline**: research before outreach, warm pitches instead of "hey collab?"
3. **Content bank**: saves, trends, and overperformers organized into ideas, patterns, and angles

You don't need to learn to code. I don't. I use **Cursor** for all three. If you prefer Claude, every workflow below has a Project version too.

## the reframe

An app is a product you ship to strangers.

A system is a workflow you build for yourself.

Apps need auth, onboarding, support, pricing pages, and a reason for strangers to care. Systems just need to work for you, today, on the problem you keep hitting.

Start with systems. Ship apps later if the demand shows up.

## pick your tool

I run all three workflows in **Cursor**. I am not a developer. I describe what I want, Cursor builds it.

| Tool | Best for |
|------|----------|
| **Cursor** (what I use) | Building systems by talking. Research, pages, emails, workflows. No coding required. |
| **Claude Project** | Same systems if you live in Claude. Projects, skills, web search. |

Same workflows either way. Pick the tool you already open every day.

## 1. digital product page workflow

**The problem:** spinning up a digital product used to mean a designer for the landing page, a developer for checkout, a copywriter for the emails, and a week of back-and-forth.

**What I built:** one workflow in **Cursor** that generates all three pieces for a new product in a couple of hours. I don't write code. I describe the system and Cursor builds it.

**The flow:**

```
product idea → landing page → checkout flow → delivery email sequence
```

Each piece follows the same structure every time. The first one took the longest. Now I can spin up a new page fast because the system exists.

### what each piece does

| Piece | Job |
|-------|-----|
| Landing page | sells the product, matches my site style, mobile-first |
| Checkout flow | payment + confirmation, minimal friction |
| Delivery emails | sends the product, sets expectations, one follow-up |

### build it in Cursor

Paste this into **Cursor** when you're starting a new product:

```
I'm building a digital product page system. Help me ship a new product end to end.

Product name: [NAME]
What it is: [ONE SENTENCE]
Price: [PRICE]
What they get after buying: [FILE / LINK / ACCESS]

Build three things:

1. Landing page
- Hero with the main promise
- 3 bullets on what they get
- One clear buy button
- Match a clean, minimal style (dark text, lots of white space, one accent color)

2. Checkout flow
- Simple payment step
- Order confirmation screen
- What happens next in plain language

3. Delivery email sequence
- Email 1 (immediate): here's your product + how to use it
- Email 2 (day 2): one tip they might miss
- Email 3 (day 5): ask for feedback or a reply

Start with the landing page copy. I'll review before you build the rest.
```

**Reuse for product #2:**

```
I already have a product page system that works. Here's the last one I shipped: [PASTE OR LINK].

Now build the same three pieces for a new product:
- Name: [NAME]
- Promise: [ONE SENTENCE]
- Price: [PRICE]
- Delivery: [WHAT THEY GET]

Keep the same structure and tone. Only change what's specific to this product.
```

### or build it in Claude

Set up a **Claude Project** called `product launcher`. Paste the project instructions below into **Project instructions**, then say `new product: [DETAILS]` each time.

**Project instructions:**

```
You are my product launch workflow. Every time I say "new product," run this system:

STEP 1: product page
- Title, short description, 3 bullets, who it's for
- Tone: plain, friendly, no corporate jargon

STEP 2: checkout copy
- Confirmation message, button text, order summary

STEP 3: delivery emails (3 emails)
- Immediate, day 2 tip, day 5 feedback ask

Do one step at a time. Wait for my OK before the next.
```

Turn it into a [Claude Skill](/guides/claude-build-or-buy-skill) if you want it outside projects.

### tools

- **Cursor** (what I use) or **Claude** (project or skill)
- **Stripe + your email tool** for checkout and delivery (whatever you already use)

You don't need a custom app. You need a repeatable system that generates the same three outputs every time.

## 2. brand deal pipeline

**The problem:** outreach is tedious. Generic "want to collab?" emails get ignored. Good pitches take 45 minutes of research per brand, and I kept skipping the research because it sucked.

**What I built:** a research step that runs before I write a single word. It pulls context on their ads, products, and creator partnerships, then drafts a warm pitch that proves I actually looked. I run the whole thing in **Cursor**. Same prompts work in a **Claude Project**.

**The flow:**

```
brand name → research → ads + products + creators → pitch angle → email draft
```

### what the research step checks

| Question | Why it matters |
|----------|----------------|
| What ads are they running? | shows you can speak to their creative direction |
| What products are they launching? | gives you a timely hook |
| Are they working with creators? | tells you if they already buy UGC and what style they like |

### build it in Cursor

Paste into **Cursor**:

```
Research [BRAND NAME] for a creator partnership pitch, then draft the email.

Research:
1. What ads they're currently running (check Meta Ad Library, TikTok, YouTube if relevant)
2. Recent product launches or announcements (last 90 days)
3. Creators or influencers they've worked with recently
4. Their target audience and positioning
5. One gap or opportunity I could offer as a creator

About me:
[PASTE YOUR BIO, PROOF POINTS, AND ANGLE]

Then write two pitch emails (direct + casual) that:
- Open with something specific from their ads or recent launch
- Offer one concrete content idea tied to what they're already doing
- Stay under 150 words
- Sound like a person, not a template
- End with a soft ask

Give me the research brief first. I'll say go before you draft.
```

### or build it in Claude

**Claude Project** called `brand pipeline`. Paste your bio into project instructions, then say `pitch [BRAND NAME]`.

```
You are my brand outreach pipeline. When I say "pitch [BRAND]":

RESEARCH (use web search):
1. What ads they're running
2. Recent product launches (last 90 days)
3. Creators they've worked with recently
4. Their positioning and audience
5. One gap I could offer as a creator

Then PITCH:
- Two emails (direct + casual), under 150 words
- Open with something specific to THEM
- One concrete content idea
- Soft ask at the end

About me:
[PASTE YOUR BIO, PROOF POINTS, AND ANGLE HERE]
```

### steal this: research only

```
Research [BRAND NAME] for a creator partnership pitch.

Find:
1. What ads they're currently running (Meta Ad Library, TikTok, YouTube if relevant)
2. Recent product launches or announcements (last 90 days)
3. Creators or influencers they've worked with recently
4. Their target audience and positioning
5. One gap or opportunity I could offer as a creator

Format as a brief I can scan in 2 minutes. Include links where possible.
```

Use this if you want to research a batch of brands first, then pitch later.

### steal this: pitch only (if you already researched)

```
Here's my research on [BRAND NAME]:
[PASTE RESEARCH BRIEF]

About me:
- [WHAT YOU CREATE, e.g. short-form UGC for apps and tech]
- [ONE PROOF POINT, e.g. worked with X, Y, Z brands]
- [YOUR ANGLE, e.g. I make AI workflows feel human, not robotic]

Write a partnership pitch email that:
- Opens with something specific from their ads or recent launch (not "I love your brand")
- Offers one concrete content idea tied to what they're already doing
- Is under 150 words
- Sounds like a person, not a template
- Ends with a soft ask (open to chatting, not "hire me now")

Give me two versions: one more direct, one more casual.
```

### steal this: track your pipeline

Keep a simple tracker. Notion, a spreadsheet, whatever you'll actually open:

| Brand | Research done | Pitch sent | Reply | Notes |
|-------|---------------|------------|-------|-------|
| | | | | |

The system isn't the tracker. The system is: **never pitch cold without research first.**

### why this beats generic outreach tools

Tools like Bento automate the sending, but the emails still come out generic. Reply rates die when the email could've gone to any brand.

Hyper-specific beats high-volume every time, especially when you don't have a huge audience yet. The research step is the whole game.

## 3. content bank

**The problem:** I had 200 saved reels and zero posts. Hooks I forgot. Screenshots going nowhere. Saves don't equal a system.

**What I built:** a content bank that pulls in relevant content, tracks what overperforms, brings in news and trends from my niche, and organizes everything into ideas, patterns, and angles. I run it in **Cursor**. Claude Project version below if you prefer.

**The flow:**

```
inputs (saves, trends, news, your own frictions) → tag + connect → ideas / patterns / angles → what to film next
```

### the three buckets

| Bucket | What goes in | What comes out |
|--------|--------------|----------------|
| **Ideas** | raw hooks, brain dumps, half-scripts, frictions you hit this week | filmable post concepts |
| **Patterns** | reels that overperformed (yours or others') | repeatable formats worth copying |
| **Angles** | news, launches, trends in your space | timely takes only you would post |

### build it in Cursor

Two commands I use in **Cursor**:

- `log this:` + a brain dump, friction, or save
- `weekly review` (every Sunday)

Paste this once to set up the system, then use those two commands going forward:

```
You are my content bank. Tag everything as: idea, pattern, or angle.

When I say "log this:" capture the friction, hook, format, and audience. Reply with the tagged entry only.

When I say "weekly review" organize everything I've logged this week into:
1. Ideas: 5 posts I could film (ranked by urgency)
2. Patterns: 2 formats working right now
3. Angles: 3 timely takes for my niche

For each idea: cover line, hook (first 3 seconds), why now.

My niche: [PASTE YOUR NICHE]
My content style: [PASTE 1-2 LINES]
```

### or build it in Claude

**Claude Project** called `content bank`. Two commands you'll use constantly:

- `log this:` + a brain dump, friction, or save
- `weekly review` (run every Sunday)

**Project instructions:**

```
You are my content bank. Tag everything as: idea, pattern, or angle.

When I say "log this:" capture the friction, hook, format, and audience. Reply with the tagged entry only.

When I say "weekly review" organize everything I've logged this week into:
1. Ideas: 5 posts I could film (ranked by urgency)
2. Patterns: 2 formats working right now
3. Angles: 3 timely takes for [MY NICHE: paste yours here]

For each idea give me: cover line, hook (first 3 seconds), why now.

My niche: [PASTE YOUR NICHE]
My content style: [PASTE 1-2 LINES ON HOW YOU TALK / WHAT YOU POST]
```

Keep a running doc in the project (or paste your week's logs before `weekly review`). Notion works too if you prefer a visual board.

### steal this: log a friction

When something annoying happens, capture it before you forget:

```
Log this as a content idea:

What happened: [THE FRICTION, e.g. spent 45 min on brand research before one email]
Why it annoyed me: [ONE LINE]
Who else has this problem: [YOUR AUDIENCE]
Possible hook: [HOW YOU'D OPEN A REEL ABOUT IT]
Format: [talking head / screen demo / list / story]

Tag it: idea
```

### steal this: weekly content bank review

Run this every Sunday (or whatever day you plan the week):

```
Here's my content bank from this week:
[PASTE IDEAS, SAVES, TRENDS, OR EXPORT FROM YOUR TRACKER]

Organize into:
1. Ideas: 5 posts I could film this week (ranked by urgency)
2. Patterns: 2 formats that are working right now (mine or references)
3. Angles: 3 timely takes tied to news or trends in [YOUR NICHE]

For each idea, give me:
- Cover line (lowercase, punchy)
- Hook (first 3 seconds)
- Why now

Flag anything that's losing relevance if I wait.
```

### steal this: pattern scan

When a reel pops off (yours or someone else's):

```
Analyze this overperforming content:
[PASTE LINK OR TRANSCRIPT]

Break down:
1. Hook structure (first 3 seconds)
2. Format (talking head, demo, list, story, etc.)
3. Payoff (what the viewer gets)
4. Why it worked (psychology, not vanity metrics)
5. How I could adapt this pattern for [MY NICHE] without copying

Tag as: pattern
```

### where to keep it

Start simple:

- **Notion database** with tags: idea, pattern, angle, filmed, posted
- **Obsidian** if you like local files and linking
- **A folder of markdown files** if you want zero setup

The tool matters less than the habit: **capture on the way in, review on the way out.**

## you don't need to code

I don't. I use Cursor anyway.

Cursor isn't a "developer tool" in the way people think. It's where I describe systems and let AI build them. Landing pages, research pipelines, content banks. I talk, it does the work.

If Claude is more your speed, every workflow above has a Project version. Same systems, different app.

I got really clear on what problems I was trying to solve in my own world:

- I keep launching digital products and the setup takes forever → product page workflow
- I hate outreach and my generic emails get ignored → brand deal pipeline
- I save everything and post nothing → content bank

Each one started as a prompt I ran manually. Then I ran it twice. Then I noticed the pattern and built the system around it.

That's the skill. Not coding. Not prompting. **Noticing what you do 40 times and asking if a small system can kill it.**

## what to do next

Pick the one that hurts most right now:

1. **Launching something?** Open Cursor (or Claude). Run the product page prompt on one idea this week.
2. **Pitching brands?** Run the brand pipeline prompt. Research first, always.
3. **Sitting on saves?** Set up the content bank. Log three frictions, then run `weekly review`.

Build one system. Use it twice. If the second time is faster than the first, you have something worth keeping.

None of these are apps. They're the reason I have time to build apps at all.
