import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideProse } from "@/components/GuideProse";
import { JsonLd } from "@/components/JsonLd";
import { getGuideBySlug, getPublishedGuideSlugs } from "@/lib/guides";
import { articleJsonLd, breadcrumbJsonLd, guideMetadata, howToJsonLd } from "@/lib/seo";
import { PILLARS, SERIES } from "@/lib/types";

export async function generateStaticParams() {
  return getPublishedGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Not found" };
  return guideMetadata(guide);
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const howTo = howToJsonLd(guide);

  return (
    <article className="page page--article">
      <JsonLd data={articleJsonLd(guide)} />
      <JsonLd data={breadcrumbJsonLd(guide)} />
      {howTo ? <JsonLd data={howTo} /> : null}

      <div className="wrap">
        <p className="back">
          <Link href="/guides" className="text-link">
            <span className="text-link__label">← all guides</span>
          </Link>
        </p>

        <p className="cover">{guide.cover}</p>
        <h1 className="page-title page-title--article">{guide.title}</h1>
        <p className="page-lead">{guide.description}</p>

        <div className="meta">
          <time dateTime={guide.date}>
            {new Date(guide.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {guide.pillars.map((p) => (
            <span key={p}>{PILLARS[p].label}</span>
          ))}
          {guide.series && <span>{SERIES[guide.series].label}</span>}
        </div>

        <div className="prose">
          <GuideProse content={guide.content} />
        </div>
      </div>
    </article>
  );
}
