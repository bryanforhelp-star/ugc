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
};

export type UgcOrganicPiece = {
  id: string;
  video?: string;
  poster?: string;
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
    tags: ["apps", "tech", "software"],
    summary: "the most annoying part of making ugc ads, then the shortcut.",
  },
  {
    id: "anyway",
    video: "/ugc/assets/videos/anyway.mp4",
    poster: "/ugc/assets/posters/anyway.jpg",
    brand: "Arcads",
    brandLogo: "/brands/arcads.svg",
    brandLogoWidth: 141,
    brandLogoHeight: 32,
    tags: ["apps", "tech"],
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
    tags: ["tech", "software", "SaaS"],
    summary: "hook A from a multi-hook package built to test before scaling.",
  },
  {
    id: "doola-h2",
    video: "/ugc/assets/videos/doola-h2.mp4",
    poster: "/ugc/assets/posters/doola-h2.jpg",
    brand: "Doola",
    brandLogo: "/brands/doola.png",
    brandLogoWidth: 120,
    brandLogoHeight: 34,
    category: "variation testing",
    tags: ["tech", "software", "SaaS"],
    summary: "hook B, same offer, built to run against hook A.",
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
    tags: ["apps", "tech"],
    summary: "creative burnout and phone overstimulation.",
  },
];

/** Organic channel content — synced from video-portfolio.ts */
export const UGC_ORGANIC_PIECES: UgcOrganicPiece[] = getUgcOrganicPieces();
