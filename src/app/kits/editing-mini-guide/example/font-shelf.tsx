const FONTS = [
  { name: "CC Soft Edge", use: "main captions", sample: "cc-soft-edge", source: "Find it in CapCut", href: null },
  { name: "Helvetica Neue", use: "main captions", sample: "helvetica-neue", source: "MyFonts", href: "https://www.myfonts.com/collections/neue-helvetica-font-linotype" },
  { name: "New Pixel", use: "accent font", sample: "pixel", source: "That That Type", href: "https://www.thatthattype.com/fonts/that-that-new-pixel-variable-family" },
  { name: "Bootzy TM", use: "accent font", sample: "bootzy", source: "Type Mania", href: "https://typemania.eu/products/bootzy-tm" },
] as const;

export function FontShelf({ samples = true }: { samples?: boolean }) {
  return (
    <div className="kit-course__font-grid">
      {FONTS.map((font) => (
        <article className={`kit-course__font-card${font.use === "main captions" ? " kit-course__font-card--main" : ""}`} key={font.name}>
          <p className="kit-course__eyebrow">{font.use}</p>
          <h3>{font.name}</h3>
          {samples && (
            <div className="kit-course__font-specimen">
              {font.use === "main captions" ? (
                // Exact outlined lettering keeps these samples consistent on every device.
                // eslint-disable-next-line @next/next/no-img-element
                <img className="kit-course__font-lettering" src={`/kits/editing-mini-guide/fonts/${font.sample}.svg`} alt={`the words. — set in ${font.name}`} width={380} height={120} />
              ) : (
                <p className={`kit-course__font-sample kit-course__font-sample--${font.sample}`}>the words.</p>
              )}
            </div>
          )}
          <div className="kit-course__font-access">
            {font.href ? <a href={font.href} target="_blank" rel="noreferrer">get it from {font.source} ↗</a> : <strong>{font.source}</strong>}
          </div>
        </article>
      ))}
    </div>
  );
}
