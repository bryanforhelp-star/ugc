import { GuideCategory } from "@/components/GuideCategory";
import Link from "next/link";
import type { GuideListItem } from "@/lib/guides";

type Props = {
  guide: GuideListItem;
  variant?: "home" | "hub";
};

export function GuideCard({ guide, variant = "hub" }: Props) {
  if (variant === "home") {
    return (
      <article className="card">
        <div className="resource-head">
          <GuideCategory label={guide.category} />
          <h3>{guide.title}</h3>
        </div>
        <div className="row">
          <Link href={`/guides/${guide.slug}`} className="glass-pill">
            learn more
          </Link>
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
