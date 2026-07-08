/** UGC portfolio site — copy + work grid for ugc.bykyndall.com */

import type { TrustedBrand } from "@/lib/site";

export type UgcWorkPiece = {
  id: string;
  video: string;
  poster: string;
  brand: string;
  brandLogo: string;
  brandLogoWidth?: number;
  brandLogoHeight?: number;
  /** e.g. "PROBLEM / SOLUTION" — shown in brackets under the logo */
  category?: string;
  angle?: string;
  goal?: string;
};

export type UgcOrganicPiece = {
  id: string;
  video?: string;
  poster?: string;
};

export const UGC_SITE = {
  title: "kyndall",
  seoDescription:
    "Kyndall Ramirez. UGC creator and creative strategist for apps, tech and SaaS. Short-form video that feels human and built to perform.",
  email: "kyn@bykyndall.com",
  heroSub: [
    "i create content that",
    "helps brands show up native",
    "to the feed, feel human, and",
    "actually perform.",
  ],
  organicIntro:
    "content from my channel. ai, building, and real problems.",
  adsIntro:
    "variation testing packages. multiple hooks and ctas built so brands can test before scaling.",
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
  { name: "doola", logo: "/brands/doola.png", width: 120, height: 34 },
  { name: "cantina", logo: "/brands/cantina.png", width: 132, height: 24 },
  { name: "prism ai", logo: "/ugc/assets/logos/prism.png", width: 108, height: 30 },
  { name: "solvely.ai", logo: "/brands/solvely.png", width: 140, height: 33 },
  { name: "honeydew", logo: "/ugc/assets/logos/honeydew.png", width: 120, height: 32 },
];

export const UGC_WORK_PIECES: UgcWorkPiece[] = [
  {
    id: "doola-h1",
    video: "/ugc/assets/videos/doola-h1.mp4",
    poster: "/ugc/assets/posters/doola-h1.jpg",
    brand: "Doola",
    brandLogo: "/brands/doola.png",
    brandLogoWidth: 120,
    brandLogoHeight: 34,
    category: "VARIATION TESTING PACKAGE",
    angle: "hook variation A. different opener, same core offer.",
    goal: "part of a multi-hook package I built so doola could test angles before scaling paid spend.",
  },
  {
    id: "doola-h2",
    video: "/ugc/assets/videos/doola-h2.mp4",
    poster: "/ugc/assets/posters/doola-h2.jpg",
    brand: "Doola",
    brandLogo: "/brands/doola.png",
    brandLogoWidth: 120,
    brandLogoHeight: 34,
    category: "VARIATION TESTING PACKAGE",
    angle: "hook variation B. second creative for the same testing sprint.",
    goal: "built to run against variation A and see what wins before the brand scales.",
  },
  {
    id: "opal",
    video: "/ugc/assets/videos/opal.mp4",
    poster: "/ugc/assets/posters/opal.jpg",
    brand: "Opal",
    brandLogo: "/ugc/assets/logos/opal-wordmark.png",
    brandLogoWidth: 130,
    brandLogoHeight: 61,
    category: "PROBLEM / SOLUTION",
    angle: "creative burnout / phone overstimulation.",
    goal: "drive trial by resonating with high-identification pain.",
  },
  {
    id: "preply-testimonial",
    video: "/ugc/assets/videos/preply-testimonial.mp4",
    poster: "/ugc/assets/posters/preply-testimonial.jpg",
    brand: "Preply",
    brandLogo: "/ugc/assets/logos/preply-wordmark.svg",
    brandLogoWidth: 108,
    brandLogoHeight: 28,
    category: "EDUCATIONAL TESTIMONIAL",
    angle: "structured learning vs scattered apps.",
    goal: "drive sign-ups through clarity + personalization.",
  },
  {
    id: "replit",
    video: "/ugc/assets/videos/replit.mp4",
    poster: "/ugc/assets/posters/replit.jpg",
    brand: "Replit",
    brandLogo: "/ugc/assets/logos/replit-wordmark.svg",
    brandLogoWidth: 128,
    brandLogoHeight: 32,
    category: "USE-CASE PRODUCT DEMO",
    angle: "real-time app build from a relatable problem.",
    goal: "show that technical complexity is no longer a barrier.",
  },
  {
    id: "prism",
    video: "/ugc/assets/videos/prism-v1.mp4",
    poster: "/ugc/assets/posters/prism-v1.jpg",
    brand: "Prism AI",
    brandLogo: "/ugc/assets/logos/prism.png",
    brandLogoWidth: 108,
    brandLogoHeight: 30,
    category: "PRODUCT DEMO · HOOK V1",
    angle: "cutting through tech news noise in 60 seconds.",
    goal: "drive pro conversions by replacing scattered news feeds with focused AI updates.",
  },
];

/** Organic channel content — add videos to public/showcase/ */
export const UGC_ORGANIC_PIECES: UgcOrganicPiece[] = [
  {
    id: "01",
    video: "/showcase/01.mp4",
    poster: "/showcase/01-poster.jpg",
  },
  {
    id: "02",
    video: "/showcase/02.mp4",
    poster: "/showcase/02-poster.jpg",
  },
  { id: "03" },
  { id: "04" },
];
