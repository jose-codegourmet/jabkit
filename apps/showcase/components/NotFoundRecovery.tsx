"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rays } from "./Rays";

export type RecoveryItem = {
  name: string;
  displayName: string;
  category: string;
  previewSrc?: string;
};

const categories = ["atoms", "marketing", "dashboard"];

function distance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const current = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        previous + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      previous = current;
    }
  }
  return row[b.length];
}

export function closestMatches(items: RecoveryItem[], slug: string) {
  const stem = slug.replace(/[-_\d]+$/, "") || slug;
  const pool = items.filter((item) =>
    `${item.name} ${item.displayName}`.toLowerCase().includes(stem),
  );
  const ranked = (pool.length ? pool : items)
    .map((item) => ({ item, score: distance(slug, item.name) }))
    .sort((a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name))
    .map(({ item }) => item);
  return { stem, total: pool.length, matches: ranked.slice(0, 3) };
}

/**
 * 404 recovery: reads the missing path, suggests the closest registry names,
 * and offers a catalogue search prefilled with the slug.
 */
export function NotFoundRecovery({
  items,
  pathname: pathnameOverride,
}: {
  items: RecoveryItem[];
  /** For stories; the live page reads the router path. */
  pathname?: string;
}) {
  const routerPath = usePathname();
  const pathname = pathnameOverride ?? routerPath ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const slug = decodeURIComponent(segments.at(-1) ?? "").toLowerCase();
  const category = categories.includes(segments[0] ?? "")
    ? segments[0]
    : undefined;
  const looksLikeComponent = Boolean(category && segments.length === 2);
  const { stem, total, matches } = slug
    ? closestMatches(items, slug)
    : { stem: "", total: 0, matches: [] };

  return (
    <main className="vd-stage relative overflow-hidden">
      <Rays x="50%" y="18%" width="6deg" />
      <div className="relative mx-auto flex max-w-[960px] flex-col items-center px-5 pt-14 pb-12 text-center tab:px-8 tab:pt-20">
        <img
          src="/art/jk-404.webp"
          alt="A puzzled JabKit mascot"
          width={240}
          height={240}
          className="size-[200px] rounded-full border-3 border-ink bg-paper object-cover shadow-[4px_4px_0_var(--vd-shadow)] tab:size-[240px]"
        />
        <span className="mt-6 rounded-full border-2 border-ink bg-card px-2.5 py-1 font-mono text-xs [overflow-wrap:anywhere]">
          404 · {pathname}
        </span>
        <h1 className="vd-h1 mt-6 text-cream desk:text-[52px]">
          {looksLikeComponent
            ? `No component called “${slug}”.`
            : "This page wandered off."}
        </h1>
        <p className="mt-3.5 text-[17px] text-cream">
          It may have been renamed, or the link has a typo.
        </p>
        <search className="mt-8 flex w-full justify-center">
          <form
            action="/components"
            className="flex h-[52px] w-full max-w-[600px] items-center gap-3 rounded-[--radius] border-3 border-ink bg-card px-4 text-left shadow-[4px_4px_0_var(--vd-shadow)]"
          >
            <MagnifyingGlassIcon aria-hidden className="shrink-0" />
            <label htmlFor="not-found-search" className="sr-only">
              Search components
            </label>
            <input
              id="not-found-search"
              name="q"
              defaultValue={stem || slug}
              className="min-w-0 flex-1 bg-transparent outline-none"
            />
            <button
              type="submit"
              className="shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              ↵ search
            </button>
          </form>
        </search>
      </div>

      {matches.length ? (
        <div className="relative mx-auto max-w-[1080px] px-5 pb-16 tab:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold text-cream">Closest matches</p>
            {total > 0 ? (
              <Link
                href={`/components?q=${encodeURIComponent(stem)}` as Route}
                className="text-sm font-semibold text-mustard underline-offset-4 hover:underline"
              >
                All {total} results for “{stem}” →
              </Link>
            ) : null}
          </div>
          <ul className="mt-4 grid gap-5 tab:grid-cols-2 desk:grid-cols-3">
            {matches.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={`/${item.category}/${item.name}` as Route}
                  className={`vd-card block overflow-hidden transition-shadow hover:shadow-[4px_4px_0_var(--vd-tomato)] ${index === 0 ? "border-tomato" : ""}`}
                >
                  <span className="block aspect-[16/10] overflow-hidden border-b-2 border-ink bg-muted">
                    {item.previewSrc ? (
                      <img
                        src={item.previewSrc}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    ) : null}
                  </span>
                  <span className="block px-4 py-3.5">
                    <span className="vd-script block">
                      {item.category === "atoms" ? "component" : "block"}
                      {index === 0 ? " · best match" : ""}
                    </span>
                    <span className="mt-0.5 block font-semibold">
                      {item.displayName}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {category ? (
              <Link href={`/${category}` as Route} className="vd-btn">
                ← {category[0].toUpperCase() + category.slice(1)}
              </Link>
            ) : null}
            <Link href="/components" className="vd-btn">
              All components
            </Link>
            <Link href="/" className="vd-btn vd-btn-primary">
              Go home
            </Link>
          </div>
        </div>
      ) : null}
    </main>
  );
}
