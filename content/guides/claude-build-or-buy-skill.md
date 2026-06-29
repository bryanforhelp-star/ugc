---
title: "build or buy: the thing i run before i pay for anything."
description: "A Claude skill that tells you straight up: buy it, it's secretly a prompt, or build a rough version yourself in an afternoon. Let Claude set it up, install it step by step, or paste when you need it."
summary: "Before you subscribe to any tool, run this Claude skill to learn whether you should buy it, steal the prompt, or build a rough version yourself in an afternoon."
category: claude skills
topics:
  - workflows
  - software
tools:
  - claude
cover: "the build-or-buy audit i run before i pay for anything"
commentKeyword: AUDIT
pillars:
  - how-to
  - problem-solution
tags:
  - claude
  - workflows
  - software
published: true
date: 2026-06-12
---

Before I pay for any tool, I run this. You give it whatever software you're about to subscribe to, and it tells you straight up: just buy it, it's secretly a prompt, or you could build a rough version yourself in an afternoon. And if you should build it, it builds it with you.

Three ways to use it. Let Claude set it up for you, install it yourself step by step, or just paste it in when you need it. Your call.

## option a: the lazy way (let Claude do it)

Open a fresh chat. Copy the whole skill block at the bottom of this page. Paste it in and say:

> set this up as my skill

That's it. Claude walks you through turning on skills if you need to, creates it, and it shows up in your list as **build or buy**. Takes about five minutes and you don't have to touch any settings yourself.

## option b: install it yourself (step by step)

If you'd rather do it by hand, or Claude's being weird, follow these in order.

### Step 1: turn on skills

Go to **Settings → Capabilities**.

Switch on **"Code execution and file creation."**

Works on free, pro, and max. If this is off, nothing below will work.

### Step 2: open your skills list

Go to **Customize → Skills**.

This is where all your skills live.

### Step 3: start a new skill

Hit the **"+"** button in the top right.

Then click **"Create skill."**

### Step 4: add the skill (pick one)

**Easy path:** choose **"Create with Claude."** Paste in the whole skill block from the bottom of this page. Say **"set this up as my build or buy skill."** Claude handles the rest.

**Hands-on path:** save the skill block as a file named exactly `SKILL.md`. That's just the required filename (like `index.html` on a website), not the skill's name. The skill's actual name is **build or buy**, which comes from the `name:` line at the top of the block. Put `SKILL.md` inside a folder called `build-or-buy`, zip the folder, and upload the zip.

*(Anything you upload stays private to your account.)*

### Step 5: turn it on

Back in **Customize → Skills**, find **build or buy** and toggle it on.

You're set.

## using it once it's installed

You don't have to do anything fancy. Three ways to fire it off:

- **Just talk.** Say something like *"i'm about to pay $40 a month for [tool], should i?"* and it kicks in on its own (it reads the situation and knows it's relevant).
- **Type a slash.** Hit `/` in the message box, your skills pop up, click **build or buy**.
- **Call it by name.** *"Use my build or buy skill, i'm thinking about subscribing to [tool]."*

Then it takes over, asks you a few questions, and gives you the verdict.

## option c: just paste it, no setup

Don't feel like installing anything? Fair. Copy the block below (you can skip the little `---` bit at the very top), paste it into a fresh chat, and tell it what tool you're eyeing.

## the skill

```
---
name: Build or Buy
description: Decide whether to buy a tool, replace it with a prompt or workflow, or build it yourself. Use when the user mentions paying for or subscribing to a tool, asks if a tool is worth it, or asks build vs buy.
---

# build or buy

you help me decide whether to BUY a software tool, replace it with a PROMPT or a simple WORKFLOW, or BUILD a rough version myself. if building makes sense, you build it with me. and you're honest with me. if the right call is to just buy it, you say buy it.

## process — follow in order, don't skip step 1

### 1. pin down the one job
before you assess anything, ask me up to 5 short questions until you actually understand:
- the ONE main thing i need this tool to do (not everything it does)
- how often i'd use it
- my rough budget
- how technical i am

most tools do twenty things and i only need one. find that one.

### 2. break it down in plain language
- what the tool's actually doing under the hood to pull off that one job
- which parts are easy to recreate, which are genuinely hard
- rough cost to do it myself (time, plus any tools or api costs)
- rough time for someone at my level
- your honest read on whether it's worth it

### 3. give me a clear verdict — pick one, explain it
- JUST BUY IT — it's worth the money. tell me why, and who it's for.
- IT'S A PROMPT — i don't need it. give me the prompt that does most of the job.
- IT'S A WORKFLOW — a few steps or one connector gets me there. give me the setup.
- BUILD A ROUGH VERSION — the core job is simple enough to make myself.

be honest. tell me to buy it when buying is the right move. never talk me into building something that isn't worth my time.

### 4. if the verdict is BUILD, build it with me
- write a short, plain-language plan: what we're making, what it does, what it won't (just the one job, nothing fancy)
- list what i'll need (accounts, tools, keys) in normal words
- walk me through building it step by step. give me the actual code or setup, tell me exactly where it goes and how to run it. if a step happens outside this chat, say so.
- keep it scrappy. the goal is "it does the one job," not "polished product."

## rules
- one job, not all the jobs. we recreate what i actually need, not the whole tool.
- plain language. i'm smart, i'm just not a developer.
- if recreating it means breaking a site's terms or doing anything sketchy, tell me and stop.
- always be willing to land on "just buy it."

## start
open by asking me what tool i'm thinking about paying for.
```

## why this works

Most of us pay for tools on reflex. You see the tool, you want the tool, you enter your card, you forget you even have it. This makes you ask one question first: do I actually need this, or is it a prompt and ten minutes?

Sometimes it's worth paying, and that's fine. I'm not anti-software. But every time the answer is "that's just a prompt," you keep another $60 a month, and the graveyard of subscriptions you forgot to cancel stops growing.

## skill not working?

Skills can be a little shy. You install one, type `/`, and nothing. Been there. If it's not showing up or not kicking in, run through this:

- **Is it actually on?** Go to **Customize → Skills** and make sure **build or buy** is toggled on. Then double-check **"Code execution and file creation"** is on in Settings → Capabilities. If that's off, no skill works, period.
- **Name it directly.** The most reliable way to start it is just saying *"use my build or buy skill."* Don't count on it reading your mind.
- **Type `/` to check it's even there.** If it doesn't show up in the slash menu, it isn't enabled yet. Go back and toggle it on.
- **Start a fresh chat.** Sometimes it won't pick up halfway through a conversation that's already going. New chat, try again.
- **Turn off skills you're not using.** If you've got ten skills on at once, Claude gets confused about which one you mean. Fewer on, more reliable.
