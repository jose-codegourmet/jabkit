import { catalogueUrl } from "../lib/catalogue";
import { ThemeToggle } from "./ThemeToggle";

export function DemoBar({ brand }: { brand: string }) {
  return (
    <aside
      aria-label="Demo information"
      className="border-b border-border px-5 py-2 text-xs text-muted-foreground"
    >
      <div className="mx-auto flex max-w-[var(--jk-content-max)] flex-wrap items-center justify-between gap-2">
        <p>{brand} is a fictional JabKit website.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="underline underline-offset-4"
            href={`${catalogueUrl}/design-systems`}
          >
            Explore JabKit
          </a>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
