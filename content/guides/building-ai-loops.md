---
title: "the ai loops kit"
description: "Specs, copy-paste prompts, and a loop log for all five loops from the reel. Plus Anthropic's agent framework distilled into something you can actually use."
summary: "Fill out a loop spec, paste the starter prompt for your use case, log each run, and improve the system every time instead of asking AI the same question again."
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
updated: 2026-07-04
---

you watched the reel. this is the resource.

not a recap. a kit: a spec sheet to fill out, copy-paste prompts for each loop, a log template so runs actually compound, and anthropic's agent framework boiled down to one page.

pick **one** loop below. don't try to build all five.

## how to use this kit

1. Copy the **loop spec** and fill in the blanks for your use case (or use a starter below).
2. Paste the **run prompt** for that loop into claude. run iteration 1.
3. Log the outcome in the **loop log**.
4. Before the next run, update one thing: template, filter, weight, or rule.
5. repeat.

manual is fine for week one. automate after the pattern is obvious.

## the loop spec

copy this into a note, notion page, or claude project. fill it in once per loop.

```
LOOP NAME:
GOAL (one sentence — what "better" looks like over time):

TRIGGER (what starts each run — schedule, new email, monday morning, etc.):

STEPS (in order):
1.
2.
3.
4.
5.

WHAT TO LOG EACH RUN:
-
-
-

SUCCESS SIGNAL (how you know this run worked):
-

UPDATE RULE (what changes before the next run):
-

AUTOMATION LEVEL (circle one):
manual chat → saved project → spreadsheet → zap/script → agent with tools
```

## turn any task into a loop

don't know where to start? paste this into claude. it interviews you and outputs a filled spec plus your first run.

```
i want to turn a one-off ai task into a loop that gets better every time it runs.

interview me. ask one question at a time. keep it short.

when you have enough:
1. give me a completed loop spec (name, goal, trigger, steps, what to log, success signal, update rule, automation level)
2. tell me which of these five starters it's closest to: lead gen, research, learning, email, or decision
3. write the run prompt for iteration 1
4. tell me exactly what to log after this run

start with: what's the task you keep asking ai to do over and over?
```

## starter 1: lead generation loop

**use when:** you do outbound and want better leads and messages over time, not one batch of names.

**pre-filled spec:**

```
LOOP NAME: lead gen
GOAL: higher reply rate on outreach to companies that actually fit my offer
TRIGGER: every tuesday morning
STEPS:
1. find 10 companies matching my icp + buying signals
2. research each (what they sell, recent news, why they'd care)
3. draft personalized outreach in my voice
4. i send; log reply / no reply / bounce
5. score which angles worked; update template before next run
WHAT TO LOG: company, signal found, angle used, sent date, outcome, notes
SUCCESS SIGNAL: at least 1 reply per 20 sends, improving over 4 weeks
UPDATE RULE: drop angles with 0 replies after 20 sends; double down on top performer
AUTOMATION LEVEL: manual chat → spreadsheet for logging
```

**run prompt (iteration 1):**

```
run my lead gen loop — iteration 1.

my offer: [WHAT YOU SELL]
ideal customer: [INDUSTRY, SIZE, GEO]
buying signals: [e.g. running meta ads, hiring for X, just raised, new product launch]
my voice: [2-3 sentences of how you write — or paste a real email you sent]

find 10 companies. for each:
- why they match
- the signal you found
- a 3-sentence outreach draft

end with a table i can paste into my loop log.
```

## starter 2: research loop

**use when:** you drown in newsletters and tweets and want signal, not another "what's new in ai" summary.

**pre-filled spec:**

```
LOOP NAME: research
GOAL: weekly brief of what actually matters for my work, with less noise each week
TRIGGER: every sunday night
STEPS:
1. pull from my source list (last 7 days)
2. cluster recurring themes
3. kill hype and duplicate takes
4. output: 3 insights + 1 "so what for me"
5. note what to weight higher or ignore next run
WHAT TO LOG: date, sources scanned, themes found, insights kept, noise patterns spotted
SUCCESS SIGNAL: i act on at least 1 insight per week
UPDATE RULE: add sources that surfaced gold; mute sources that wasted 2 runs
AUTOMATION LEVEL: manual chat → rss + saved project
```

**run prompt (iteration 1):**

```
run my research loop — iteration 1.

topic: [YOUR NICHE — e.g. ai tools for creators, b2b saas gtm]
sources: [PASTE URLS, NEWSLETTERS, ACCOUNTS]
i care about: [WHAT'S ACTIONABLE FOR YOU]
noise to filter: [HYPE, VAGUE PREDICTIONS, REHASHED NEWS, ETC.]

scan the last 7 days. give me:
1. 3 insights worth knowing (with source)
2. 1 "so what for me" — concrete action or watch item
3. themes to track next week
4. sources to deprioritize and why

keep it under 400 words.
```

## starter 3: learning loop

**use when:** you consume info but don't retain it. you want to build judgment, not copy answers.

full walkthrough with all three phase prompts: [the ai learning loop guide](/guides/ai-learning-loop).

**quick spec:**

```
LOOP NAME: learning
GOAL: understand [TOPIC] well enough to make my own calls
TRIGGER: start of each study session
STEPS: brief → connect new info → review when done
WHAT TO LOG: session date, topic, what clicked, what i got wrong, one takeaway
UPDATE RULE: re-brief on weak areas; skip what's solid
```

**run prompt (session start):**

```
i'm learning [TOPIC]. run the learning loop — briefing phase.

brief me before i consume anything new today:
- landscape and key terms
- current "bias" or direction in this field
- what to pay attention to today
- what would change my read

concise. teach me to see the board, not what to buy.
```

