/** UGC portfolio site — data + asset paths for ugc.bykyndall.com */

export type UgcVideo = {
  id: string;
  poster: string;
  video: string;
  brand?: string;
  brandLogo?: string;
  tag: string;
  angle: string;
  goal: string;
};

export type UgcTestPackage = {
  brand: string;
  meta: string;
  concepts?: { label: string; videos: UgcVideo[] }[];
  videos?: UgcVideo[];
};

export const UGC_SITE = {
  title: "kyndall ramirez",
  tagline: "ugc creator & creative strategist",
  email: "kyn@bykyndall.com",
  seoDescription:
    "Kyndall Ramirez. UGC creator and creative strategist for apps, tech and SaaS. Short-form video that feels human and built to perform.",
  hero: {
    eyebrow: "portfolio",
    headline: "hi, i'm kyndall.",
    lede:
      "a ugc creator and creative strategist for apps, tech and saas. i create short-form videos that feel human, native to the feed, and built to actually perform.",
  },
  services: [
    "UGC video packages",
    "creative strategy and concepting",
    "scriptwriting and hook development",
    "UGC photography",
  ],
  contactNote: "replies within 24 hours, mon–fri.",
} as const;

export const UGC_BRANDS = [
  { name: "solvely.ai", logo: "/ugc/assets/logos/solvely-logo-text.svg", width: 140, height: 28 },
  { name: "prism ai", logo: "/ugc/assets/logos/prism.png", width: 108, height: 32 },
  { name: "honeydew", logo: "/ugc/assets/logos/honeydew.png", width: 120, height: 32 },
  { name: "cantina", logo: "/ugc/assets/logos/cantina.svg", width: 100, height: 28 },
  { name: "triips", logo: "/ugc/assets/logos/triips.png", width: 90, height: 28 },
  { name: "lovable", logo: "/ugc/assets/logos/lovable.png", width: 100, height: 28 },
] as const;

export const UGC_CLIENT_WORK: UgcVideo[] = [
  {
    id: "opal",
    poster: "/ugc/assets/posters/opal.jpg",
    video: "/ugc/assets/videos/opal.mp4",
    brand: "Opal",
    brandLogo: "/ugc/assets/logos/opal.svg",
    tag: "problem / solution",
    angle: "creative burnout / phone overstimulation.",
    goal: "drive trial by resonating with high-identification pain.",
  },
  {
    id: "preply-testimonial",
    poster: "/ugc/assets/posters/preply-testimonial.jpg",
    video: "/ugc/assets/videos/preply-testimonial.mp4",
    brand: "Preply",
    brandLogo: "/ugc/assets/logos/preply.webp",
    tag: "educational testimonial",
    angle: "structured learning vs scattered apps.",
    goal: "drive sign-ups through clarity and personalization.",
  },
  {
    id: "replit",
    poster: "/ugc/assets/posters/replit.jpg",
    video: "/ugc/assets/videos/replit.mp4",
    brand: "Replit",
    brandLogo: "/ugc/assets/logos/replit.png",
    tag: "use-case product demo",
    angle: "real-time app build from a relatable problem.",
    goal: "show that technical complexity is no longer a barrier.",
  },
  {
    id: "preply-demo",
    poster: "/ugc/assets/posters/preply-demo.jpg",
    video: "/ugc/assets/videos/preply-demo.mp4",
    brand: "Preply",
    brandLogo: "/ugc/assets/logos/preply.webp",
    tag: "educational product demo",
    angle: "structured learning vs scattered self-study.",
    goal:
      "one-to-one tutoring as the faster, clearer path to measurable progress.",
  },
];

export const UGC_TEST_PACKAGES: UgcTestPackage[] = [
  {
    brand: "prism ai",
    meta: "1 core concept · 3 hook variations",
    videos: [
      {
        id: "prism-v1",
        poster: "/ugc/assets/posters/prism-v1.jpg",
        video: "/ugc/assets/videos/prism-v1.mp4",
        tag: "product demo · hook v1",
        angle: "cutting through tech news noise in 60 seconds.",
        goal:
          "drive pro conversions by replacing scattered news feeds with focused AI updates.",
      },
      {
        id: "prism-v2",
        poster: "/ugc/assets/posters/prism-v2.jpg",
        video: "/ugc/assets/videos/prism-v2.mp4",
        tag: "product demo · hook v2",
        angle: "social identity: stay sharp on AI and tech.",
        goal:
          "drive pro conversions by making Prism feel like the obvious upgrade for tech-aware people.",
      },
      {
        id: "prism-v3",
        poster: "/ugc/assets/posters/prism-v3.jpg",
        video: "/ugc/assets/videos/prism-v3.mp4",
        tag: "product demo · hook v3",
        angle: "before / after feed transformation.",
        goal:
          "drive pro conversions by showing the tangible difference Prism makes to your daily tech news intake.",
      },
    ],
  },
  {
    brand: "honeydew",
    meta: "2 core concepts · 2 hook variations each",
    concepts: [
      {
        label: "core concept A",
        videos: [
          {
            id: "honeydew-a1",
            poster: "/ugc/assets/posters/honeydew-a1.jpg",
            video: "/ugc/assets/videos/honeydew-a1.mp4",
            tag: "problem-forward",
            angle: "saved recipes graveyard. never cooking what you save",
            goal: "Honeydew as the fix for recipe chaos to actual dinners",
          },
          {
            id: "honeydew-a2",
            poster: "/ugc/assets/posters/honeydew-a2.jpg",
            video: "/ugc/assets/videos/honeydew-a2.mp4",
            tag: "problem-forward",
            angle: "saved recipes graveyard. never cooking what you save",
            goal: "Honeydew as the fix for recipe chaos to actual dinners",
          },
        ],
      },
      {
        label: "core concept B",
        videos: [
          {
            id: "honeydew-b1",
            poster: "/ugc/assets/posters/honeydew-b1.jpg",
            video: "/ugc/assets/videos/honeydew-b1.mp4",
            tag: "demo-led",
            angle: "stop saving, start cooking. full app walkthrough",
            goal:
              "show the save, plan, shop flow that replaces the scroll",
          },
          {
            id: "honeydew-b2",
            poster: "/ugc/assets/posters/honeydew-b2.jpg",
            video: "/ugc/assets/videos/honeydew-b2.mp4",
            tag: "demo-led",
            angle: "stop saving, start cooking. full app walkthrough",
            goal:
              "show the save, plan, shop flow that replaces the scroll",
          },
        ],
      },
    ],
  },
];

export const UGC_ANALYTICS = [
  "/ugc/assets/images/analytics-2.png",
  "/ugc/assets/images/analytics-3.png",
  "/ugc/assets/images/analytics-4.png",
  "/ugc/assets/images/analytics-1.png",
] as const;
