"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { CatalogueGroup } from "../lib/catalogue-groups";

type FilterState = { q?: string; kind?: string; group?: string; sort?: string };
type FilterGroup = Pick<CatalogueGroup, "id" | "label" | "kind"> & {
  count: number;
};

function hrefFor(current: FilterState, changes: Partial<FilterState>): Route {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...current, ...changes }))
    if (value) params.set(key, value);
  const search = params.toString();
  return (search ? `/components?${search}` : "/components") as Route;
}

function FilterContents({
  current,
  groups,
  onNavigate,
}: {
  current: FilterState;
  groups: FilterGroup[];
  onNavigate?: () => void;
}) {
  const renderLink = (
    label: string,
    changes: Partial<FilterState>,
    active: boolean,
    count?: number,
  ) => (
    <Link
      href={hrefFor(current, changes)}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`flex min-h-10 items-center justify-between rounded-md px-3 text-sm transition-colors hover:bg-accent hover:text-foreground ${active ? "bg-accent font-medium text-foreground" : "text-muted-foreground"}`}
    >
      <span>{label}</span>
      {typeof count === "number" ? (
        <span className="font-mono text-xs text-muted-foreground">{count}</span>
      ) : null}
    </Link>
  );
  const grouped = (kind: FilterGroup["kind"]) =>
    groups
      .filter((group) => group.kind === kind)
      .map((group) =>
        renderLink(
          group.label,
          { kind, group: group.id },
          current.group === group.id,
          group.count,
        ),
      );
  return (
    <div className="space-y-7">
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
        <label
          className="font-mono text-xs text-muted-foreground"
          htmlFor="catalogue-search"
        >
          Search library
        </label>
        <input
          id="catalogue-search"
          name="q"
          defaultValue={current.q}
          placeholder="Search buttons, inputs…"
          className="h-10 w-full rounded-[--radius] border border-border bg-card px-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />
      </form>
      <nav aria-label="Component catalogue" className="space-y-5">
        <section>
          <p className="mb-2 font-mono text-xs text-muted-foreground">Browse</p>
          <div className="space-y-1">
            {renderLink(
              "Everything",
              { kind: undefined, group: undefined },
              !current.kind && !current.group,
            )}
            {renderLink(
              "Components",
              { kind: "component", group: undefined },
              current.kind === "component" && !current.group,
            )}
            {renderLink(
              "Blocks",
              { kind: "block", group: undefined },
              current.kind === "block" && !current.group,
            )}
          </div>
        </section>
        <section>
          <p className="mb-2 font-mono text-xs text-muted-foreground">
            Components
          </p>
          <div className="space-y-1">{grouped("component")}</div>
        </section>
        <section>
          <p className="mb-2 font-mono text-xs text-muted-foreground">Blocks</p>
          <div className="space-y-1">{grouped("block")}</div>
        </section>
        <section>
          <p className="mb-2 font-mono text-xs text-muted-foreground">Sort</p>
          <div className="space-y-1">
            {renderLink("Recommended", { sort: undefined }, !current.sort)}
            {renderLink(
              "Newest",
              { sort: "newest" },
              current.sort === "newest",
            )}
            {renderLink("Name A–Z", { sort: "name" }, current.sort === "name")}
          </div>
        </section>
      </nav>
    </div>
  );
}

export function CatalogueFilters({
  current,
  groups,
}: {
  current: FilterState;
  groups: FilterGroup[];
}) {
  const [open, setOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const drawerId = useId();
  const drawerTitleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);
  return (
    <>
      <aside
        className={`hidden lg:sticky lg:top-[68px] lg:flex lg:h-[calc(100dvh-68px)] lg:shrink-0 lg:flex-col lg:overflow-y-auto lg:border-r lg:border-border lg:transition-[width] ${desktopCollapsed ? "lg:w-14" : "lg:w-[310px]"}`}
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
            className="grid size-10 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
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
              Back home
            </Link>
            <h1 className="mt-8 text-xl font-semibold tracking-tight">
              Component library
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Primitives and ready-to-use blocks.
            </p>
            <div className="mt-7">
              <FilterContents current={current} groups={groups} />
            </div>
          </div>
        ) : null}
      </aside>
      <div className="border-b border-border p-4 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-semibold tracking-tight">Component library</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse components and blocks
            </p>
          </div>
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen(true)}
            className="inline-flex min-h-10 items-center gap-2 rounded-[--radius] border border-border bg-card px-3 text-sm font-medium hover:bg-accent"
          >
            <HamburgerMenuIcon aria-hidden /> Filters
          </button>
        </div>
      </div>
      {open ? (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={drawerTitleId}
        >
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close filters"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/20"
          />
          <aside
            id={drawerId}
            className="relative flex h-full w-[min(22rem,calc(100%-2.5rem))] flex-col overflow-y-auto border-r border-border bg-background p-6 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  Component library
                </p>
                <h2
                  id={drawerTitleId}
                  className="mt-1 text-lg font-semibold tracking-tight"
                >
                  Browse the library
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-md hover:bg-accent"
              >
                <Cross2Icon />
              </button>
            </div>
            <div className="mt-7">
              <FilterContents
                current={current}
                groups={groups}
                onNavigate={() => setOpen(false)}
              />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
