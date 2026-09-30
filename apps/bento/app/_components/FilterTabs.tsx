import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

export type FilterTabItem = {
  label: string;
  /** Value for the query param; null clears it (the "All" tab). */
  value: string | null;
};

export type FilterTabsProps = {
  label: string;
  pathname: string;
  /** The query param this tab list controls, e.g. "status". */
  param: string;
  /** The page's current search params; other params are preserved. */
  searchParams: Record<string, string | string[] | undefined>;
  current: string | null;
  items: FilterTabItem[];
  className?: string;
};

function hrefFor(
  pathname: string,
  searchParams: FilterTabsProps["searchParams"],
  param: string,
  value: string | null,
): Route {
  const next = new URLSearchParams();
  for (const [key, raw] of Object.entries(searchParams)) {
    if (key === param || key === "state" || raw === undefined) continue;
    for (const item of Array.isArray(raw) ? raw : [raw]) next.append(key, item);
  }
  if (value !== null) next.set(param, value);
  const query = next.toString();
  return (query ? `${pathname}?${query}` : pathname) as Route;
}

/** Query-synced filter tabs made of links, so every filter has its own URL. */
export function FilterTabs({
  label,
  pathname,
  param,
  searchParams,
  current,
  items,
  className,
}: FilterTabsProps) {
  return (
    <nav aria-label={label} className={cn(styles.tabs, className)}>
      <ul>
        {items.map((item) => {
          const active = item.value === current;
          return (
            <li key={item.label}>
              <Link
                aria-current={active ? "page" : undefined}
                className={styles.tab}
                href={hrefFor(pathname, searchParams, param, item.value)}
                scroll={false}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
