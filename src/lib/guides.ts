import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SITE } from "./site";
import type { Guide, GuideFrontmatter, Pillar, SeriesSlug } from "./types";

const GUIDES_DIR = path.join(process.cwd(), "content/guides");

export type GuideListItem = Pick<
  Guide,
  "slug" | "title" | "description" | "category" | "topics" | "tools" | "tags" | "date"
>;

function parseGuide(slug: string, raw: string): Guide {
  const { data, content } = matter(raw);
  const frontmatter = data as GuideFrontmatter;

  return {
    ...frontmatter,
    topics: frontmatter.topics ?? [],
    tools: frontmatter.tools ?? [],
    slug,
    content,
  };
}

export function getAllGuides(includeDrafts = false): Guide[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];

  const files = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  const guides = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(GUIDES_DIR, file), "utf8");
    return parseGuide(slug, raw);
  });

  return guides
    .filter((g) => includeDrafts || g.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(GUIDES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const guide = parseGuide(slug, raw);
  if (!guide.published) return null;

  return guide;
}

export function getGuidesByPillar(pillar: Pillar): Guide[] {
  return getAllGuides().filter((g) => g.pillars.includes(pillar));
}

export function getGuidesBySeries(series: SeriesSlug): Guide[] {
  return getAllGuides()
    .filter((g) => g.series === series)
    .sort((a, b) => (a.seriesEpisode ?? 0) - (b.seriesEpisode ?? 0));
}

/** Published guides only — use for static paths and sitemap */
export function getPublishedGuideSlugs(): string[] {
  return getAllGuides().map((g) => g.slug);
}

/** @deprecated use getPublishedGuideSlugs */
export function getAllGuideSlugs(): string[] {
  return getPublishedGuideSlugs();
}

export function getFeaturedGuides(): Guide[] {
  return SITE.featuredGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is Guide => g !== null);
}

export function getGuideListItems(): GuideListItem[] {
  return getAllGuides().map(
    ({ slug, title, description, category, topics, tools, tags, date }) => ({
      slug,
      title,
      description,
      category,
      topics,
      tools,
      tags,
      date,
    }),
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllGuides().forEach((g) => g.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
