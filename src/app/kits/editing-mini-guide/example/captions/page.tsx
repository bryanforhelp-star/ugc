import type { Metadata } from "next";
import Link from "next/link";
import "../course.css";
import { LessonShell } from "../lesson-shell";
import { FontShelf } from "../font-shelf";
import { HUB } from "../course-data";
import { CourseGif } from "../course-gif";

export const metadata: Metadata = {
  title: { absolute: "text · kit example" },
  robots: { index: false, follow: false },
};

export default function CaptionsExamplePage() {
  return (
    <LessonShell current="text" title="text" lead="how i caption my videos, one word at a time.">
      <nav className="kit-course__text-map" aria-label="In this lesson">
        <a href="#captions">01 <span>captions</span></a>
        <a href="#fonts">02 <span>fonts</span></a>
        <a href="#placement">03 <span>placement</span></a>
        <a href="#layering">04 <span>layering text</span></a>
      </nav>
      <div className="kit-course__module-stack">
        <section id="captions" className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">01 · captions</p>
            <h2>i caption the whole video</h2>
          </header>
          <p>I do mine one by one because I’m a psychopath. You can absolutely use auto captions. But this is the way I do it right now.</p>
          <p>Having each word separate makes my life easier later when I want to move it around or add keyframes to certain words. I’m working on figuring out a faster way. I haven’t got there yet, so it’s a very manual process.</p>
          <ol className="kit-course__caption-steps">
            <li><strong>Start with one default text clip.</strong><span>Drag its end so it stretches across the entire video.</span></li>
            <li><strong>Split the text for one section.</strong><span>Select the text clip. Move the playhead to the start of each spoken word and press Command-B to split the text there.</span></li>
            <li><strong>Go back and fill in that section’s words.</strong><span>Select each little text clip and replace the default text with the word you’re saying.</span></li>
            <li><strong>Move on to the next section.</strong><span>I do this clip by clip: split a section, fill it in, then repeat. I don’t split the whole video before adding the words.</span></li>
          </ol>
          <CourseGif src="/kits/editing-mini-guide/captions/02-edit-caption.gif"
            alt="Splitting a text clip into shorter sections on the CapCut timeline"
            caption="First, split the text for the section you’re working on. Keep the text clip selected when you use Command-B." />
          <CourseGif src="/kits/editing-mini-guide/captions/01-add-caption.gif"
            alt="Selecting a text clip in CapCut and replacing the default text with caption words"
            caption="Then go back through that section and fill in the words, one text clip at a time." />
          <div className="kit-course__auto-captions">
            <h3>you can also use auto captions</h3>
            <p>You don’t have to type every word yourself. Generate the captions, then go back through the wording and timing. You can still edit the captions afterward.</p>
            <ol>
              <li>Open <strong>Text → Auto captions</strong>.</li>
              <li>Choose the language you’re speaking and click <strong>Generate</strong>.</li>
              <li>Once the captions appear, check the words and timing, then change the font and placement.</li>
            </ol>
            <CourseGif src="/kits/editing-mini-guide/captions/03-auto-captions.gif"
              alt="Opening Auto captions in CapCut, generating captions, and seeing the caption clips appear on the timeline"
              caption="Here’s the auto-caption route. CapCut generates the words for you. The processing wait is shortened in this demo." />
          </div>
        </section>
        <section id="fonts" className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">02 · fonts</p>
            <h2>the fonts i use</h2>
          </header>
          <p>I go between CC Soft Edge and Helvetica Neue for my main captions. New Pixel and Bootzy TM are the accent fonts. CC Soft Edge is the one I’ve used in my last three videos.</p>
          <FontShelf />
        </section>
        <section id="placement" className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">03 · placement</p>
            <h2>where the captions sit</h2>
          </header>
          <p>I usually center the captions around my chest. Where that lands depends on how I’m framed.</p>
          <div className="kit-course__placement-examples">
            <figure className="kit-course__placement-example kit-course__placement-example--vertical">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kits/editing-mini-guide/captions/placement-vertical.png" alt="Kyndall’s vertical video with the word pacing at chest height and a Reel interface overlay showing the surrounding controls" loading="lazy" />
              <figcaption><strong>vertical / Reels</strong><br />The word sits around my chest, clear of my face and the buttons on the right. The interface overlay shows the space around it.</figcaption>
            </figure>
            <figure className="kit-course__placement-example kit-course__placement-example--horizontal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kits/editing-mini-guide/captions/placement-horizontal-full.png" alt="Kyndall’s horizontal video example with the word these centered near her microphone and chest" loading="lazy" />
              <figcaption><strong>horizontal</strong><br />Here the word sits near my microphone and chest. Place the text around where you are in the frame.</figcaption>
            </figure>
          </div>
        </section>
        <section id="layering" className="kit-course__module-card">
          <header className="kit-course__module-header">
            <p className="kit-course__eyebrow">04 · layering text</p>
            <h2>put the text slightly behind me</h2>
          </header>
          <p>I put a cutout of myself above the text, so my head sits in front of the words. The original video stays underneath.</p>
          <ol className="kit-course__caption-steps">
            <li><strong>Make a second copy of the video clip.</strong><span>Copy and paste the yap clip for the section you’re working on. Keep the duplicate lined up with the original so they play at the same time.</span></li>
            <li><strong>Remove the background from the duplicate.</strong><span>Select that copy, open Video → Remove BG, and turn on Auto removal.</span></li>
            <li><strong>Mute the duplicate.</strong><span>Turn its volume all the way down. Keep the sound on the original clip underneath.</span></li>
            <li><strong>Lift the cutout above the text.</strong><span>From top to bottom: the cutout of you, the text, then the original video with its background.</span></li>
            <li><strong>Position the words and play it through.</strong><span>Move the text so it sits slightly behind your head. Check that your head covers the words where they overlap.</span></li>
          </ol>
          <CourseGif src="/kits/editing-mini-guide/captions/04-text-behind-head-complete.gif"
            alt="The final restart: deleting earlier cutout copies, pasting a duplicate yap clip, applying Auto removal, and lifting the cutout above the text"
            caption="I start by deleting the cutout copies I already made, then copy and paste the yap clip again. Follow this through Auto removal and lifting the cutout above the text. Keep the duplicate muted so you only hear the original. The end shows the text behind my head." />
          <Link className="kit-course__tool-link" href={`${HUB}/layers`}>more on cutouts and layers →</Link>
        </section>
      </div>
    </LessonShell>
  );
}
