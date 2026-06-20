---
title: "build your voice files (the simple way)"
description: "Paste one prompt into Claude, talk through five questions, and get voice, about, audience, examples, and do-not-say files. Drop them in a project so AI stops rewriting everything in generic jargon."
category: guide
topics:
  - setup
  - workflows
tools:
  - claude
cover: "stop telling claude you know my tone"
commentKeyword: VOICE
pillars:
  - how-to
  - problem-solution
tags:
  - claude
  - workflows
  - voice
published: true
date: 2026-06-12
---

you tell claude "make it sound like me" and it just... doesn't. because "sound like me" isn't context. claude has never met you.

the fix is a few short files that teach it who you are and how you talk. here's the least annoying way to make them. no templates, no filling in blanks, you just talk.

## the whole thing, 3 steps

**1. paste the prompt below into claude.**

**2. answer its questions. just talk, messy is totally fine.** it builds you 5 short files: voice, about, audience, examples, and the do-not-say file.

**3. make a project, paste the 5 files into the project instructions, and work in there from now on.** that's it. every chat inside that project already knows how you sound, so you never explain yourself again.

*(no projects? just paste the files at the top of a chat whenever you want claude to write something. less magic, still works.)*

## the prompt

> interview me and build me 5 short .md files that teach you who i am and how i sound, so i never have to explain my voice again.
>
> the 5 files are: **voice.md** (how i talk), **about.md** (what i do, believe, and am building), **audience.md** (who i'm talking to), **examples.md** (real things i've written), and **do-not-say.md** (words i'd never use).
>
> go one file at a time. ask me a few questions for each, keep it conversational, and follow up if my answer is thin. for examples, have me paste a few real things i've written. for do-not-say, push me for specific words i'd never use. all five matter and they work together, so don't let any of them come out thin.
>
> i'll just talk, you compile. at the end, give me all 5 as separate .md files, each clearly labeled and ready to save, written in my actual words, not corporate-ified. start by telling me what we're doing and asking your first question.

## what you'll end up with

- **voice:** how you actually talk
- **about:** what you do, believe, and are building
- **audience:** who you're talking to
- **examples:** real things you've written
- **do-not-say:** the words that make you want to throw up

## why all five

none of these does the job alone. voice gives it your rhythm, examples prove it with your real writing, do-not-say keeps it away from the cringe, audience aims it at the right person, and about grounds it in what you actually do. it's all five together that make the output sound like you instead of generic.

and they're never really "done." every time claude nails something, your files got it right. every time it misses, add the fix, a new word to do-not-say, a fresh example, whatever it got wrong. they get sharper the more you use them.

## want it always there without a project? (optional, 2 minutes)

paste that same prompt into **customize → skills → create skill → create with claude** and say "make this a skill." now you can build or update your files anytime just by asking for it. (you'll need "code execution and file creation" switched on in settings → capabilities first.)
