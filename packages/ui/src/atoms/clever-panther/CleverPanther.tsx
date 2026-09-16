"use client";

import { ArrowUpRight, BarChart3 } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { CleverPantherProps } from "./CleverPanther.types";

const sizes = {
  sm: "jk-clever-panther-sm",
  md: "jk-clever-panther-md",
  lg: "jk-clever-panther-lg",
} as const;

export function CleverPanther({
  className,
  title = "Monthly Balance",
  subtitle = "Updated just now",
  revenue = "$51,274",
  revenueChange = "+8.5%",
  costs = "$12,818",
  costsChange = "+2.1%",
  actionLabel = "View Full Report",
  onAction,
  tone = "raised",
  size = "md",
  children,
  ...props
}: CleverPantherProps) {
  return (
    <article
      aria-label={title}
      className={cn("jk-clever-panther", sizes[size], className)}
      data-size={size}
      data-slot="clever-panther"
      data-tone={tone}
      {...props}
    >
      <style href="jk-clever-panther" precedence="default">{`
        .jk-clever-panther {
          --jk-clever-w: 20rem;
          box-sizing: border-box;
          position: relative;
          isolation: isolate;
          width: var(--jk-clever-w);
          overflow: hidden;
          border: 1px solid var(--jk-border);
          border-radius: 1rem;
          background: var(--jk-card);
          padding: 1.5rem;
          color: var(--jk-card-foreground);
          font-family: var(--jk-font-body);
          box-shadow: 0 1.5rem 2.5rem color-mix(in oklab, var(--jk-foreground) 12%, transparent);
        }
        .jk-clever-panther::before {
          content: "";
          position: absolute;
          top: -8rem;
          left: 50%;
          z-index: -1;
          width: 16rem;
          height: 16rem;
          transform: translateX(-50%);
          border-radius: 999px;
          background: color-mix(in oklab, var(--jk-primary) 12%, transparent);
          filter: blur(3rem);
          transition: background 700ms ease;
        }
        .jk-clever-panther:hover::before {
          background: color-mix(in oklab, var(--jk-primary) 18%, transparent);
        }
        .jk-clever-panther[data-tone="field"] { background: var(--jk-background); }
        .jk-clever-panther-sm { --jk-clever-w: 17.5rem; font-size: 0.875rem; }
        .jk-clever-panther-lg { --jk-clever-w: 22.5rem; font-size: 1.0625rem; }
        .jk-clever-panther-content { position: relative; display: flex; flex-direction: column; gap: 1.25rem; }
        .jk-clever-panther-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.75rem; border-bottom: 1px solid var(--jk-border); padding-bottom: 1.25rem; }
        .jk-clever-panther-heading { display: flex; align-items: center; gap: 0.75rem; }
        .jk-clever-panther-icon { display: inline-flex; width: 2.25rem; height: 2.25rem; align-items: center; justify-content: center; border-radius: 0.5rem; background: color-mix(in oklab, var(--jk-primary) 12%, transparent); color: var(--jk-primary); }
        .jk-clever-panther-title { font-weight: 600; color: var(--jk-card-foreground); }
        .jk-clever-panther-subtitle, .jk-clever-panther-label { font-size: 0.75rem; color: var(--jk-muted-foreground); }
        .jk-clever-panther-metrics { display: flex; }
        .jk-clever-panther-metric { min-width: 0; flex: 1; }
        .jk-clever-panther-metric + .jk-clever-panther-metric { border-left: 1px solid var(--jk-border); padding-left: 1.5rem; }
        .jk-clever-panther-metric:not(:last-child) { padding-right: 1.5rem; }
        .jk-clever-panther-value { margin-top: 0.25rem; font-size: 1.25rem; font-weight: 600; color: var(--jk-card-foreground); }
        .jk-clever-panther-change { margin-top: 0.25rem; font-size: 0.75rem; font-weight: 500; color: var(--jk-primary); }
        .jk-clever-panther-change[data-tone="negative"] { color: var(--jk-destructive); }
        .jk-clever-panther-chart { position: relative; height: 6rem; width: 100%; }
        .jk-clever-panther-chart svg { display: block; width: 100%; height: 100%; overflow: visible; }
        .jk-clever-panther-dot { position: absolute; top: 81%; right: -1px; width: 0.75rem; height: 0.75rem; transform: translate(50%, -50%); border-radius: 999px; background: var(--jk-primary); box-shadow: 0 0.25rem 0.75rem color-mix(in oklab, var(--jk-primary) 50%, transparent); }
        .jk-clever-panther-dot::after { content: ""; position: absolute; inset: -0.25rem; border-radius: inherit; background: color-mix(in oklab, var(--jk-primary) 25%, transparent); animation: jk-clever-panther-pulse 1.8s ease-out infinite; }
        .jk-clever-panther-footer { border-top: 1px solid var(--jk-border); padding-top: 1.25rem; }
        .jk-clever-panther-action { display: inline-flex; width: 100%; align-items: center; justify-content: center; gap: 0.5rem; border: 1px solid color-mix(in oklab, var(--jk-primary) 55%, transparent); border-radius: 0.5rem; background: transparent; padding: 0.5rem 1rem; color: var(--jk-primary); font-size: 0.875rem; font-weight: 500; transition: background 300ms ease, color 300ms ease; }
        .jk-clever-panther-action:hover { background: var(--jk-primary); color: var(--jk-primary-foreground); }
        .jk-clever-panther-action:focus-visible { outline: 2px solid var(--jk-ring); outline-offset: 2px; }
        @keyframes jk-clever-panther-pulse { 0%, 100% { transform: scale(0.75); opacity: 0.75; } 70% { transform: scale(1.8); opacity: 0; } }
        @media (prefers-reduced-motion: reduce) { .jk-clever-panther-dot::after { animation: none; } .jk-clever-panther-action { transition: none; } }
      `}</style>
      <div className="jk-clever-panther-content">
        <header className="jk-clever-panther-header">
          <div className="jk-clever-panther-heading">
            <span className="jk-clever-panther-icon" aria-hidden="true">
              <BarChart3 className="size-5" strokeWidth={1.5} />
            </span>
            <div>
              <p className="jk-clever-panther-title">{title}</p>
              <p className="jk-clever-panther-subtitle">{subtitle}</p>
            </div>
          </div>
          {children}
        </header>
        <div className="jk-clever-panther-metrics">
          <div className="jk-clever-panther-metric">
            <p className="jk-clever-panther-label">Revenue</p>
            <p className="jk-clever-panther-value">{revenue}</p>
            <p className="jk-clever-panther-change">{revenueChange}</p>
          </div>
          <div className="jk-clever-panther-metric">
            <p className="jk-clever-panther-label">Costs</p>
            <p className="jk-clever-panther-value">{costs}</p>
            <p className="jk-clever-panther-change" data-tone="negative">
              {costsChange}
            </p>
          </div>
        </div>
        <div className="jk-clever-panther-chart" aria-hidden="true">
          <svg viewBox="0 0 300 100" preserveAspectRatio="none">
            <title>Revenue trend</title>
            <defs>
              <linearGradient
                id="jk-clever-panther-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--jk-primary)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="100%"
                  stopColor="var(--jk-primary)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              d="M0,65 C50,20 80,80 150,70 S250,50 300,85"
              fill="none"
              stroke="var(--jk-primary)"
              strokeWidth="2"
            />
            <path
              d="M0,100 L0,65 C50,20 80,80 150,70 S250,50 300,85 L300,100 Z"
              fill="url(#jk-clever-panther-gradient)"
            />
          </svg>
          <span className="jk-clever-panther-dot" />
        </div>
        <footer className="jk-clever-panther-footer">
          <button
            type="button"
            className="jk-clever-panther-action"
            onClick={onAction}
          >
            {actionLabel}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </button>
        </footer>
      </div>
    </article>
  );
}
