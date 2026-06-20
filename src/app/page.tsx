import Link from "next/link";
import { ContentShowcase } from "@/components/ContentShowcase";
import { GuideCard } from "@/components/GuideCard";
import { HomePortrait } from "@/components/HomePortrait";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SiteSocials } from "@/components/SiteSocials";
import { getFeaturedGuides } from "@/lib/guides";
import { SITE } from "@/lib/site";
import "./home.css";

export default function HomePage() {
  const featuredGuides = getFeaturedGuides();

  return (
    <div className="home">

      <div className="layer">
        <div className="wrap">
          <nav>
            <a href="#about">about</a>
            <a href="#guides">{SITE.guides.navLabel}</a>
            <Link href="/work-with-me">work with me</Link>
          </nav>

          <header className="hero">
            <div className="h-left">
              <h1 className="h-name">
                hi, i&apos;m
                <br />
                kyndall.
              </h1>
              <p className="h-sub">
                i make content that
                <br />
                helps people use ai to make
                <br />
                things, solve problems, and
                <br />
                play with what&apos;s possible.
              </p>
            </div>
            <div className="stage">
              <HomePortrait />
            </div>
            <div className="h-actions">
              <Link href="/work-with-me" className="glass-pill">
                work with me
              </Link>
              <a className="h-link" href="#guides">
                <span className="h-link__text">learn from me</span>
                <span className="arr-down">↓</span>
              </a>
            </div>
          </header>
        </div>

        <section id="about">
          <div className="wrap">
            <h2 className="s-head">about</h2>
            <div className="about-grid">
              <div>
                <p>
                  i make content about using ai creatively to solve problems,
                  build ideas, and make life feel a little more like yours.
                </p>
                <p>
                  i&apos;ve spent 10+ years in marketing and advertising, so i
                  know what actually makes people pay attention. now i build my
                  own things: software, workflows, content systems. ai runs a
                  huge chunk of it.
                </p>
                <p>
                  no cs degree. i learned to build by doing, and when something
                  works, i share it while it&apos;s still messy so you can try
                  it too.
                </p>
              </div>
              <ul className="facts">
                <li>
                  <b>content</b>
                  <span>
                    ai for creative people, real problems, useful experiments
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

        <ContentShowcase />

        <section id="guides">
          <div className="wrap">
            <div className="s-head-row">
              <h2 className="s-head">{SITE.guides.navLabel}</h2>
              <Link href="/guides" className="guides-hub-link">
                {SITE.guides.hubLinkLabel}
                <span className="arr">→</span>
              </Link>
            </div>
            <p className="s-sub">{SITE.guides.homepageLead}</p>
            <div className="cards">
              {featuredGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} variant="home" />
              ))}
            </div>
          </div>
        </section>

        <footer id="contact">
          <div className="wrap">
            <div className="foot">
              <NewsletterSignup />
              <SiteSocials />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
