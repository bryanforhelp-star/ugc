"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import type { UgcCaseStudy as UgcCaseStudyData, UgcCaseVariant } from "@/lib/ugc";
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
  const others = study.variants.filter((v) => v.id !== featured?.id);

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
        <div className="ugc-case__media">
          <div className="ugc-case__hero">
            {featured ? (
              <UgcVideoFrame src={featured.video} poster={featured.poster} />
            ) : null}
          </div>
          {others.length > 0 ? <MutedFan variants={others} /> : null}
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
    </article>
  );
}

function MutedFan({ variants }: { variants: UgcCaseVariant[] }) {
  return (
    <div className="ugc-case__fan" aria-hidden="true">
      {variants.map((variant, i) => (
        <MutedFanCard key={variant.id} variant={variant} index={i} />
      ))}
    </div>
  );
}

function MutedFanCard({
  variant,
  index,
}: {
  variant: UgcCaseVariant;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 },
    );

    io.observe(card);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="ugc-case__fan-card"
      style={{ "--fan-i": index } as CSSProperties}
    >
      <video
        ref={videoRef}
        className="ugc-case__fan-video"
        src={variant.video}
        poster={variant.poster}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload noremoteplayback"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
