// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { InfographicNodeProps } from "./InfographicNode.types";

const tones = {
  ink: "bg-primary text-primary-foreground",
  success:
    "bg-[color-mix(in_oklab,var(--jk-success)_46%,var(--jk-background))] text-foreground",
  warning:
    "bg-[color-mix(in_oklab,var(--jk-warning)_78%,var(--jk-background))] text-foreground",
  accent:
    "bg-[color-mix(in_oklab,var(--jk-chart-4)_52%,var(--jk-background))] text-foreground",
} as const;

const shapes = {
  circle: "size-14 rounded-full",
  pill: "h-20 min-w-28 rounded-[20px] px-5",
  hub: "h-[6.25rem] min-w-[7.5rem] rounded-[24px] px-6",
} as const;

export function InfographicNode({
  className,
  label,
  value,
  state = "idle",
  tone = "ink",
  shape = "pill",
  icon,
  ...props
}: InfographicNodeProps) {
  const caption = [label, value].filter(Boolean).join(" ");

  return (
    <div
      data-slot="infographic-node"
      data-state={state}
      role="img"
      aria-label={caption || "Infographic node"}
      className={cn(
        "inline-flex flex-col items-center justify-center gap-0.5 shadow-[0_14px_28px_color-mix(in_oklab,var(--jk-foreground)_10%,transparent)] transition-[opacity,transform,box-shadow] duration-300 ease-out motion-reduce:transition-none",
        tones[tone],
        shapes[shape],
        state === "idle" && "opacity-45",
        state === "active" && "opacity-100",
        className,
      )}
      {...props}
    >
      {icon ? (
        <span
          aria-hidden="true"
          className="grid place-items-center [&_svg]:size-5"
        >
          {icon}
        </span>
      ) : null}
      {label || value ? (
        <span className="flex flex-col items-center leading-none">
          {value ? (
            <span className="text-sm font-semibold tabular-nums">{value}</span>
          ) : null}
          {label ? (
            <span className="text-[10px] font-medium tracking-[0.08em] uppercase opacity-80">
              {label}
            </span>
          ) : null}
        </span>
      ) : null}
    </div>
  );
}
