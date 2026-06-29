---
title: "the ai learning loop: how to get ai to teach you anything."
description: "Set up an automated learning loop with AI: context before, assessment during, review after. So you actually understand what you're doing instead of copying answers."
summary: "Build a three-phase AI learning loop: get context before new information, process it as it arrives, and review after so you understand instead of copying answers."
category: workflow
topics:
  - learning
tools: []
cover: "how i get ai to teach me anything"
commentKeyword: LEARN
pillars:
  - how-to
  - problem-solution
tags:
  - ai
  - learning
  - prompts
published: true
date: 2026-06-12
---

Most people use AI like a search box: ask once, get an answer, move on. You never know if you actually learned anything.

This guide shows you how to build a **learning loop**: a repeatable system where AI feeds you context, helps you process new information as it arrives, and reviews what happened so the next round gets smarter. Not a single prompt. A loop you can run on anything.

## the problem

You're consuming information you don't understand.

Maybe it's trading signals in a group chat. Maybe it's a course you're "taking." Maybe it's advice from someone who clearly gets it and you don't. You copy the output without building the skill.

I was in a trading signals group. Signals would drop and I'd either blindly follow them or ignore them. I didn't want either. I wanted to **understand what was happening in the market**: key levels, support and resistance, bias, what to watch. So when a signal came in, I could ask: *does this actually make sense right now?*

And after a trade closed, I wanted to know: *was that a good call? What did I miss? What should I watch for next time?*

That's not one ChatGPT question. That's a loop.

## the loop

Every learning loop has three phases. Same structure whether you're learning trading, design, cooking, or how to use a new tool.

### 1. Before: build context

Before new information hits, AI gives you a briefing on the landscape.

**What this looks like for trading:**
- What's the overall market bias today?
- Where are key support and resistance levels?
- What news or events could move things?
- What should I be paying attention to before anything happens?

You're not asking "what should I buy." You're asking "help me see the board."

### 2. During: connect the new thing

When new information arrives (a signal, a lesson, a problem), AI helps you connect it to the context you already have.

**What this looks like for trading:**
- A signal drops: long EUR/USD at 1.0850
- AI assesses: how does this fit today's bias? Is price near a key level? Does the setup align with what we mapped this morning?
- You get a read: *here's why this might work, here's what would invalidate it, here's what to watch*

You're not taking orders. You're learning to evaluate.

### 3. After: review and reverse-engineer

When the thing is done (trade closed, project shipped, lesson finished), AI helps you assess what happened and extract the lesson.

**What this looks like for trading:**
- Trade hit target / stopped out / still open
- AI reviews: what played out as expected? What surprised you? Was the original read right or wrong, and why?
- Output: one thing to remember for next time

This closes the loop. The lesson feeds back into tomorrow's briefing.

## what i built

I set this up as an automated workflow (I use Claude + a simple automation tool, but you can start manually).

**Morning:** bot sends me a market briefing with bias, levels, and things to watch.

**When a signal drops:** I paste it in (or the bot picks it up) and get an assessment against the morning context.

**When it closes:** I log the outcome and get a short review of what worked, what didn't, and what to carry forward.

Over time I'm not just following signals. I'm building a mental model of how markets move. The loop is the teacher.

## set up yours

You don't need code to start. You need three prompts and a habit.

**Pick your topic.** One sentence. Specific.

> "I want to understand [X] well enough to make my own calls, not just follow someone else's."

**Run the three phases manually for one week.** Same topic every day. Before / during / after.

**Automate what repeats.** Once the pattern is clear, wire up whatever makes sense: scheduled briefings, a saved chat thread, a simple bot, a Zapier flow. Start ugly.

### Phase 1 prompt: context briefing

```
I'm learning [TOPIC]. Before I consume any new information today, brief me:
- What's the current landscape? (key concepts, terms, or conditions I should know)
- What's the overall "bias" or direction right now?
- What should I pay attention to today?
- What would change my read?

Keep it concise. Teach me, don't just list facts.
```

### Phase 2 prompt: connect new info

```
Here's my context from earlier: [PASTE BRIEFING OR SUMMARY]

New information just arrived: [PASTE SIGNAL / LESSON / PROBLEM / QUESTION]

Help me evaluate this:
- How does this connect to what I already know?
- Does this make sense given the current landscape?
- What would make this wrong?
- What should I watch while this plays out?
```

### Phase 3 prompt: review

```
Here's what happened: [PASTE OUTCOME: trade result, what you tried, what you learned]

Review this for me:
- What played out as expected?
- What surprised me?
- Was my original read right or wrong? Why?
- One thing to remember next time.

Keep it short. I want one takeaway, not a lecture.
```

## steal this: full loop in one place

Save these three. Run them in order every time you sit down to learn something.

| Phase | When to run | What you get |
|-------|-------------|--------------|
| Context | Start of session | Briefing on the landscape |
| Connect | When new info arrives | Assessment against context |
| Review | When something closes | One takeaway for next time |

The skill isn't the prompt. The skill is **running the loop until you can do phase 2 yourself**: evaluating new information without needing AI to hold your hand.

## what to do next

1. Pick one thing you're trying to learn this week.
2. Run the context prompt tomorrow morning.
3. When something new hits, run connect.
4. When it's done, run review.
5. Repeat for 5 days. Then decide what to automate.
