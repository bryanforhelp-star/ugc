---
title: "the ai loops kit"
description: "A prompt gets one answer and stops. A loop runs, evaluates, adjusts, and repeats until the goal is closer. Build your first one in Claude in 15 minutes."
summary: "A loop is input, action, evaluation, next action, repeat. The output of each cycle changes how the next cycle runs. This page shows you how to set one up."
category: guide
topics:
  - loops
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
published: true
date: 2026-07-04
updated: 2026-07-04
---

## prompt vs loop

**A prompt is:**

input → output → stop

**A loop is:**

input → action → evaluation → next action → repeat until goal achieved

**The key difference:**

the output of one cycle changes the behavior of the next cycle.

That's it. Not workflows. Not agents. Loops.

## how to build any loop

every loop follows the same four steps.

**step 1: set a goal**

not a question. a goal.

- bad: "help me with this email"
- good: "spend less time on email and need fewer edits each week"

**step 2: run the action**

open claude. paste a setup prompt once. then paste your input (emails, a decision, a topic, whatever).

**step 3: evaluate**

after the action, tell claude what actually happened. what you sent. what you changed. what worked. what didn't.

**step 4: repeat**

open the same chat. run again. claude should behave differently because you evaluated the last cycle.

do this until the goal is closer.

## build your first loop (email)

