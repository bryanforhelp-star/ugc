import Link from "next/link";
import { ShowcaseFeed } from "@/components/ShowcaseFeed";
import {
  SHOWCASE_INTRO,
  SHOWCASE_PIECES,
  type ShowcasePiece,
} from "@/lib/showcase";

type Props = {
  intro?: string;
  pieces?: ShowcasePiece[];
};

export function ContentShowcase({
  intro = SHOWCASE_INTRO,
  pieces = SHOWCASE_PIECES,
}: Props) {
  return (
    <section id="content" className="showcase">
      <div className="wrap">
        <div className="s-head-row">
          <h2 className="s-head">content</h2>
          <Link href="/video" className="guides-hub-link">
            see all editing
            <span className="arr">→</span>
          </Link>
        </div>
        <p className="s-sub">{intro}</p>
        <ShowcaseFeed pieces={pieces} />
      </div>
    </section>
  );
}
