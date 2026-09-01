import Image from "next/image";
import { StoreLink } from "@/components/store/StoreLink";
import { getAffiliate, STORE_COPY } from "@/lib/store";

export function GuideAffiliate({ name }: { name: string }) {
  const item = getAffiliate(name);
  if (!item) return null;

  return (
    <div className="guide-aff">
      <StoreLink
        href={item.href}
        className="guide-aff__btn"
        rel={item.affiliate ? "sponsored" : undefined}
      >
        {item.logo ? (
          <Image
            src={item.logo}
            alt=""
            width={36}
            height={36}
            className="guide-aff__logo"
          />
        ) : null}
        <span className="guide-aff__copy">
          <span className="guide-aff__name">open {item.name}</span>
          {item.perk ? (
            <span className="guide-aff__perk">{item.perk}</span>
          ) : null}
        </span>
        <span className="guide-aff__chev" aria-hidden="true">
          →
        </span>
      </StoreLink>
      <p className="guide-aff__disclosure">{STORE_COPY.disclosure}</p>
    </div>
  );
}
