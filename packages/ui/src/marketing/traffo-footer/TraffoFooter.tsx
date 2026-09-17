// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import { traffoFooterColumns } from "./TraffoFooter.mocks";
import type { TraffoFooterProps } from "./TraffoFooter.types";

const defaults = {
  brand: "Traffo",
  blurb: "The analytics platform for teams who'd rather ship than spreadsheet.",
  copyright: "© 2026 Traffo",
  credit: "Made with attention",
} as const;

export function TraffoFooter({
  className,
  brand = defaults.brand,
  blurb = defaults.blurb,
  columns = traffoFooterColumns,
  copyright = defaults.copyright,
  credit = defaults.credit,
  ...props
}: TraffoFooterProps) {
  return (
    <footer
      data-slot="traffo-footer"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-[80rem] px-[var(--jk-space-gutter)] pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          <div>
            <p className="text-2xl font-semibold tracking-tight">{brand}</p>
            <p className="mt-4 max-w-[28ch] text-[15px] leading-relaxed text-muted-foreground">
              {blurb}
            </p>
          </div>
          <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-[15px] text-foreground no-underline transition-opacity duration-200 hover:opacity-70 motion-reduce:transition-none"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-[11px] tracking-[0.08em] text-muted-foreground uppercase sm:flex-row sm:justify-between">
          <p>{copyright}</p>
          <p>{credit}</p>
        </div>
      </div>
    </footer>
  );
}
