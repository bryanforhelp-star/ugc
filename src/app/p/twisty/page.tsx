import type { Metadata } from "next";
import {
  FormatMock,
  NetworkMock,
  OpsOrbit,
  OnboardingMock,
  PerformanceMock,
  ReviewMock,
  SourcingMock,
  TrialMock,
} from "@/components/proposal/twisty-mocks";
import "./proposal.css";

export const metadata: Metadata = {
  title: { absolute: "twisty x kyndall" },
  description: "creator program proposal for twisty's canvas ugc.",
  robots: { index: false, follow: false },
};

const CANVAS_CLIPS = [
  {
    brand: "solvely.ai",
    href: "https://www.instagram.com/reel/DMEenBmpo5R/",
    video: "/brands/twisty/canvas-examples/solvely.mp4",
    poster: "/brands/twisty/canvas-examples/solvely.jpg",
  },
  {
    brand: "higgsfield",
    href: "https://www.instagram.com/reel/DZEOfItMazu/",
    video: "/brands/twisty/canvas-examples/higgsfield.mp4",
    poster: "/brands/twisty/canvas-examples/higgsfield.jpg",
  },
  {
    brand: "oweyou",
    href: "https://www.instagram.com/reel/DbroZC6REy0/",
    video: "/brands/twisty/canvas-examples/oweyou.mp4",
    poster: "/brands/twisty/canvas-examples/oweyou.jpg",
  },
];

const CANVAS_LOGOS = [
  {
    name: "solvely.ai",
    src: "/brands/twisty/canvas-examples/solvely.svg",
    kind: "wordmark",
  },
  {
    name: "cluely",
    src: "/brands/twisty/canvas-examples/cluely.svg",
    kind: "wordmark",
  },
  {
    name: "higgsfield",
    src: "/brands/twisty/canvas-examples/higgsfield.svg",
    kind: "mark",
  },
  {
    name: "oweyou",
    src: "/brands/twisty/canvas-examples/oweyou-logo.png",
    kind: "icon",
  },
];

const SYSTEMS = [
  {
    id: "sourcing",
    name: "sourcing system",
    body: "an engine that finds creators across creator apps, platforms and social media, and reaches out so they enter the program. hunt, message, get a reply, send them into a trial period.",
    mock: <SourcingMock />,
  },
  {
    id: "onboarding",
    name: "onboarding system",
    body: "agreement, credits, account setup, guidelines doc, prompt library. repeatable for every creator after.",
    mock: <OnboardingMock />,
  },
  {
    id: "network",
    name: "community management",
    body: "community space (discord or slack) built out: channels, roles, rules, intake flow.",
    mock: <NetworkMock />,
  },
  {
    id: "trial",
    name: "trial structure",
    body: "a trial period. entry criteria, output expected, review at the end, continue or cut.",
    mock: <TrialMock />,
  },
  {
    id: "formats",
    name: "format system",
    body: "viral formats sourced weekly and translated into briefs creators can execute in twisty.",
    mock: <FormatMock />,
  },
  {
    id: "review",
    name: "submission + review",
    body: "how content comes in, feedback loop, approval, turnaround.",
    mock: <ReviewMock />,
  },
  {
    id: "performance",
    name: "performance system",
    body: "tracking by creator, format and account. what scales, what gets killed.",
    mock: <PerformanceMock />,
  },
];

const OPS = [
  "weekly format drops for creators",
  "submissions reviewed with feedback",
  "community managed, roster held at target headcount",
  "new creators sourced, onboarded and trialed as the roster moves",
  "account reviews: cadence, hygiene, kill/scale",
  "winning concepts that hit get doubled down on, rebuilt across every account until they stop working",
  "weekly performance report + monthly strategy review",
];

