---
title: "5 ai loops you can actually use"
description: "Five loops that replace one-off prompts, with links to Claude Code, Hermes, and the people saying build loops now."
summary: "A loop runs, checks itself, remembers what happened, and improves the next run. Pick one of five examples, then follow the setup walkthrough."
category: guide
topics:
  - loops
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
published: true
date: 2026-07-04
updated: 2026-07-05
---

**sources:** [boris cherny on loops](https://www.youtube.com/watch?v=Sg7DdOfQCcY) · [addy osmani: loop engineering](https://addyosmani.com/blog/loop-engineering/) · [claude code /goal](https://code.claude.com/docs/en/goal) · [claude code /loop](https://code.claude.com/docs/en/commands) · [hermes agent](https://hermes-agent.nousresearch.com/docs/) · [my setup walkthrough](https://www.youtube.com/@withkyndall)

prompting was the skill. loops are the skill now.

**prompt:** get an answer.

**workflow:** complete a task.

**loop:** build a system that improves.

a prompt is: input → output → stop.

a loop is: input → action → evaluation → next action → repeat until the goal is closer.

**the key difference:** the output of one cycle changes how the next cycle runs. you're not asking the same question again. something remembers, checks, and adjusts.

## why this matters now

the agent tools got good enough that "ask once, get an answer" is the slow path. if the same work comes back every week (email, research, outreach, decisions), you want a system that runs the steps, checks the output, saves what it learned, and does it again without you re-explaining everything.

that's a loop. not a better prompt.

## who's saying "build loops, not prompts"

this isn't just a hot take. the people building the agents are saying the same thing:

**boris cherny** (head of claude code at anthropic): *"i don't prompt claude anymore. i have loops running that prompt claude and figuring out what to do. my job is to write loops."*

→ [watch the clip](https://www.youtube.com/watch?v=Sg7DdOfQCcY) · [his thread on /loop and /schedule in claude code](https://x.com/bcherny/status/2038454336355999749)

**peter steinberger** (openclaw): *"you shouldn't be prompting coding agents anymore. you should be designing loops that prompt your agents."*

→ [addy osmani's breakdown](https://addyosmani.com/blog/loop-engineering/) (quotes steinberger + cherny and maps the pieces)

**addy osmani** (chrome, ex-google): wrote the clearest explainer on loop engineering: same five pieces (automations, skills, goals, sub-agents, connectors) whether you're in claude code, codex, or hermes.

→ [loop engineering](https://addyosmani.com/blog/loop-engineering/)

## what a loop actually is

every loop, no matter the tool, is the same idea:

1. **find the work** — something triggers it (new emails, a weekly brief, leads to research)
2. **do it** — the agent runs the steps
3. **check it** — did the output actually meet the goal?
4. **remember** — save what happened so the next run doesn't start from zero
5. **go again** — repeat until the goal is closer

a prompt skips steps 3, 4, and 5. that's why it feels fast but never compounds.

## 5 ai loops you can actually use

pick one. don't build all five.

### 1. lead generation loop

instead of:

> find me leads.

build a loop that:

- finds companies that match your criteria
- researches their business
- generates personalized outreach
- tracks who responds
- learns which messages perform best
- improves future outreach

**goal:** better leads over time.

---

### 2. research loop

instead of:

> what's happening in ai?

build a loop that:

- pulls articles from multiple sources
- identifies recurring themes
- filters out noise
- summarizes key insights
- connects them to your interests
- refines what it looks for next

**goal:** better signal, less noise.

---

### 3. learning loop

instead of:

> teach me coding.

build a loop that:

- explains a concept
- tests your understanding
- identifies gaps
- re-explains difficult topics
- generates exercises
- adjusts based on what you struggle with

**goal:** learn faster.

deeper walkthrough: [the ai learning loop guide](/guides/ai-learning-loop).

---

### 4. email loop

instead of:

> help me answer this email.

build a loop that:

- categorizes incoming emails
- identifies priority items
- drafts responses in your voice
- learns from your edits
- improves future drafts

**goal:** spend less time in your inbox.

---

### 5. decision-making loop

instead of:

> should i buy this?

build a loop that:

- researches options
- compares reviews
- scores based on your priorities
- identifies tradeoffs
- makes a recommendation
- learns from your eventual decision

**goal:** make better decisions over time.

---

## how to actually build a loop

this page gives you the **what** (five examples above). here's the **how**, depending on what you're using:

### claude code (if you code or use the terminal)

anthropic built loops directly into claude code. two commands:

| command | what it does | docs |
|---------|--------------|------|
| **`/goal`** | keeps claude working until a condition you define is met. a separate model checks after each turn. | [claude code /goal docs](https://code.claude.com/docs/en/goal) |
| **`/loop`** | re-runs a prompt on a schedule (every 5m, every morning, etc.) while the session is open | [claude code commands](https://code.claude.com/docs/en/commands) |

boris cherny runs loops like `/loop 5m /babysit` to auto-address code review and shepherd PRs. [his full list →](https://x.com/bcherny/status/2038454336355999749)

also worth knowing: **`/schedule`** for routines that run on anthropic's cloud even when your laptop is closed. same commands page above.

### hermes agent (what i use)

[hermes agent](https://hermes-agent.nousresearch.com/docs/) is open source from nous research. built-in learning loop: memory across sessions, skills the agent creates and improves, scheduled runs, works from telegram/discord/cli.

this is my stack for the loops above. i recorded a walkthrough so you're not piecing it together from docs alone.

**watch:** [how to set up your first ai loop →](https://www.youtube.com/@withkyndall)

### not sure which tool?

read [addy osmani's loop engineering post](https://addyosmani.com/blog/loop-engineering/) first. the shape is the same everywhere. pick the tool you already have, build one loop, run it twice.

## when a prompt is enough

loops aren't free. they take setup, they run multiple steps, and they only pay off on work that repeats.

**use a prompt when:** one answer is all you need (write this email, summarize this doc, explain this concept once).

**use a loop when:** the same kind of work comes back every week and you want it to improve without you re-explaining yourself every time.

if you can't describe how the system should check its own work, it's not ready to be a loop yet. keep it as a prompt until you can.

## sources

**people saying build loops now**

- [boris cherny: "my job is to write loops"](https://www.youtube.com/watch?v=Sg7DdOfQCcY) (head of claude code)
- [boris cherny on /loop and /schedule](https://x.com/bcherny/status/2038454336355999749)
- [addy osmani: loop engineering](https://addyosmani.com/blog/loop-engineering/) (breakdown citing cherny + steinberger)

**how to build loops**

- [claude code /goal](https://code.claude.com/docs/en/goal) — work until a verifiable condition is met
- [claude code commands (/loop, /schedule)](https://code.claude.com/docs/en/commands) — repeat on a schedule
- [hermes agent docs](https://hermes-agent.nousresearch.com/docs/) — open source agent with a built-in learning loop
- [my setup walkthrough](https://www.youtube.com/@withkyndall) — zero to your first loop on video

**from this site**

- [the ai learning loop](/guides/ai-learning-loop) — full setup for loop #3 above

## what to do next

1. pick one loop from the list.
2. pick your tool (claude code, hermes, or watch my [walkthrough](https://www.youtube.com/@withkyndall)).
3. build it. run it twice.
4. if the second run is smarter than the first, you have a loop.

prompts stop. loops compound.
