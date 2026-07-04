---
title: "prompting is not the skill anymore. building loops is."
description: "A prompt gets you one answer. A loop gives AI a goal, runs the steps, learns from the results, and gets better every time. Five loops you can actually use."
summary: "Stop asking AI one question at a time. Build a loop with a clear goal, repeatable steps, feedback, and a way to improve on the next run."
category: workflow
topics:
  - workflows
  - agents
tools:
  - claude
cover: "prompting is not the skill anymore. building loops is."
commentKeyword: LOOP
pillars:
  - how-to
  - problem-solution
tags:
  - ai
  - loops
  - agents
  - workflows
published: true
date: 2026-07-04
---

A prompt is simple. You ask AI for something. It gives you an answer. Done.

A loop is different. A loop gives AI a **goal**, runs the same steps on repeat, tracks what happened, and updates the strategy before the next round. The point isn't one good email or one good summary. The point is a system that gets better every time it runs.

That's the shift happening with AI right now. Stop asking one question at a time. Give it a loop.

## prompt vs workflow vs loop

| | What it does | What you get |
|---|--------------|--------------|
| **Prompt** | One question, one answer | A single output |
| **Workflow** | Fixed steps that complete a task | The same result every time |
| **Loop** | Goal + steps + feedback + improvement | Better results over time |

Workflows are useful. Loops are what separate people who use AI from people who **build with** AI.

## the difference in practice

Instead of asking:

> "Find me companies to pitch."

Build a loop that:

- Finds companies running ads
- Writes a personalized pitch
- Tracks who replied
- Figures out which messages worked
- Updates the outreach strategy
- Does it again

One prompt finds companies once. The loop builds a pipeline that compounds.

## 1. lead generation loop

**Instead of:** "Find me leads."

**Build a loop that:**

- Finds companies that match your criteria
- Researches their business
- Generates personalized outreach
- Tracks who responds
- Learns which messages perform best
- Improves future outreach

**Goal:** Better leads over time.

### steal this: lead gen loop prompt

```
I want to build a lead generation loop, not a one-off search.

My offer: [WHAT YOU SELL]
Ideal customer: [WHO, INDUSTRY, SIZE, SIGNALS LIKE "RUNNING ADS" OR "HIRING FOR X"]
My voice: [HOW YOU WRITE: DIRECT, CASUAL, ETC.]

Design the loop:
1. How to find new leads each run (sources, filters, signals)
2. What to research before outreach
3. Outreach template with personalization slots
4. What to track when someone replies or ignores
5. How to score which messages worked
6. What to change on the next run

Start with a 5-company test batch. Show me the first run end to end.
```

## 2. research loop

**Instead of:** "What's happening in AI?"

**Build a loop that:**

- Pulls articles from multiple sources
- Identifies recurring themes
- Filters out noise
- Summarizes key insights
- Connects them to your interests
- Refines what it looks for next

**Goal:** Better signal, less noise.

### steal this: research loop prompt

```
I want a research loop on [TOPIC]. Not a one-time summary.

Sources to pull from: [NEWSLETTERS, RSS, X ACCOUNTS, SUBREDDITS, ETC.]
What I care about: [YOUR ANGLES: TOOLS, TACTICS, CASE STUDIES, ETC.]
What counts as noise: [HYPE, VAGUE TAKES, REHASHED NEWS, ETC.]

Design the loop:
1. What to scan each run
2. How to cluster recurring themes
3. How to filter noise
4. Output format: 3 insights + 1 "so what for me"
5. What to watch for differently next time

Run it once on the last 7 days. End with: "next run, look harder for ___."
```

## 3. learning loop

**Instead of:** "Teach me coding."

**Build a loop that:**

- Explains a concept
- Tests your understanding
- Identifies gaps
- Re-explains difficult topics
- Generates exercises
- Adjusts based on what you struggle with

**Goal:** Learn faster.

You already have a full walkthrough in [the AI learning loop guide](/guides/ai-learning-loop). Same idea: context before, connect during, review after. The loop is the teacher, not the single explanation.

### steal this: learning loop starter

```
I'm learning [TOPIC]. Build me a learning loop, not a lecture.

Each session:
1. Brief me on what matters today (landscape, terms, what to watch)
2. When I paste new material or a problem, help me evaluate it against that context
3. When I'm done, review what I got right, what I missed, one takeaway for next time

Start with today's briefing. Keep it short. Teach me to think, not just to copy answers.
```

## 4. email loop

**Instead of:** "Help me answer this email."

**Build a loop that:**

- Categorizes incoming emails
- Identifies priority items
- Drafts responses in your voice
- Learns from your edits
- Improves future drafts

**Goal:** Spend less time in your inbox.

### steal this: email loop prompt

```
I want an email loop in my voice.

Categories I use: [URGENT, DELEGATE, REPLY TODAY, FYI, ARCHIVE]
How I write: [TONE, LENGTH, SIGN-OFF, PHRASES YOU ACTUALLY USE]
Never do: [OVERLY FORMAL, EMOJIS, ETC.]

For each email I paste:
1. Category + why
2. Draft reply (or "no reply needed" + why)
3. If I edit your draft, note what changed so future drafts match me better

Here's the first email: [PASTE]
```

## 5. decision-making loop

**Instead of:** "Should I buy this?"

**Build a loop that:**

- Researches options
- Compares reviews
- Scores based on your priorities
- Identifies tradeoffs
- Makes a recommendation
- Learns from your eventual decision

**Goal:** Make better decisions over time.

### steal this: decision loop prompt

```
I'm deciding on [THING: TOOL, PURCHASE, HIRE, MOVE, ETC.].

My priorities (weighted): [LIST WHAT MATTERS MOST]
Budget / constraints: [HARD LIMITS]
Dealbreakers: [NON-NEGOTIABLES]

Run the loop:
1. Shortlist 3–5 options with sources
2. Score each on my priorities
3. Tradeoffs in plain language
4. Your recommendation + what would change your mind
5. After I decide, I'll tell you what I picked. Update the scoring weights for next time.

Start with research. Don't recommend until step 4.
```

## how to build any loop

Every loop has the same skeleton:

1. **Goal** — one sentence. What "better" looks like over time.
2. **Steps** — what happens each run (find, draft, send, track, etc.).
3. **Feedback** — what you log (replies, edits, outcomes, scores).
4. **Update rule** — what changes before the next run (templates, filters, weights).
5. **Repeat** — same loop, smarter each time.

You don't need code on day one. Run it manually in a saved chat until the pattern is obvious. Then automate the boring parts: scheduled pulls, a spreadsheet, a Zap, a small script, or an agent with tools.

For a deeper framework on agents and loops, Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) guide is worth reading once you've run one loop by hand.

## what to do next

Pick **one** loop from the list above. Not all five.

Write the goal in one sentence. Run the steal-this prompt for that loop today. Log one outcome (a reply, an edit, a score, a decision). Run it again tomorrow with that feedback baked in.

That's the skill now. Not prompting. Building loops.
