import { ArrowRight } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import { InfographicNodeGraph } from "@/marketing/infographic-node-graph";
import { TraffoFeaturesSection } from "@/marketing/traffo-features-section";
import { TraffoFooter } from "@/marketing/traffo-footer";
import { TraffoHeader } from "@/marketing/traffo-header";
import { traffoLandingPageMocks } from "./TraffoLandingPage.mocks";
import type { TraffoLandingPageProps } from "./TraffoLandingPage.types";

export function TraffoLandingPage({
  className,
  header,
  hero = traffoLandingPageMocks.default.hero,
  graph,
  stats = traffoLandingPageMocks.default.stats,
  features,
  testimonial = traffoLandingPageMocks.default.testimonial,
  cta = traffoLandingPageMocks.default.cta,
  footer,
  ...props
}: TraffoLandingPageProps) {
  const titleLines = hero?.titleLines ?? [];

  return (
    <div
      id="top"
      data-slot="traffo-landing-page"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <TraffoHeader {...header} />
      <section className="mx-auto grid min-h-[100dvh] max-w-[80rem] items-center gap-12 px-[var(--jk-space-gutter)] pt-8 pb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <h1 className="max-w-[12ch] text-5xl font-semibold tracking-tight leading-[1.08] sm:text-7xl">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          {hero?.subtitle ? (
            <p className="mt-6 max-w-[40ch] text-base leading-relaxed text-muted-foreground">
              {hero.subtitle}
            </p>
          ) : null}
          {hero?.ctaLabel ? (
            <a
              href={hero.ctaHref}
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-[8px] bg-primary px-6 text-sm font-medium text-primary-foreground no-underline transition-[transform,filter] duration-200 hover:brightness-110 active:translate-y-px motion-reduce:transition-none"
            >
              {hero.ctaLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          ) : null}
          {hero?.featuresLabel ? (
            <div className="mt-16 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[color-mix(in_oklab,var(--jk-success)_46%,var(--jk-background))]" />
                <span className="size-2.5 rounded-full bg-warning" />
                <span className="size-2.5 rounded-full bg-[color-mix(in_oklab,var(--jk-chart-4)_52%,var(--jk-background))]" />
              </span>
              <span>{hero.featuresLabel}</span>
              {hero.featuresHref ? (
                <a
                  href={hero.featuresHref}
                  className="font-medium text-foreground no-underline"
                >
                  {hero.featuresLinkLabel}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        <div id="graph" className="flex justify-center lg:justify-end">
          <InfographicNodeGraph {...graph} />
        </div>
      </section>
      {stats && stats.length > 0 ? (
        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto grid max-w-[80rem] gap-10 px-[var(--jk-space-gutter)] py-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <p key={stat.label} className="min-w-0">
                <span className="block text-5xl font-semibold tracking-tight sm:text-6xl">
                  {stat.value}
                  <span className="text-warning">{stat.suffix}</span>
                </span>
                <span className="mt-3 block font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                  {stat.label}
                </span>
              </p>
            ))}
          </div>
        </section>
      ) : null}
      <TraffoFeaturesSection {...features} />
      {testimonial ? (
        <section className="mx-auto max-w-[48rem] px-[var(--jk-space-gutter)] py-[var(--jk-space-section)] text-center">
          <span
            aria-hidden="true"
            className="mx-auto mb-8 flex w-8 justify-center gap-1 text-warning"
          >
            <span className="h-6 w-1.5 rounded-sm bg-warning" />
            <span className="h-6 w-1.5 rounded-sm bg-warning" />
          </span>
          <blockquote className="text-3xl font-semibold tracking-tight text-balance leading-[1.3] sm:text-5xl">
            {testimonial.quote}
          </blockquote>
          <p className="mt-8 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
            {testimonial.attribution}
          </p>
        </section>
      ) : null}
      {cta ? (
        <section id="start" className="px-[var(--jk-space-gutter)] pb-20">
          <div className="mx-auto max-w-[48rem] rounded-[32px] bg-primary px-8 py-16 text-center text-primary-foreground shadow-[0_28px_60px_color-mix(in_oklab,var(--jk-foreground)_18%,transparent)] sm:px-16">
            <h2 className="text-4xl font-semibold tracking-tight text-balance leading-[1.1] sm:text-6xl">
              {cta.emphasis && cta.title.includes(cta.emphasis) ? (
                <>
                  {cta.title.split(cta.emphasis)[0]}
                  <span className="text-warning">{cta.emphasis}</span>
                  {cta.title.split(cta.emphasis).slice(1).join(cta.emphasis)}
                </>
              ) : (
                cta.title
              )}
            </h2>
            <p className="mx-auto mt-6 max-w-[42ch] text-base leading-relaxed text-primary-foreground/70">
              {cta.body}
            </p>
            <a
              href={cta.actionHref}
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-[12px] bg-warning px-8 text-sm font-semibold text-warning-foreground no-underline transition-[transform,filter] duration-200 hover:brightness-105 active:translate-y-px motion-reduce:transition-none"
            >
              {cta.actionLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>
      ) : null}
      <TraffoFooter {...footer} />
    </div>
  );
}
