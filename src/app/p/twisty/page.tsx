import type { Metadata } from "next";
import {
  FormatMock,
  NetworkMock,
  OnboardingMock,
  PerformanceMock,
  ReportMock,
  ReviewMock,
  ScaleMock,
  SourcingMock,
  TrialMock,
  WeekBoardMock,
} from "@/components/proposal/twisty-mocks";
import "./proposal.css";

export const metadata: Metadata = {
  title: { absolute: "twisty x kyndall" },
  description: "creator program proposal for twisty's canvas ugc.",
  robots: { index: false, follow: false },
};

const SYSTEMS = [
  {
    id: "sourcing",
    name: "sourcing system",
    body: "not a pile of dms. a written canvas profile, named sources, a pass/fail screen, and a tracker so every name has a next step.",
    points: [
      "profile: creators who can post 4+ days a week, inside twisty, talking-head or overlay. not a studio edit.",
      "sources: tiktok comments, discord, referrals, outbound lists.",
      "screen: cadence, twisty-fit, on-camera or overlay, language, and whether they already post for a competing ai app.",
      "tracker: sourced, screened, trial, roster. scored, so the next open seat has a name waiting.",
    ],
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
    body: "1-week trial. entry criteria, output expected, review at the end, continue or cut.",
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

const RUN = [
  { id: "p2-week", name: "the week" },
  { id: "p2-scale", name: "the scale loop" },
  { id: "p2-month", name: "the month" },
];

export default function TwistyProposalPage() {
  return (
    <div className="prop">
      <div className="wrap prop-shell">
        <header className="prop-chrome">
          <p className="prop-mark">kyndall</p>
          <nav className="prop-nav" aria-label="proposal">
            <a href="#scope">scope</a>
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
              {"points" in system && system.points ? (
                <ul className="prop-spec">
                  {system.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="prop-product__mock">{system.mock}</div>
          </div>
        </section>
      ))}

      <div className="prop-phase prop-phase--run">
        <section id="phase-2" className="prop-band">
          <div className="wrap prop-shell">
            <h2 className="prop-head">phase 2: running the program</h2>
            <p className="prop-copy">
              phase 1 is the stack. this is the calendar it runs on. not seven
              more systems. one operating week, a scale move when something
              hits, and a monthly read so we know what to double.
            </p>
            <ul className="prop-index">
              {RUN.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>
                    <span className="prop-num">{i + 1}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="p2-week" className="prop-run">
          <div className="wrap prop-shell">
            <h3 className="prop-product__name">
              <span className="prop-num">1</span>
              the week
            </h3>
            <p className="prop-copy">
              every system from phase 1 has a day it actually runs. this is
              that week, repeated, so the roster posts, reviews come back in
              48 hours, and open seats are already being filled.
            </p>
            <ul className="prop-spec">
              <li>
                monday: 5 to 8 briefs. pulled from what is hitting, written so
                a creator can execute them in twisty that day.
              </li>
              <li>
                tue to thu: every submission gets notes. 48-hour weekday
                turnaround, so posting never sits in a pile.
              </li>
              <li>
                all week: community stays live. roster held at 10 to 15. if
                someone is cut, a replacement is already in trial.
              </li>
              <li>
                friday: cadence and hygiene. who posted, who slipped, what
                gets scaled or killed.
              </li>
            </ul>
            <div className="prop-run__board">
              <WeekBoardMock />
            </div>
          </div>
        </section>

        <section id="p2-scale" className="prop-product">
          <div className="wrap prop-shell prop-product__grid">
            <div className="prop-product__copy">
              <h3 className="prop-product__name">
                <span className="prop-num">2</span>
                the scale loop
              </h3>
              <p>
                the week tells you what worked. this is what we do with it. a
                concept that hits gets rebuilt across every account until it
                dies. one winner becomes a week of volume.
              </p>
            </div>
            <div className="prop-product__mock">
              <ScaleMock />
            </div>
          </div>
        </section>

        <section id="p2-month" className="prop-product">
          <div className="wrap prop-shell prop-product__grid">
            <div className="prop-product__copy">
              <h3 className="prop-product__name">
                <span className="prop-num">3</span>
                the month
              </h3>
              <p>
                monday you get the week in writing: views, posts, roster, what
                scaled, what died. once a month we sit on it: what to double,
                what to kill, who to pull into the next seats.
              </p>
            </div>
            <div className="prop-product__mock">
              <ReportMock />
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
