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
 * Paid store on /links. Copy lives here.
 *
 * Checkout needs Stripe price ids in env. Products stay visible as coming soon
 * until forSale is true AND the matching STRIPE_PRICE_* env is set. That way
 * nobody pays for a file that is not ready.
 */
export const BOOKING: StoreProduct = {
  id: "booking",
  kind: "booking",
  title: "book a 1:1 with me",
  description:
    "30 min on content, workflow, or ai. you pay first, then you pick a time. this is not a brand deal call.",
  cta: "pay to book",
  priceLabel: "",
  stripePriceEnv: "STRIPE_PRICE_BOOKING",
  forSale: true,
};

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
  shopLabel: "the shop",
  affiliatesLabel: "tools i actually use",
  resourcesLabel: "more resources",
  disclosure:
    "some of these are affiliate links. i only list what i pay for and use.",
  comingSoonCta: "notify me",
  waitlistHref: substackSubscribeUrl(SITE.newsletter.substackUrl),
};

export function allStoreProducts(): StoreProduct[] {
  return [BOOKING, ...DIGITAL_PRODUCTS];
}

export function getStoreProduct(id: string) {
  return allStoreProducts().find((product) => product.id === id) ?? null;
}
