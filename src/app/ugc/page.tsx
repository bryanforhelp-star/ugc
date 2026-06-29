import Image from "next/image";
import Link from "next/link";
import { HomePortrait } from "@/components/HomePortrait";
import { SiteCopyright } from "@/components/SiteCopyright";
import { SiteSocials } from "@/components/SiteSocials";
import { UgcBrandMarquee } from "@/components/ugc/UgcBrandMarquee";
import { UgcVideoCard } from "@/components/ugc/UgcVideoCard";
import {
  UGC_ANALYTICS,
  UGC_CLIENT_WORK,
  UGC_SITE,
  UGC_TEST_PACKAGES,
} from "@/lib/ugc";
import "../home.css";
import "../ugc.css";

export default function UgcPage() {
  return (
    <div className="home ugc">
      <div className="layer">
        <div className="wrap">
          <nav>
            <a href="#work">work</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </nav>

          <header className="hero">
            <div className="h-left">
              <p className="ugc-eyebrow">{UGC_SITE.hero.eyebrow}</p>
              <h1 className="h-name">
                hi, i&apos;m
                <br />
                kyndall.
              </h1>
              <p className="h-sub">{UGC_SITE.hero.lede}</p>
            </div>
            <div className="stage">
              <HomePortrait />
            </div>
            <div className="h-actions">
              <a className="glass-pill" href={`mailto:${UGC_SITE.email}`}>
                {UGC_SITE.email}
              </a>
              <a className="h-link" href="#work">
                <span className="h-link__text">see the work</span>
                <span className="arr-down">↓</span>
              </a>
            </div>
          </header>
        </div>

        <UgcBrandMarquee />

        <section id="work" className="ugc-section">
          <div className="wrap">
            <p className="ugc-kicker">client work</p>
            <h2 className="s-head">paid ads</h2>
            <p className="s-sub">apps and tech</p>
            <div className="ugc-grid ugc-grid--4">
              {UGC_CLIENT_WORK.map((item) => (
                <UgcVideoCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="ugc-section ugc-section--muted">
          <div className="wrap">
            <p className="ugc-kicker">creative testing</p>
            <h2 className="s-head">performance testing</h2>
            <p className="s-sub ugc-section__lead">
              isolating what actually moves the metric. for these clients i built
              custom testing structures: concept and hook permutations to find
              the winner before scaling spend.
            </p>

            {UGC_TEST_PACKAGES.map((pkg) => (
              <div key={pkg.brand} className="ugc-package">
                <header className="ugc-package__head">
                  <span className="ugc-package__brand">{pkg.brand}</span>
                  <span className="ugc-package__meta">{pkg.meta}</span>
                </header>

                {pkg.videos ? (
                  <div className="ugc-grid ugc-grid--3">
                    {pkg.videos.map((item) => (
                      <UgcVideoCard key={item.id} item={item} showBrand={false} />
                    ))}
                  </div>
                ) : null}

                {pkg.concepts?.map((concept) => (
                  <div key={concept.label} className="ugc-concept">
                    <p className="ugc-concept__label">{concept.label}</p>
                    <div className="ugc-grid ugc-grid--2">
                      {concept.videos.map((item) => (
                        <UgcVideoCard
                          key={item.id}
                          item={item}
                          showBrand={false}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="ugc-section">
          <div className="wrap">
            <p className="ugc-kicker">the numbers</p>
            <h2 className="s-head">analytics</h2>
            <p className="s-sub">
              screenshots pulled straight from the platform dashboards.
            </p>
            <div className="ugc-analytics">
              <div className="ugc-analytics__col">
                {UGC_ANALYTICS.slice(0, 3).map((src) => (
                  <figure key={src} className="ugc-analytics__shot">
                    <Image
                      src={src}
                      alt="platform analytics screenshot"
                      width={640}
                      height={900}
                      className="ugc-analytics__img"
                    />
                  </figure>
                ))}
              </div>
              <div className="ugc-analytics__col">
                <figure className="ugc-analytics__shot">
                  <Image
                    src={UGC_ANALYTICS[3]}
                    alt="views breakdown"
                    width={640}
                    height={1200}
                    className="ugc-analytics__img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="ugc-section ugc-section--muted">
          <div className="wrap">
            <p className="ugc-kicker">who&apos;s behind this</p>
            <h2 className="s-head">about me</h2>
            <div className="about-grid ugc-about">
              <div className="ugc-about__photo">
                <Image
                  src="/ugc/assets/images/about-me.png"
                  alt="Kyndall in her creator space"
                  width={560}
                  height={700}
                  className="ugc-about__img"
                />
              </div>
              <div>
                <p>
                  i&apos;m kyndall, a ugc creator with a background in paid media
                  and creative strategy.
                </p>
                <p>
                  i care about how things feel and how they perform. i think
                  about where attention drops, what makes someone keep watching,
                  and what actually makes them click.
                </p>
                <p>
                  my experience behind the scenes in digital marketing shapes
                  how i approach every piece of content. i love creating voices
                  that feel natural and story-driven, but are still built with
                  intention and purpose.
                </p>
                <p className="ugc-about__tag">
                  i think like a marketer, but create like a human.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="ugc-section ugc-section--contact">
          <div className="wrap ugc-contact">
            <p className="ugc-kicker">let&apos;s work</p>
            <h2 className="s-head">let&apos;s create together</h2>
            <p className="s-sub">services i offer</p>
            <ul className="ugc-services">
              {UGC_SITE.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <div className="ugc-contact__cta">
              <a className="glass-pill" href={`mailto:${UGC_SITE.email}`}>
                {UGC_SITE.email}
              </a>
              <p className="ugc-contact__note">{UGC_SITE.contactNote}</p>
            </div>
            <p className="ugc-contact__also">
              also building{" "}
              <Link href="https://bykyndall.com" className="ugc-contact__link">
                bykyndall.com
              </Link>
              : ai guides and experiments for creative people.
            </p>
          </div>
        </section>

        <footer className="ugc-footer">
          <div className="wrap">
            <div className="foot">
              <div className="foot-start">
                <SiteSocials />
                <SiteCopyright />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
