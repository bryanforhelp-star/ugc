/**
 * Content pillars — how guides map to your content types.
 * Not mutually exclusive; a guide can be how-to + problem-solution.
 */
export const PILLARS = {
  "how-to": {
    label: "How-To",
    description: "Step-by-step — here's how to do this",
  },
  "problem-solution": {
    label: "Problem → Solution",
    description: "A problem I had, how I solved it with AI, how you get it",
  },
  "pain-point": {
    label: "Pain Point",
    description: "Calling out what's broken — the reel hook, expanded",
  },
  story: {
    label: "Story",
    description: "Build logs, behind the scenes, come-along content",
  },
} as const;

export type Pillar = keyof typeof PILLARS;

/**
 * Optional series tag on a guide — for future use.
 * No /series pages yet; Instagram series can still tag guides in frontmatter.
 */
export const SERIES = {
  "building-the-ugly-version": {
    label: "Building the Ugly Version",
  },
  "things-i-refuse-to-do-manually": {
    label: "Things I Refuse to Do Manually",
  },
  "ai-takes": {
    label: "AI Takes",
  },
} as const;

export type SeriesSlug = keyof typeof SERIES;

export type BuildStatus = "building" | "built";

export interface Build {
  label: string;
  description: string;
  status: BuildStatus;
  href: string | null;
}

/** Projects — in progress or shipped */
export const BUILDS: Record<string, Build> = {
  "ugc-outreach": {
    label: "UGC Outreach Bot",
    description: "Automated brand research and pitch prep for creators",
    status: "building",
    href: null,
  },
  "trading-tutor": {
    label: "Trading Tutor",
    description: "AI as a learning layer — not a trading account",
    status: "building",
    href: null,
  },
};

export type BuildSlug = keyof typeof BUILDS;

/** @deprecated use BUILDS */
export const PRODUCTS = BUILDS;

export interface GuideFrontmatter {
  slug: string;
  title: string;
  description: string;
  /** Short label above the title, e.g. guide, claude skills, workflow */
  category: string;
  /** Browse filters — e.g. learning, workflows, tools */
  topics: string[];
  /** Browse filters — e.g. claude, chatgpt */
  tools: string[];
  /** Reel cover line — must match Instagram */
  cover: string;
  /** Comment keyword for ManyChat DM automation */
  commentKeyword: string | null;
  pillars: Pillar[];
  /** Optional — no series pages yet */
  series?: SeriesSlug;
  seriesEpisode?: number;
  tags: string[];
  episode?: string;
  published: boolean;
  date: string;
}

export interface Guide extends GuideFrontmatter {
  content: string;
}
