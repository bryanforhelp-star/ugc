import { SITE, substackSubscribeUrl } from "./site";

export type LinksButton = {
  title: string;
  sub: string;
  href: string;
  /** Omit or true to show. Needs a real href. */
  published?: boolean;
};

export type LinksProduct = {
  id: string;
  title: string;
  description: string;
  cta: string;
  price: string;
  href: string;
  image?: string;
  published?: boolean;
};

export type LinksAffiliate = {
  name: string;
  perk: string;
  href: string;
  published?: boolean;
};

/**
 * Link in bio at /links. Edit this file to change copy and destinations.
 *
 * Products and affiliates only render when published: true and href is a
 * real URL (stripe payment link, referral link, etc).
 */
export const LINKS_PAGE = {
  title: "kyndall",
  description: "everything i make, in one place.",
  name: "hi, i'm kyndall.",
  tagline: "making ai feel more creative. everything i make, in one place.",
  avatar: "/links/avatar.jpg",
  buttons: [
    {
      title: "see my ugc portfolio",
      sub: "recent brand work and edits",
      href: "/ugc",
    },
    {
      title: "work with me",
      sub: "brands, collabs, content, or a 1:1",
      href: "/work-with-me",
    },
    {
      title: "book a 1:1 with me",
      sub: "30 min on content, workflow, or ai",
      href: "",
      published: false,
    },
    {
      title: "subscribe to my substack",
      sub: "human.md, field notes on ai and creativity",
      href: substackSubscribeUrl(SITE.newsletter.substackUrl),
    },
    {
      title: "explore my free guides",
      sub: "templates and workflows on bykyndall.com",
      href: "/guides",
    },
  ] satisfies LinksButton[],
  products: [
    {
      id: "editing-mini-guide",
      title: "editing mini guide",
      description:
        "how i cut, caption, and animate a talking head clip. instant download.",
      cta: "get the guide",
      price: "$19",
      href: "",
      image: "",
      published: false,
    },
    {
      id: "ugc-starter-kit",
      title: "ugc starter kit",
      description:
        "rate card, pitch templates, and the outreach tracker i use to land brand deals.",
      cta: "get the kit",
      price: "$39",
      href: "",
      image: "",
      published: false,
    },
  ] satisfies LinksProduct[],
  affiliates: [
    {
      name: "wispr flow",
      perk: "1 month free",
      href: "",
      published: false,
    },
    {
      name: "bento",
      perk: "",
      href: "",
      published: false,
    },
  ] satisfies LinksAffiliate[],
  disclosure:
    "some of these are affiliate links. i only list what i pay for and use.",
  social: [
    { href: SITE.social.instagram, label: "instagram", short: "ig" },
    { href: SITE.social.tiktok, label: "tiktok", short: "tt" },
    { href: SITE.social.youtube, label: "youtube", short: "yt" },
    { href: SITE.social.email, label: "email", short: "@" },
  ],
} as const;

function isLiveHref(href: string) {
  return Boolean(href) && !href.startsWith("#");
}

export function liveButtons() {
  return LINKS_PAGE.buttons.filter(
    vis => vis.published !== false && isLiveHref(vis.href),
  );
}

export function liveProducts() {
  return LINKS_PAGE.products.filter(
    vis => vis.published !== false && isLiveHref(vis.href),
  );
}

export function liveAffiliates() {
  return LINKS_PAGE.affiliates.filter(
    vis => vis.published !== false && isLiveHref(vis.href),
  );
}
