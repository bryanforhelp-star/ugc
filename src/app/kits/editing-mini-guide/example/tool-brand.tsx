export function ToolBrand({ name }: { name: "ChatCut" | "CapCut" | "Cursor" }) {
  const wordmark = name === "CapCut";
  return (
    <h2 className="kit-course__tool-title">
      {/* Official brand assets are served locally; CapCut includes its wordmark. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/kits/editing-mini-guide/logos/${name.toLowerCase()}.svg`}
        alt={wordmark ? name : ""} width={wordmark ? 148 : 34} height={wordmark ? 28 : 34}
        className={wordmark ? "kit-course__tool-wordmark" : "kit-course__tool-icon"} />
      {!wordmark ? name : null}
    </h2>
  );
}
