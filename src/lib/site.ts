/** Site labels — change display names here; URLs stay stable for ManyChat */
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercelHost) {
    return `https://${vercelHost}`;
  }
  return "https://bykyndall.com";
}

export type TrustedBrand = {
  name: string;
  logo?: string;
  width?: number;
  height?: number;
};

export const SITE = {
  name: "kyndall",
  /** Set NEXT_PUBLIC_SITE_URL when you have a custom domain */
  url: siteUrl(),
  seoDescription:
    "Practical AI guides, workflows, and templates by kyndall. Claude skills, learning loops, voice files, and real-world setups.",
  guides: {
    label: "Guides",
    navLabel: "free guides",
    seoDescription:
      "Free guides, workflows, and templates for using AI on real problems. Search and browse everything in one place.",
    hubLead:
      "workflows, skills, and guides you can actually use. search, filter by type, topic, or tool, and sort how you want.",
    homepageLead:
      "free guides, templates, and internet breadcrumbs to make more things possible.",
    hubLinkLabel: "see all guides",
    featuredLabel: "Latest",
  },
  /** Homepage featured guide cards — order matters */
  featuredGuideSlugs: [
    "cursor-animations",
    "not-apps",
    "building-ai-loops",
    "claude-voice-setup-skill",
  ],
  /** Digital products. `/kits` is the shop hub; product pages are stand-style. */
  kits: {
    label: "Shop",
    navLabel: "shop",
  homepageLead: "a mini guide you can preorder. more later.",
  hubLinkLabel: "see the shop",
  description:
    "paid guides. first up: how i edit my yaps, in presale.",
    emptyMessage:
      "nothing here yet. follow on instagram if you want a heads up.",
  },
  workWithMe: {
    label: "Work with me",
    email: "kyn@bykyndall.com",
  },
  trustedBy: {
    label: "trusted by",
    brands: [
      { name: "cantina", logo: "/brands/cantina.png", width: 132, height: 24 },
      { name: "prism ai", logo: "/brands/prism-ai.png", width: 108, height: 32 },
      { name: "solvely.ai", logo: "/brands/solvely.png", width: 140, height: 33 },
      { name: "doola", logo: "/brands/doola.png", width: 120, height: 34 },
    ] as TrustedBrand[],
  },
  building: {
    label: "Building",
    inProgress: "What I'm building",
    shipped: "Things I've built",
  },
  social: {
    instagram: "https://instagram.com/withkyndall",
    tiktok: "https://tiktok.com/@withkyndall",
    youtube: "https://youtube.com/@withkyndall",
    email: "mailto:kyn@bykyndall.com",
  },
  newsletter: {
    name: "human.md: the newsletter",
    lead: "field notes on ai, technology, creativity and the very human urge to make things.",
    substackUrl:
      process.env.NEXT_PUBLIC_SUBSTACK_URL ?? "https://humanmd.substack.com",
  },
} as const;

export function substackSubscribeUrl(publicationUrl: string) {
  const base = publicationUrl.replace(/\/$/, "");
  return base.includes("/subscribe") ? base : `${base}/subscribe`;
}
