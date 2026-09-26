import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { CopyAddChip } from "./CopyAddChip";

/**
 * Catalogue tile: preview, kind, name, description. The name link stretches
 * over the whole card; the copy chip stays independently focusable.
 */
export function CatalogueCard({
  name,
  href,
  displayName,
  kind,
  description,
  preview,
  copyable = true,
  compact = false,
  label,
}: {
  name: string;
  href: Route;
  displayName: string;
  kind: string;
  description?: string;
  preview: ReactNode;
  copyable?: boolean;
  compact?: boolean;
  /** Overrides the kind label, e.g. "block · best match". */
  label?: string;
}) {
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[--radius] border-2 border-ink bg-card transition-shadow group-hover:shadow-[4px_4px_0_var(--vd-tomato)] group-focus-within:shadow-[4px_4px_0_var(--vd-tomato)]">
        {preview}
        {copyable ? <CopyAddChip name={name} /> : null}
      </div>
      <div className={compact ? "pt-3" : "pt-4"}>
        <p className="vd-script text-base">{label ?? kind}</p>
        <h2 className="font-semibold">
          <Link
            href={href}
            className="transition-colors after:absolute after:inset-0 after:rounded-[--radius] group-hover:text-tomato-text focus-visible:outline-none focus-visible:after:ring-3 focus-visible:after:ring-mustard"
          >
            {displayName}
          </Link>
        </h2>
        {description && !compact ? (
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
