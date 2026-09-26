import type { Metadata } from "next";
import { LessonShell } from "../lesson-shell";

const SOUND_EFFECTS = [
  ["AirDrop", "airdrop.mp3"],
  ["Apple Pay", "apple-pay.mp3"],
  ["Call", "call.mp3"],
  ["Click 1", "click-1.mp3"],
  ["Click 2", "click-2.mp3"],
  ["Click 3", "click-3.mp3"],
  ["Click 4", "click-4.mp3"],
  ["Click 5", "click-5.mp3"],
  ["Counting", "counting.mp3"],
  ["Impact", "impact.mp3"],
  ["Low Battery", "low-battery.mp3"],
  ["Mute", "mute.mp3"],
  ["Photo", "photo.mp3"],
  ["Scrolling", "scrolling.mp3"],
  ["Siri Fail", "siri-fail.mp3"],
  ["SMS", "sms-1.mp3"],
  ["Snap", "snap.mp3"],
  ["Stretching", "stretching.mp3"],
  ["Swoosh 1", "swoosh-1.mp3"],
  ["Swoosh 2", "swoosh-2.mp3"],
  ["Transformation", "transformation.mp3"],
  ["Transition", "transition.mp3"],
] as const;

export const metadata: Metadata = {
  title: { absolute: "sound effects · the course" },
  robots: { index: false, follow: false },
};

export default function SoundPage() {
  return (
    <LessonShell current="sound effects" title="sound effects"
      lead="where I put them, how I line them up, and how loud I make them">
      <div className="kit-course__lesson-goal">
        <p className="kit-course__eyebrow">lesson goal</p>
        <p>use sound effects to support the edit without covering your voice.</p>
      </div>

      <section className="kit-course__module-card">
        <header className="kit-course__module-header">
          <h2>where I use sound effects</h2>
        </header>
        <p>
          Sound effects are the last thing I add. By this point, all of my overlays
          are in, the text is moving, and the keyframes are finished. I wait until
          the visuals are done so I can line each sound up with the exact moment it
          is supporting without having to move it again later.
        </p>
        <p>
          I add a sound when something happens on screen, like text landing, a photo
          appearing, a click, or a transition. Then I lower the volume until the
          sound adds to the moment without covering my voice. Once this pass is done,
          the edit is basically finished.
        </p>

        <figure className="kit-course__gif kit-course__demo kit-course__gif-slot">
          <div className="kit-course__gif-slot-frame">
            <span aria-hidden="true">▶</span>
            <strong>GIF walkthrough</strong>
          </div>
          <figcaption>
            I’ll show the timeline here so you can see exactly where I place the
            sound, how I line it up with the visual, and how low I keep the volume.
          </figcaption>
        </figure>

        <ol className="kit-course__sound-steps">
          <li>
            <strong>choose the moment</strong>
            <span>Find the exact visual change that needs a little more emphasis.</span>
          </li>
          <li>
            <strong>line it up</strong>
            <span>Place the sound directly under that moment in the timeline.</span>
          </li>
          <li>
            <strong>lower the volume</strong>
            <span>Turn it down until you can still hear it, but your voice stays clear.</span>
          </li>
        </ol>
      </section>

      <aside className="kit-course__resources">
        <header className="kit-course__module-header kit-course__resource-title-row">
          <div>
            <h2>my most used sound effects</h2>
            <p>Listen to one, then download the sound you want to use.</p>
          </div>
          <a
            className="kit-course__tool-link"
            href="/kits/editing-mini-guide/sounds/kyndall-sound-effects-22.zip"
            download
          >
            download all 22 (.zip) ↓
          </a>
        </header>
        <div className="kit-course__audio-grid">
          {SOUND_EFFECTS.map(([name, file]) => {
            const src = `/kits/editing-mini-guide/sounds/${file}`;
            return (
              <article className="kit-course__audio-card" key={file}>
                <strong>{name}</strong>
                <audio controls preload="none" src={src}>
                  <a href={src}>download {name}</a>
                </audio>
                <a href={src} download>download ↓</a>
              </article>
            );
          })}
        </div>
      </aside>
    </LessonShell>
  );
}
