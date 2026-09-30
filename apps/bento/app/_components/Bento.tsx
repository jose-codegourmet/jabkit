import {
  ArrowRightIcon,
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

/**
 * Bento layout primitive. Rules (see theme.css):
 * - 12 columns from 768px, one column below. DOM order is the reading and stack order.
 * - Placement uses spans only, never `order`.
 * - One nesting level: never put a BentoGrid inside a Tile.
 */

export type TileSpan = 3 | 4 | 5 | 6 | 7 | 8 | 12;
export type TileKind = "static" | "link" | "action";
export type TileState =
  | "default"
  | "loading"
  | "empty"
  | "warning"
  | "selected"
  | "error";
export type TileTone =
  | "default"
  | "chalk"
  | "mint"
  | "apricot"
  | "evergreen"
  | "muted";

const spanClass: Record<TileSpan, string | undefined> = {
  3: styles.span3,
  4: styles.span4,
  5: styles.span5,
  6: styles.span6,
  7: styles.span7,
  8: styles.span8,
  12: undefined,
};

const toneClass: Record<TileTone, string | undefined> = {
  default: undefined,
  chalk: styles.toneChalk,
  mint: styles.toneMint,
  apricot: styles.toneApricot,
  evergreen: styles.toneEvergreen,
  muted: styles.toneMuted,
};

type GridElement = "div" | "ul" | "ol" | "section";

export type BentoGridProps = HTMLAttributes<HTMLElement> & {
  as?: GridElement;
  children: ReactNode;
};

export function BentoGrid({
  as: Element = "div",
  className,
  children,
  ...props
}: BentoGridProps) {
  return (
    <Element className={cn(styles.grid, className)} {...props}>
      {children}
    </Element>
  );
}

type TileElement = "div" | "section" | "article" | "li";

export type TileProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  span?: TileSpan;
  rowSpan?: 1 | 2;
  as?: TileElement;
  kind?: TileKind;
  /** Required when kind is "link": the whole card becomes this one link. */
  href?: Route;
  /** Visible text for the link's trailing arrow row, e.g. "How the Today tile works". */
  linkLabel?: ReactNode;
  state?: TileState;
  /** Override the flag text. Defaults: warning "Needs attention", selected "Selected". */
  stateLabel?: string;
  tone?: TileTone;
  /** Remove the inner padding (image tiles). */
  flush?: boolean;
  /** id of the heading that names this tile. */
  labelledBy?: string;
  surfaceClassName?: string;
  children: ReactNode;
};

export function Tile({
  span = 12,
  rowSpan = 1,
  as: Element = "div",
  kind = "static",
  href,
  linkLabel,
  state = "default",
  stateLabel,
  tone = "default",
  flush = false,
  labelledBy,
  className,
  surfaceClassName,
  children,
  ...props
}: TileProps) {
  const surface = cn(
    styles.surface,
    toneClass[tone],
    flush && styles.flush,
    kind === "static" && styles.static,
    kind === "link" && styles.linkSurface,
    surfaceClassName,
  );
  const stateProps = {
    "data-state": state === "default" ? undefined : state,
    "aria-busy": state === "loading" ? true : undefined,
    "aria-current": state === "selected" ? ("true" as const) : undefined,
  };
  const flag =
    state === "warning" ? (
      <p className={styles.stateFlag}>
        <ExclamationTriangleIcon aria-hidden="true" />
        {stateLabel ?? "Needs attention"}
      </p>
    ) : state === "selected" ? (
      <p className={styles.selectedFlag}>
        <CheckCircledIcon aria-hidden="true" />
        {stateLabel ?? "Selected"}
      </p>
    ) : null;
  const outer = cn(
    styles.tile,
    spanClass[span],
    rowSpan === 2 && styles.row2,
    className,
  );

  if (kind === "link") {
    if (!href) throw new Error("Tile kind='link' needs an href");
    return (
      <Element className={outer} {...props}>
        <Link
          aria-labelledby={labelledBy}
          className={surface}
          href={href}
          {...stateProps}
        >
          {flag}
          {children}
          {linkLabel ? (
            <span className={styles.linkArrow}>
              {linkLabel}
              <ArrowRightIcon aria-hidden="true" />
            </span>
          ) : null}
        </Link>
      </Element>
    );
  }

  return (
    <Element
      aria-labelledby={labelledBy}
      className={cn(outer, surface)}
      {...stateProps}
      {...props}
    >
      {flag}
      {children}
    </Element>
  );
}

export function TileLabel({
  children,
  id,
  as: Element = "p",
}: {
  children: ReactNode;
  id?: string;
  as?: "p" | "h2" | "h3";
}) {
  return (
    <Element className={styles.tileLabel} id={id}>
      {children}
    </Element>
  );
}

export function TileFooter({ children }: { children: ReactNode }) {
  return <div className={styles.tileFooter}>{children}</div>;
}
