"use client";

import Image from "next/image";
import type { UgcCaseStudy as UgcCaseStudyData } from "@/lib/ugc";
import { UgcVideoFrame } from "@/components/ugc/UgcWorkGrid";

type Props = {
  id?: string;
  title?: string;
  studies: UgcCaseStudyData[];
};

export function UgcCaseStudies({
  id = "case-studies",
  title = "results",
  studies,
}: Props) {
  if (studies.length === 0) return null;

  return (
    <section id={id} className="ugc-case">
      <div className="wrap">
        <div className="ugc-case__intro">
          <h2 className="s-head">{title}</h2>
        </div>
        {studies.map((study) => (
          <CaseStudyBlock key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}

function CaseStudyBlock({ study }: { study: UgcCaseStudyData }) {
  const featured =
    study.variants.find((v) => v.featured) ?? study.variants[0];

  return (
    <article className="ugc-case__block">
      <header className="ugc-case__head">
        <div className="ugc-case__logo-wrap">
          <Image
            src={study.brandLogo}
            alt={study.brand}
            width={study.brandLogoWidth ?? 120}
            height={study.brandLogoHeight ?? 32}
            className="ugc-case__logo"
            style={{ width: "auto", height: "100%" }}
          />
        </div>
        <p className="ugc-case__brief">{study.brief}</p>
      </header>

      <div className="ugc-case__layout">
        <div className="ugc-case__hero">
          {featured ? (
            <UgcVideoFrame src={featured.video} poster={featured.poster} />
          ) : null}
        </div>

        <div className="ugc-case__copy">
          <ul className="ugc-case__stats">
            {study.stats.map((stat) => (
              <li key={stat.value + stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
          <p className="ugc-case__takeaway">{study.takeaway}</p>
        </div>
      </div>

      {study.variants.length > 1 ? (
        <div className="ugc-case__variants">
          <p className="ugc-case__variants-label">hook variants</p>
          <div className="ugc-case__variant-grid">
            {study.variants.map((variant) => (
              <figure
                key={variant.id}
                className={`ugc-case__variant${variant.featured ? " is-featured" : ""}`}
              >
                <UgcVideoFrame src={variant.video} poster={variant.poster} />
                <figcaption>{variant.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
