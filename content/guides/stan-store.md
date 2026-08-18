---
title: "how to build your own stan store"
description: "I needed a stan store and didn't want another subscription, so I built one on my own site with Cursor. Here's how a normal person does the same thing."
summary: "Build a Stan-style link-in-bio shop on your own site with Cursor: photo, buttons, products, affiliates, and Stripe if you sell. Host it free on Vercel and point your Instagram bio at it."
category: workflow
topics:
  - workflows
  - building
tools:
  - cursor
cover: "this is my stan store except it's not stan store"
commentKeyword: STAN
pillars:
  - how-to
  - problem-solution
tags:
  - cursor
  - workflows
  - stan
  - stripe
published: true
date: 2026-08-18
---

I needed a stan store. I didn't want to pay for yet another subscription. So I built one on my own website, with Cursor, and pointed my Instagram bio at it.

That's [bykyndall.com/links](/links). Photo, buttons, shop, affiliates. Same job Stan does. Lives on my site. Looks like me.

You do not need to know how to code. I don't write the code. I describe the page and Cursor builds it.

## what stan store actually is

Stan Store is a pretty link-in-bio with a shop attached. One URL in your Instagram. People land, tap a button, buy a thing, book a call, click your affiliate links.

The pieces are simple:

| Piece | Job |
|------|------|
| Photo + name | it's you |
| Big buttons | the main things you want people to do |
| Shop cards | digital products, if you have them |
| Affiliates | tools you actually use |
| Socials | Instagram, TikTok, YouTube, email |
| Checkout | Stripe (or whatever you already sell through) |

That's the whole product most people are paying for. Email sequences, memberships, and Stan's extras are a different thing. If you need those, maybe just buy Stan. If you need a page that is yours, keep going.

## what you need

Three accounts. Two of them can stay free.

