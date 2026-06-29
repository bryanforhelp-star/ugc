"use client";

import { useState, type ElementType, type KeyboardEvent, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";

function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("\n\n");
  if (typeof node === "object" && "props" in node) {
    const props = (node as { props: { children?: ReactNode } }).props;
    return nodeToText(props.children);
  }
  return "";
}

function CopyPrompt({
  as: Tag = "blockquote",
  children,
}: {
  as?: ElementType;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const text = nodeToText(children).trim();

  async function copy() {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <Tag
      className="prompt-block"
      onClick={copy}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          void copy();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="click to copy prompt"
    >
      <span className="prompt-block__label">{copied ? "copied" : "copy"}</span>
      {children}
    </Tag>
  );
}

type Props = {
  content: string;
};

export function GuideProse({ content }: Props) {
  return (
    <ReactMarkdown
      components={{
        blockquote: ({ children }) => <CopyPrompt>{children}</CopyPrompt>,
        pre: ({ children }) => <CopyPrompt as="pre">{children}</CopyPrompt>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
