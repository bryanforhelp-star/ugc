import Image from "next/image";
import { SITE } from "@/lib/site";

export function TrustedBy() {
  return (
    <section id="brands" className="brands" aria-label="trusted by">
      <div className="wrap">
        <p className="brands__eyebrow">{SITE.trustedBy.label}</p>
        <ul className="brands__list">
          {SITE.trustedBy.brands.map((brand) => (
            <li key={brand.name}>
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width ?? 160}
                  height={brand.height ?? 40}
                  className="brands__logo"
                />
              ) : (
                <span className="brands__name">{brand.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
