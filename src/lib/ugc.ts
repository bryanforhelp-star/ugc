/** UGC portfolio site — copy + work grid for ugc.bykyndall.com */

import type { TrustedBrand } from "@/lib/site";
import { getUgcOrganicPieces } from "@/lib/video-portfolio";

export const UGC_TAGS = [
  "apps",
  "tech",
  "education",
  "software",
  "SaaS",
] as const;

export type UgcTag = (typeof UGC_TAGS)[number];

export type UgcWorkPiece = {
  id: string;
  video: string;
  poster: string;
  brand: string;
  brandLogo: string;
  brandLogoWidth?: number;
  brandLogoHeight?: number;
  /** short format label, e.g. "variation testing" */
  category?: string;
  /** vertical tags shown on the card and used to filter the grid */
  tags: UgcTag[];
  /** one line under the video */
  summary?: string;
  product: string;
  variants?: UgcCaseVariant[];
};

export type UgcOrganicPiece = {
  id: string;
  video?: string;
  poster?: string;
  title?: string;
  edits?: string[];
};

export type UgcCaseStat = {
  value: string;
  label: string;
  note?: string;
};

export type UgcCaseVariant = {
  id: string;
  label: string;
  video: string;
  poster: string;
  /** highlight the winning creative */
  featured?: boolean;
};

export type UgcCaseStudy = {
  id: string;
  brand: string;
  brandLogo: string;
  brandLogoWidth?: number;
  brandLogoHeight?: number;
  /** e.g. "meta ads · 3 scripts, 4 hooks" */
  brief: string;
  channel: string;
  title: string;
  product: string;
  description: string;
  resultNote?: string;
  sourceNote?: string;
  detailStats?: UgcCaseStat[];
  detailNote?: string;
  stats: UgcCaseStat[];
  takeaway: string;
  variants: UgcCaseVariant[];
};

export const UGC_SITE = {
  title: "kyndall",
  seoDescription:
    "Kyndall Ramirez. UGC creator and creative strategist for apps, tech, education, software and SaaS. Short-form video that feels human and built to perform.",
  email: "kyn@bykyndall.com",
  heroSub: [
    "i create content that",
    "helps brands show up native",
    "to the feed, feel human, and",
    "actually perform.",
  ],
  organicIntro:
    "content from my channel. ai, building, and real problems.",
  adsIntro: "short-form ads for brands running paid social.",
  workWithMeLead:
    "paid ads and organic content for brands that want to show up native in the feed.",
  services: [
    "UGC video packages",
    "variation testing packages",
    "organic short-form content",
    "creative strategy and concepting",
  ],
} as const;

export const UGC_BRANDS: readonly TrustedBrand[] = [
  { name: "preply", logo: "/ugc/assets/logos/preply-wordmark.png", width: 140, height: 41 },
  { name: "wispr flow", logo: "/links/logos/wispr.png", width: 40, height: 40 },
  { name: "arcads", logo: "/brands/arcads.svg", width: 141, height: 32 },
  { name: "doola", logo: "/brands/doola.png", width: 120, height: 34 },
  { name: "cantina", logo: "/brands/cantina.png", width: 132, height: 24 },
  { name: "prism ai", logo: "/ugc/assets/logos/prism.png", width: 108, height: 30 },
  { name: "solvely.ai", logo: "/brands/solvely.png", width: 140, height: 33 },
  { name: "honeydew", logo: "/ugc/assets/logos/honeydew.png", width: 120, height: 32 },
];

