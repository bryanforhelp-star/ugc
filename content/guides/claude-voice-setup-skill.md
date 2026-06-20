---
title: "your voice file (and the rest of your context files)"
description: "A Claude skill that interviews you out loud and builds five context files (voice, about, audience, examples, do-not-say) so AI stops rewriting the same thing in generic jargon."
category: claude skills
topics:
  - workflows
  - setup
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

okay so. if you've ever told claude "you know my tone" and then watched it rewrite the same thing twelve times, this is for you.

ai doesn't know your voice. it knows *generic*. it's never been embarrassed, never sent a risky text, never had a tone in its life. so when you say "make it sound like me," it has nothing to go on, and you get the ai trash jargon.

the fix is a few files that teach it who you are. how you talk, who you're talking to, what you're about, and the words you'd rather die than use. but i'm not about to make you sit and fill in blank templates like it's homework, because nobody is doing that.

so this is a skill that interviews you instead. you just talk. it asks the questions, you answer out loud, and it builds all the files for you. one conversation and you're done.

## what it builds for you

in one sitting, it compiles all five:

- **your voice file:** how you actually talk, your tone, your phrases, your different modes (your "professional but human" voice vs your "be so for real" voice)
- **your about file:** what you do, what you believe, and what you're building
- **your audience file:** who you're talking to and what they care about
- **your examples file:** real things you've written: post scripts, captions, emails, so it has proof of how you actually sound
- **your do-not-say file:** the phrases that make you want to throw up (this one does the most work, more on that below)

you don't fill in anything. it asks, you talk, it writes all five for you.

## install it (so it's always there)

first, turn skills on. go to **settings → capabilities** and switch on **"code execution and file creation."** (works on free, pro, all of them.)

then go to **customize → skills**, hit **"+"**, then **"create skill."**

- **easiest:** pick **create with claude**, paste in the whole skill block below, and say "set this up as my skill." it'll show up as **voice setup**. done.
- **by hand:** save the block as a file named exactly `SKILL.md` (that's the required filename, not the skill's name), drop it in a folder called `voice-setup`, zip it, upload.

prefer not to install? just copy the block below (skip the `---` bit at the top), paste it into a fresh chat, and it'll start interviewing you.

## how to run it once it's installed

- **just talk:** *"help me build my voice and context files."*
- **type `/`** and pick **voice setup**.
- **name it:** *"use my voice setup skill."*

then just answer its questions. messy answers are fine, that's its whole job.

## the skill

```
---
name: Voice Setup
description: Interview the user and compile their five context files (voice, about, audience, examples, do-not-say) so AI sounds like them. Use when the user wants a voice file, context files, or to make AI write or sound like them.
---

# voice setup

you help me build a set of context files that teach ai who i am, how i talk, and who i'm talking to. you do it by interviewing me. i talk, you compile. at the end you hand me finished files i can save and reuse. i should not have to fill in or format anything.

## the files you're building (five of them)
- **voice file**: how i actually talk, my tone, my phrases, my different modes
- **about file**: what i do, what i believe, and what i'm building
- **audience file**: who i'm talking to and what they care about
- **examples file**: real things i've written (post scripts, captions, emails) so you have proof of how i sound
- **do-not-say file**: the phrases i'd never use (this one matters most)

## how to run it
1. quick intro: tell me what we're doing, and that i should just talk, messy is fine, you'll clean it up.
2. go one file at a time. ask me a few focused questions per file, and follow up when my answer is thin or vague. don't move on until you've actually got enough to work with.
   - **voice:** how do i want to sound (casual or formal, lowercase or not, short and punchy or flowing, funny or straight).
   - **about:** what i do, what i believe, and what i'm building. and what i'm NOT, so you don't fake expertise i don't have.
   - **audience:** who am i talking to and what do they care about, what do they already know.
   - **examples:** ask me to paste a handful of real things i've written (post scripts, captions, emails). organize them into the examples file. this is the most important input, because examples teach you my voice faster than anything i could describe.
   - **do-not-say:** what words make me cringe, what sounds too corporate, what would i never say. push me for specific words, not vibes.
3. don't interrogate me to death. a few good questions per file, then move on. this should feel like a conversation, not a form.
4. at the end, output each file separately, clearly labeled, clean and ready to copy. use my actual words and examples. do not sand them into corporate-speak.

## rules
- i talk, you compile. don't make me format anything.
- keep my real phrasing and examples in the files. they should sound like me, not like a brand guideline.
- the do-not-say file matters most. get specific words, not general vibes.
- keep it moving and conversational.

## start
tell me we're building my context files, that all i have to do is talk, and ask me the first question about how i want to sound.
```

## a note on the do-not-say file

this one's the secret weapon, and it's the one people skip. it's easier for ai to sound like you by knowing what you'd *never* say than by following a list of rules about what you would. every time something comes out wrong, you add that word to the file, and it gets sharper. let the skill push you for specifics here.

## how to use the files it makes

- **paste them** at the top of a chat when you want it to write something.
- **drop them in a project** so they're always on, every chat, no pasting.
- **make the voice file a skill** so it always writes like you. same create-with-claude flow: paste your voice file, say "make this a skill so you always write in my voice."

## why this works

ai is great at writing. it's just bad at writing like *you*, because you never showed it how. you can't ask it to channel a voice it's never seen.

these files fix that. they're not turning ai into a clone of you, they're handing it a reference so it stops defaulting to beige. the taste and the angle and the weird little turns of phrase are still yours. the files just make sure that when ai writes, it starts from you instead of from nobody.

## skill not working?

- **is it on?** check **customize → skills** has **voice setup** toggled on, and that "code execution and file creation" is on in settings → capabilities.
- **name it directly:** *"use my voice setup skill."* most reliable way to start it.
- **type `/`** to see if it's even there. if not, it's not enabled yet.
- **start a fresh chat** if it won't pick up mid-conversation.
- **files came out a little off?** tell it which file and what's wrong ("the voice one's too formal, here's a better example"), and it'll redo that section. your files get sharper the more you use them.
