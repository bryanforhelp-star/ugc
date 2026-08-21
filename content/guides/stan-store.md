---
title: "how to build your own stan store"
description: "Add a links page to the website you already have, take payments with Stripe, put that URL in Instagram. Pick Cursor or Claude below."
summary: "Make Stripe payment links, add a /links page with Cursor or Claude, put it live, then paste the URL into Instagram."
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

How do you edit your website today?

| How you edit your site today | Your path |
|------------------------------|-----------|
| Carrd, Framer, Squarespace, Wix, Webflow, Notion | [→ Claude path](#claude-path-website-builder) |
| Coded site (project folder, GitHub, Vercel, someone built it) | [→ Cursor path](#cursor-path-coded-site) |
| No site yet, Claude only | [→ Claude, no site yet](#claude-no-site-yet) |

Cursor when the site is files. Claude when you already hit Publish. Same Stripe setup either way. Example: [bykyndall.com/links](/links).

## words you might see

| Word | Meaning |
|------|---------|
| **Cursor** | App on your computer. You chat, it edits website files. |
| **Claude** | Chat at [claude.ai](https://claude.ai). Writes the page / tells you what to click. Does not log into your host for you. |
| **Stripe payment link** | A pay URL. That URL is the shop button. |
| **GitHub** | Online folder for website files. Free. |
| **Vercel** (or Netlify) | Turns GitHub files into a live site. Free hobby plan. |
| **Deploy / go live** | Getting the page from your computer onto a public URL. |
| **Connect GitHub** | One-time login so GitHub and Vercel talk. After that, file updates → site updates. |

GitHub + Vercel are for the **Cursor path**. Website builders already have Publish. That is deploy.

## stripe first (everyone)

Do this before you build the page.

1. [stripe.com](https://stripe.com) → account → add your bank
2. Product catalog → Add product (name + price). One per thing you sell.
3. Open product → Create [payment link](https://stripe.com/payments/payment-links) → copy the URL
4. Repeat. Keep a list:

```
editing guide · $25 · https://buy.stripe.com/xxxxx
1:1 session · $200 · https://buy.stripe.com/yyyyy
```

No monthly fee. Stripe takes a cut per sale.

---

## cursor path (coded site)

Use this if the site is code: folder on your computer, GitHub repo, or a developer made it.

**Flow:** Cursor edits files → files go to GitHub → Vercel serves the live site → that URL goes in Instagram.

### 1. open the site in cursor

1. Download [Cursor](https://cursor.com).
2. Open the project (**File → Open Folder**), or paste this in a new Agent chat:

```
i have a website and i want to edit it in cursor.
ask how it was made (github link, folder on my computer, vercel, someone else built it).
then walk me through opening it here.
```

### 2. build the links page

New Agent chat. Paste this. Drop in your photo. Paste your Stripe links.

```
i already have a website open in cursor. add a /links page that works like stan store / link in bio.
match the fonts, colors, and voice already on this site. do not invent a new brand.

shop buttons must use my stripe payment links. do not send people to gumroad or stan.

do not deploy yet. build the page and show me how to preview it.

NAME:
PHOTO: (attached)
BUTTONS (free stuff, real urls only):
- title / subtitle / url
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

Tweak until it looks right.

### 3. put it live (github / vercel)

When the page looks right:

```
put this /links page live.

if github or vercel isn't set up yet, walk me through:
1. github account (if needed) and connecting it in cursor
2. push the site files to github
3. vercel free account connected to that github repo
4. confirm the live site updates from github
5. give me the public url for /links

if something asks me to authorize or connect, say what it's doing.
```

**What should happen:**

1. Free GitHub account if you don't have one
2. Site files saved to a GitHub repo (online folder)
3. Free [Vercel](https://vercel.com) account connected to that repo (one-time)
4. Vercel gives you a URL. Point your domain at it later if you want.
5. Links page at `yoursite.com/links` or `your-project.vercel.app/links`

If the site was **already** on Vercel + GitHub: Cursor pushes, Vercel updates, you just need the URL.

### 4. instagram

Instagram → Edit profile → Website → paste the `/links` URL.

Open it on your phone. Tap a shop button. Stripe should open.

---

## claude path (website builder)

Use this if you edit in **Carrd, Framer, Squarespace, Wix, Webflow, or Notion**.

Claude tells you what to click → you hit **Publish** → that URL goes in Instagram.

No GitHub. No Vercel. Publish is deploy.

1. Finish [Stripe first](#stripe-first-everyone).
2. Open [claude.ai](https://claude.ai).
3. Paste:

```
i already have a website. add a stan-store-style links page to it.

my site is: [carrd / framer / squarespace / wix / webflow / notion / other: ___]

the page: my photo, my name, buttons, shop cards that go to stripe, affiliates, socials.
every paid thing uses a stripe payment link.

match my existing site. phones first.
tell me what to click in the tool i already have.
when we're done, tell me how to publish and what url to put in instagram.

NAME:
PHOTO: (attached)
BUTTONS (free stuff, real urls only):
- title / subtitle / url
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

4. Follow the clicks. Hit Publish.
5. Instagram → Website → paste that URL.

---

## claude, no site yet

No Carrd/Squarespace/etc, and you're not opening Cursor yet.

1. Finish [Stripe first](#stripe-first-everyone).
2. In Claude:

```
i don't have a website yet. i only use claude.
i already made stripe payment links.

make me a stan-store-style links page as a single html file.
shop buttons must use my stripe urls.

then walk me through the easiest free way to get a public url.
when i have the url, tell me what to paste into instagram.
```

Put that URL in Instagram. Move it onto a real site later if you want. [Cursor path](#cursor-path-coded-site) when you're ready.

---

## after it's live

New product = new Stripe payment link → new button. Don't rebuild the page.

```
on my links page:
- add this stripe product: [name], [price], [payment link]
- change [this button] to say [this]
i edit this in [cursor / carrd / squarespace / etc]. tell me what to change.
```

If you need Stan's email flows and memberships, buy Stan. If you needed a page that looks like you and takes Stripe, you're done.
