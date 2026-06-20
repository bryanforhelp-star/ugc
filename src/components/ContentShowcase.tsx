import { SHOWCASE_INTRO, SHOWCASE_PIECES } from "@/lib/showcase";
import { ShowcaseFeed } from "@/components/ShowcaseFeed";

export function ContentShowcase() {
  return (
    <section id="content" className="showcase">
      <div className="wrap">
        <h2 className="s-head">content</h2>
        <p className="s-sub">{SHOWCASE_INTRO}</p>
        <ShowcaseFeed pieces={SHOWCASE_PIECES} />
      </div>
    </section>
  );
}
