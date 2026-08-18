import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import "./proposal.css";

export const metadata: Metadata = {
  title: { absolute: "twisty x kyndall" },
  description: "creator program proposal for twisty's canvas ugc.",
  robots: { index: false, follow: false },
};

const PHASE_ONE = [
  {
    name: "sourcing system",
    body: "creator profile for canvas, where they come from, screening criteria, pipeline and tracker.",
  },
  {
    name: "onboarding system",
    body: "agreement, credits, account setup, guidelines doc, prompt library. repeatable for every creator after.",
  },
  {
    name: "creator network",
    body: "community space (discord or slack) built out: channels, roles, rules, intake flow.",
  },
  {
    name: "trial structure",
    body: "1-week trial. entry criteria, output expected, review at the end, continue or cut.",
  },
  {
    name: "format system",
    body: "viral formats sourced weekly and translated into briefs creators can execute in twisty.",
  },
  {
    name: "submission + review system",
    body: "how content comes in, feedback loop, approval, turnaround.",
  },
  {
    name: "performance system",
    body: "tracking by creator, format and account. what scales, what gets killed.",
  },
];

const PHASE_TWO = [
  "weekly format drop: 5 to 8 briefs",
  "submissions reviewed with feedback, 48-hour weekday turnaround",
  "community managed, roster held at target headcount",
  "new creators sourced, onboarded and trialed as the roster moves",
  "account reviews: cadence, hygiene, kill/scale",
  "winning concepts that hit get doubled down on, rebuilt across every account until they stop working",
  "weekly performance report + monthly strategy review",
];

const NOT_INCLUDED = [
  "creator payouts and bonus pool",
  "paid ads management",
  "content posted to my own channels (quoted separately)",
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
          <h1 className="prop-title">
            twisty x
            <br />
            kyndall
          </h1>
          <p className="prop-kicker">creator program</p>
        </header>

        <section id="scope" className="prop-section">
          <h2 className="prop-head">scope</h2>
          <p className="prop-lead">
            building and operating twisty&apos;s canvas creator program.
          </p>
        </section>

        <section id="phase-1" className="prop-section">
          <h2 className="prop-head">phase 1</h2>
          <p className="prop-subhead">building the program</p>
          <p className="prop-copy">
            the bones and frameworks, built from scratch:
          </p>
          <dl className="prop-systems">
            {PHASE_ONE.map((item) => (
              <div key={item.name} className="prop-system">
                <dt>{item.name}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
          <p className="prop-copy prop-copy--note">
            first cohort of 8 to 10 creators run through all of it live, so it
            ships tested, not theoretical.
          </p>
        </section>

        <section id="phase-2" className="prop-section">
          <h2 className="prop-head">phase 2</h2>
          <p className="prop-subhead">running the program</p>
          <ul className="prop-ops">
            {PHASE_TWO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="fee" className="prop-section prop-fee">
          <h2 className="prop-head">fee</h2>
          <p className="prop-price">$3,000/month</p>
          <p className="prop-terms">paid upfront.</p>
        </section>

        <section className="prop-section">
          <h2 className="prop-head prop-head--small">not included</h2>
          <ul className="prop-ops">
            {NOT_INCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <footer className="prop-foot">
          <a className="glass-pill" href={`mailto:${SITE.workWithMe.email}`}>
            {SITE.workWithMe.email}
          </a>
        </footer>
      </div>
    </div>
  );
}