**you need:** [claude.ai](https://claude.ai) + 2 real emails + apple notes (or any blank doc)

### step 1: set the goal

"draft my emails faster, in my voice, with fewer edits each week."

### step 2: run the action

open claude → new chat → paste this:

```
you're my email loop.

goal: draft my emails in my voice with fewer edits over time.

every cycle:
1. i paste emails
2. you sort them and draft replies
3. i tell you what i actually sent
4. you adjust for next time

my voice: [HOW YOU WRITE — or paste 2 real replies]
never say: [PHRASES YOU HATE — e.g. "hope this finds you well"]

ask me to paste emails.
```

fill in the brackets. paste 2 real emails when claude asks.

### step 3: evaluate

send the drafts (or edit them first). then paste:

```
evaluation — cycle 1:

email 1: [SENT YOUR DRAFT / EDITED TO: ___ / DIDN'T REPLY BECAUSE ___]
email 2: [SAME]

what should you do differently in cycle 2?
```

### step 4: repeat

tomorrow, open the **same chat**. paste new emails. no setup needed.

after 3 to 5 cycles, you should be editing less. the output of cycle 1 changed how cycle 2 runs. that's the loop.

---

**want one full cycle in a single sitting?** use the [decision loop](#5-decision-loop) instead.

## save your loop

so you don't start over every time.

**easy way:** keep using the same chat.

**better way (5 min):** claude → projects → new project → name it `email loop` → paste your setup prompt into project instructions → always start chats inside that project.

## 5 loops you can use

each one follows: input → action → evaluation → next action → repeat.

pick one. don't build all five.

### 1. email loop

**goal:** less time in inbox, fewer edits over time

| cycle | what happens |
|-------|--------------|
| input | emails in your inbox |
| action | sort + draft replies |
| evaluation | what you sent vs what claude drafted |
| next action | claude adjusts tone, length, phrases |
| repeat | same chat, next batch of emails |

**setup prompt:**

```
you're my email loop. goal: draft emails in my voice, fewer edits over time.

cycle: i paste emails → you sort and draft → i tell you what i sent → you adjust.

my voice: [HOW YOU WRITE]
never say: [PHRASES YOU HATE]

ask me to paste emails.
```

**evaluation prompt (paste after each batch):**

```
evaluation:
- email 1: [WHAT YOU SENT OR CHANGED]
- email 2: [WHAT YOU SENT OR CHANGED]
what changes for next cycle?
```

---

### 2. research loop

**goal:** weekly brief with more signal, less noise, each week

| cycle | what happens |
|-------|--------------|
| input | your sources + topic |
| action | 3 insights + 1 action item |
| evaluation | what you used vs what was noise |
| next action | claude weights better sources, filters worse ones |
| repeat | next week's brief |

**setup prompt:**

```
you're my research loop. goal: weekly brief that gets sharper each week.

cycle: i give sources → you brief me → i say what was useful → you adjust.

topic: [WHAT YOU CARE ABOUT]
sources: [YOUR LIST]
ignore: [HYPE, VAGUE TAKES, REHASHED NEWS]

give me this week's brief: 3 insights + 1 action.
```

**evaluation prompt:**

```
evaluation:
- useful: [WHAT I ACTUALLY USED]
- noise: [WHAT I SKIPPED]
next cycle: weight [X] higher, ignore [Y].
```

---

### 3. learning loop

**goal:** understand a topic, not just copy answers

| cycle | what happens |
|-------|--------------|
| input | topic + new material or question |
| action | brief you, help you think (not just answer) |
| evaluation | what clicked, what you got wrong |
| next action | claude focuses on weak spots |
| repeat | next study session |

full version with all prompts: [the ai learning loop guide](/guides/ai-learning-loop).

**setup prompt:**

```
you're my learning loop for [TOPIC]. goal: understand it, not copy answers.

cycle: you brief me → i paste questions/material → you help me think → i say what i learned → you adjust.

start with today's briefing.
```

**evaluation prompt:**

```
evaluation:
- got it: [WHAT CLICKED]
- missed: [WHAT I GOT WRONG]
next cycle: focus on [WEAK SPOT].
```

---

### 4. lead gen loop

**goal:** better outreach and higher replies over time

| cycle | what happens |
|-------|--------------|
| input | who you sell to + signals to look for |
| action | find companies + draft outreach |
| evaluation | who replied, which angles worked |
| next action | claude leans into winners, drops losers |
| repeat | next batch |

**setup prompt:**

```
you're my lead gen loop. goal: higher reply rate over time.

cycle: i give my icp → you find 10 companies and draft outreach → i tell you results → you adjust angles.

i sell: [YOUR OFFER]
ideal customer: [WHO]
signals: [e.g. running ads, hiring, just launched]
my voice: [HOW YOU WRITE]

run cycle 1. table: company, why them, draft message.
```

**evaluation prompt:**

```
evaluation:
- replied: [COMPANIES + WHICH ANGLE]
- ignored: [COMPANIES]
next cycle: lean into [WINNING ANGLE], drop [LOSING ANGLE].
```

---

### 5. decision loop

**goal:** faster, clearer decisions that match your taste

| cycle | what happens |
|-------|--------------|
| input | what you're deciding + what matters |
| action | research options, compare, recommend |
| evaluation | what you picked and why |
| next action | claude weights your priorities better |
| repeat | next decision |

**setup prompt:**

```
you're my decision loop. goal: better decisions, faster, over time.

cycle: i tell you what i'm deciding → you research and compare → i say what i picked → you remember my taste.

what are you deciding on right now?
```

**evaluation prompt:**

```
evaluation:
- picked: [YOUR CHOICE]
- why: [ONE SENTENCE]
next cycle: care more about [X], care less about [Y].
```

---

## don't know which loop?

paste this. answer the questions. claude picks one and writes your setup prompt.

```
i want to build an ai loop, not write a one-off prompt.

a loop is: input → action → evaluation → next action → repeat until goal achieved.

ask me one question at a time:
1. what do i keep doing over and over?
2. what would "better" look like after a few cycles?

then give me:
- which loop fits (email, research, learning, lead gen, or decision)
- my setup prompt
- my evaluation prompt

start with question 1.
```

## what to do next

1. pick one loop above (or do the email walkthrough).
2. paste the setup prompt into claude.
3. run cycle 1.
4. paste the evaluation prompt.
5. run cycle 2 in the same chat.

prompts stop. loops compound.
