"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross2Icon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { CatalogueGroup } from "../lib/catalogue-groups";

type FilterState = { q?: string; kind?: string; group?: string; sort?: string };
type FilterGroup = Pick<CatalogueGroup, "id" | "label" | "kind"> & {
  count: number;
};
type Option = {
  label: string;
  changes: Partial<FilterState>;
  active: boolean;
  count?: number;
};

function hrefFor(current: FilterState, changes: Partial<FilterState>): Route {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...current, ...changes }))
    if (value) params.set(key, value);
  const search = params.toString();
  return (search ? `/components?${search}` : "/components") as Route;
}

function filterSections(current: FilterState, groups: FilterGroup[]) {
  const grouped = (kind: FilterGroup["kind"]): Option[] =>
    groups
      .filter((group) => group.kind === kind)
      .map((group) => ({
        label: group.label,
        changes: { kind, group: group.id },
        active: current.group === group.id,
        count: group.count,
      }));
  return [
    {
      title: "Browse",
      options: [
        {
          label: "Everything",
          changes: { kind: undefined, group: undefined },
          active: !current.kind && !current.group,
        },
        {
          label: "Components",
          changes: { kind: "component", group: undefined },
          active: current.kind === "component" && !current.group,
        },
        {
          label: "Blocks",
          changes: { kind: "block", group: undefined },
          active: current.kind === "block" && !current.group,
        },
      ],
    },
    { title: "Components", options: grouped("component") },
    { title: "Blocks", options: grouped("block") },
    {
      title: "Sort",
      options: [
        {
          label: "Recommended",
          changes: { sort: undefined },
          active: !current.sort,
        },
        {
          label: "Newest",
          changes: { sort: "newest" },
          active: current.sort === "newest",
        },
        {
          label: "Name A–Z",
          changes: { sort: "name" },
          active: current.sort === "name",
        },
      ],
    },
  ] satisfies Array<{ title: string; options: Option[] }>;
}

function SearchForm({ current, id }: { current: FilterState; id: string }) {
  return (
    <search>
      <form action="/components" className="space-y-2">
        {current.kind ? (
          <input name="kind" type="hidden" value={current.kind} />
        ) : null}
        {current.group ? (
          <input name="group" type="hidden" value={current.group} />
        ) : null}
        {current.sort ? (
          <input name="sort" type="hidden" value={current.sort} />
        ) : null}
        <label className="font-mono text-xs text-muted-foreground" htmlFor={id}>
          Search library
        </label>
        <input
          id={id}
          name="q"
          defaultValue={current.q}
          placeholder="Search buttons, heroes…"
          className="h-10 w-full rounded-[--radius] border-2 border-ink bg-card px-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-3 focus:ring-mustard"
        />
      </form>
    </search>
  );
}

function SidebarFilters({
  current,
  groups,
}: {
  current: FilterState;
  groups: FilterGroup[];
}) {
  return (
    <div className="space-y-7">
      <SearchForm current={current} id="catalogue-search" />
      <nav aria-label="Component catalogue" className="space-y-5">
        {filterSections(current, groups).map((section) => (
          <section key={section.title}>
            <p className="mb-2 font-mono text-xs text-muted-foreground">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.options.map((option) => (
                <Link
                  key={option.label}
                  href={hrefFor(current, option.changes)}
                  aria-current={option.active ? "page" : undefined}
                  className={`flex min-h-10 items-center justify-between rounded-md border-2 px-3 text-sm transition-colors ${
                    option.active
                      ? "border-ink bg-mustard font-semibold text-ink"
                      : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{option.label}</span>
                  {typeof option.count === "number" ? (
                    <span className="font-mono text-xs">{option.count}</span>
                  ) : null}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </nav>
    </div>
  );
}

export function CatalogueFilters({
  current,
  groups,
  resultCount,
  activeCount = 0,
}: {
  current: FilterState;
  groups: FilterGroup[];
  resultCount: number;
  activeCount?: number;
}) {
  const [open, setOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const sheetId = useId();
  const sheetTitleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    sheetRef.current?.querySelector<HTMLElement>("button, a, input")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <aside
        className={`hidden desk:sticky desk:top-[78px] desk:flex desk:h-[calc(100dvh-78px)] desk:shrink-0 desk:flex-col desk:overflow-y-auto desk:border-r-2 desk:border-ink desk:transition-[width] ${desktopCollapsed ? "desk:w-14" : "desk:w-[300px]"}`}
      >
        <div className="flex justify-end p-2">
          <button
            type="button"
            aria-label={
              desktopCollapsed
                ? "Expand catalogue filters"
                : "Collapse catalogue filters"
            }
            aria-controls="desktop-catalogue-filters"
            aria-expanded={!desktopCollapsed}
            title={desktopCollapsed ? "Expand filters" : "Collapse filters"}
            onClick={() => setDesktopCollapsed((collapsed) => !collapsed)}
            className="grid size-10 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {desktopCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div>
        {!desktopCollapsed ? (
          <div id="desktop-catalogue-filters" className="px-6 pb-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back home
            </Link>
            <h1 className="mt-6 font-display text-2xl">Component library</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Primitives and ready-to-use blocks.
            </p>
            <div className="mt-7">
              <SidebarFilters current={current} groups={groups} />
            </div>
          </div>
        ) : null}
      </aside>

      <div className="flex items-center justify-between gap-4 border-b-2 border-ink px-4 py-4 desk:hidden">
        <div>
          <h1 className="font-display text-xl">Component library</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {resultCount} {resultCount === 1 ? "result" : "results"}
          </p>
        </div>
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-controls={sheetId}
          onClick={() => setOpen(true)}
          className="vd-btn vd-btn-sm"
        >
          <MixerHorizontalIcon aria-hidden />
          Filters
          {activeCount > 0 ? (
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-tomato px-1 text-[11px] text-primary-foreground">
              {activeCount}
            </span>
          ) : null}
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 desk:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={sheetTitleId}
        >
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close filters"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <div
            ref={sheetRef}
            id={sheetId}
            className="absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col rounded-t-3xl border-t-3 border-ink bg-background shadow-[0_-20px_50px_-20px_oklch(0_0_0/30%)]"
          >
            <div
              aria-hidden="true"
              className="mx-auto mt-2.5 h-[5px] w-10 rounded-full bg-ink/30"
            />
            <div className="flex items-start justify-between gap-4 border-b-2 border-ink px-5 pt-3 pb-4">
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  Component library
                </p>
                <h2 id={sheetTitleId} className="mt-0.5 font-display text-xl">
                  Browse the library
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/components"
                  scroll={false}
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  Reset
                </Link>
                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-full bg-muted"
                >
                  <Cross2Icon />
                </button>
              </div>
            </div>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-4">
              <SearchForm current={current} id="catalogue-search-sheet" />
              {filterSections(current, groups).map((section) => (
                <section key={section.title}>
                  <p className="mb-2 font-mono text-xs text-muted-foreground">
                    {section.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {section.options.map((option) => (
                      <Link
                        key={option.label}
                        href={hrefFor(current, option.changes)}
                        scroll={false}
                        aria-current={option.active ? "page" : undefined}
                        className="vd-chip"
                      >
                        {option.label}
                        {typeof option.count === "number" ? (
                          <span className="font-mono text-xs opacity-70">
                            {option.count}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="border-t-2 border-ink px-5 pt-4 pb-7">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="vd-btn vd-btn-primary w-full"
              >
                Show {resultCount} {resultCount === 1 ? "result" : "results"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
