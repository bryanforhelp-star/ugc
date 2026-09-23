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
        <div className="ugc-case__media" tabIndex={0}>
          {others.length > 0 ? <MutedFan variants={others} /> : null}
          <div className="ugc-case__hero">
            {featured ? (
              <UgcVideoFrame src={featured.video} poster={featured.poster} />
            ) : null}
          </div>
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
        <MutedFanCard key={variant.id} variant={variant} index={i} total={variants.length} />
      ))}
    </div>
  );
}

function MutedFanCard({
  variant,
  index,
  total,
}: {
  variant: UgcCaseVariant;
  index: number;
  total: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    video.muted = true;
    video.volume = 0;
    video.defaultMuted = true;

    const playMuted = () => {
      video.muted = true;
      video.volume = 0;
      video.play().catch(() => {});
    };

    const media = card.closest(".ugc-case__media");
    if (!media) return;

    const onEnter = () => playMuted();
    const onLeave = () => {
      video.pause();
      video.currentTime = 0;
    };

    media.addEventListener("mouseenter", onEnter);
    media.addEventListener("mouseleave", onLeave);
    media.addEventListener("focusin", onEnter);
    const onFocusOut = (e: FocusEvent) => {
      if (!media.contains(e.relatedTarget as Node | null)) onLeave();
    };
    media.addEventListener("focusout", onFocusOut);

    return () => {
      media.removeEventListener("mouseenter", onEnter);
      media.removeEventListener("mouseleave", onLeave);
      media.removeEventListener("focusin", onEnter);
      media.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="ugc-case__fan-card"
      style={
        {
          "--fan-i": index,
          "--fan-n": total,
        } as CSSProperties
      }
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
