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

export function DropMock() {
  const briefs = [
    { n: "01", name: "talking product", state: "live" },
    { n: "02", name: "before / after", state: "live" },
    { n: "03", name: "comment bait", state: "live" },
    { n: "04", name: "pov", state: "live" },
    { n: "05", name: "desk setup", state: "new" },
    { n: "06", name: "glow-up", state: "new" },
  ];

  return (
    <MockFrame title="weekly drop">
      <div className="mock-drop">
        <p className="mock-kicker">6 briefs · monday</p>
        <ul>
          {briefs.map((brief) => (
            <li key={brief.n} className={brief.state === "new" ? "is-new" : undefined}>
              <b>{brief.n}</b>
              <span>{brief.name}</span>
              <em>{brief.state}</em>
            </li>
          ))}
        </ul>
      </div>
    </MockFrame>
  );
}

export function ReviewLoopMock() {
  return (
    <MockFrame title="review queue">
      <p className="mock-kicker">4 in queue · 48h weekday sla</p>
      <ul className="mock-queue">
        <li>
          <span>@jules.clips</span>
          <span>talking product</span>
          <b className="mock-status mock-status--hot">6h left</b>
        </li>
        <li>
          <span>@maya.makes</span>
          <span>comment bait</span>
          <b className="mock-status is-ok">notes sent</b>
        </li>
        <li>
          <span>@kai.posted</span>
          <span>pov</span>
          <b className="mock-status is-ok">approved</b>
        </li>
        <li>
          <span>@nori.studio</span>
          <span>desk setup</span>
          <b className="mock-status">waiting</b>
        </li>
      </ul>
    </MockFrame>
  );
}

export function CommunityOpsMock() {
  return (
    <MockFrame title="community">
      <div className="mock-ops">
        <p className="mock-kicker">
          roster <b>12/15</b> · 3 open seats
        </p>
        <ul>
          <li>
            <span className="mock-dot is-on" />
            <b>ops</b>
            <span>briefs are up. rebuild talking product.</span>
          </li>
          <li>
            <span className="mock-dot" />
            <b>@maya.makes</b>
            <span>posted. notes?</span>
          </li>
          <li>
            <span className="mock-dot is-on" />
            <b>ops</b>
            <span>approved. ship it.</span>
          </li>
        </ul>
      </div>
    </MockFrame>
  );
}

export function RosterMock() {
  return (
    <MockFrame title="roster">
      <div className="mock-slots">
        <p className="mock-kicker">12 live · 3 seats to fill</p>
        <div className="mock-slot-row" aria-hidden="true">
          {Array.from({ length: 15 }, (_, i) => (
            <i key={i} className={i < 12 ? "is-filled" : undefined} />
          ))}
        </div>
        <ul>
          <li>
            <b className="mock-tag mock-tag--kill">out</b>
            <span>@nori.studio</span>
            <em>cut</em>
          </li>
          <li>
            <b className="mock-tag mock-tag--scale">in</b>
            <span>creator 09</span>
            <em>trial day 4</em>
          </li>
          <li>
            <b className="mock-tag">next</b>
            <span>creator 11</span>
            <em>screened</em>
          </li>
        </ul>
      </div>
    </MockFrame>
  );
}

export function CadenceMock() {
  const rows = [
    { name: "@maya.makes", days: [1, 1, 1, 1, 1, 1, 1], tag: "scale" },
    { name: "@jules.clips", days: [1, 1, 1, 1, 1, 1, 0], tag: "scale" },
    { name: "@kai.posted", days: [1, 1, 1, 1, 0, 1, 0], tag: "watch" },
    { name: "@nori.studio", days: [1, 0, 1, 0, 0, 1, 0], tag: "kill" },
  ];

  return (
    <MockFrame title="cadence">
      <ul className="mock-cadence">
        {rows.map((row) => (
          <li key={row.name}>
            <b>{row.name}</b>
            <span className="mock-ticks">
              {row.days.map((on, i) => (
                <i key={i} className={on ? "is-on" : undefined} />
              ))}
            </span>
            <strong className={`mock-tag mock-tag--${row.tag}`}>{row.tag}</strong>
          </li>
        ))}
      </ul>
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
