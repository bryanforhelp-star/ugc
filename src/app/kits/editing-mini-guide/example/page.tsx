import type { Metadata } from "next";
import Link from "next/link";
import { EDITING_GUIDE } from "@/lib/store";
import "./course.css";
import { CourseMark, courseChapters } from "./outline";

export const metadata: Metadata = {
  title: { absolute: "kit example" },
  robots: { index: false, follow: false },
};

export default function EditingGuideExamplePage() {
  return (
    <div className="page kit-course">
      <div className="wrap">
        <CourseMark />
        <p className="kit-course__note">
          private course preview. tools, cut, text, visuals, layers, motion,
          finish, then the full edit.
        </p>

        <p className="cover">the editing mini course</p>
        <h1 className="page-title">{EDITING_GUIDE.headline}</h1>
        <p className="page-lead">
          from what i use to film and edit, through every layer, to a finished
          video.
        </p>

        <section className="kit-course__method" aria-label="course method">
          <p>what you will make</p>
          <p className="kit-course__method-result">
            one finished talking-head video, edited from start to finish in
            capcut.
          </p>
          <ol>
            <li>see what i do on one of my actual videos.</li>
            <li>follow the exact steps in capcut.</li>
            <li>make the same change on your own video.</li>
          </ol>
        </section>

        <div className="kit-course__grid">
          {courseChapters().map((item) => {
            return (
              <article key={item.name} className="guide-card guide-card--hub">
                <Link href={item.href} className="guide-card__link">
                  <p className="kit-course__num">{item.n}</p>
                  <h2>{item.name}</h2>
                  <p className="guide-card__desc">{item.blurb}</p>
                  <p className="kit-course__result">
                    you leave with: {item.result}
                  </p>
                  <span className="guide-card__arrow">open chapter</span>
                </Link>
              </article>
            );
          })}
        </div>

        <section className="kit-course__shelf">
          <p className="kit-course__num">included with the course</p>
          <h2>the things i actually use.</h2>
          <p>
            no giant folders to sort through. just the fonts, sound effects,
            visual sources, and looks that appear in the walkthroughs.
          </p>
          <ul>
            <li>my font list and text settings</li>
            <li>my named sound effects</li>
            <li>my overlay sources and pinterest board</li>
            <li>the luts and color starting points i use</li>
            <li>short gifs for the capcut moves you need to repeat</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
