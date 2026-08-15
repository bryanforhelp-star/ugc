import { SITE, substackSubscribeUrl } from "./site";

export type StoreKind = "booking" | "digital";

export type StoreProduct = {
  id: string;
  kind: StoreKind;
  title: string;
  description: string;
  cta: string;
  priceLabel: string;
  stripePriceEnv: string;
  forSale: boolean;
  listed?: boolean;
  calEnv?: string;
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
 * One hour, $250. What you spend it on is listed as topics, not separate SKUs.
 * Payment happens on the calendar (Cal.com + Stripe), Stan-style: pick a time, pay there.
 */
export const SESSION = {
  priceLabel: "$250 / hour",
  kicker: "1:1 sessions",
  headline: "work with me.",
  lead: "pick a time. pay on the calendar. we spend the hour on the actual thing.",
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
      href: envUrl("AFFILIATE_WISPR", "https://wisprflow.ai"),
      perk: "voice typing",
      affiliate: true,
    },
    {
      name: "bento",
      href: envUrl("AFFILIATE_BENTO", "https://www.bentonow.com"),
      perk: "email",
      affiliate: true,
    },
    {
      name: "cursor",
      href: envUrl("AFFILIATE_CURSOR", "https://cursor.com"),
      perk: "where i build",
      affiliate: true,
    },
  ];
}

export const STORE_COPY = {
  shopLabel: "the shop",
  affiliatesLabel: "tools i actually use",
  disclosure:
    "some of these are affiliate links. i only list what i pay for and use.",
  comingSoonCta: "notify me",
  waitlistHref: substackSubscribeUrl(SITE.newsletter.substackUrl),
  calendarPending:
    "the calendar goes live once a booking link is connected. same flow as stan: pick a date, pay there.",
};

export function listedDigitalProducts() {
  return DIGITAL_PRODUCTS.filter((product) => product.listed);
}

export function allStoreProducts(): StoreProduct[] {
  return [...DIGITAL_PRODUCTS];
}

export function getStoreProduct(id: string) {
  return allStoreProducts().find((product) => product.id === id) ?? null;
}

export function getBookingCalendarUrl() {
  const base = process.env.CAL_URL?.trim().replace(/\/$/, "");
  if (!base?.startsWith("http")) return null;
  const url = new URL(base);
  if (url.hostname.includes("cal.com") && !url.searchParams.has("embed")) {
    url.searchParams.set("embed", "true");
  }
  return url.toString();
}
