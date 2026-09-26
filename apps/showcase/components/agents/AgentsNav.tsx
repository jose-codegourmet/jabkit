"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const overview = [
  { label: "Protocol", hash: "protocol" },
  { label: "Data source", hash: "data-source" },
  { label: "Agent flow", hash: "agent-flow" },
  { label: "Limitations", hash: "limitations" },
] as const;

const linkClass = (active: boolean) =>
  `flex min-h-10 items-center rounded-md border-2 px-3 text-sm transition-colors ${
    active
      ? "border-ink bg-mustard font-semibold text-ink"
      : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
  }`;

/** Left rail on `/agents`: overview anchors and a filterable tool list. */
export function AgentsNav({ tools }: { tools: string[] }) {
  const pathname = usePathname();
  const [filter, setFilter] = useState("");
  const visible = tools.filter((tool) =>
    tool.toLowerCase().includes(filter.trim().toLowerCase()),
  );

  return (
    <>
      <aside className="hidden border-r-2 border-ink px-5 py-7 desk:block">
        <div className="sticky top-24">
          <label htmlFor="agents-tool-filter" className="sr-only">
            Filter tools
          </label>
          <input
            id="agents-tool-filter"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Filter tools…"
            className="h-10 w-full rounded-[--radius] border-2 border-ink bg-card px-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-3 focus:ring-mustard"
          />
          <nav aria-label="Agents reference" className="mt-6">
            <p className="mb-2 font-mono text-xs text-muted-foreground">
              Overview
            </p>
            <ul className="space-y-1">
              {overview.map((item) => (
                <li key={item.hash}>
                  <Link
                    href={`/agents#${item.hash}` as Route}
                    className={linkClass(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 mb-2 font-mono text-xs text-muted-foreground">
              Tools
            </p>
            <ul className="space-y-1">
              {visible.map((tool) => {
                const active = pathname === `/agents/${tool}`;
                return (
                  <li key={tool}>
                    <Link
                      href={`/agents/${tool}` as Route}
                      aria-current={active ? "page" : undefined}
                      className={`${linkClass(active)} font-mono text-[13px]`}
                    >
                      {tool}
                    </Link>
                  </li>
                );
              })}
              {visible.length === 0 ? (
                <li className="px-3 text-sm text-muted-foreground">
                  No tool matches.
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      </aside>
      <nav
        aria-label="Agent tools"
        className="flex gap-2 overflow-x-auto border-b-2 border-ink px-5 py-3 desk:hidden"
      >
        <Link
          href="/agents"
          aria-current={pathname === "/agents" ? "page" : undefined}
          className="vd-chip shrink-0"
        >
          Overview
        </Link>
        {tools.map((tool) => (
          <Link
            key={tool}
            href={`/agents/${tool}` as Route}
            aria-current={pathname === `/agents/${tool}` ? "page" : undefined}
            className="vd-chip shrink-0 font-mono"
          >
            {tool}
          </Link>
        ))}
      </nav>
    </>
  );
}
