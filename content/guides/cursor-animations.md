---
title: "get cursor to make little animations for your videos"
description: "Drop your talking-head clip into Cursor, ask for greenscreen overlays, then chroma-key them over your footage in CapCut. Same flow I use on reels."
summary: "Drop a video into Cursor, ask for CapCut-ready greenscreen animations, then lay them over your talking head."
category: workflow
topics:
  - content
  - workflows
tools:
  - cursor
cover: "cursor makes little animations for your videos"
commentKeyword: ANIMATE
pillars:
  - how-to
tags:
  - cursor
  - content
  - video
  - capcut
published: true
date: 2026-07-18
---

You already film the talking head. The little floating stamps, UI cards, and kinetic text are what make the frame feel alive.

You do not need After Effects. You do not need a motion designer. You drop the video into Cursor, ask for animations, then lay the files over your original clip in CapCut.

That is the whole loop.

## what you need

| Thing | Why |
|-------|-----|
| **Cursor** | where you drop the video and ask for overlays |
| **A talking-head clip** | mp4 of you talking. leave some empty wall or sky space for overlays |
| **CapCut** | free. chroma-key greenscreen and stack layers |
| **Optional: Whisper** | if Cursor asks for a transcript, or you want timestamps yourself |

No coding. You describe what you want. Cursor builds the files.

## the 3-step loop

```
talking-head mp4 → Cursor (make overlays) → CapCut (chroma key + stack)
```

1. Drop your video into a Cursor chat.
2. Ask for greenscreen animations timed to your beats.
3. Drop those mp4s onto a second track in CapCut and remove the green.

## step 1: drop the video into cursor

Open a new Agent chat in Cursor. Drag your talking-head mp4 into the composer.

Then give it creative direction. Vague "make it cool" gets vague overlays. Specific beats get usable files.

Paste something like this:

```
hey, i want some animations for this video.

watch it (frames + transcript if you need). then make CapCut-ready greenscreen overlays i can lay over my talking head.

specs:
- 1920x1080 mp4
- solid greenscreen background #00B140 (not textured, not gradient)
- 3 to 5 overlays max, timed to the beats
- mix of: kinetic text stamps, one UI card if it fits, one cta stamp for the end
- leave my face clear. design for corners / empty wall space
- scale target in CapCut: about 35-50% of frame

creative direction:
[TELL IT THE VIBE. e.g. whimsy, helpful, slightly chaotic, pink accent, lowercase]
[TELL IT THE BEATS. e.g. hook line, process moment, proof moment, comment CTA]

do not draw fake Cursor or CapCut windows. real type and real ui cards only.
when you're done, give me a placement map: timestamp → file → corner.
```

Swap the creative direction for your video. The more you name the moments, the less you redo.

## step 2: what good overlays look like

| Ship this | Skip this |
|-----------|-----------|
| Solid greenscreen `#00B140` | Soft green, gradients, or busy backgrounds |
| 3 to 5 strong pieces | 9 mediocre ones |
| Kinetic type with real easing | Flat text that just fades in |
| UI cards that match something you actually built | Generic "AI dashboard" nonsense |
| Placement map with timestamps | Guessing where things go in CapCut |

If Cursor hands you a fake editor window with fake menus, throw it out. Ask again for stamps and cards only.

## step 3: lay them over in CapCut

1. New project. Drop your original talking-head on track 1.
2. Drop an overlay mp4 on track 2, lined up to the timestamp from the placement map.
3. Select the overlay → **Chroma key** → sample the green (`#00B140`). Tighten spill until the edges are clean.
4. Scale to about 35-50%. Tuck into a corner so your face stays readable.
5. Alternate corners so the frame does not feel stuck.
6. Repeat for each overlay.

That is it. Export. Post.

## steal this: prompt for a new reel

Reuse this every time you film a new talking head:

```
new reel. here's the talking-head video.

make CapCut-ready greenscreen overlays (#00B140, 1920x1080).

beats:
- 0:00 hook: [YOUR HOOK LINE]
- mid: [PROCESS OR PROOF MOMENT]
- end: comment [KEYWORD] cta stamp

vibe: [3 WORDS]
accent: [e.g. pink #FF2D8A or blue #3B82F6]

3 to 5 overlays. placement map when done. no fake app windows.
```

## common mistakes

**Too many overlays.** Three good ones beat nine that fight your face.

**Overlays over your mouth.** Keep stamps in empty wall / sky / plant space.

**Wrong green.** Soft or neon green that is not `#00B140` makes CapCut spill everywhere. Ask Cursor to remake with that hex.

**Asking Cursor to "edit the video."** You are not editing inside Cursor. You are generating overlay files to stack in CapCut.

## what to do next

Film one short talking-head clip today. Drop it into Cursor with the prompt above. Get three overlays. Stack them in CapCut before you overthink it.

Comment **animate** on the reel if you want this guide in your DMs again later. The stable link is always this page.
