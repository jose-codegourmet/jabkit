import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground">
            J
          </span>
          JabKit
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <Link href="/components" className="hover:text-foreground">
            Components
          </Link>
          <Link href="/samples" className="hover:text-foreground">
            Samples
          </Link>
          <a href="#how-it-works" className="hover:text-foreground">
            How it works
          </a>
          <a href="https://github.com" className="hover:text-foreground">
            GitHub
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
