import Image from "next/image";
import type { UgcCaseStudy } from "@/lib/ugc";
import { UgcProjectPlayer } from "@/components/ugc/UgcWorkGrid";

export function UgcCaseStudies({ studies }: { studies: UgcCaseStudy[] }) {
  if (!studies.length) return null;
  return (
    <section id="case-studies" className="ugc-case ugc-results">
      <div className="wrap">
        <div className="ugc-section-heading">
          <div><p className="ugc-eyebrow">the work, in numbers</p><h2 className="s-head">results</h2></div>
          <p className="s-sub">paid campaigns. organic content.<br />a closer look at both.</p>
        </div>
        {studies.map((study, index) => {
          const [primary, ...secondary] = study.stats;
          return (
            <article key={study.id} className={`ugc-result ugc-result--${study.id}`} id={`result-${study.id}`}>
              <div className="ugc-result__topline"><span>0{index + 1} / {study.channel}</span><span>{study.brief}</span></div>
              <div className="ugc-result__layout">
                <div className="ugc-result__copy">
                  <div className="ugc-result__brand">
                    <Image src={study.brandLogo} alt={study.brand} width={study.brandLogoWidth ?? 120} height={study.brandLogoHeight ?? 32} />
                    <span>{study.product}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p className="ugc-result__description">{study.description}</p>
                  {primary && <div className="ugc-result__primary"><strong>{primary.value}</strong><span>{primary.label}</span></div>}
                  {study.resultNote && <p className="ugc-result__note">{study.resultNote}</p>}
                  <dl className="ugc-result__secondary">
                    {secondary.map((stat) => (
                      <div key={stat.label}>
                        <dt>{stat.label}{stat.note && <span className="ugc-result__stat-note">{stat.note}</span>}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="ugc-result__takeaway">{study.takeaway}</p>
                  {study.sourceNote && <p className="ugc-result__source">{study.sourceNote}</p>}
                  {study.detailStats && (
                    <details className="ugc-result__details">
                      <summary>all reel metrics <span aria-hidden="true">↗</span></summary>
                      <dl>{study.detailStats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
                      <p>{study.detailNote}</p>
                    </details>
                  )}
                </div>
                <div className="ugc-result__media"><UgcProjectPlayer variants={study.variants} brand={study.brand} /></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
