import type { Metadata } from "next";
import type { Guide } from "./types";
import { SITE } from "./site";
import { extractHowToSteps, stripMarkdown, wordCount } from "./seo-helpers";

export function absoluteUrl(path: string) {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

const AUTHOR_SAME_AS = [
  SITE.social.instagram,
  SITE.social.tiktok,
  SITE.social.youtube,
];

const DEFAULT_OG_IMAGE = absoluteUrl("/hero/kyndall-poster.jpg");

function guideAuthor() {
  return {
    "@type": "Person" as const,
    name: SITE.name,
    url: SITE.url,
    sameAs: AUTHOR_SAME_AS,
  };
}

function guideSummary(guide: Guide) {
  return guide.summary?.trim() || guide.description;
}

export function guideMetadata(guide: Guide): Metadata {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  const summary = guideSummary(guide);

  return {
    title: guide.title,
    description: summary,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: summary,
      url,
      type: "article",
      publishedTime: guide.date,
      modifiedTime: guide.updated ?? guide.date,
      siteName: SITE.name,
      images: [{ url: DEFAULT_OG_IMAGE, alt: guide.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: summary,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export function articleJsonLd(guide: Guide) {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  const plainBody = stripMarkdown(guide.content);
  const summary = guideSummary(guide);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    abstract: summary,
    articleBody: plainBody,
    wordCount: wordCount(plainBody),
    datePublished: guide.date,
    dateModified: guide.updated ?? guide.date,
    author: guideAuthor(),
    publisher: guideAuthor(),
    image: [DEFAULT_OG_IMAGE],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: guide.tags.join(", "),
    articleSection: guide.pillars.join(", "),
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".page-lead", ".prose"],
    },
  };
}

export function howToJsonLd(guide: Guide) {
  if (!guide.pillars.includes("how-to")) return null;

  const steps = extractHowToSteps(guide.content);
  if (steps.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guideSummary(guide),
    image: DEFAULT_OG_IMAGE,
    totalTime: "PT15M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function breadcrumbJsonLd(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: absoluteUrl("/guides"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: absoluteUrl(`/guides/${guide.slug}`),
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.seoDescription,
    publisher: guideAuthor(),
    inLanguage: "en-US",
  };
}
