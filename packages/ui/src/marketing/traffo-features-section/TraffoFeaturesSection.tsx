import { Activity, Crosshair, TrendingUp } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import { TraffoFeatureCard } from "@/marketing/traffo-feature-card";
import { traffoFeatureItems } from "./TraffoFeaturesSection.mocks";
import type { TraffoFeaturesSectionProps } from "./TraffoFeaturesSection.types";

const fallbackIcons = [
  <Crosshair key="a" />,
  <TrendingUp key="b" />,
  <Activity key="c" />,
];

const defaults = {
  eyebrow: "02 / Built for teams",
  title: "Three pillars. One platform. Zero busywork.",
  meta: ["Version 4.2", "Shipped May 2026", "24 integrations"],
} as const;

export function TraffoFeaturesSection({
  className,
  eyebrow = defaults.eyebrow,
  title = defaults.title,
  meta = [...defaults.meta],
  items = traffoFeatureItems,
  ...props
}: TraffoFeaturesSectionProps) {
  return (
    <section
      id="features"
      data-slot="traffo-features-section"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-[80rem] px-[var(--jk-space-gutter)] py-[var(--jk-space-section)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[18ch]">
            {eyebrow ? (
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance leading-[1.1] sm:text-6xl">
              {title}
            </h2>
          </div>
          {meta.length > 0 ? (
            <ul className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
              {meta.map((line) => (
                <li key={line} className="leading-[1.8]">
                  {line}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <TraffoFeatureCard
              key={item.kicker}
              kicker={item.kicker}
              title={item.title}
              body={item.body}
              tone={item.tone}
              icon={item.icon ?? fallbackIcons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
