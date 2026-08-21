---
title: "how to build your own stan store"
description: "Build a Stan-style links page on the site you already have, take payments with Stripe, point Instagram at it."
summary: "Add a /links page with Stripe payment links. Cursor if your site is code. Claude if you use a website builder."
category: workflow
topics:
  - workflows
  - building
tools:
  - claude
  - cursor
cover: "this is my stan store except it's not stan store"
commentKeyword: STAN
pillars:
  - how-to
  - problem-solution
tags:
  - claude
  - cursor
  - workflows
  - stan
  - stripe
published: true
date: 2026-08-18
updated: 2026-08-21
---

## which one am i?

| You | Path |
|-----|------|
| Site is code (GitHub, a project folder, Vercel, someone built it) | [Cursor](#cursor) |
| You edit in Carrd, Framer, Squarespace, Wix, Webflow, Notion | [Claude](#claude) |
| No site yet | [Claude, starting from zero](#claude-no-site) |

Cursor if the site is files. Claude if you already hit Publish. Stripe first either way. Example: [bykyndall.com/links](/links).

## stripe

1. [stripe.com](https://stripe.com) → account → add your bank
2. Product catalog → Add product (name + price)
3. Create a [payment link](https://stripe.com/payments/payment-links) → copy the URL
4. Repeat per product

Those URLs are your shop buttons. No monthly fee. Stripe takes a cut per sale.

## cursor

Open the site in [Cursor](https://cursor.com). Agent chat. Paste:

```
add a /links page like stan store / link in bio.
match this site's fonts, colors, and voice.
shop buttons use my stripe payment links. no gumroad, no stan.

NAME:
PHOTO: (attached)
BUTTONS:
- title / subtitle / url
SHOP:
- product / price / stripe url
AFFILIATES:
SOCIALS:

build it first. i'll say when to put it live.
```

Tweak until it looks right.

Then:

```
put /links live.
if github or vercel isn't set up, walk me through connecting them and give me the public url when it's done.
```

**What's happening:** Cursor edits the files. GitHub stores them. Vercel (or whatever already hosts you) serves the live site. If those accounts aren't connected yet, that second prompt is what sets it up. If they already are, a push updates the site and you just need the `/links` URL.

Instagram → Website → paste it.

## claude

Open [claude.ai](https://claude.ai). Paste:

```
i use [carrd / framer / squarespace / wix / webflow / notion].
add a stan-store-style links page.
shop buttons = stripe payment links.
match my existing site. phones first.
tell me what to click, then how to publish and what url goes in instagram.

NAME:
PHOTO: (attached)
BUTTONS:
- title / subtitle / url
SHOP:
- product / price / stripe url
AFFILIATES:
SOCIALS:
```

Publish in the builder. That URL goes in Instagram. No GitHub required.

## claude, no site

```
no website yet. make a stan-store-style links page as one html file.
shop buttons = these stripe urls: [paste]
then the simplest free way to get a public url. walk me through it.
```

Paste that URL into Instagram. Move it onto a real site later if you want.

## later

New product = new Stripe payment link + new button. Same chat:

```
on /links: add [product] at [price], link [stripe url]
```
