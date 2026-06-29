/** Strip markdown to plain text for schema.org articleBody. */
export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

export type HowToStep = { name: string; text: string };

/** Pull step-like blocks from guide markdown for HowTo schema. */
export function extractHowToSteps(content: string): HowToStep[] {
  const boldNumbered = [
    ...content.matchAll(/^\*\*(\d+)\.\s*([^*]+)\*\*(.*)$/gm),
  ];
  if (boldNumbered.length >= 2) {
    return boldNumbered.map((match) => ({
      name: match[2].trim(),
      text: `${match[2].trim()}${match[3].trim()}`.trim(),
    }));
  }

  const h3Steps = [...content.matchAll(/^### Step (\d+):\s*(.+)$/gm)];
  if (h3Steps.length >= 2) {
    return h3Steps.map((match, index) => {
      const start = match.index ?? 0;
      const next = h3Steps[index + 1]?.index ?? content.length;
      const body = content
        .slice(start + match[0].length, next)
        .replace(/^#{1,6}\s+.*$/gm, "")
        .trim();
      return {
        name: match[2].trim(),
        text: body.split("\n").filter(Boolean).slice(0, 3).join(" ").trim(),
      };
    });
  }

  const optionSteps = [
    ...content.matchAll(/^## Option ([A-Z]):\s*(.+)$/gm),
  ];
  if (optionSteps.length >= 2) {
    return optionSteps.map((match, index) => {
      const start = match.index ?? 0;
      const next = optionSteps[index + 1]?.index ?? content.length;
      const body = content
        .slice(start + match[0].length, next)
        .replace(/^#{1,6}\s+.*$/gm, "")
        .trim();
      return {
        name: `Option ${match[1]}: ${match[2].trim()}`,
        text: body.split("\n").filter(Boolean).slice(0, 2).join(" ").trim(),
      };
    });
  }

  return [];
}