export default function TwistyProposalPage() {
  return (
    <div className="prop">
      <div className="wrap prop-shell">
        <header className="prop-chrome">
          <p className="prop-mark">kyndall</p>
          <nav className="prop-nav" aria-label="proposal">
            <a href="#scope">scope</a>
            <a href="#canvas">canvas</a>
            <a href="#phase-1">phase 1</a>
            <a href="#phase-2">phase 2</a>
            <a href="#fee">fee</a>
          </nav>
        </header>

        <header className="prop-hero">
          <p className="cover">proposal</p>
          <h1 className="prop-title prop-lockup">
            <img
              src="/brands/twisty-logo.svg"
              alt="twisty"
              className="prop-logo"
            />
            <span>x kyndall</span>
          </h1>
        </header>
      </div>

      <section id="scope" className="prop-band">
        <div className="wrap prop-shell">
          <h2 className="prop-head">scope</h2>
          <p className="prop-lead">
            building and operating twisty&apos;s canvas creator program.
          </p>
        </div>
      </section>

      <section id="canvas" className="prop-band">
        <div className="wrap prop-shell">
          <h2 className="prop-head prop-head--ask">what is canvas ugc?</h2>
          <div className="prop-canvas">
            <div className="prop-define">
              <p>
                creators run dedicated accounts for twisty and post to them
                every day. not their own pages. no followers to start. every
                video has to spread on its own.
              </p>
              <p>
                ten accounts posting daily is around 300 videos a month. a few
                hits is the whole game: reach without ads, then more of whatever
                works.
              </p>
            </div>
            <div className="prop-examples">
              <p className="cover">who already does this</p>
              <div className="prop-collage">
                {CANVAS_CLIPS.map((clip) => (
                  <a
                    key={clip.brand}
                    className="prop-clip"
                    href={clip.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${clip.brand} canvas ugc example`}
                  >
                    <img
                      src={clip.poster}
                      alt=""
                      width={360}
                      height={640}
                    />
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={clip.poster}
                      preload="metadata"
                    >
                      <source src={clip.video} type="video/mp4" />
                    </video>
                  </a>
                ))}
              </div>
              <ul className="prop-logo-row">
                {CANVAS_LOGOS.map((logo) => (
                  <li key={logo.name}>
                    <img
                      className={`prop-logo-row__${logo.kind}`}
                      src={logo.src}
                      alt={logo.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-1" className="prop-band">
        <div className="wrap prop-shell">
          <h2 className="prop-head">phase 1: build the program</h2>
          <p className="prop-copy">
            the bones and frameworks, built from scratch. first cohort of 10 to
            15 creators run through all of it live, so it ships tested, not
            theoretical.
          </p>
          <ul className="prop-index">
            {SYSTEMS.map((system, i) => (
              <li key={system.id}>
                <a href={`#${system.id}`}>
                  <span className="prop-num">{i + 1}</span>
                  {system.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {SYSTEMS.map((system, i) => (
        <section key={system.id} id={system.id} className="prop-product">
          <div className="wrap prop-shell prop-product__grid">
            <div className="prop-product__copy">
              <h3 className="prop-product__name">
                <span className="prop-num">{i + 1}</span>
                {system.name}
              </h3>
              <p>{system.body}</p>
            </div>
            <div className="prop-product__mock">{system.mock}</div>
          </div>
        </section>
      ))}

      <div className="prop-phase prop-phase--run">
        <section id="phase-2" className="prop-band">
          <div className="wrap prop-shell">
            <h2 className="prop-head">phase 2: running the program</h2>
            <div className="prop-run-layout">
              <ul className="prop-ops">
                {OPS.map((item, i) => (
                  <li key={item}>
                    <span className="prop-num">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <OpsOrbit />
            </div>
          </div>
        </section>
      </div>

      <section id="fee" className="prop-band prop-fee">
        <div className="wrap prop-shell">
          <h2 className="prop-head">fee</h2>
          <p className="prop-price">$3,000/month</p>
        </div>
      </section>
    </div>
  );
}
