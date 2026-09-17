// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencySectionHeading } from "@/atoms/agency-section-heading";
import { cn } from "@/lib/cn";
import { agencyIndexWorks } from "./AgencyIndexSection.mocks";
import type { AgencyIndexSectionProps } from "./AgencyIndexSection.types";

const defaults = {
  id: "index",
  number: "01",
  label: "Index",
  meta: "128 items",
  kicker: "[01] Independent design practice est. 2019",
  availability: "[05] BDX -- Berlin available Q3-Q4 2026",
  title: "Form follows friction",
  emphasis: "friction",
  body: "A graphic design practice working at the intersection of brand systems, editorial design, and screen-based typography. Built one grid at a time, with attention to the seams.",
  ctaLabel: "Browse index 128",
  ctaHref: "#works",
  categories: [
    "Brand systems",
    "Editorial design",
    "Web and interaction",
    "Print and packaging",
  ],
  worksHeading: "Selected works 2019-26",
} as const;

export function AgencyIndexSection({
  className,
  id = defaults.id,
  number = defaults.number,
  label = defaults.label,
  meta = defaults.meta,
  kicker = defaults.kicker,
  availability = defaults.availability,
  title = defaults.title,
  emphasis = defaults.emphasis,
  body = defaults.body,
  ctaLabel = defaults.ctaLabel,
  ctaHref = defaults.ctaHref,
  categories = [...defaults.categories],
  worksHeading = defaults.worksHeading,
  works = agencyIndexWorks,
  ...props
}: AgencyIndexSectionProps) {
  return (
    <section
      id={id}
      data-slot="agency-index-section"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-[90rem] px-[var(--jk-space-gutter)] pt-10 pb-16 sm:pt-14">
        <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:justify-between">
          <p>{kicker}</p>
          <p>{availability}</p>
        </div>
        <AgencySectionHeading
          className="mt-10"
          number={number}
          label={label}
          meta={meta}
          title={title}
          emphasis={emphasis}
          titleAs="h1"
        />
        <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
        <a
          href={ctaHref}
          className="mt-8 inline-flex items-center gap-3 rounded-none bg-foreground px-5 py-3 font-mono text-[11px] tracking-[0.16em] text-background no-underline uppercase transition-[transform,background-color] duration-300 hover:bg-warning hover:text-warning-foreground motion-reduce:transition-none motion-reduce:hover:bg-foreground motion-reduce:hover:text-background"
        >
          {ctaLabel}
          <span aria-hidden="true">{">"}</span>
        </a>
      </div>
      <div className="bg-foreground px-[var(--jk-space-gutter)] py-4 text-background">
        <ul className="mx-auto flex max-w-[90rem] flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em]">
          {categories.map((category, index) => (
            <li key={category} className="inline-flex items-center gap-5">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-warning"
                />
              ) : null}
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="works"
        className="mx-auto max-w-[90rem] px-[var(--jk-space-gutter)] py-16"
      >
        <h2 className="font-[family-name:var(--jk-font-display)] text-2xl font-semibold tracking-tight text-foreground uppercase sm:text-4xl">
          {worksHeading}
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {works.map((work) => (
            <li key={work.href}>
              <a
                href={work.href}
                className="group block rounded-none no-underline"
              >
                <figure className="overflow-hidden bg-muted">
                  <img
                    src={work.image.src}
                    alt={work.image.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </figure>
                <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-foreground uppercase">
                  {work.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
