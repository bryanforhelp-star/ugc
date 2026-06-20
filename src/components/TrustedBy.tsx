import { SITE } from "@/lib/site";

export function TrustedBy() {
  return (
    <section id="brands" className="brands" aria-label="trusted by">
      <div className="wrap">
        <p className="brands__eyebrow">{SITE.trustedBy.label}</p>
        <ul className="brands__list">
          {SITE.trustedBy.brands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
