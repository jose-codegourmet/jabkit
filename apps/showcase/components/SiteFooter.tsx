import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid size-6 place-items-center rounded-md bg-primary font-mono text-xs text-primary-foreground">
            J
          </span>
          JabKit
        </Link>
        <nav className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/components"
            className="inline-flex min-h-11 items-center hover:text-foreground"
          >
            Components
          </Link>
          <Link
            href="/samples"
            className="inline-flex min-h-11 items-center hover:text-foreground"
          >
            Samples
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex min-h-11 items-center hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="https://github.com"
            className="inline-flex min-h-11 items-center hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
