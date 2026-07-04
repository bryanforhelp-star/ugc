---
title: "5 ai loops you can actually use"
description: "Five agentic loops for Claude: a goal, steps the agent runs, memory that updates each cycle, and a system that improves without you copy-pasting prompts."
summary: "An agentic loop saves state after each run so the next run behaves differently. Set one up in a Claude project, say run the loop, and let the agent handle the cycle."
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
updated: 2026-07-04
---

**prompt:** get an answer.

**workflow:** complete a task.

**loop:** build a system that improves.

a loop is not you going back and forth copy-pasting "here's what happened." that's still a prompt with extra steps.

an **agentic loop** is a system with a goal, steps the agent runs on its own, and **memory that updates after each cycle** so the next run behaves differently.

**prompt:** input → output → stop

**agentic loop:** input → action → evaluation → update memory → next action → repeat until goal achieved

**the key difference:** the output of one cycle is **saved**. the next cycle **reads it** and changes behavior. you don't hold the state. the loop does.

## copy-paste is not a loop

if you're pasting a setup prompt, then an evaluation prompt, then telling it what to fix... you're doing the agent's job. you're the memory. you're the scheduler.

that's fine for week one. it's not a loop.

a loop needs three things:

1. **a goal** (not a question)
2. **steps the agent runs** (you trigger it, it executes the cycle)
3. **a state file** the agent reads at the start and rewrites at the end

you say **"run the loop."** the agent does the rest. you only step in when it needs something it can't know (did someone reply? what did you pick?).

## set up any agentic loop (one time)

