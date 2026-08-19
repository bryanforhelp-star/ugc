---
title: "how to build your own stan store"
description: "I needed a stan store and didn't want another subscription, so I added a page to the website I already had and took payments with Stripe. Find your situation below and do that one."
summary: "Add a links page to your site and sell through Stripe. If you already have a website, use Claude plus Stripe payment links. Cursor is only if your site is code."
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
updated: 2026-08-19
---

I needed a stan store. I didn't want another subscription. I already had a website, so I added a page and took money with Stripe. That's [bykyndall.com/links](/links).

Find the person you are. Do that section. Skip the rest.

Everyone uses Stripe the same way on day one: you make a [payment link](https://stripe.com/payments/payment-links) for each thing you sell, and that link is the button. No code. Stripe takes a cut when someone pays. There is no monthly fee.

## 1. i already have a website

Carrd, Framer, Squarespace, Wix, Notion, Webflow, a site someone built for you. You are adding one page, not starting over. You do not need Cursor.

**Stripe first, so the buttons are real.**

1. Make a [Stripe](https://stripe.com) account. Add your bank. That's so they can send you money.
2. In Stripe: Product catalog → Add product. Name, price. One product per thing you sell. A $25 guide is a product. A $200 session is a product.
3. Open that product → Create payment link → copy the URL.
4. Repeat for each thing. You should have a list like: `editing guide → https://buy.stripe.com/...`

If someone should land somewhere after they pay (a thank-you page, a calendar, a Google Drive file), set that in the payment link under "After payment." Otherwise Stripe shows its own receipt.

**Then the page.**

Open [Claude](https://claude.ai). Paste this. Drop in your photo. Paste your Stripe links in the shop list.

```
i already have a website. add a stan-store-style links page to it. i am not a developer.

my site is: [carrd / framer / squarespace / wix / notion / webflow / other: ___]

the page: my photo, my name, a stack of buttons, shop cards that go to stripe, affiliates, socials.
every paid thing uses a stripe payment link. do not send people to gumroad or stan.

match my existing site. phones first. tell me what to click in the tool i already have. do not make me download anything.

NAME:
PHOTO: (attached)
BUTTONS (free stuff, real urls only):
- title / subtitle / url
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

Publish it as `/links` if you can pick the URL. Open it on your phone. Tap a shop card and confirm it opens Stripe.

Instagram → Edit profile → Website → `yoursite.com/links`.

## 2. i only use claude

You don't have Cursor. Maybe you don't have a website. Claude is enough. Stripe still happens in Stripe's own site, not inside Claude.

**Stripe first.** Same four steps as above: account, product, payment link, copy the URL. Do this before you ask Claude to build anything, or the page will have buttons that go nowhere.

**Then tell Claude which of these you are.**

If you **do** have a website, use the prompt in section 1.

If you **don't** have a website:

```
i don't have a website and i don't have cursor. i only use claude.
i already made stripe payment links. i will paste them.

make me a stan-store-style links page as a single html file.
shop buttons must use my stripe urls. do not fake checkout.

then walk me through the easiest free way to get a public url. i am not a developer. one tool, as few clicks as possible.

NAME:
PHOTO: (attached)
BUTTONS:
SHOP (stripe payment links):
- product name / price / stripe url
AFFILIATES:
SOCIALS:
```

Claude gives you the file, then tells you what to click to put it online. When you have a URL, that goes in Instagram.

## 3. i don't have cursor

You are section 1 or section 2. Do that one.

Cursor only helps if your website is code and you want AI to edit the files. Carrd, Framer, Squarespace, Wix: Cursor will not help you. Stay in Claude.

If your site is code and you can't touch it: stay in Claude, get the HTML file, send it to whoever updates the site with your Stripe links already on the buttons. "Add this as `/links`."

## 4. i use cursor (my path)

My site is already code, so I did this in Cursor and wired Stripe into the site. You only need this if you also have a coded site open in Cursor.

Stripe still starts in Stripe's website. Make the account. Then let Cursor connect it.

Open the project. New Agent chat. Paste:

```
i already have a website. add a /links page that works like stan store.
match the fonts, colors, and voice already on this site.

i want stripe checkout on this site for the things i sell.
walk me through the stripe account, the products, and where the keys go.
i am not a developer. explain in normal words. don't take live payments until i say so.

NAME:
PHOTO: (attached)
BUTTONS:
SHOP:
- product name / price
AFFILIATES:
SOCIALS:
```

If you don't want checkout built into the site yet, say so and paste payment-link URLs instead. That still counts. It's how everyone in sections 1 to 3 sells.

When it looks right:

```
put this live. then give me the public url.
```

Point Instagram at it. That's [what I shipped](/links).

## later

Same chat, or a new one:

```
on my links page:
- add a stripe product: [name], [price], [payment link]
- change the booking button subtitle to [this]
- hide [product] until i have the photo

i edit this in [carrd / squarespace / claude html / cursor]. tell me exactly what to change.
```

New thing to sell: new Stripe product, new payment link, new button. Don't rebuild the page.

If you actually need Stan's email flows and memberships, buy Stan. If you needed a page that looks like you and takes Stripe, you just built it.
