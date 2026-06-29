import Image from "next/image";
import { UGC_BRANDS } from "@/lib/ugc";

export function UgcBrandMarquee() {
  const loop = [...UGC_BRANDS, ...UGC_BRANDS];

  return (
    <section className="ugc-brands" aria-label="brands i've worked with">
      <div className="wrap">
        <p className="ugc-brands__eyebrow">worked with</p>
        <div className="ugc-brands__track-wrap">
          <ul className="ugc-brands__track">
            {loop.map((brand, index) => (
              <li key={`${brand.name}-${index}`} aria-hidden={index >= UGC_BRANDS.length}>
                <Image
                  src={brand.logo}
                  alt={index < UGC_BRANDS.length ? brand.name : ""}
                  width={brand.width}
                  height={brand.height}
                  className="ugc-brands__logo"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