## starter 4: email loop

**use when:** inbox eats your day and you want drafts in your voice that get closer each week.

**pre-filled spec:**

```
LOOP NAME: email
GOAL: spend less time in inbox with drafts i barely edit
TRIGGER: twice daily (morning + afternoon)
STEPS:
1. i paste batch of emails (or one at a time)
2. categorize + flag priority
3. draft replies in my voice
4. i edit and send
5. log what i changed so next drafts improve
WHAT TO LOG: sender, category, draft vs final diff, time saved estimate
SUCCESS SIGNAL: i edit less than 20% of each draft by week 3
UPDATE RULE: add phrases i actually use; add to "never say" list when i fix the same mistake twice
AUTOMATION LEVEL: manual chat → claude project with voice files
```

**run prompt:**

```
run my email loop.

my categories: [URGENT / DELEGATE / REPLY TODAY / FYI / ARCHIVE]
how i write: [TONE, LENGTH, SIGN-OFF — or paste 2 real replies]
never: [OVERLY FORMAL, EMOJIS, CORPORATE PHRASES, ETC.]

for each email below:
1. category + one-line why
2. draft reply (or "no reply" + why)
3. if i edit your draft afterward, i'll paste my version — note what changed for next time

emails:
[PASTE]
```

## starter 5: decision loop

**use when:** you're about to buy, hire, or commit and want a process that learns your taste.

**pre-filled spec:**

```
LOOP NAME: decisions
GOAL: faster, clearer decisions i don't second-guess
TRIGGER: any purchase/hire/commitment over $[THRESHOLD]
STEPS:
1. define criteria + weights
2. research 3-5 options
3. score against criteria
4. tradeoffs + recommendation
5. after i decide, log outcome and retune weights
WHAT TO LOG: decision, options considered, scores, what i picked, 30-day satisfaction
SUCCESS SIGNAL: fewer reversals; faster time to decision
UPDATE RULE: bump weight on criteria that predicted satisfaction; drop criteria that didn't matter
AUTOMATION LEVEL: manual chat
```

**run prompt:**

```
run my decision loop.

deciding on: [TOOL / HIRE / VENDOR / ETC.]
priorities (weight 1-5): [LIST — e.g. price, ease, integrations, support]
budget: [HARD LIMIT]
dealbreakers: [NON-NEGOTIABLES]

don't recommend yet. first:
1. shortlist 3-5 options with sources
2. score each on my priorities
3. tradeoffs in plain language
4. your recommendation + what would change your mind

i'll tell you what i pick. then update my weights for next time.
```

## loop log

copy into notion, google sheets, or a markdown file. one row per run.

| run # | date | loop | input summary | output summary | outcome | what to change next run |
|-------|------|------|---------------|----------------|---------|-------------------------|
| 1 | | | | | | |
| 2 | | | | | | |

**rules:**
- log within 10 minutes of finishing a run
- change **one** thing between runs (not five)
- if 3 runs in a row show no improvement, simplify the loop before adding complexity

## anthropic's framework (the short version)

this is the distilled version of [anthropic's building effective agents guide](https://www.anthropic.com/engineering/building-effective-agents). read the full post when you automate. this is enough to design loop #1.

### workflows vs agents

| | you control | ai controls | best for |
|---|-------------|-------------|----------|
| **prompt** | the question | the answer | one-offs |
| **workflow** | every step | each step's output | repeatable tasks |
| **agent** | the goal + guardrails | which tool to call next | messy paths you can't hardcode |

most people jump to "agent" too early. start as a workflow loop (fixed steps + a log). add agency only when the path keeps changing and you can still verify each step.

### five patterns (pick what fits)

| pattern | what it does | use when |
|---------|--------------|----------|
| **prompt chaining** | step 1 output → step 2 input | clear sequence, each step builds on the last |
| **routing** | sort input → send to the right sub-prompt | different email types, ticket types, lead types |
| **parallelization** | run independent subtasks at once | researching 5 companies simultaneously |
| **orchestrator-workers** | one planner delegates to specialists | big research pulls with sub-topics |
| **evaluator-optimizer** | generate → critique → revise until good enough | drafts that need quality bar (email, copy, code) |

your five starters map roughly like this: lead gen = chaining + parallelization. email = routing + evaluator. research = orchestrator. learning = chaining. decisions = evaluator.

### three rules from anthropic

1. **start simple.** one prompt until it breaks. then add steps. then add tools. then consider an agent.
2. **show your work.** each step's output should be visible so you can catch drift early.
3. **measure and iterate.** a loop without a log is just a workflow. the log is what makes it compound.

## when to level up

| stage | what it looks like | move up when |
|-------|-------------------|--------------|
| **manual chat** | paste run prompt each time | you've run 5+ times and steps don't change |
| **saved project** | loop spec + voice in project instructions | you're tired of re-pasting context |
| **spreadsheet log** | structured outcomes you can sort/filter | you want to spot patterns across runs |
| **automation** | zap, script, or scheduled pull | one step is pure busywork (same pull every monday) |
| **agent with tools** | ai picks tools within guardrails | path varies a lot but goal stays fixed |

if you're not there yet, don't build an agent. run the loop by hand until boring parts scream for automation.

## what to do next

1. pick **one** starter (lead gen, research, learning, email, or decisions).
2. copy the spec. change anything in brackets to match your real situation.
3. paste the run prompt into claude. do iteration 1 today.
4. log one row in the loop log.
5. tomorrow: change one thing, run again.

that's the whole skill. the video explains why. this page gives you the files.