**you need:** [claude.ai](https://claude.ai) (pro or max helps for projects, but free works to start)

### step 1: create a project

claude → **projects** → **new project** → name it after your loop (e.g. `lead gen loop`).

### step 2: paste the loop engine into project instructions

this is the brain. it tells claude how to run any loop. copy the whole block in [the loop engine](#the-loop-engine) below. fill in the `[BRACKETS]` for whichever loop you're building.

### step 3: add a starter state file

create a file called `loop-state.md` and add it to **project knowledge** (upload or paste). use the starter from your loop section below.

### step 4: run it

open a chat inside the project. say:

> run the loop

claude reads `loop-state.md`, runs every step, asks you only what it can't know, then **rewrites `loop-state.md`** with what it learned.

save the updated file back to project knowledge (or let claude write it if you have file creation on).

### step 5: run it again

next time, same thing. say **"run the loop."** claude reads the **updated** state. behavior should be different. that's the loop.

---

## the loop engine

paste this into **project instructions**. customize the bracketed parts for your loop.

```
you are an agentic loop. not a chatbot. not a one-off prompt.

GOAL: [ONE SENTENCE — e.g. "higher reply rate on outreach over time"]

STEPS (run all of these every time i say "run the loop"):
1. read loop-state.md
2. [STEP 2 — e.g. "find 10 companies matching my criteria"]
3. [STEP 3 — e.g. "research each and draft outreach"]
4. [STEP 4 — e.g. "present the batch for me to send"]
5. evaluate this run against the goal
6. rewrite loop-state.md with: what worked, what didn't, rules for next run, run count + 1

RULES:
- run all steps in one cycle. don't stop halfway and wait for me to ask the next step.
- only ask me for inputs you cannot get yourself (outcomes, replies, decisions i made).
- at the end of every cycle, output the full updated loop-state.md so i can save it to project knowledge.
- each cycle must change something in loop-state.md. if nothing changed, the loop isn't working.

MY CONTEXT:
[paste anything the loop always needs — who i sell to, my voice, sources, priorities, etc.]
```

---

## 5 ai loops you can actually use

pick one. set it up once. then just say **"run the loop."**

---

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

**customize the loop engine:**

```
GOAL: higher reply rate on outreach to the right companies over time

STEPS:
1. read loop-state.md
2. find 10 companies matching my criteria and buying signals
3. research each (what they do, why they'd care, recent signal)
4. draft personalized outreach in my voice
5. present as a table: company, signal, draft message
6. ask if there are replies from the last batch (if any pending)
7. evaluate which angles are working
8. rewrite loop-state.md

MY CONTEXT:
i sell: [YOUR OFFER]
ideal customer: [WHO]
buying signals: [e.g. running ads, hiring, just launched]
my voice: [HOW YOU WRITE — or paste a real message]
```

**starter loop-state.md:**

```
# lead gen loop

run count: 0

## current strategy
first run. no data yet. test 2 to 3 angles.

## angles to test
- [angle 1]
- [angle 2]

## what works
(none yet)

## what doesn't
(none yet)

## pending outreach
(none yet)

## rules learned
(none yet)
```

**what you do each cycle:** say "run the loop." send the outreach it drafts. when it asks about replies, answer once. save the updated state file.

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

**customize the loop engine:**

```
GOAL: weekly brief with more signal and less noise each week

STEPS:
1. read loop-state.md
2. scan my sources for the last 7 days
3. cluster recurring themes
4. filter noise using my rules
5. output: 3 insights + 1 action for me + sources to deprioritize
6. ask what i actually used from last week's brief (if run count > 0)
7. rewrite loop-state.md with updated source weights and filter rules

MY CONTEXT:
topic: [WHAT YOU CARE ABOUT]
sources: [YOUR LIST]
always ignore: [HYPE, VAGUE TAKES, REHASHED NEWS]
```

**starter loop-state.md:**

```
# research loop

run count: 0

## source weights
(list sources — all start at medium priority)

## themes to watch
(none yet)

## noise patterns
- generic hype
- predictions with no evidence

## last brief
(none yet)

## what i actually used
(none yet)
```

**what you do each cycle:** say "run the loop." read the brief. when it asks what you used last time, answer in one sentence. save the updated state file.

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

deeper version with all phase prompts: [the ai learning loop guide](/guides/ai-learning-loop).

**customize the loop engine:**

```
GOAL: understand [TOPIC] well enough to make my own calls, not copy answers

STEPS:
1. read loop-state.md
2. brief me on what to focus on today based on my gaps
3. teach one concept
4. test my understanding (ask me, don't just explain)
5. if i'm wrong, re-explain and give a practice exercise
6. update loop-state.md with what i got, what i missed, what to focus on next

MY CONTEXT:
topic: [WHAT YOU'RE LEARNING]
my level: [BEGINNER / SOME EXPOSURE / ETC.]
```

**starter loop-state.md:**

```
# learning loop

run count: 0
topic: [TOPIC]

## solid
(none yet)

## gaps
(none yet)

## focus next session
start from the beginning

## exercises done
(none yet)
```

**what you do each cycle:** say "run the loop." answer its questions. don't ask for the answer. save the updated state file.

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

**customize the loop engine:**

```
GOAL: draft emails in my voice with fewer edits each week

STEPS:
1. read loop-state.md
2. ask me to paste today's emails (or i paste them upfront)
3. categorize each (urgent / reply today / fyi / no reply needed)
4. flag priority
5. draft replies using my voice rules from loop-state.md
6. after i confirm what i sent, compare drafts to my final versions
7. rewrite loop-state.md with new voice rules and phrases to avoid

MY CONTEXT:
my voice: [HOW YOU WRITE — or paste 2 real replies]
```

**starter loop-state.md:**

```
# email loop

run count: 0

## voice rules
- [how you write]

## never say
- hope this finds you well
- [add yours]

## edits i keep making
(none yet)

## what's working
(none yet)
```

**what you do each cycle:** paste emails (or say "run the loop" and paste when asked). send the drafts. tell it what you changed. save the updated state file.

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

**customize the loop engine:**

```
GOAL: faster, clearer decisions that match my actual priorities over time

STEPS:
1. read loop-state.md
2. ask what i'm deciding (if i haven't said)
3. research 3 to 5 options
4. score against my priorities from loop-state.md
5. lay out tradeoffs and recommend one
6. after i decide, ask what i picked and why
7. rewrite loop-state.md — update priority weights based on my choice

MY CONTEXT:
default priorities: [LIST WITH WEIGHTS — e.g. price 3, ease 5, support 4]
budget rules: [HARD LIMITS]
dealbreakers: [NON-NEGOTIABLES]
```

**starter loop-state.md:**

```
# decision loop

run count: 0

## priority weights
- price: 3
- ease of use: 5
- [add yours]

## dealbreakers
- [list]

## past decisions
(none yet)

## what i actually care about
(learned over time — none yet)
```

**what you do each cycle:** say "run the loop" + what you're deciding. pick one. tell it your choice and why. save the updated state file.

---

## turn it into a skill (optional)

want to trigger it from any chat without opening the project?

1. **settings → capabilities** → turn on **code execution and file creation**
2. **customize → skills → create skill → create with claude**
3. paste your loop engine and say **"make this my [name] loop skill. it should read and update loop-state.md each run."**
4. toggle it on

then hit `/` or say **"run my email loop."** same agentic behavior, portable across chats.

## what to do next

1. pick one loop above.
2. create a claude project.
3. paste the loop engine (customized) into project instructions.
4. add the starter `loop-state.md` to project knowledge.
5. say **"run the loop."**
6. save the updated state file after each run.

you trigger it. the agent runs the cycle. the state file is the memory. that's the loop.
