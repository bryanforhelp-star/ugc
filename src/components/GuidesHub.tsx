"use client";

import { useMemo, useState } from "react";
import { GuideCard } from "@/components/GuideCard";
import type { GuideListItem } from "@/lib/guides";

type Props = {
  guides: GuideListItem[];
};

type SortKey = "newest" | "oldest" | "a-z";

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function uniqueSorted(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function sortGuides(guides: GuideListItem[], sort: SortKey) {
  const list = [...guides];

  if (sort === "a-z") {
    return list.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "oldest") {
    return list.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }

  return list.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function GuidesHub({ guides }: Props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [topic, setTopic] = useState("");
  const [tool, setTool] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");

  const types = useMemo(
    () => uniqueSorted(guides.map((guide) => guide.category)),
    [guides],
  );

  const topics = useMemo(
    () => uniqueSorted(guides.flatMap((guide) => guide.topics)),
    [guides],
  );

  const tools = useMemo(
    () => uniqueSorted(guides.flatMap((guide) => guide.tools)),
    [guides],
  );

  const hasFilters = Boolean(query || type || topic || tool);

  const filtered = useMemo(() => {
    const q = normalize(query);

    const matches = guides.filter((guide) => {
      if (type && guide.category !== type) return false;
      if (topic && !guide.topics.includes(topic)) return false;
      if (tool && !guide.tools.includes(tool)) return false;
      if (!q) return true;

      const haystack = [
        guide.title,
        guide.description,
        guide.category,
        ...guide.topics,
        ...guide.tools,
        ...guide.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });

    return sortGuides(matches, sort);
  }, [guides, query, type, topic, tool, sort]);

  function clearFilters() {
    setQuery("");
    setType("");
    setTopic("");
    setTool("");
  }

  return (
    <div className="guides-hub">
      <div className="guides-hub__controls">
        <div className="guides-hub__top">
          <label className="guides-search">
            <span className="guides-field__label">search</span>
            <input
              type="search"
              className="guides-search__input"
              placeholder="try learning, claude, stack..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search guides"
            />
          </label>

          <label className="guides-field guides-field--sort">
            <span className="guides-field__label">sort by</span>
            <select
              className="guides-select"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              aria-label="Sort guides"
            >
              <option value="newest">newest first</option>
              <option value="oldest">oldest first</option>
              <option value="a-z">a to z</option>
            </select>
          </label>
        </div>

        <div className="guides-hub__filters">
          <label className="guides-field">
            <span className="guides-field__label">type</span>
            <select
              className="guides-select"
              value={type}
              onChange={(event) => setType(event.target.value)}
              aria-label="Filter by type"
            >
              <option value="">all types</option>
              {types.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="guides-field">
            <span className="guides-field__label">topic</span>
            <select
              className="guides-select"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              aria-label="Filter by topic"
            >
              <option value="">all topics</option>
              {topics.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          {tools.length > 0 ? (
            <label className="guides-field">
              <span className="guides-field__label">tool</span>
              <select
                className="guides-select"
                value={tool}
                onChange={(event) => setTool(event.target.value)}
                aria-label="Filter by tool"
              >
                <option value="">all tools</option>
                {tools.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          {hasFilters ? (
            <button
              type="button"
              className="guides-clear"
              onClick={clearFilters}
            >
              clear filters
            </button>
          ) : null}
        </div>
      </div>

      <p className="guides-hub__count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
      </p>

      {filtered.length > 0 ? (
        <div className="guide-grid">
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} variant="hub" />
          ))}
        </div>
      ) : (
        <p className="empty">nothing matched. try a different search or filter.</p>
      )}
    </div>
  );
}
