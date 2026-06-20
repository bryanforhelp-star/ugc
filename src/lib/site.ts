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
  return "https://kyndall.com";
}

export const SITE = {
  name: "kyndall",
  /** Set NEXT_PUBLIC_SITE_URL when you have a custom domain */
  url: siteUrl(),
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
    "claude-voice-setup-skill",
    "claude-build-or-buy-skill",
    "ai-learning-loop",
  ],
  /** Digital products — add back to nav when something is published */
  kits: {
    label: "Kits",
    navLabel: "kits",
    description:
      "workflows, agents, and templates you can actually run. the full versions of what i tease in reels.",
    emptyMessage:
      "nothing here yet. first kit coming soon. follow on instagram if you want a heads up.",
  },
  workWithMe: {
    label: "Work with me",
    email: "kyn@bykyndall.com",
  },
  building: {
    label: "Building",
    inProgress: "What I'm building",
    shipped: "Things I've built",
  },
  social: {
    instagram: "https://instagram.com/withkyndall",
    tiktok: "https://tiktok.com/@kyndall",
    email: "mailto:kyn@bykyndall.com",
  },
  newsletter: {
    label: "newsletter",
    lead: "ai experiments, tools, and things worth trying. one note when there's something good.",
    comingSoon: "launching on substack soon.",
    /** Set NEXT_PUBLIC_SUBSTACK_URL to your publication, e.g. https://withkyndall.substack.com */
    substackUrl: process.env.NEXT_PUBLIC_SUBSTACK_URL ?? "",
  },
} as const;

export function substackEmbedUrl(publicationUrl: string) {
  return `${publicationUrl.replace(/\/$/, "")}/embed`;
}

export function substackSubscribeUrl(publicationUrl: string) {
  const base = publicationUrl.replace(/\/$/, "");
  return base.includes("/subscribe") ? base : `${base}/subscribe`;
}
