import type { Route } from "next";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export function DemoBar({
  designSystem,
  brand,
  indexHref = "/samples",
  indexLabel = "All samples",
}: {
  designSystem: string;
  brand: string;
  indexHref?: Route;
  indexLabel?: string;
}) {
  return (
    <div className="relative z-0 border-b border-border bg-card">
      <Link
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-10 focus:rounded-[--radius] focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
      >
        Skip to sample
      </Link>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-primary uppercase">
            {designSystem}
          </p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
            Fictional sample. {brand} is not a live business.
          </p>
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-2">
          <nav
            aria-label="Sample demo"
            className="flex min-w-0 flex-wrap items-center gap-x-1 gap-y-1"
          >
            <Link
              href={indexHref}
              className="inline-flex min-h-11 items-center px-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {indexLabel}
            </Link>
            <Link
              href="/components"
              className="inline-flex min-h-11 items-center px-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Components
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
