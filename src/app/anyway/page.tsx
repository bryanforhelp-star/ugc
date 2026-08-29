import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { AnywayShell, GrabCan } from "./anyway-ui";
import "./anyway.css";

const PATH = "/anyway";
const TITLE = "anyway matcha latte";
const DESCRIPTION =
  "anyway is a cold matcha latte in a clear slim can. fridge-cigarette energy. the drink you grab without thinking, not a wellness ritual.";
const OG = "/anyway/haul.png";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  icons: {
    icon: "/anyway/logo.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl(PATH),
    siteName: "anyway",
    type: "website",
    images: [
      {
        url: OG,
        width: 1200,
        height: 1500,
        alt: "anyway matcha latte, four cans in hand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "anyway matcha latte",
  description: DESCRIPTION,
  brand: {
    "@type": "Brand",
    name: "anyway",
  },
  image: [
    absoluteUrl("/anyway/haul.png"),
    absoluteUrl("/anyway/packshot.png"),
    absoluteUrl("/anyway/hero.png"),
    absoluteUrl("/anyway/fridge.png"),
    absoluteUrl("/anyway/nyc.png"),
  ],
  category: "ready-to-drink matcha latte",
  size: "12oz",
  material: "clear slim can",
  offers: {
    "@type": "Offer",
    price: "4.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function AnywayPage() {
  return (
    <AnywayShell>
      <JsonLd data={productJsonLd} />
      <header className="anyway-nav">
        <a className="anyway-mark" href="/anyway" aria-label="anyway">
          <span>any</span>
          <span>way</span>
        </a>
        <a className="anyway-nav-shop" href="#product">
          shop
        </a>
      </header>

      <section className="anyway-hero">
        <div className="anyway-copy">
          <p className="anyway-eyebrow">matcha latte</p>
          <h1 className="anyway-wordmark">
            any
            <br />
            way
          </h1>
          <p className="anyway-sub">matcha latte. already cold.</p>
          <p className="anyway-facts-inline">
            12oz clear slim can · japanese matcha · oat milk
          </p>
          <GrabCan />
        </div>
        <div className="anyway-photo">
          <img
            src="/anyway/haul.png"
            alt="four anyway matcha latte cans held in two hands, red stacked type on a clear slim can"
          />
        </div>
      </section>

      <section className="anyway-bleed">
        <figure>
          <img
            src="/anyway/fridge.png"
            alt="anyway matcha latte cans in a bodega cooler, cigarettes on the shelves above and below"
          />
          <figcaption className="anyway-caption">
            in the cooler. next to the cigs. where it belongs.
          </figcaption>
        </figure>
      </section>

      <section className="anyway-split">
        <div className="anyway-split-copy">
          <p className="anyway-kicker">what it is</p>
          <p className="anyway-line">diet coke, but matcha.</p>
          <p className="anyway-body">
            a cold matcha latte in a clear slim can. fridge-cigarette energy.
            the drink you grab without thinking, not a wellness ritual.
          </p>
          <ul className="anyway-spec">
            <li>
              <span>format</span> 12oz clear slim can
            </li>
            <li>
              <span>recipe</span> japanese matcha, oat milk
            </li>
            <li>
              <span>serve</span> already cold
            </li>
            <li>
              <span>price</span> $4
            </li>
          </ul>
        </div>
        <figure>
          <img
            src="/anyway/nyc.png"
            alt="anyway matcha latte on a night street in nyc, flash photo, wired headphones, metrocard, keys"
          />
        </figure>
      </section>

      <section className="anyway-grid">
        <figure>
          <img
            src="/anyway/packshot.png"
            alt="anyway matcha latte packshot on white, condensation on a 12oz slim can, red type"
          />
        </figure>
        <figure>
          <img
            src="/anyway/stoop.png"
            alt="holding an anyway matcha latte can toward the camera on a stoop at night"
          />
        </figure>
        <figure>
          <img
            src="/anyway/walk.png"
            alt="walking with an anyway matcha latte, direct flash, dark clothes"
          />
        </figure>
      </section>

      <section className="anyway-split">
        <figure className="anyway-pack">
          <img
            src="/anyway/hero.png"
            alt="single anyway matcha latte can, green liquid visible, silver rim, cherry red stacked wordmark"
          />
        </figure>
        <div className="anyway-split-copy">
          <p className="anyway-kicker">the can</p>
          <p className="anyway-line">
            the green is the can.
            <br />
            the type is red.
          </p>
          <p className="anyway-body">
            clear slim can. you can see the matcha. cherry red stacked type:
            any over way. pretty enough to post, edgy enough that it does not
            look like a spa.
          </p>
        </div>
      </section>

      <section className="anyway-bleed">
        <figure>
          <img
            src="/anyway/pour.png"
            alt="anyway matcha latte pouring from the clear slim can"
          />
        </figure>
      </section>

      <footer className="anyway-foot">
        <p className="anyway-mark" aria-hidden="true">
          <span>any</span>
          <span>way</span>
        </p>
        <p>matcha latte. $4. grab a can.</p>
      </footer>
    </AnywayShell>
  );
}
