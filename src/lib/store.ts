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
};

export type StoreLinkItem = {
  name: string;
  href: string;
  perk?: string;
  affiliate?: boolean;
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
  lead: "pick a time. pay here. we spend the hour on the actual thing.",
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
  title: "buy me a matcha",
  description: "support my work.",
  cta: "buy me a matcha",
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
 * Video editing mini course. Presale until September 1, 2026.
 * Price fallback is $49 until STRIPE_PRICE_EDITING_COURSE is set.
 */
export const EDITING_COURSE = {
  id: "editing-mini-course",
  kicker: "presale",
  title: "editing mini course",
  headline: "the editing mini course.",
  description:
    "how i cut a talking head so it holds. not a pdf dump. the edit room, as a course.",
  lead: "preorder now. you get it when it launches september 1.",
  launchLabel: "launches september 1",
  launchDate: "2026-09-01",
  priceLabel: "$49",
  amountCents: 4_900,
  cta: "preorder",
  checkoutMessage: "preorder. you get the course on september 1.",
  includes: [
    {
      name: "the talking head",
      blurb: "the cut, the breaths, the part people keep asking about.",
    },
    {
      name: "the layer on top",
      blurb: "captions, overlays, greenscreen. sitting in the frame without burying your face.",
    },
    {
      name: "the small moves",
      blurb:
        "editing is a work of art, and it doesn't have to be complicated.",
    },
  ] satisfies SessionTopic[],
};

export const EDITING_COURSE_PRODUCT: StoreProduct = {
  id: EDITING_COURSE.id,
  kind: "digital",
  title: EDITING_COURSE.title,
  description: EDITING_COURSE.description,
  cta: EDITING_COURSE.cta,
  priceLabel: EDITING_COURSE.priceLabel,
  stripePriceEnv: "STRIPE_PRICE_EDITING_COURSE",
  amountCents: EDITING_COURSE.amountCents,
  forSale: true,
  listed: true,
  status: "presale",
  photoLabel: "course",
};

export const DIGITAL_PRODUCTS: StoreProduct[] = [EDITING_COURSE_PRODUCT];

export function productPath(product: StoreProduct) {
  return `/kits/${product.id}`;
}

export function getAffiliates(): StoreLinkItem[] {
  return [
    {
      name: "wispr flow",
      href: envUrl("AFFILIATE_WISPR", "https://wisprflow.ai/r?KYNDALL8"),
      perk: "voice typing",
      affiliate: true,
    },
    {
      name: "on bento",
      href: envUrl("AFFILIATE_BENTO", "https://app.onbento.com/?acode=kyndall"),
      perk: "email",
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

