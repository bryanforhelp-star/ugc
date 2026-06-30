import Image from "next/image";
import { SITE, type TrustedBrand } from "@/lib/site";

type Props = {
  label?: string;
  brands?: readonly TrustedBrand[];
};

export function TrustedBy({
  label = SITE.trustedBy.label,
  brands = SITE.trustedBy.brands,
}: Props) {
  return (
    <section id="brands" className="brands" aria-label={label}>
      <div className="wrap">
        <p className="brands__eyebrow">{label}</p>
        <ul className="brands__list">
          {brands.map((brand) => (
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
