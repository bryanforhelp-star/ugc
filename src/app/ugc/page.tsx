import Link from "next/link";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { HomePortrait } from "@/components/HomePortrait";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SiteCopyright } from "@/components/SiteCopyright";
import { SiteSocials } from "@/components/SiteSocials";
import { UgcAdsGrid, UgcOrganicGrid } from "@/components/ugc/UgcWorkGrid";
import {
  UGC_BRANDS,
  UGC_ORGANIC_PIECES,
  UGC_SITE,
  UGC_WORK_PIECES,
} from "@/lib/ugc";
import "../home.css";

export default function UgcPage() {
  return (
    <div className="home home--ugc">
      <div className="layer">
        <div className="wrap">
          <nav>
            <a href="#about">about</a>
            <a href="#ugc-ads">ugc ads</a>
            <a href="#organic">organic</a>
            <a href="#contact">work with me</a>
          </nav>

          <header className="hero">
            <div className="h-left">
              <h1 className="h-name">
                hi, i&apos;m
                <br />
                kyndall.
              </h1>
              <p className="h-sub">
                {UGC_SITE.heroSub.map((line, i) => (
                  <span key={line}>
                    {i > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div className="stage">
              <HomePortrait />
            </div>
            <div className="h-actions">
              <a className="glass-pill" href={`mailto:${UGC_SITE.email}`}>
                work with me
              </a>
              <a className="h-link" href="#brands">
                <span className="h-link__text">see the work</span>
                <span className="arr-down">↓</span>
              </a>
            </div>
          </header>
        </div>

        <BrandsMarquee label="trusted by" brands={UGC_BRANDS} />

        <section id="about">
          <div className="wrap">
            <h2 className="s-head">about</h2>
            <div className="about-grid">
              <div>
                <p>
                  i make content about how i use AI in my actual life and work.
                </p>
                <p>
                  i&apos;ve spent 10+ years in marketing and advertising, and
                  now i&apos;m using AI to build things, solve problems, test
                  ideas, and make a lot of the stuff i used to think required a
                  whole team possible on my own.
                </p>
                <p>
                  i don&apos;t have a CS degree or a tech background. most of
                  what i know came from wanting to do something, figuring out
                  how to do it, and then trying again when it didn&apos;t work.
                </p>
                <p>
                  these days i&apos;m building software, experimenting with new
                  workflows, making content, and generally seeing what i can
                  get AI to do.
                </p>
                <p>i share the process as i go.</p>
              </div>
              <ul className="facts">
                <li>
                  <b>content</b>
                  <span>
                    ugc ads, organic short-form, and ai experiments for apps
                    and tech
                  </span>
                </li>
                <li>
                  <b>background</b>
                  <span>
                    10+ years in marketing, advertising, strategy, content
                  </span>
                </li>
                <li>
                  <b>building</b>
                  <span>ai experiments, workflows, apps, content systems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <UgcAdsGrid
          id="ugc-ads"
          title="ugc ads"
          intro={UGC_SITE.adsIntro}
          pieces={UGC_WORK_PIECES}
        />

        <UgcOrganicGrid
          id="organic"
          title="organic social"
          intro={UGC_SITE.organicIntro}
          pieces={UGC_ORGANIC_PIECES}
        />

        <section id="contact">
          <div className="wrap">
            <h2 className="s-head">let&apos;s create something</h2>
            <p className="s-sub">{UGC_SITE.workWithMeLead}</p>
            <ul className="ugc-services">
              {UGC_SITE.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <div className="ugc-contact-inline">
              <a className="glass-pill" href={`mailto:${UGC_SITE.email}`}>
                {UGC_SITE.email}
              </a>
            </div>
            <p className="ugc-audience-note">
              also sharing free guides and experiments on{" "}
              <Link href="https://bykyndall.com">bykyndall.com</Link> for
              anyone learning to use ai on real problems.
            </p>
          </div>
        </section>

        <footer id="footer">
          <div className="wrap">
            <div className="foot">
              <div className="foot-start">
                <SiteSocials />
                <SiteCopyright />
              </div>
              <NewsletterSignup />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
