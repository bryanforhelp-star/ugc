import { SITE, substackSubscribeUrl } from "./site";

export type StoreKind = "booking" | "digital";

export type StoreProduct = {
  id: string;
  kind: StoreKind;
  title: string;
  description: string;
  cta: string;
  /** Display price. For a live 1:1, Stripe is the source of truth once a price id is set. */
  priceLabel: string;
  stripePriceEnv: string;
  /** When false, the card shows but checkout is off. Notify-me instead of take payment. */
  forSale: boolean;
  /** Server env that holds this session's calendar URL. Booking only. */
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

function envUrl(name: string, fallback: string) {
  const value = process.env[name]?.trim();
  if (value?.startsWith("http")) return value;
  return fallback;
}

/**
 * Paid 1:1 sessions. Add another object here to offer a new type.
 * Checkout goes live when that session's STRIPE_PRICE_* and CAL_URL_* env are set.
 */
export const SESSIONS: StoreProduct[] = [
  {
    id: "content-strategy",
    kind: "booking",
    title: "content strategy",
    description:
      "a 1:1 on what you're making, why it's stalling, and what to do next.",
    cta: "pay to book",
    priceLabel: "",
    stripePriceEnv: "STRIPE_PRICE_CONTENT_STRATEGY",
    calEnv: "CAL_URL_CONTENT_STRATEGY",
    forSale: true,
  },
  {
    id: "ai-integrations",
    kind: "booking",
    title: "ai integrations",
    description:
      "a 1:1 on putting ai into the work you already do. workflows, not a tool dump.",
    cta: "pay to book",
    priceLabel: "",
    stripePriceEnv: "STRIPE_PRICE_AI_INTEGRATIONS",
    calEnv: "CAL_URL_AI_INTEGRATIONS",
    forSale: true,
  },
];

export const DIGITAL_PRODUCTS: StoreProduct[] = [
  {
    id: "editing-mini-guide",
    kind: "digital",
    title: "editing mini guide",
    description:
      "how i cut, caption, and animate a talking head clip. instant download.",
    cta: "get the guide",
    priceLabel: "$19",
    stripePriceEnv: "STRIPE_PRICE_EDITING_GUIDE",
    forSale: false,
    photoLabel: "guide photo",
  },
  {
    id: "ugc-starter-kit",
    kind: "digital",
    title: "ugc starter kit",
    description:
      "rate card, pitch templates, and the outreach tracker i use to land brand deals.",
    cta: "get the kit",
    priceLabel: "$39",
    stripePriceEnv: "STRIPE_PRICE_UGC_KIT",
    forSale: false,
    photoLabel: "kit photo",
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
  ];
}

export const RESOURCES: StoreLinkItem[] = [
  {
    name: "cursor",
    href: "https://cursor.com",
    perk: "where i build",
  },
  {
    name: "claude",
    href: "https://claude.ai",
    perk: "where i think",
  },
  {
    name: "free guides",
    href: "/guides",
    perk: "steal these",
  },
];

export const STORE_COPY = {
  sessionsLabel: "1:1 sessions",
  shopLabel: "the shop",
  affiliatesLabel: "tools i actually use",
  resourcesLabel: "more resources",
  disclosure:
    "some of these are affiliate links. i only list what i pay for and use.",
  comingSoonCta: "notify me",
  waitlistHref: substackSubscribeUrl(SITE.newsletter.substackUrl),
  sessionsLead:
    "pick the kind of 1:1 you want. you pay first, then you pick a time.",
  sessionsPending:
    "paid booking is wired up. each session goes live once its stripe price and calendar link are connected.",
};

export function allStoreProducts(): StoreProduct[] {
  return [...SESSIONS, ...DIGITAL_PRODUCTS];
}

export function getStoreProduct(id: string) {
  return allStoreProducts().find((product) => product.id === id) ?? null;
}
