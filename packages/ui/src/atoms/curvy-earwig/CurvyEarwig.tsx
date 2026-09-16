"use client";

import { Funnel, Search } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/cn";
import type { CurvyEarwigProps } from "./CurvyEarwig.types";

const widths = { sm: "17rem", md: "19rem", lg: "21rem" } as const;

export function CurvyEarwig({
  className,
  size = "md",
  animate = true,
  label = "Search",
  toggleLabel: _toggleLabel,
  disabled,
  type = "text",
  id,
  ...props
}: CurvyEarwigProps) {
  const reactId = React.useId();
  const fieldId = id ?? `${reactId}-field`;

  return (
    <div
      className={cn("jk-curvy-earwig", className)}
      data-animate={animate ? "true" : "false"}
      data-size={size}
      data-slot="curvy-earwig"
      style={{ "--jk-curvy-width": widths[size] } as React.CSSProperties}
    >
      <style href="jk-curvy-earwig" precedence="default">{`
        .jk-curvy-earwig { position: relative; display: flex; width: var(--jk-curvy-width); height: 3.5rem; align-items: center; justify-content: center; color: var(--jk-foreground); }
        .jk-curvy-earwig-layer { position: absolute; inset: 0; overflow: hidden; border-radius: 0.75rem; pointer-events: none; }
        .jk-curvy-earwig-layer::before { content: ""; position: absolute; inset: -150%; background: conic-gradient(from 70deg, transparent 0 28%, var(--jk-primary) 34%, transparent 43% 58%, var(--jk-chart-2) 64%, transparent 73%); animation: jk-curvy-earwig-rotate 4s linear infinite; }
        .jk-curvy-earwig-glow { filter: blur(1.5rem); opacity: 0.45; }
        .jk-curvy-earwig-border { inset: 0; }
        .jk-curvy-earwig-border::before { background: conic-gradient(from 70deg, var(--jk-border), var(--jk-primary) 8%, var(--jk-border) 22% 55%, var(--jk-chart-2) 64%, var(--jk-border) 77%); animation-duration: 4s; }
        .jk-curvy-earwig-main { position: relative; z-index: 1; display: flex; width: calc(100% - 4px); height: calc(100% - 4px); align-items: center; border-radius: 0.625rem; background: var(--jk-background); }
        .jk-curvy-earwig-field { min-width: 0; flex: 1; height: 100%; border: 0; outline: 0; background: transparent; padding: 0 3.25rem 0 3.5rem; color: var(--jk-foreground); font-family: var(--jk-font-body); font-size: 1rem; }
        .jk-curvy-earwig-field::placeholder { color: var(--jk-muted-foreground); }
        .jk-curvy-earwig-icon { position: absolute; left: 1.25rem; color: var(--jk-muted-foreground); }
        .jk-curvy-earwig-filter { position: absolute; right: 0.5rem; display: inline-flex; width: 2.5rem; height: 2.5rem; align-items: center; justify-content: center; border: 1px solid var(--jk-border); border-radius: 0.625rem; background: var(--jk-card); color: var(--jk-foreground); }
        .jk-curvy-earwig-filter:focus-visible { outline: 2px solid var(--jk-ring); outline-offset: 2px; }
        .jk-curvy-earwig:focus-within .jk-curvy-earwig-main { box-shadow: 0 0 0 2px var(--jk-background), 0 0 0 4px var(--jk-ring); }
        .jk-curvy-earwig[data-size="sm"] { height: 3rem; }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-field { font-size: 0.875rem; padding-left: 3rem; }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-icon { left: 1rem; }
        .jk-curvy-earwig[data-size="sm"] .jk-curvy-earwig-filter { width: 2rem; height: 2rem; }
        .jk-curvy-earwig[data-size="lg"] { height: 4rem; }
        .jk-curvy-earwig[data-size="lg"] .jk-curvy-earwig-field { font-size: 1.125rem; }
        .jk-curvy-earwig[data-animate="false"] .jk-curvy-earwig-layer::before { animation: none; }
        @keyframes jk-curvy-earwig-rotate { to { transform: rotate(1turn); } }
        @media (prefers-reduced-motion: reduce) { .jk-curvy-earwig-layer::before { animation: none; } }
      `}</style>
      <span
        className="jk-curvy-earwig-layer jk-curvy-earwig-glow"
        aria-hidden="true"
      />
      <span
        className="jk-curvy-earwig-layer jk-curvy-earwig-border"
        aria-hidden="true"
      />
      <div className="jk-curvy-earwig-main">
        <Search className="jk-curvy-earwig-icon size-5" aria-hidden="true" />
        <input
          {...props}
          id={fieldId}
          aria-label={label}
          className="jk-curvy-earwig-field"
          disabled={disabled}
          type={type}
        />
        <button
          type="button"
          className="jk-curvy-earwig-filter"
          aria-label="Filter search"
          disabled={disabled}
        >
          <Funnel className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
