"use client";

import Image from "next/image";
import type { TrustedBrand } from "@/lib/site";

type Props = {
  label?: string;
  brands: readonly TrustedBrand[];
};

export function BrandsMarquee({ label = "worked with", brands }: Props) {
  const loop = [...brands, ...brands];

  return (
    <section id="brands" className="brands brands--marquee" aria-label={label}>
      <div className="wrap">
        <p className="brands__eyebrow">{label}</p>
      </div>
      <div
        className="brands-marquee"
        onMouseEnter={(e) => {
          e.currentTarget.classList.add("is-paused");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.remove("is-paused");
        }}
      >
        <ul className="brands-marquee__track" aria-hidden="false">
          {loop.map((brand, index) => (
            <li key={`${brand.name}-${index}`}>
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={index < brands.length ? brand.name : ""}
                  width={brand.width ?? 160}
                  height={brand.height ?? 40}
                  className="brands__logo"
                  aria-hidden={index >= brands.length}
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
