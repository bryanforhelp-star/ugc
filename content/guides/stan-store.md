---
title: "how to build your own stan store"
description: "I needed a stan store and didn't want another subscription, so I added a page to the website I already had. You can do this in Claude. You do not need Cursor."
summary: "Add a Stan-style links page to the website you already have. Claude writes the page. Cursor is optional. Point your Instagram bio at it."
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
published: true
date: 2026-08-18
updated: 2026-08-18
---

I needed a stan store. I didn't want another subscription. I already had a website, so I added a page to it and pointed my Instagram bio there.

That's [bykyndall.com/links](/links). Photo, buttons, shop, affiliates. Same job Stan does. Lives on my site.

You do not need to know how to code. You do not need Cursor. If you already have a website, you already have the hard part.

## what you're making

A link-in-bio with a shop attached. One URL in Instagram. People land, tap a button, buy a thing, book a call, click your affiliates.

| Piece | Job |
|------|------|
| Photo + name | it's you |
| Big buttons | the main things you want people to do |
| Shop cards | digital products, if you have them |
| Affiliates | tools you actually use |
| Socials | Instagram, TikTok, whatever you use |

Checkout can wait. On day one, a button that goes to Calendly, Gumroad, or a Stripe payment link is a store.

If you need Stan's email sequences and memberships, buy Stan. This is for the page.

## write your list first

Do this in notes, before you open anything.

- Your name, as you want it on the page
- 3 to 6 buttons. Each one needs a title, a short subtitle, and a real URL. Book a call, newsletter, portfolio, YouTube, free guides.
- Products, if you have any: name, one sentence, price, photo. None is fine.
- Affiliates: name, URL, optional perk
- Socials you actually use
- A square photo of your face

If a button doesn't have a real URL yet, leave it off. Empty buttons look worse than a short page.

## if you already have a website

Start here. This is the simple way.

Carrd, Framer, Squarespace, Wix, Notion, Webflow, a site someone built for you. Doesn't matter. You are adding one page, not starting over.

1. Open [Claude](https://claude.ai). A normal chat. No project required.
2. Paste the prompt below. Fill in your list. Drop in your photo.
3. Tell it what your website already is. "I have Carrd." "I have Squarespace." "I have a custom site."
4. Claude tells you exactly what to add, in the tool you already use. Blocks, copy, order, what to click.
5. Publish the page. Name it something like `/links` if your site lets you pick a URL.
6. Instagram → Edit profile → Website → paste `yoursite.com/links` (or whatever URL you got).

That's the whole thing. Old Stan or Linktree comes out. This goes in.

### paste this into claude

```
i already have a website. i want to add a stan-store-style link-in-bio page to it. i am not a developer.

my site is: [carrd / framer / squarespace / wix / notion / webflow / something else: ___]

the page should have:
- my photo and name at the top
- a stack of buttons
- a shop section only if i have products
- a tools / affiliates section
- socials at the bottom
- a small note if any links are affiliates

match the look of my existing site. do not invent a new brand.
make it for phones. instagram traffic is phones.

do not make me download new apps. tell me what to click in the site i already have.
if my site is code and i can't edit it myself, say so and give me the page as a single html file i can send to whoever handles the site.

here's my list:

NAME:
PHOTO: (attached)
BUTTONS:
- title / subtitle / url
SHOP:
- none yet
AFFILIATES:
SOCIALS:
```

Stay in the same chat and correct it. "That word isn't how I talk." "Make the name bigger." "This button should say book a one-on-one, not schedule a call."

## if you only use claude

You don't need Cursor. Claude is enough.

**You have a website.** Use the prompt above. Claude is the one telling you what to click.

**You don't have a website.** Say that out loud in the chat:

```
i don't have a website and i don't have cursor. i only use claude.

make me a stan-store-style link-in-bio as a single html file i can open on my phone.
then walk me through the easiest free way to get a public url for it. i am not a developer. one tool, as few clicks as possible.

here's my list:
[paste the same list]
```

Claude will give you the file, then walk you through putting it online. Don't pick a host in advance. Let it pick the simplest one and tell you what to click. When you have a URL, put that in Instagram.

You still don't need Cursor.

## if you don't have cursor

That's fine. Cursor is only useful if your website is code and you want AI to edit the files for you. I used it because that's what my site is.

If your site is Carrd, Framer, Squarespace, or anything with a visual editor, Cursor will not help you. Claude plus the editor you already have is the path.

If your site is code and you can't touch it, two options:

1. Stay in Claude. Get the HTML file. Send it to whoever updates the site. "Add this as `/links`."
2. Later, if you want to do it yourself, that's when you download [Cursor](https://cursor.com). Not today.

## if you have cursor (optional)

This is what I did, because my site is already code.

Open the project in Cursor. Start an Agent chat. Paste this:

```
i already have a website. add a /links page that works like stan store / link in bio.
match the fonts, colors, and voice already on this site. do not invent a new brand.
i am not a developer. explain what you're doing in normal words.
when it's done, help me deploy it.

here's my list:
[same list as above]
```

Drop the photo in. Keep talking until it looks like you. Then:

```
put this live. walk me through it if i don't know how. then give me the public url.
```

That's the extra power: Cursor edits the files and helps you deploy. You do not need this to have a links page.

## if you want to sell things

Do not wire checkout into the page on day one.

Point a button at whatever you already use: Calendly, Gumroad, Substack, a [Stripe payment link](https://stripe.com/payments/payment-links). People can pay you. The page is still a store.

Stripe payment links are a URL. You make them in Stripe's website. You paste them on a button. No code.

Native checkout on the site itself is a later job, and it's the one place Cursor actually earns its keep. Skip it until the page is live and you hate the extra click.

## what i would skip at first

- A new website. Use the one you have.
- Cursor, if you don't already use it.
- A custom domain. Add it once the page is done.
- Memberships and email sequences. That's Stan-the-platform.
- Ten buttons. Three good ones beat a wall of links.
- Fake products. No "coming soon" graveyard.

## steal this (later edits)

When something changes, go back to the same Claude chat (or a new one) and say:

```
on my links page:
- change the booking button subtitle to "1:1 sessions. editing, content strategy, and more"
- add a button: "subscribe to my substack" / "field notes on ai and creativity" / [url]
- add an affiliate: [name], [url], perk: [short label]
- hide the shop card for [product] until i have the photo

i edit this in [carrd / squarespace / cursor / etc]. tell me exactly what to change.
```

The page is a list. You edit the list.

## when you should just pay for stan

If you want Stan's email flows, memberships, and "don't make me think" in one box, buy Stan. I ran the same question I run on every tool: do I need the whole product, or do I need one job?

My one job was a page in my bio that looks like me and sells what I make, without another monthly bill. I already had a website, so I added a page.

## what to do next

1. Write your button list. Right now, in notes.
2. Open Claude.
3. Paste the "i already have a website" prompt. If you don't have a website, paste the other one.
4. Publish the page. Open it on your phone.
5. Paste that URL into Instagram.

When you want to see a finished one, [this is mine](/links).
