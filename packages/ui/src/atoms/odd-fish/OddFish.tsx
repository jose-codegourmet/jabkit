"use client";

// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { OddFishProps } from "./OddFish.types";

const sizes = {
  sm: "jk-odd-fish-sm",
  md: "jk-odd-fish-md",
  lg: "jk-odd-fish-lg",
} as const;

function markFromName(name: string) {
  const parts = name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean);
  if (parts.length === 0) {
    return "OF";
  }
  return parts.slice(0, 2).join("").toUpperCase();
}

export function OddFish({
  className,
  children,
  handle = "@odd.fish",
  name = "Odd Fish",
  bio = "A square profile plate with a striped header, three counts, and a full-width follow.",
  initials,
  badge = "Live",
  stats,
  action = "Follow",
  onAction,
  size = "md",
  tone = "default",
  ...props
}: OddFishProps) {
  const mark = initials ?? markFromName(name);
  const counts = stats ?? [
    { value: "128", label: "Posts" },
    { value: "47", label: "Notes" },
    { value: "9", label: "Sets" },
  ];

  return (
    <article
      className={cn("jk-odd-fish", sizes[size], className)}
      data-size={size}
      data-slot="odd-fish"
      data-tone={tone}
      {...props}
    >
      <style href="jk-odd-fish" precedence="default">{`
        .jk-odd-fish {
          --jk-odd-fish-ink: var(--jk-foreground);
          --jk-odd-fish-paper: var(--jk-card);
          --jk-odd-fish-header: var(--jk-warning);
          --jk-odd-fish-stripe: color-mix(
            in oklab,
            var(--jk-foreground) 16%,
            transparent
          );
          --jk-odd-fish-width: 22.5rem;
          --jk-odd-fish-shift: 6px;
          position: relative;
          box-sizing: border-box;
          width: var(--jk-odd-fish-width);
          max-width: 100%;
          overflow: hidden;
          border: 3px solid var(--jk-odd-fish-ink);
          border-radius: 0;
          background: var(--jk-odd-fish-paper);
          color: var(--jk-odd-fish-ink);
          box-shadow: var(--jk-odd-fish-shift) var(--jk-odd-fish-shift) 0
            var(--jk-odd-fish-ink);
        }
        .jk-odd-fish[data-tone="muted"] {
          --jk-odd-fish-header: var(--jk-muted);
        }
        .jk-odd-fish[data-tone="accent"] {
          --jk-odd-fish-header: var(--jk-primary);
        }
        .jk-odd-fish-sm {
          --jk-odd-fish-width: 18rem;
        }
        .jk-odd-fish-lg {
          --jk-odd-fish-width: 26.25rem;
        }
        .jk-odd-fish-header {
          position: relative;
          display: flex;
          align-items: flex-end;
          height: 8rem;
          overflow: hidden;
          border-bottom: 3px solid var(--jk-odd-fish-ink);
          background: var(--jk-odd-fish-header);
        }
        .jk-odd-fish-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent 0 8px,
            var(--jk-odd-fish-stripe) 8px 10px
          );
          pointer-events: none;
        }
        .jk-odd-fish[data-tone="accent"] .jk-odd-fish-header::before {
          --jk-odd-fish-stripe: color-mix(
            in oklab,
            var(--jk-primary-foreground) 22%,
            transparent
          );
        }
        .jk-odd-fish-watermark {
          position: absolute;
          right: -6px;
          bottom: -8px;
          color: var(--jk-odd-fish-ink);
          font-family: var(--jk-font-display);
          font-size: 6rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 0.85;
          text-transform: uppercase;
          opacity: 0.08;
          pointer-events: none;
        }
        .jk-odd-fish-avatar {
          position: relative;
          z-index: 1;
          display: flex;
          flex: none;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          margin-left: 1.125rem;
          overflow: hidden;
          border: 3px solid var(--jk-odd-fish-ink);
          border-bottom: 0;
          border-left: 0;
          border-radius: 0;
          background: var(--jk-odd-fish-ink);
          color: var(--jk-odd-fish-paper);
          font-family: var(--jk-font-display);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .jk-odd-fish-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 2;
          padding: 3px 8px;
          border: 2px solid var(--jk-odd-fish-ink);
          border-radius: 0;
          background: var(--jk-success);
          color: var(--jk-success-foreground);
          box-shadow: 3px 3px 0 var(--jk-odd-fish-ink);
          font-family: var(--jk-font-label);
          font-size: 0.5625rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .jk-odd-fish-body {
          padding: 0.875rem 1rem 0;
        }
        .jk-odd-fish-handle {
          margin: 0 0 2px;
          overflow: hidden;
          color: var(--jk-muted-foreground);
          font-family: var(--jk-font-label);
          font-size: 0.59375rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .jk-odd-fish-name {
          margin: 0 0 0.625rem;
          overflow-wrap: anywhere;
          color: var(--jk-odd-fish-ink);
          font-family: var(--jk-font-display);
          font-size: 1.875rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 0.95;
          text-transform: uppercase;
        }
        .jk-odd-fish-bio {
          margin: 0 0 0.875rem;
          padding-left: 0.625rem;
          border-left: 4px solid var(--jk-primary);
          color: var(--jk-odd-fish-ink);
          font-family: var(--jk-font-body);
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 1.5;
        }
        .jk-odd-fish-sm .jk-odd-fish-header {
          height: 6.5rem;
        }
        .jk-odd-fish-sm .jk-odd-fish-avatar {
          width: 3.25rem;
          height: 3.25rem;
          font-size: 1.2rem;
        }
        .jk-odd-fish-sm .jk-odd-fish-name {
          font-size: 1.5rem;
        }
        .jk-odd-fish-lg .jk-odd-fish-header {
          height: 9rem;
        }
        .jk-odd-fish-lg .jk-odd-fish-avatar {
          width: 4.5rem;
          height: 4.5rem;
          font-size: 1.75rem;
        }
        .jk-odd-fish-lg .jk-odd-fish-name {
          font-size: 2.125rem;
        }
        .jk-odd-fish-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 3px solid var(--jk-odd-fish-ink);
        }
        .jk-odd-fish-stat {
          padding: 0.625rem 0.5rem;
          border-right: 3px solid var(--jk-odd-fish-ink);
          text-align: center;
        }
        .jk-odd-fish-stat:last-child {
          border-right: 0;
        }
        .jk-odd-fish-stat-value {
          display: block;
          color: var(--jk-odd-fish-ink);
          font-family: var(--jk-font-display);
          font-size: 1.5rem;
          font-variant-numeric: tabular-nums;
          font-weight: 800;
          line-height: 1;
        }
        .jk-odd-fish-stat-label {
          display: block;
          overflow: hidden;
          margin-top: 3px;
          color: var(--jk-muted-foreground);
          font-family: var(--jk-font-label);
          font-size: 0.53125rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .jk-odd-fish-action {
          display: block;
          width: 100%;
          padding: 0.75rem;
          border: 0;
          border-top: 3px solid var(--jk-odd-fish-ink);
          border-radius: 0;
          background: var(--jk-odd-fish-ink);
          color: var(--jk-odd-fish-paper);
          font-family: var(--jk-font-label);
          font-size: 0.875rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-align: center;
          text-transform: uppercase;
          cursor: pointer;
        }
        .jk-odd-fish-action:hover,
        .jk-odd-fish-action:focus-visible {
          background: var(--jk-odd-fish-header);
          color: var(--jk-odd-fish-ink);
        }
        .jk-odd-fish-action:focus-visible {
          outline: 2px solid var(--jk-ring);
          outline-offset: 3px;
        }
        .jk-odd-fish[data-tone="accent"] .jk-odd-fish-action:hover,
        .jk-odd-fish[data-tone="accent"] .jk-odd-fish-action:focus-visible {
          color: var(--jk-primary-foreground);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-odd-fish {
            transition:
              transform 160ms ease,
              box-shadow 160ms ease;
          }
          .jk-odd-fish:hover,
          .jk-odd-fish:focus-within {
            transform: translate(
              calc(var(--jk-odd-fish-shift) / 2),
              calc(var(--jk-odd-fish-shift) / 2)
            );
            box-shadow: calc(var(--jk-odd-fish-shift) / 2)
              calc(var(--jk-odd-fish-shift) / 2) 0 var(--jk-odd-fish-ink);
          }
          .jk-odd-fish-action {
            transition:
              background-color 150ms ease,
              color 150ms ease;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-odd-fish,
          .jk-odd-fish-action {
            transition: none;
            transform: none;
          }
        }
      `}</style>
      {children ?? (
        <>
          <div className="jk-odd-fish-header">
            <span aria-hidden="true" className="jk-odd-fish-watermark">
              {mark}
            </span>
            <span aria-hidden="true" className="jk-odd-fish-avatar">
              {mark}
            </span>
            {badge ? <span className="jk-odd-fish-badge">{badge}</span> : null}
          </div>
          <div className="jk-odd-fish-body">
            {handle ? <p className="jk-odd-fish-handle">{handle}</p> : null}
            {name ? <h3 className="jk-odd-fish-name">{name}</h3> : null}
            {bio ? <p className="jk-odd-fish-bio">{bio}</p> : null}
          </div>
          {counts.length > 0 ? (
            <div className="jk-odd-fish-stats">
              {counts.slice(0, 3).map((stat) => (
                <div className="jk-odd-fish-stat" key={`${stat.label}-${stat.value}`}>
                  <span className="jk-odd-fish-stat-value">{stat.value}</span>
                  <span className="jk-odd-fish-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          ) : null}
          {action ? (
            <button className="jk-odd-fish-action" onClick={onAction} type="button">
              {action}
            </button>
          ) : null}
        </>
      )}
    </article>
  );
}
