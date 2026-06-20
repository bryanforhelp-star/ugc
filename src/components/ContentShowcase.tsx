import { SHOWCASE_INTRO, SHOWCASE_PIECES } from "@/lib/showcase";
import { ShowcasePiece } from "@/components/ShowcasePiece";

export function ContentShowcase() {
  return (
    <section id="content" className="showcase">
      <div className="wrap">
        <h2 className="s-head">content</h2>
        <p className="s-sub">{SHOWCASE_INTRO}</p>
        <div className="showcase-feed">
          {SHOWCASE_PIECES.map((piece, index) => (
            <ShowcasePiece key={piece.id} piece={piece} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
