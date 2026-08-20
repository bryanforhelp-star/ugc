---
title: "how to build your own stan store"
description: "Add a Stan-style links page to the website you already have, take payments with Stripe, and point Instagram at it. Pick Cursor or Claude below."
summary: "Already have a website? Add a /links page with Stripe payment links. Cursor builds and deploys if your site is code. Claude works if you publish in Carrd, Framer, Squarespace, or similar."
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
updated: 2026-08-20
---

You already have a website. You're adding one page to it. That page is your link in bio: photo, buttons, shop, Stripe for payments. Example: [bykyndall.com/links](/links).

## which one am i?

Click yours. Skip the other.

| You | Go here |
|-----|---------|
| I have a website and I want to use **Cursor** | [→ Cursor path](#i-have-a-website-and-i-want-to-use-cursor) |
| I want to do this through **Claude** | [→ Claude path](#i-want-to-do-this-through-claude) |

**Quick answer:** Cursor is the easiest *if your website is code* (or you can open the project folder). Claude is the easiest *if your site has a visual editor* (Carrd, Framer, Squarespace, Wix, Webflow, Notion). Claude can also write the page as a file, but you still need a way to put that file on your site.

Do Stripe first either way. Takes five minutes.

## stripe first (everyone)

1. Make a [Stripe](https://stripe.com) account. Add your bank so they can pay you.
2. Product catalog → Add product. Name + price. One product per thing you sell.
3. Open the product → Create [payment link](https://stripe.com/payments/payment-links) → copy the URL.
4. Repeat. You want a list like: `editing guide → https://buy.stripe.com/...`

No monthly fee. Stripe takes a cut when someone pays. Those URLs become your shop buttons.

## i have a website and i want to use cursor

This is the path I used. Cursor opens your site files, builds the page, and helps you put it live.

**You need:** [Cursor](https://cursor.com), your website project open in it, and the Stripe payment links from above.

1. Open your site project in Cursor.
2. Start a new Agent chat.
3. Paste this (fill in your list, drop in your photo):

```
i already have a website. add a /links page that works like stan store / link in bio.
match the fonts, colors, and voice already on this site. do not invent a new brand.
i am not a developer. explain what you're doing in normal words.

shop buttons must use my stripe payment links. do not send people to gumroad or stan.

when the page looks right, put it live and give me the public url.

NAME:
PHOTO: (attached)
BUTTONS (free stuff, real urls only):
- title / subtitle / url
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

4. Keep talking until it looks like you. "Make the name bigger." "That button should say book a one-on-one."
5. When it's done, say: `put this live. walk me through it if i don't know how.`
6. Open the URL on your phone. Tap a shop button. Confirm Stripe opens.
7. Instagram → Edit profile → Website → paste `yoursite.com/links`.

**How deploy works here:** Cursor edits the files and walks you through hosting (usually Vercel if that's how the site already ships). You don't leave Cursor to invent a host. You tell it to go live.

## i want to do this through claude

No Cursor. Claude still works. The difference is *how the page gets onto your website*.

### if your site is carrd, framer, squarespace, wix, webflow, or notion

Claude tells you what to click. You publish inside that tool. That *is* deploy.

1. Open [Claude](https://claude.ai).
2. Paste this:

```
i already have a website. add a stan-store-style links page to it. i am not a developer.

my site is: [carrd / framer / squarespace / wix / webflow / notion / other: ___]

the page: my photo, my name, buttons, shop cards that go to stripe, affiliates, socials.
every paid thing uses a stripe payment link.

match my existing site. phones first.
tell me exactly what to click in the tool i already have. do not make me download anything new.
when we're done, tell me how to publish / make the page live and what url to put in instagram.

NAME:
PHOTO: (attached)
BUTTONS (free stuff, real urls only):
- title / subtitle / url
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

3. Follow the clicks. Publish. Copy the page URL.
4. Instagram → Website → paste that URL.

### if your site is code and you only use claude

Claude can write the page. It cannot log into your host for you. So pick one:

| Option | What you do |
|--------|-------------|
| **A. Someone else updates the site** | Ask Claude for a single HTML file (or the exact files to add). Send them: "add this as `/links`." |
| **B. You use Cursor for deploy only** | Switch to the [Cursor path](#i-have-a-website-and-i-want-to-use-cursor). Claude is not the hard part. Putting files live is. |
| **C. You have no coded site yet** | Ask Claude for one HTML file, then say: "walk me through the easiest free way to get a public url. one tool, as few clicks as possible." Put that URL in Instagram. |

Prompt for A or C:

```
i only use claude. i already made stripe payment links.

make me a stan-store-style links page as a single html file.
shop buttons must use my stripe urls. do not fake checkout.
i am not a developer.

then tell me how to get this onto my website (or online) in the simplest way. ask me what kind of site i have if you need to.

NAME:
PHOTO: (attached)
BUTTONS:
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

## after it's live

New product later: new Stripe payment link → new button. Don't rebuild the whole page.

```
on my links page:
- add this stripe product: [name], [price], [payment link]
- change [this button] to say [this]
tell me exactly what to change in [cursor / carrd / squarespace / etc].
```

If you need Stan's email flows and memberships, buy Stan. If you needed a page that looks like you and takes Stripe, you're done.
