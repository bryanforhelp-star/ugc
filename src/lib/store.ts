import { SITE, substackSubscribeUrl } from "./site";

export type StoreKind = "booking" | "digital";
export type DigitalStatus = "presale" | "live";

export type StoreProduct = {
  id: string;
  kind: StoreKind;
  title: string;
  description: string;
  cta: string;
  priceLabel: string;
  stripePriceEnv?: string;
  /** Used when no Stripe Price object exists yet. Stripe still takes its cut. */
  amountCents?: number;
  forSale: boolean;
  listed?: boolean;
  status?: DigitalStatus;
  image?: string;
  photoLabel?: string;
  cardCta?: string;
};

export type StoreLinkItem = {
  name: string;
  href: string;
  perk?: string;
  affiliate?: boolean;
  logo?: string;
};

export type SessionTopic = {
  name: string;
  blurb: string;
};

function envUrl(name: string, fallback: string) {
  const value = process.env[name]?.trim();
  if (value?.startsWith("http")) return value;
  return fallback;
}

/**
 * One hour, $200. Pick a time on the site, pay through Stripe. No Calendly.
 * Hours are Bali (WITA, no DST). The calendar shows them in the visitor's timezone.
 */
export const SESSION = {
  id: "session-hour",
  priceLabel: "$200 / hour",
  amountCents: 20_000,
  durationMin: 60,
  timezone: "Asia/Makassar",
  timezoneLabel: "bali",
  /** 0 = Sun. Monday through Thursday. */
  days: [1, 2, 3, 4],
  startHour: 8,
  /** Exclusive. Last session starts at 6pm bali and ends at 7pm. */
  endHour: 19,
  /** Today and tomorrow are closed. Earliest bookable is the day after tomorrow, bali time. */
  minNoticeDays: 2,
  daysAhead: 21,
  kicker: "1:1 sessions",
  headline: "work with me.",
  lead: "pick a time here. we spend the hour going through what you need.",
  reasons: [
    "editing",
    "content strategy",
    "ugc",
    "a build",
    "something else",
  ],
  topics: [
    {
      name: "editing",
      blurb: "the cut, the captions, the thing that makes a talking head hold.",
    },
    {
      name: "content strategy",
      blurb: "what you're making, why it's stalling, what to do next.",
    },
    {
      name: "and more",
      blurb: "a workflow, a page, a build. bring what's actually on your plate.",
    },
  ] satisfies SessionTopic[],
};

export const SESSION_PRODUCT: StoreProduct = {
  id: SESSION.id,
  kind: "booking",
  title: "1:1 session",
  description: "one hour. editing, content strategy, or whatever you bring.",
  cta: "pay for this hour",
  priceLabel: SESSION.priceLabel,
  stripePriceEnv: "STRIPE_PRICE_SESSION",
  amountCents: SESSION.amountCents,
  forSale: true,
};

export const COFFEE: StoreProduct = {
  id: "coffee",
  kind: "digital",
  title: "buy me a matcha (or two)",
  description: "support my work.",
  cta: "buy me a matcha (or two)",
  priceLabel: "$5",
  stripePriceEnv: "STRIPE_PRICE_COFFEE",
  amountCents: 500,
  image: "/cursors/matcha-cutout.png",
  forSale: true,
  listed: false,
};

export const MATCHA_TIPS = {
  amounts: [
    { label: "$5", cents: 500 },
    { label: "$10", cents: 1000 },
  ],
  customLabel: "custom",
  minCents: 100,
  maxCents: 50_000,
} as const;

/**
 * Editing mini guide. Presale until September 1, 2026.
 * Checkout uses $25 from amountCents. Ignore any leftover $49 Stripe Price.
 */
export const EDITING_GUIDE = {
  id: "editing-mini-guide",
  kicker: "presale",
  title: "editing mini guide",
  headline: "how i edit my yaps.",
  description:
    "how i edit my yaps. the cuts, the captions, the little bits that make it hold.",
  lead: "preorder now. you get it when it drops september 1.",
  launchLabel: "you get it september 1",
  launchDate: "2026-09-01",
  priceLabel: "$25",
  amountCents: 2_500,
  cta: "preorder",
  cardCta: "see the guide",
  checkoutMessage: "preorder. you get the guide on september 1.",
  includes: [
    {
      name: "the cuts",
      blurb: "what stays in a yap, what gets thrown, where it actually starts.",
    },
    {
      name: "the words",
      blurb: "captions that read like you, not like a tutorial.",
    },
    {
      name: "the extra bits",
      blurb: "overlays and greenscreen that sit in the frame without taking over.",
    },
    {
      name: "transitions and keyframes",
      blurb: "how a clip actually moves. not 40 random packs.",
    },
    {
      name: "movements",
      blurb: "the bump, the zoom, the tiny push that makes it feel cut by a person.",
    },
    {
      name: "sound effects",
      blurb: "the exact ones i use. not a folder of 400 whooshes.",
    },
    {
      name: "pinterest board",
      blurb: "my favorite on-screen elements, in one board you can steal from.",
    },
    {
      name: "LUTs",
      blurb: "the looks i actually put on my yaps.",
    },
  ] satisfies SessionTopic[],
};

export const EDITING_GUIDE_PRODUCT: StoreProduct = {
  id: EDITING_GUIDE.id,
  kind: "digital",
  title: EDITING_GUIDE.title,
  description: EDITING_GUIDE.description,
  cta: EDITING_GUIDE.cta,
  priceLabel: EDITING_GUIDE.priceLabel,
  amountCents: EDITING_GUIDE.amountCents,
  forSale: true,
  listed: true,
  status: "presale",
  image: "/shop/editing-guide.png",
  photoLabel: "editing guide",
  cardCta: EDITING_GUIDE.cardCta,
};

export const DIGITAL_PRODUCTS: StoreProduct[] = [EDITING_GUIDE_PRODUCT];

export function productPath(product: StoreProduct) {
  return `/kits/${product.id}`;
}

export function getAffiliates(): StoreLinkItem[] {
  return [
    {
      name: "wispr flow",
      href: envUrl("AFFILIATE_WISPR", "https://wisprflow.ai/r?KYNDALL8"),
      perk: "voice typing",
      logo: "/links/logos/wispr.png",
      affiliate: true,
    },
    {
      name: "on bento",
      href: envUrl("AFFILIATE_BENTO", "https://app.onbento.com/?acode=kyndall"),
      perk: "UGC outreach",
      logo: "/links/logos/bento.png",
      affiliate: true,
    },
  ];
}

export const STORE_COPY = {
  shopLabel: "the shop",
  affiliatesLabel: "tools i actually use",
  disclosure:
    "Some of these are affiliate links. I only list the things I actually love.",
  comingSoonCta: "notify me",
  waitlistHref: substackSubscribeUrl(SITE.newsletter.substackUrl),
};

export function listedDigitalProducts() {
  return DIGITAL_PRODUCTS.filter((product) => product.listed);
}

export function allStoreProducts(): StoreProduct[] {
  return [...DIGITAL_PRODUCTS, SESSION_PRODUCT, COFFEE];
}

export function getStoreProduct(id: string) {
  return allStoreProducts().find((product) => product.id === id) ?? null;
}

export function getDigitalProduct(id: string) {
  return DIGITAL_PRODUCTS.find((product) => product.id === id) ?? null;
}

export function getListedDigitalProduct(id: string) {
  return listedDigitalProducts().find((product) => product.id === id) ?? null;
}

