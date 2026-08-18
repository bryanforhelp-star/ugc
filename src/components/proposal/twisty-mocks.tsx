import type { ReactNode } from "react";

function MockFrame({
  title,
  tone = "light",
  children,
}: {
  title: string;
  tone?: "light" | "discord";
  children: ReactNode;
}) {
  return (
    <div className={tone === "discord" ? "mock mock--discord" : "mock"} aria-hidden="true">
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
    <MockFrame title="discord" tone="discord">
      <div className="mock-dc">
        <div className="mock-dc-rail">
          <span className="mock-dc-server is-on">t</span>
          <span className="mock-dc-plus">+</span>
        </div>
        <div className="mock-dc-nav">
          <p className="mock-dc-space">twisty canvas</p>
          <p className="mock-dc-cat">text channels</p>
          <ul>
            <li className="is-on">
              <span>#</span> briefs
            </li>
            <li>
              <span>#</span> submissions
            </li>
            <li>
              <span>#</span> wins
            </li>
            <li>
              <span>#</span> trial
            </li>
            <li>
              <span>#</span> rules
            </li>
          </ul>
        </div>
        <div className="mock-dc-chat">
          <p className="mock-dc-head"># briefs</p>
          <p className="mock-dc-sys">
            <span className="mock-ping" />
            creator 09 joined
          </p>
          <div className="mock-dc-msg">
            <b>ops</b>
            <span>this week's briefs are up.</span>
          </div>
        </div>
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
  const rows = [
    {
      name: "creator 01",
      meta: "talking product",
      views: "124k",
      width: "82%",
      tag: "scale",
    },
    {
      name: "creator 04",
      meta: "talking product",
      views: "81k",
      width: "64%",
      tag: "scale",
    },
    {
      name: "tiktok @twisty",
      meta: "account",
      views: "210k",
      width: "94%",
      tag: "scale",
    },
    {
      name: "desk setup",
      meta: "format",
      views: "9.2k",
      width: "18%",
      tag: "kill",
    },
  ];

  return (
    <MockFrame title="dashboard">
      <div className="mock-dash">
        <div className="mock-dash-kpis">
          <div>
            <p>412k</p>
            <span>views</span>
          </div>
          <div>
            <p>86</p>
            <span>posts</span>
          </div>
          <div>
            <p>12</p>
            <span>live accounts</span>
          </div>
        </div>
        <div className="mock-dash-tabs">
          <span className="is-on">creator</span>
          <span>format</span>
          <span>account</span>
        </div>
        <ul className="mock-dash-rows">
          {rows.map((row) => (
            <li key={row.name}>
              <div className="mock-dash-who">
                <b>{row.name}</b>
                <span>{row.meta}</span>
              </div>
              <div className="mock-dash-track">
                <i style={{ width: row.width }} />
              </div>
              <em>{row.views}</em>
              <strong className={`mock-tag mock-tag--${row.tag}`}>{row.tag}</strong>
            </li>
          ))}
        </ul>
      </div>
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
