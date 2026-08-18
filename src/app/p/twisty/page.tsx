import type { Metadata } from "next";
import {
  FormatMock,
  NetworkMock,
  OnboardingMock,
  PerformanceMock,
  ReviewMock,
  SourcingMock,
  TrialMock,
  WeekMock,
} from "@/components/proposal/twisty-mocks";
import { SITE } from "@/lib/site";
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
    body: "creator profile for canvas, where they come from, screening criteria, pipeline and tracker.",
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
          <h1 className="prop-title">twisty x kyndall</h1>
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
            {SYSTEMS.map((system) => (
              <li key={system.id}>
                <a href={`#${system.id}`}>
                  <span className="arr">↳</span>
                  {system.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {SYSTEMS.map((system) => (
        <section key={system.id} id={system.id} className="prop-product">
          <div className="wrap prop-shell prop-product__grid">
            <div className="prop-product__copy">
              <h3 className="prop-product__name">{system.name}</h3>
              <p>{system.body}</p>
            </div>
            <div className="prop-product__mock">{system.mock}</div>
          </div>
        </section>
      ))}

      <section id="phase-2" className="prop-product">
        <div className="wrap prop-shell">
          <h2 className="prop-head">phase 2: running the program</h2>
        </div>
        <div className="wrap prop-shell prop-product__grid prop-product__grid--follow">
          <div className="prop-product__copy">
            <ul className="prop-ops">
              <li>weekly format drop: 5 to 8 briefs</li>
              <li>submissions reviewed with feedback, 48-hour weekday turnaround</li>
              <li>community managed, roster held at target headcount</li>
              <li>new creators sourced, onboarded and trialed as the roster moves</li>
              <li>account reviews: cadence, hygiene, kill/scale</li>
              <li>
                winning concepts that hit get doubled down on, rebuilt across
                every account until they stop working
              </li>
              <li>weekly performance report + monthly strategy review</li>
            </ul>
          </div>
          <div className="prop-product__mock">
            <WeekMock />
          </div>
        </div>
      </section>

      <section id="fee" className="prop-band prop-fee">
        <div className="wrap prop-shell">
          <h2 className="prop-head">fee</h2>
          <p className="prop-price">$3,000/month</p>
          <p className="prop-terms">paid upfront.</p>
          <a className="glass-pill" href={`mailto:${SITE.workWithMe.email}`}>
            {SITE.workWithMe.email}
          </a>
        </div>
      </section>
    </div>
  );
}
