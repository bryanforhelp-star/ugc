---
title: "5 ai loops you can actually use"
description: "Five loops that replace one-off prompts, with sources from Anthropic and a walkthrough for building your first one."
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

**sources:** [anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents) · [hermes agent docs](https://hermes-agent.nousresearch.com/docs/) · [setup walkthrough on youtube](https://www.youtube.com/@withkyndall)

prompting was the skill. loops are the skill now.

**prompt:** get an answer.

**workflow:** complete a task.

**loop:** build a system that improves.

a prompt is: input → output → stop.

a loop is: input → action → evaluation → next action → repeat until the goal is closer.

**the key difference:** the output of one cycle changes how the next cycle runs. you're not asking the same question again. something remembers, checks, and adjusts.

## why this matters now

anthropic's [building effective agents](https://www.anthropic.com/engineering/building-effective-agents) guide puts it plainly: start with the simplest thing that works, and only add complexity when it actually improves outcomes. most people are still stuck at step one (one prompt, one answer). loops are what you build when the same work keeps coming back and you want it to get better without you babysitting every step.

that's the shift. you're not writing better prompts. you're designing a system that prompts, acts, checks, and remembers for you.

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

## go from zero to a working loop

this page is the **what**. the five examples. the goals. the difference between a prompt and a loop.

to actually build one, you need the **how**.

i build my loops in [hermes agent](https://hermes-agent.nousresearch.com/docs/) (open source, built by nous research). it has a built-in learning loop: skills, memory across sessions, scheduled runs. that's my stack. i recorded a walkthrough so you don't have to figure it out from docs alone.

**watch:** [how to set up your first ai loop →](https://www.youtube.com/@withkyndall)

the video covers:

1. pick one loop from the list above
2. write the goal in one sentence (what "done" or "better" looks like)
3. set up the steps, memory, and check
4. run it once, see what changed, run it again

if the second run is smarter than the first, you have a loop.

## when a prompt is enough

loops aren't free. they take setup, they run multiple steps, and they only pay off on work that repeats.

**use a prompt when:** one answer is all you need (write this email, summarize this doc, explain this concept once).

**use a loop when:** the same kind of work comes back every week and you want it to improve without you re-explaining yourself every time.

if you can't describe how the system should check its own work, it's not ready to be a loop yet. keep it as a prompt until you can.

## sources and further reading

- **[building effective agents](https://www.anthropic.com/engineering/building-effective-agents)** — anthropic's guide on workflows, agents, and when to add complexity. the framework behind the "loops not prompts" shift.
- **[hermes agent documentation](https://hermes-agent.nousresearch.com/docs/)** — how i build and run loops (memory, skills, scheduling, messaging). open source.
- **[the ai learning loop](/guides/ai-learning-loop)** — full setup for loop #3 above (brief → connect → review).
- **[setup walkthrough](https://www.youtube.com/@withkyndall)** — zero to your first working loop on video.

## what to do next

1. pick one loop from the list.
2. read the [anthropic guide](https://www.anthropic.com/engineering/building-effective-agents) if you want the theory in one sitting.
3. watch the [setup walkthrough](https://www.youtube.com/@withkyndall).
4. build it. run it twice.

prompts stop. loops compound.
