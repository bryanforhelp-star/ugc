import { StoreLink } from "@/components/store/StoreLink";
import { getAffiliate } from "@/lib/store";

export function GuideAffiliate({ name }: { name: string }) {
  const item = getAffiliate(name);
  if (!item) return null;

  return (
    <p className="guide-aff">
      <StoreLink
        href={item.href}
        className="guide-aff__btn"
        rel={item.affiliate ? "sponsored" : undefined}
      >
        try {item.name}
      </StoreLink>
    </p>
  );
}
