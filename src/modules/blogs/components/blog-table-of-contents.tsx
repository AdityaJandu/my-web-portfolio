"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

/**
 * Desktop: sticky sidebar with active-section highlight.
 * Mobile: collapsed by default so it doesn't eat the screen.
 */
export function BlogTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Treat the band near the top of the viewport as "current".
      { rootMargin: "-96px 0px -65% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-1">
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active ? "location" : undefined}
              className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors duration-300 ${
                active
                  ? "border-primary text-white"
                  : "border-[#494847]/30 text-foreground hover:text-white"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav aria-label="Table of contents">
      <details className="rounded-lg border border-[#494847]/20 bg-surface-low px-4 py-3 lg:hidden">
        <summary className="cursor-pointer font-display text-sm font-semibold uppercase tracking-widest text-white">
          On this page
        </summary>
        <div className="mt-3">{list}</div>
      </details>

      <div className="sticky top-24 hidden lg:block">
        <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          On this page
        </p>
        {list}
      </div>
    </nav>
  );
}
