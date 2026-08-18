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
  const apps = ["tiktok", "instagram", "youtube", "discord"];
  const rows = [
    {
      who: "@maya.makes",
      app: "tiktok",
      found: "comment",
      action: "dm sent",
      tone: "live" as const,
    },
    {
      who: "@jules.clips",
      app: "instagram",
      found: "explore",
      action: "replied",
      tone: "ok" as const,
    },
    {
      who: "@kai.posted",
      app: "youtube",
      found: "shorts",
      action: "found",
      tone: "hold" as const,
    },
    {
      who: "@nori.studio",
      app: "discord",
      found: "server",
      action: "dm queued",
      tone: "live" as const,
    },
  ];

  return (
    <MockFrame title="sourcing engine">
      <div className="mock-engine">
        <p className="mock-kicker">
          scanning <b>4 apps</b> · 18 found this week · 7 in outreach
        </p>
        <div className="mock-engine-apps">
          {apps.map((app) => (
            <span key={app} className={app === "tiktok" ? "is-on" : undefined}>
              {app}
            </span>
          ))}
        </div>
        <div className="mock-engine-head">
          <span>creator</span>
          <span>found on</span>
          <span>where</span>
          <span>outreach</span>
        </div>
        <ul>
          {rows.map((row) => (
            <li key={row.who} className={`is-${row.tone}`}>
              <b>{row.who}</b>
              <span>{row.app}</span>
              <span>{row.found}</span>
              <em>{row.action}</em>
            </li>
          ))}
        </ul>
      </div>
    </MockFrame>
  );
}

export function OnboardingMock() {
  const steps = [
    { name: "agreement", state: "done" },
    { name: "credits", state: "done" },
    { name: "account setup", state: "now" },
    { name: "guidelines", state: "next" },
    { name: "prompt library", state: "next" },
  ];

  return (
    <MockFrame title="onboarding">
      <div className="mock-flow">
        <p className="mock-flow-who">
          <span>@jules.clips</span>
          step 3 of 5
        </p>
        <ol>
          {steps.map((step, i) => (
            <li key={step.name} className={`is-${step.state}`}>
              <b>{i + 1}</b>
              <div>
                <strong>{step.name}</strong>
                {step.state === "now" ? <em>setting up posting access</em> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
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
  const days = [
    { n: "1", posted: true },
    { n: "2", posted: true },
    { n: "3", posted: false },
    { n: "4", posted: true },
    { n: "5", posted: true },
    { n: "6", posted: false },
    { n: "7", posted: true },
  ];

  return (
    <MockFrame title="trial">
      <div className="mock-trial">
        <div className="mock-trial-who">
          <span>n</span>
          <div>
            <b>@nori.studio</b>
            <em>week 1 trial</em>
          </div>
        </div>
        <div className="mock-days">
          {days.map((day) => (
            <span
              key={day.n}
              className={day.posted ? "mock-day is-posted" : "mock-day is-miss"}
            >
              {day.n}
            </span>
          ))}
        </div>
        <div className="mock-trial-result">
          <p>5 of 7 days posted</p>
          <b className="mock-tag mock-tag--kill">cut</b>
        </div>
      </div>
    </MockFrame>
  );
}

export function FormatMock() {
  const clips = [
    { format: "pov", views: "12k", who: "@kai.posted" },
    { format: "before / after", views: "48k", who: "@jules.clips" },
    { format: "comment bait", views: "91k", who: "@maya.makes" },
    { format: "talking product", views: "210k", who: "@nori.studio" },
  ];

  return (
    <MockFrame title="formats">
      <div className="mock-tt">
        <div className="mock-tt-row">
          {clips.map((clip) => (
            <article key={clip.format} className="mock-phone">
              <p className="mock-phone-who">{clip.who}</p>
              <p className="mock-phone-fmt">{clip.format}</p>
              <p className="mock-phone-views">{clip.views}</p>
            </article>
          ))}
        </div>
        <div className="mock-tt-scale">
          <span>test</span>
          <i />
          <span>scale</span>
        </div>
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
      name: "@maya.makes",
      meta: "talking product",
      views: "124k",
      width: "82%",
      tag: "scale",
    },
    {
      name: "@jules.clips",
      meta: "comment bait",
      views: "81k",
      width: "64%",
      tag: "scale",
    },
    {
      name: "@kai.posted",
      meta: "pov",
      views: "54k",
      width: "48%",
      tag: "scale",
    },
    {
      name: "@nori.studio",
      meta: "desk setup",
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
            <span>creators</span>
          </div>
        </div>
        <div className="mock-dash-tabs">
          <span className="is-on">by creator</span>
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

export function WeekBoardMock() {
  const days = [
    {
      day: "mon",
      job: "drop",
      lines: ["6 briefs live", "talking product", "glow-up"],
    },
    {
      day: "tue",
      job: "review",
      lines: ["4 in queue", "@jules 6h left"],
    },
    {
      day: "wed",
      job: "review",
      lines: ["notes out", "@maya approved"],
    },
    {
      day: "thu",
      job: "review",
      lines: ["sla clear", "0 waiting"],
    },
    {
      day: "fri",
      job: "cadence",
      lines: ["2 scale", "1 kill"],
    },
  ];

  return (
    <MockFrame title="operating week">
      <div className="mock-rhythm">
        <p className="mock-kicker">
          roster <b>12/15</b> · 48h weekday sla · community live
        </p>
        <div className="mock-rhythm-days">
          {days.map((col) => (
            <article
              key={col.day}
              className={col.day === "wed" ? "is-now" : undefined}
            >
              <p>{col.day}</p>
              <b>{col.job}</b>
              <ul>
                {col.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mock-rhythm-foot">
          3 open seats · creator 09 in trial · next pull from screened
        </p>
      </div>
    </MockFrame>
  );
}

export function ScaleMock() {
  return (
    <MockFrame title="scale loop">
      <div className="mock-spread">
        <p className="mock-spread-hit">
          talking product
          <span>210k on @maya.makes</span>
        </p>
        <ul>
          <li>
            <span>@jules.clips</span>
            <em className="is-live">rebuilding</em>
          </li>
          <li>
            <span>@kai.posted</span>
            <em className="is-live">rebuilding</em>
          </li>
          <li>
            <span>@nori.studio</span>
            <em>queued</em>
          </li>
        </ul>
        <p className="mock-kicker">same concept, every account, until it dies</p>
      </div>
    </MockFrame>
  );
}

export function ReportMock() {
  return (
    <MockFrame title="reporting">
      <div className="mock-week">
        <div>
          <p>412k</p>
          <span>views this week</span>
        </div>
        <div>
          <p>86</p>
          <span>posts</span>
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
      <ul className="mock-report-foot">
        <li>
          <b>weekly</b>
          <span>sent monday</span>
        </li>
        <li>
          <b>monthly</b>
          <span>aug 28 · strategy review</span>
        </li>
      </ul>
    </MockFrame>
  );
}
