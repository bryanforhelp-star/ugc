---
title: "how to build your own stan store"
description: "Add a links page to the website you already have, take money with Stripe, and put that URL in Instagram. Pick Cursor or Claude. Every step is written for someone who is not technical."
summary: "Make Stripe payment links, add a /links page to your site with Cursor or Claude, put the page live, then paste the URL into Instagram."
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

## the plan (read this first)

You're not building a company. You're doing four things:

1. **Stripe** makes the buy buttons (payment links).
2. **A page on your website** looks like a Stan Store: photo, buttons, shop.
3. **That page goes live** on the internet (so strangers can open it).
4. **Instagram** points at that page.

Example of the finished thing: [bykyndall.com/links](/links).

You do not need to understand code. You need to pick the path that matches how your website already works.

## which one am i?

Answer one question: **how do you edit your website today?**

| How you edit your site today | Your path |
|------------------------------|-----------|
| Carrd, Framer, Squarespace, Wix, Webflow, Notion (you click around in a website builder) | [→ Claude path](#claude-path-website-builder) |
| Someone built you a coded site, or you have a project folder / GitHub | [→ Cursor path](#cursor-path-coded-site) |
| I only use Claude in the browser and I don't have a real site yet | [→ Claude, no site yet](#claude-no-site-yet) |

**Cursor is not automatically easier.** Cursor is easier when the website is already made of files on a computer. Claude is easier when you already publish by hitting a Publish button.

## words you might see (plain english)

| Word | What it actually means |
|------|------------------------|
| **Cursor** | An app on your computer. You talk in a chat. It edits your website files for you. |
| **Claude** | Chat in your browser at [claude.ai](https://claude.ai). It can write the page and tell you what to click. It cannot log into your host for you. |
| **Stripe payment link** | A special URL. When someone opens it, they can pay you. That URL *is* your shop button. |
| **GitHub** | An online folder for website files. Like Google Drive, but for code. Free. |
| **Vercel** (or Netlify) | A free service that turns the files in GitHub into a website people can visit. |
| **Deploy / go live / put it live** | Taking the page from "only on my computer" to "anyone can open this link." |
| **Connect GitHub** | Logging into GitHub and Vercel once so they talk to each other. After that, when files update in GitHub, the website updates. |

You only need GitHub + Vercel on the **Cursor path**. Website builders already have their own Publish button. That button *is* deploy.

## stripe first (everyone does this)

Do this before you build the page, or the shop buttons will go nowhere.

1. Go to [stripe.com](https://stripe.com) and make an account.
2. Add your bank. That's so Stripe can send you money.
3. Click **Product catalog** → **Add product**. Type the name and price. One product per thing you sell.
4. Open that product → **Create payment link** → copy the link. ([more on payment links](https://stripe.com/payments/payment-links))
5. Do that for each product. Keep a list:

```
editing guide · $25 · https://buy.stripe.com/xxxxx
1:1 session · $200 · https://buy.stripe.com/yyyyy
```

No monthly fee. Stripe takes a small cut when someone pays. Done. Come back here.

---

## cursor path (coded site)

Use this if your website is code: a folder on your computer, or a GitHub repo, or "a developer made my site."

### what you're trying to do

Cursor edits the files → those files get saved to GitHub → Vercel reads GitHub and shows the live site → you put that URL in Instagram.

If that sounds like gibberish, that's fine. You will tell Cursor to walk you through every login. Your only job is to click what it says and paste the prompts below.

### step 1: get cursor + open your site

1. Download [Cursor](https://cursor.com) and open it.
2. Open your website project (**File → Open Folder**), or tell Cursor in a new Agent chat:

```
i am not a developer. i have a website and i want to edit it in cursor.
ask me how the site was made (github link, folder on my computer, vercel, someone else built it).
then walk me through opening it here, one click at a time. explain every word you use.
```

If you don't have the files yet, Cursor should get you to GitHub first (make an account if you need one), then open that project.

### step 2: build the links page

New Agent chat. Paste this. Drop in your photo. Paste your Stripe links.

```
i already have a website open in cursor. add a /links page that works like stan store / link in bio.
match the fonts, colors, and voice already on this site. do not invent a new brand.
i am not a developer. explain what you're doing in normal words. no jargon unless you define it.

shop buttons must use my stripe payment links. do not send people to gumroad or stan.

do not deploy yet. just build the page and show me how to preview it.

NAME:
PHOTO: (attached)
BUTTONS (free stuff, real urls only):
- title / subtitle / url
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

Talk until it looks like you. "Make the name bigger." "Say book a one-on-one, not schedule a call."

### step 3: put it live (this is the github / vercel part)

When the page looks right, paste this:

```
put this /links page live on the internet.

i am not a developer. i may not have github or vercel yet.
walk me through every step like i've never done this:
1. do i need a github account? help me make one and connect it in cursor.
2. save / push my site files to github.
3. do i need vercel? help me make a free account and connect it to that github repo.
4. make sure the live site updates from github.
5. give me the exact public url for /links when it's done.

explain what each click does. if something asks me to authorize or connect, tell me it's safe and why.
don't assume i know what deploy, repo, or commit means. define them when you use them.
```

**What should happen:**

1. You make a free GitHub account (if you don't have one).
2. Cursor saves your site into a GitHub "repo" (that's just the online folder name).
3. You make a free [Vercel](https://vercel.com) account and connect it to that GitHub folder. One-time.
4. Vercel gives you a URL. Later you can point your real domain at it. For now the free URL is fine.
5. Your links page is at something like `yoursite.com/links` or `your-project.vercel.app/links`.

If your site was **already** on Vercel + GitHub, step 3 is shorter: Cursor pushes the change, Vercel updates by itself, you just need the URL.

### step 4: point instagram at it

Instagram → Edit profile → Website → paste the `/links` URL.

Open it on your phone. Tap a shop button. Stripe should open. You're done.

---

## claude path (website builder)

Use this if you edit your site in **Carrd, Framer, Squarespace, Wix, Webflow, or Notion**.

### what you're trying to do

Claude tells you what to click inside the builder you already use → you hit **Publish** → that URL goes in Instagram.

No GitHub. No Vercel. Publish *is* deploy.

### steps

1. Finish [Stripe first](#stripe-first-everyone-does-this).
2. Open [claude.ai](https://claude.ai).
3. Paste this:

```
i already have a website. add a stan-store-style links page to it. i am not a developer.

my site is: [carrd / framer / squarespace / wix / webflow / notion / other: ___]

the page: my photo, my name, buttons, shop cards that go to stripe, affiliates, socials.
every paid thing uses a stripe payment link.

match my existing site. phones first.
tell me exactly what to click in the tool i already have. one step at a time.
do not make me download cursor, github, or vercel.
when we're done, tell me which button publishes the page and what url to put in instagram.

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

You don't have Carrd/Squarespace/etc, and you don't want Cursor yet.

1. Finish [Stripe first](#stripe-first-everyone-does-this).
2. In Claude, paste:

```
i don't have a website yet. i only use claude. i am not a developer.
i already made stripe payment links.

make me a stan-store-style links page as a single html file.
shop buttons must use my stripe urls.

then walk me through the easiest free way to get a public url for this file.
one tool only. as few clicks as possible. explain every word.
when i have the url, tell me exactly what to paste into instagram.
```

Claude picks the simple host and tells you what to click. Put that URL in Instagram.

If you later want this on a real domain with Cursor, switch to the [Cursor path](#cursor-path-coded-site).

---

## after it's live

New thing to sell: new Stripe payment link → add a button. Don't rebuild the page.

```
on my links page:
- add this stripe product: [name], [price], [payment link]
- change [this button] to say [this]
i edit this in [cursor / carrd / squarespace / etc].
tell me exactly what to change. i am not a developer.
```

If you need Stan's email flows and memberships, buy Stan. If you needed a page that looks like you and takes Stripe, you're done.
