import { GuideCategory } from "@/components/GuideCategory";
import { LiquidGlassButton } from "@/components/LiquidGlassButton";
import Link from "next/link";
import type { GuideListItem } from "@/lib/guides";

type Props = {
  guide: GuideListItem;
  variant?: "home" | "hub";
};

export function GuideCard({ guide, variant = "hub" }: Props) {
  if (variant === "home") {
    return (
      <article className="guide-card guide-card--hub guide-card--home">
        <div className="guide-card__inner">
          <GuideCategory label={guide.category} />
          <h2>{guide.title}</h2>
          <p className="guide-card__desc">{guide.description}</p>
          <div className="guide-card__row">
            <LiquidGlassButton href={`/guides/${guide.slug}`} size={18}>
              learn more
            </LiquidGlassButton>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="guide-card guide-card--hub">
      <Link href={`/guides/${guide.slug}`} className="guide-card__link">
        <GuideCategory label={guide.category} />
        <h2>{guide.title}</h2>
        <p className="guide-card__desc">{guide.description}</p>
        <span className="guide-card__arrow">read guide</span>
      </Link>
    </article>
  );
}