export const UGC_CASE_STUDIES: UgcCaseStudy[] = [
  {
    id: "honeydew",
    brand: "Honeydew",
    brandLogo: "/ugc/assets/logos/honeydew.png",
    brandLogoWidth: 120,
    brandLogoHeight: 32,
    brief: "meta ads · script & hook testing",
    channel: "paid social",
    title: "finding the message that converts.",
    product: "subscription app",
    description: "three scripts, four hooks. testing different ways into the same app.",
    stats: [
      {
        value: "$1.05",
        label: "cost per install",
      },
      {
        value: "25%",
        label: "below benchmark",
        note: "$22.39 per subscription vs. the brand’s $30 benchmark",
      },
    ],
    takeaway:
      "script a brought in more subscriptions than script b at the same cost per install.",
    variants: [
      {
        id: "honeydew-a1",
        label: "script a · hook 1",
        video: "/ugc/assets/videos/honeydew-a1.mp4",
        poster: "/ugc/assets/posters/honeydew-a1.jpg",
        featured: true,
      },
      {
        id: "honeydew-a2",
        label: "script a · hook 2",
        video: "/ugc/assets/videos/honeydew-a2.mp4",
        poster: "/ugc/assets/posters/honeydew-a2.jpg",
      },
      {
        id: "honeydew-b1",
        label: "script b · hook 1",
        video: "/ugc/assets/videos/honeydew-b1.mp4",
        poster: "/ugc/assets/posters/honeydew-b1.jpg",
      },
      {
        id: "honeydew-b2",
        label: "script b · hook 2",
        video: "/ugc/assets/videos/honeydew-b2.mp4",
        poster: "/ugc/assets/posters/honeydew-b2.jpg",
      },
    ],
  },
  {
    id: "arcads-organic",
    brand: "Arcads",
    brandLogo: "/brands/arcads.svg",
    brandLogoWidth: 141,
    brandLogoHeight: 32,
    channel: "organic social",
    brief: "instagram · @withkyndall · unboosted",
    title: "a campaign for a brand that doesn’t exist.",
    product: "generative AI video tool",
    description: "building an entire ugc campaign for a fictional brand using arcads, then showing the process.",
    stats: [
      { value: "15,267", label: "organic views" },
      { value: "740", label: "saves" },
      { value: "495", label: "shares" },
    ],
    resultNote: "205 follows from this reel",
    takeaway: "the reel showed the process, with a guide for people who wanted to try it themselves.",
    sourceNote: "posted sep 1, 2026 · insights as of sep 24, 2026",
    detailStats: [
      { value: "15,267", label: "views" },
      { value: "9,743", label: "viewers" },
      { value: "16.03s", label: "average watch time" },
      { value: "481", label: "likes" },
      { value: "916", label: "comments" },
      { value: "21", label: "reposts" },
      { value: "495", label: "shares" },
      { value: "740", label: "saves" },
      { value: "205", label: "follows" },
    ],
    detailNote: "instagram reel insights + edits export. the caption invited viewers to comment “ads” for the process guide. this reel was not boosted.",
    variants: [{
      id: "arcads-organic-reel",
      label: "process walkthrough · 38 seconds",
      video: "/ugc/assets/videos/anyway.mp4",
      poster: "/ugc/assets/posters/anyway.jpg",
    }],
  },
];

export const UGC_WORK_PIECES: UgcWorkPiece[] = [
  {
    id: "arcads",
    video: "/ugc/assets/videos/arcads.mp4",
    poster: "/ugc/assets/posters/arcads.jpg",
    brand: "Arcads",
    brandLogo: "/brands/arcads.svg",
    brandLogoWidth: 141,
    brandLogoHeight: 32,
    category: "product demo",
    product: "generative AI video tool",
    tags: ["apps", "tech", "software"],
    summary: "the most annoying part of making ugc ads, then the shortcut.",
  },
  {
    id: "doola-h1",
    video: "/ugc/assets/videos/doola-h1.mp4",
    poster: "/ugc/assets/posters/doola-h1.jpg",
    brand: "Doola",
    brandLogo: "/brands/doola.png",
    brandLogoWidth: 120,
    brandLogoHeight: 34,
    category: "variation testing",
    product: "business formation platform",
    tags: ["tech", "software", "SaaS"],
    summary: "same offer. two different hooks, built to test against each other.",
    variants: [
      { id: "doola-a", label: "hook a", video: "/ugc/assets/videos/doola-h1.mp4", poster: "/ugc/assets/posters/doola-h1.jpg" },
      { id: "doola-b", label: "hook b", video: "/ugc/assets/videos/doola-h2.mp4", poster: "/ugc/assets/posters/doola-h2.jpg" },
    ],
  },
  {
    id: "opal",
    video: "/ugc/assets/videos/opal.mp4",
    poster: "/ugc/assets/posters/opal.jpg",
    brand: "Opal",
    brandLogo: "/ugc/assets/logos/opal-wordmark.png",
    brandLogoWidth: 130,
    brandLogoHeight: 61,
    category: "problem / solution",
    product: "focus & screen-time app",
    tags: ["apps", "tech"],
    summary: "creative burnout and phone overstimulation.",
  },
];

/** Organic channel content — synced from video-portfolio.ts */
export const UGC_ORGANIC_PIECES: UgcOrganicPiece[] = getUgcOrganicPieces();
