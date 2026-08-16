import { SITE, substackSubscribeUrl } from "./site";

export type StoreKind = "booking" | "digital";

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

/** Kept for a later checkout, not shown until the product is actually worth selling. */
export const DIGITAL_PRODUCTS: StoreProduct[] = [
  {
    id: "editing-mini-course",
    kind: "digital",
    title: "editing mini course",
    description:
      "how i cut a talking head so it holds. not a pdf dump. not listed until it's ready.",
    cta: "get the course",
    priceLabel: "",
    stripePriceEnv: "STRIPE_PRICE_EDITING_COURSE",
    forSale: false,
    listed: false,
    photoLabel: "course",
  },
];

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