| Account | What it's for | When |
|---------|---------------|------|
| [Cursor](https://cursor.com) | the app where you talk to AI and it makes the page | now |
| [Vercel](https://vercel.com) | puts the page on the internet. free hobby plan | when it's time to go live |
| [Stripe](https://stripe.com) | takes payments. no monthly fee, they take a cut when someone buys | only if you sell something |

Also grab: a square photo of your face, the list of links you want on the page, and (optional) a couple product photos.

You do not need a custom domain on day one. Vercel gives you a free URL like `yourname.vercel.app`. You can add `yourname.com/links` later.

## two paths

**You already have a website.** This is what I did. Open that project in Cursor and ask it to add a `/links` page that matches the rest of the site. That's [mine](/links).

**You don't have a website.** Totally fine. Cursor can make a tiny site that is just this one page, then put it live on Vercel. That's the path below.

Same prompt energy either way. The only difference is "add this to my existing site" vs "make me a new site that is only this page."

## build it

### 1. download cursor

Get it here: [cursor.com](https://cursor.com)

Open it. Start a new Agent chat. You talk in normal sentences. It makes files.

### 2. decide what's on the page

Write this down before you start. Cursor will ask anyway, and you'll go faster if you already know.

- Your name, as you want it on the page
- One line under it, or nothing
- 3 to 6 buttons. Each one needs a title, a tiny subtitle, and a URL. Examples: book a call, newsletter, portfolio, YouTube, free guides
- Products, if you have any: name, one-sentence description, price, photo. If you don't have products yet, skip this. The page still works.
- Tools / affiliates: name, URL, optional perk ("voice typing")
- Socials: Instagram, TikTok, whatever you actually use

If a button doesn't have a real URL yet, leave it off. Empty buttons look worse than a short page.

### 3. paste this into cursor

If you **don't** have a website yet:

```
i want a link-in-bio page that works like stan store, on my own site. i am not a developer. explain what you're doing in normal words.

the page should have:
- my photo and name at the top
- a stack of buttons for the main things i want people to do
- a shop section for digital products (ok if this is empty for now)
- a tools / affiliates section
- social icons at the bottom
- a small note if any links are affiliates

make it mobile-first. instagram traffic is phones.
match a simple, clean look. ask me about colors and fonts before you invent a brand.
then help me put it live for free on vercel.

ask me what's on the page before you start building. here is my list:

NAME:
PHOTO: (i'll drop the file in)
BUTTONS:
- title / subtitle / url
SHOP:
- none yet  (or: product, price, photo)
AFFILIATES:
SOCIALS:
```

If you **already** have a website, same idea, one extra sentence at the top:

```
i already have a website. add a /links page that works like stan store / link in bio.
match the fonts, colors, and voice already on this site. do not invent a new brand.

then the same list as above: photo, buttons, shop, affiliates, socials.
when it's done, help me deploy it.
```

Drop your photo into the chat with the prompt.

### 4. keep talking until it looks like you

First draft will be close and a little generic. That's normal. Stay in the same chat and correct it like you're texting a friend:

```
the photo is cropped weird. use the whole face.
make the name bigger.
this button should say "book a one-on-one with me" not "schedule a call."
lose the stock-photo vibe. it should feel like my other stuff.
phones only. the buttons are too wide on desktop, that's fine, just make sure they don't break on iphone.
```

You are directing, not coding. If something is ugly, say it's ugly. If a word isn't how you'd say it, change the word.

### 5. put it live

Once it looks right, tell Cursor:

```
put this live on vercel on the free plan. walk me through the account if i don't have one. then give me the public url.
```

You'll get a URL. Open it on your phone. If anything is off, go back to the chat and fix it, then deploy again.

### 6. point instagram at it

Instagram → Edit profile → Website.

Paste the URL. If you have a custom domain, use `yoursite.com/links`. If not, the Vercel URL is fine.

That's the switch. Old Stan link (or Linktree, or whatever) comes out. This goes in.

## if you want to sell things

You can ship the page with buttons that go to Calendly, Gumroad, Substack, whatever you already use. That's a real store. People can still pay you.

When you want checkout on the page itself, that's Stripe.

1. Make a Stripe account at [stripe.com](https://stripe.com). They'll ask for bank details. That's so they can send you money.
2. Tell Cursor:

```
i want people to pay on this site through stripe.
walk me through creating the product in stripe, then put checkout on the matching button / card.
i am not a developer. tell me exactly where the keys go. don't take payments until i say it's live.
```

Stripe doesn't charge a monthly fee. They take a small cut per sale. That's the trade: no Stan subscription, a fee when money actually moves.

I used this for 1:1 sessions (pay, then pick a time) and for digital products (even before the product file exists, the checkout path can be ready). You do not have to do both on day one.

## what i would skip at first

- A custom domain. Add it once the page is done.
- Memberships, email sequences, upsells. That's Stan-the-platform. You don't need it for a link in bio.
- Ten buttons. Three good ones beat a wall of links.
- Fake products. If you don't sell anything yet, don't put a "coming soon" graveyard on the page. Add the shop section when there's something to buy.

## steal this (later edits)

Once it's live, you shouldn't need a developer to change a title. Tell Cursor what changed:

```
on /links:
- change the booking button subtitle to "1:1 sessions. editing, content strategy, and more"
- add a button: "subscribe to my substack" / "field notes on ai and creativity" / [url]
- add an affiliate: [name], [url], perk: [short label], logo: (file attached)
- hide the shop card for [product] until i have the photo
```

That's how I actually maintain mine. The page is a list. You edit the list.

## when you should just pay for stan

If you want Stan's email flows, memberships, and "don't make me think" in one box, buy Stan. I'm not anti-software. I ran the same question I run on every tool: do I need the whole product, or do I need one job?

My one job was: a page in my bio that looks like me, sells what I make, and doesn't add another monthly bill. Cursor could do that in an afternoon because I already had a site. If you don't have a site, it's still an afternoon. Maybe two if Stripe is new to you.

If you get stuck, stay in the same Cursor chat and say "i'm stuck at [this step], tell me what to click." It will.

## what to do next

1. Write your button list. Right now, in notes.
2. Download Cursor.
3. Paste the prompt. Drop in a photo.
4. Get a Vercel URL. Open it on your phone.
5. Paste that URL into Instagram.

When you want to see a finished one, [this is mine](/links).
