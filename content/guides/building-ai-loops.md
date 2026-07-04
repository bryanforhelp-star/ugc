---
title: "the ai loops kit"
description: "Build your first AI loop in 15 minutes. Copy-paste setup for all five loops from the reel. No code, no agents, just Claude and a note app."
summary: "Open Claude, paste the setup prompt, run it once, log what happened, run it again with one fix. That's a loop. This page walks you through your first one step by step."
category: workflow
topics:
  - workflows
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
  - workflows
published: true
date: 2026-07-04
updated: 2026-07-04
---

you watched the reel. this is how you actually build a loop.

no code. no zapier. no "agents." just claude and a place to jot notes (apple notes, google doc, notion, whatever).

**start with the 15-minute walkthrough below.** don't scroll to the other loops until you've done run 1.

## your first loop in 15 minutes

we'll build an **email loop**. almost everyone has email. you'll feel the difference between a one-off prompt and a loop in one session.

### what you need

- a free [claude.ai](https://claude.ai) account
- 2 real emails sitting in your inbox (one easy, one annoying)
- apple notes or any blank doc for your loop log

### step 1: open a new chat

go to claude.ai → **new chat**.

### step 2: paste this setup prompt

this tells claude what the loop is. you only paste this once.

```
you're my email loop. not a one-off helper — a system that gets better every time i use you.

here's how we work:

every time i paste emails, you:
1. sort each one (urgent / reply today / fyi / no reply needed)
2. draft replies in my voice
3. when i paste what i actually sent (or how i edited your draft), remember what changed

over time you should need fewer edits from me.

my voice: [DESCRIBE HOW YOU WRITE — casual, short, no corporate fluff, etc. OR paste 2 real replies you've sent before]

things i never want in a draft: [e.g. "hope this finds you well", emojis, exclamation marks, being overly formal]

confirm you understand and ask me to paste my first emails.
```

fill in the brackets. messy is fine.

### step 3: paste 2 emails

copy real emails from your inbox. paste them into the chat.

claude will categorize them and draft replies.

### step 4: send (or edit and send)

use the drafts or fix them. this is normal on run 1.

### step 5: close the loop

paste this after you've sent (or decided not to reply):

```
loop log — run 1:

email 1: i [sent your draft / edited it to say: PASTE WHAT YOU CHANGED / didn't reply because REASON]
email 2: i [same]

what should you do differently on run 2?
```

**this is the loop.** you didn't just get drafts. you fed back what happened so the next run is smarter.

### step 6: run it again tomorrow

open the **same chat**. paste new emails. no setup prompt needed.

after 3 to 5 runs, drafts should need less editing. that's the whole point.

---

**want to finish a full loop in one sitting instead?** skip to the [decision loop](#decision-loop-easiest-one-session). same idea, one purchase or choice, done in 15 minutes.

## what a loop actually is

plain version:

| | what you do | what you get |
|---|-------------|--------------|
| **prompt** | ask once | one answer |
| **loop** | same goal, same steps, come back, log what happened, fix one thing | better answers over time |

a loop needs four things. that's it.

1. **a goal** — "spend less time on email" not "help with this email"
2. **steps that repeat** — sort, draft, i send, log
3. **a log** — what worked, what i changed, what bombed
4. **one fix per run** — don't rewrite everything. change one thing.

you don't need to understand "agents" or "workflows." if you did step 5 above, you already built one.

## save your loop (so you don't start over)

after run 1, pin this so you never re-explain yourself.

### option a: keep the same chat (easiest)

just reopen the chat tomorrow. claude remembers the thread.

downside: eventually the chat gets long. fine for the first week.

### option b: claude project (5 minutes, worth it)

1. claude.ai → **projects** → **new project**
2. name it something like `email loop`
3. open **project instructions** (or project knowledge)
4. paste your setup prompt from step 2 above
5. from now on, start new chats **inside this project**

every chat in the project already knows the loop. you just paste emails.

## your loop log

don't overthink this. a note titled `loop log` with entries like:

```
run 1 — mar 4
- loop: email
- what i ran: 2 client emails
- what worked: short drafts, good tone
- what i fixed: stopped saying "happy to help"
- change for next run: add "never say happy to help" to my rules

run 2 — mar 5
- loop: email
- ...
```

three lines per run is enough. the log is what makes it a loop instead of a chat you forgot about.

---

## pick your loop

five starters from the reel. each one: who it's for, what to paste, what to do after.

**already did the email walkthrough?** pick a different one below.

### email loop

**for you if:** inbox eats your afternoon and you write the same kinds of replies over and over.

**you need:** claude + real emails

**setup prompt** (paste once in a new chat or project):

```
you're my email loop. every time i paste emails:
1. sort each (urgent / reply today / fyi / no reply needed)
2. draft replies in my voice
3. when i paste what i actually sent, remember what changed

my voice: [HOW YOU WRITE — or paste 2 real replies]
never say: [PHRASES YOU HATE]

ask me to paste emails.
```

**after each batch, paste:**

```
i sent: [PASTE WHAT YOU ACTUALLY SENT OR WHAT YOU CHANGED]
what should you do differently next time?
```

---

### decision loop (easiest one-session)

**for you if:** you're about to buy something, pick a tool, or make a choice and you keep asking "which one should i get?"

**you need:** claude + one real decision you're facing right now

**setup prompt:**

```
you're my decision loop. i'll use you whenever i'm deciding on something.

each time:
1. ask me what i'm deciding and what matters to me
2. research 3 options
3. compare them honestly against my priorities
4. recommend one and say what would change your mind
5. when i tell you what i picked, remember for next time

start by asking what i'm deciding on right now.
```

**after you decide, paste:**

```
i picked: [YOUR CHOICE]
why: [ONE SENTENCE]
next time i decide something like this, weight [X] higher and care less about [Y].
```

one session = one full loop. good first loop if email felt boring.

---

### research loop

**for you if:** you follow a bunch of newsletters or accounts and want a weekly brief, not another "summarize the internet" dump.

**you need:** claude + a list of where you get info (urls, newsletter names, accounts)

**setup prompt:**

```
you're my research loop. every sunday i'll ask for my weekly brief.

each run:
1. i tell you my sources and topic
2. you pull out 3 things worth knowing and 1 action for me
3. you flag noise to ignore next time
4. when i tell you what was useful, adjust next week's brief

my topic: [WHAT YOU CARE ABOUT — e.g. ai tools for my business]
my sources: [PASTE LIST]
noise i don't want: [HYPE, VAGUE TAKES, ETC.]

give me this week's brief now.
```

**after you read it, paste:**

```
useful: [WHAT YOU ACTUALLY USED]
skipped: [WHAT WAS NOISE]
next week: look harder for [X], ignore [Y].
```

---

### learning loop

**for you if:** you're trying to learn something (coding, trading, a new skill) and you keep copying answers without understanding.

**you need:** claude + a topic

full three-phase walkthrough with all prompts: [the ai learning loop guide](/guides/ai-learning-loop).

**short version — paste once:**

```
you're my learning loop for [TOPIC].

each study session:
1. brief me on what matters today (key ideas, what to watch for)
2. when i paste a question or problem, help me think through it — don't just give the answer
3. when i'm done, one takeaway i should remember

start with today's briefing.
```

---

### lead gen loop

**for you if:** you do outreach (dm, email, linkedin) and want better messages over time, not one list of names.

**you need:** claude + clarity on who you sell to

**setup prompt:**

```
you're my lead gen loop. every tuesday we'll do a batch.

each run:
1. i remind you who i sell to and what signals to look for
2. you find 10 companies and draft short personalized outreach for each
3. i tell you who replied and what i sent
4. you update the angle for next week

i sell: [YOUR OFFER]
ideal customer: [WHO — industry, size, what they look like]
signals they might need me: [e.g. running ads, hiring, just launched]
how i write: [YOUR TONE — or paste a real message you sent]

run batch 1 now. end with a simple table: company, why them, draft message.
```

**after you send, paste:**

```
results: [COMPANY] replied / [COMPANY] ignored / etc.
best angle: [WHAT GOT REPLIES]
next batch: lean into [X], drop [Y].
```

---

## not sure which loop? let claude pick

paste this in a fresh chat. answer the questions. it'll tell you which loop to build and write your setup prompt.

```
i want to build my first ai loop. not a one-off prompt — something i come back to that gets better.

ask me simple questions, one at a time:
- what do i keep asking ai to do over and over?
- what does "better" look like after a few weeks?
- what tools do i already use? (just claude? email? notion?)

when you have enough, tell me:
1. which loop fits best (email, decision, research, learning, or lead gen)
2. my setup prompt, ready to paste
3. what to log after run 1

start with question 1.
```

## when you're ready to go deeper

you don't need any of this to run your first loop. come back after 5 to 10 runs.

**anthropic's take:** their [building effective agents](https://www.anthropic.com/engineering/building-effective-agents) guide says what most teams learn the hard way: start with the simplest thing that works. add complexity only when the simple version breaks. that's what you're doing manually before you automate anything.

**when to automate:** if you've run the same loop 10+ times and one step is pure copy-paste busywork (pulling the same report every monday, same email sort every morning), *then* look at scheduling, zaps, or scripts. until then, the chat + log is the loop.

## what to do next

1. do the [15-minute email walkthrough](#your-first-loop-in-15-minutes) OR the [decision loop](#decision-loop-easiest-one-session) if you want one sitting.
2. write 3 lines in your loop log.
3. run it again tomorrow in the same chat or project.
4. after run 3, change one rule (a phrase to ban, a source to drop, an angle to double down on).

that's it. prompts get you an answer. loops get you a system.
