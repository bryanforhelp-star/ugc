import type { ReactNode } from "react";

function MockFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <span className="mock-dots" />
        <span className="mock-bar-title">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function SourcingMock() {
  return (
    <MockFrame title="pipeline">
      <div className="mock-kanban">
        <div className="mock-col">
          <p>sourced</p>
          <span>creator 11</span>
          <span>creator 07</span>
        </div>
        <div className="mock-col">
          <p>screened</p>
          <span>creator 03</span>
        </div>
        <div className="mock-col">
          <p>trial</p>
          <span>creator 06</span>
          <span className="mock-chip-leave">creator 04</span>
        </div>
        <div className="mock-col mock-col--live">
          <p>roster</p>
          <span>creator 01</span>
          <span>creator 02</span>
          <span className="mock-chip-arrive">creator 04</span>
        </div>
      </div>
    </MockFrame>
  );
}

export function OnboardingMock() {
  const steps = [
    "agreement",
    "credits",
    "account setup",
    "guidelines",
    "prompt library",
  ];

  return (
    <MockFrame title="onboarding">
      <ol className="mock-checks">
        {steps.map((step) => (
          <li key={step}>
            <span className="mock-tick" />
            {step}
          </li>
        ))}
      </ol>
    </MockFrame>
  );
}

export function NetworkMock() {
  return (
    <MockFrame title="community">
      <div className="mock-slack">
        <p className="mock-slack-space">twisty canvas</p>
        <ul>
          <li className="is-on"># briefs</li>
          <li># submissions</li>
          <li># wins</li>
          <li># trial</li>
        </ul>
        <p className="mock-join">
          <span className="mock-ping" />
          creator 09 joined
        </p>
      </div>
    </MockFrame>
  );
}

export function TrialMock() {
  return (
    <MockFrame title="1-week trial">
      <div className="mock-trial">
        <div className="mock-days">
          {["1", "2", "3", "4", "5", "6", "7"].map((day, i) => (
            <span
              key={day}
              className={i === 6 ? "mock-day mock-day--end" : "mock-day"}
            >
              {day}
            </span>
          ))}
        </div>
        <div className="mock-split">
          <span className="mock-tag mock-tag--scale">continue</span>
          <span className="mock-tag mock-tag--kill">cut</span>
        </div>
      </div>
    </MockFrame>
  );
}

export function FormatMock() {
  const briefs = [
    { n: "01", name: "talking product", note: "hook in 3s, product in hand" },
    { n: "02", name: "before / after", note: "one problem, one generate" },
    { n: "03", name: "comment bait", note: "ask, then show the make" },
    { n: "04", name: "desk setup", note: "phone, prompt, result" },
  ];

  return (
    <MockFrame title="weekly briefs">
      <div className="mock-briefs">
        {briefs.map((brief, i) => (
          <article
            key={brief.n}
            className="mock-brief"
            style={{ animationDelay: `${-i * 2.4}s` }}
          >
            <p className="mock-brief-n">brief {brief.n}</p>
            <p className="mock-brief-name">{brief.name}</p>
            <p className="mock-brief-note">{brief.note}</p>
          </article>
        ))}
      </div>
    </MockFrame>
  );
}

export function ReviewMock() {
  return (
    <MockFrame title="review inbox">
      <ul className="mock-inbox">
        <li>
          <span>creator 04</span>
          <span>talking product</span>
          <b className="mock-status mock-status--flip">pending</b>
        </li>
        <li>
          <span>creator 02</span>
          <span>desk setup</span>
          <b className="mock-status is-ok">approved</b>
        </li>
        <li>
          <span>creator 06</span>
          <span>trial cut</span>
          <b className="mock-status">pending</b>
        </li>
      </ul>
      <p className="mock-sla">48-hour weekday turnaround</p>
    </MockFrame>
  );
}

export function PerformanceMock() {
  return (
    <MockFrame title="performance">
      <ul className="mock-perf">
        <li>
          <span>creator 01</span>
          <b className="mock-tag mock-tag--scale">scale</b>
        </li>
        <li>
          <span>format: talking product</span>
          <b className="mock-tag mock-tag--scale">scale</b>
        </li>
        <li>
          <span>format: desk setup</span>
          <b className="mock-tag mock-tag--kill">kill</b>
        </li>
        <li>
          <span>tiktok @twisty</span>
          <b className="mock-tag mock-tag--scale">scale</b>
        </li>
      </ul>
    </MockFrame>
  );
}

export function WeekMock() {
  return (
    <MockFrame title="this week">
      <div className="mock-week">
        <div>
          <p>6</p>
          <span>briefs dropped</span>
        </div>
        <div>
          <p>48h</p>
          <span>review sla</span>
        </div>
        <div>
          <p>12/15</p>
          <span>roster</span>
        </div>
        <div className="mock-week-flags">
          <b className="mock-tag mock-tag--scale">2 scale</b>
          <b className="mock-tag mock-tag--kill">1 kill</b>
        </div>
      </div>
    </MockFrame>
  );
}
