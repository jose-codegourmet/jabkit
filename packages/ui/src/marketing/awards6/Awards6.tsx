import { useId } from "react";
import { Separator } from "@/atoms/separator";
import { cn } from "@/lib/cn";
import type {
  Awards6ColumnLabels,
  Awards6Item,
  Awards6Props,
} from "./Awards6.types";

const DEFAULT_TITLE = "Milestones";
const DEFAULT_SUBTITLE = "& Achievements.";

const DEFAULT_COLUMN_LABELS: Awards6ColumnLabels = {
  milestone: "Milestone",
  type: "Type",
  year: "Year",
};

const DEFAULT_ITEMS: Awards6Item[] = [
  {
    title: "Opened the studio with four desks and one printer",
    type: "Founding",
    year: "2018",
  },
  {
    title: "Harbor grocery rebuild named Site of the Day",
    type: "Recognition",
    year: "2021",
  },
  {
    title: "Season book for Lumen lighting, two inks only",
    type: "Publication",
    year: "2022",
  },
  {
    title: "Northline console shipped as a live sales demo",
    type: "Product",
    year: "2023",
  },
  {
    title: "Civic wayfinding system adopted across three halls",
    type: "Public work",
    year: "2024",
  },
  {
    title: "Studio award for identity that holds at postage size",
    type: "Identity",
    year: "2025",
  },
];

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function Awards6({
  className,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  columnLabels = DEFAULT_COLUMN_LABELS,
  items = DEFAULT_ITEMS,
  ...props
}: Awards6Props) {
  const headingId = useId();
  const labels = { ...DEFAULT_COLUMN_LABELS, ...columnLabels };

  return (
    <section
      data-slot="awards6"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="md:col-span-3">
            <h2
              id={headingId}
              className="text-5xl font-semibold tracking-[-0.07em] text-balance sm:text-7xl lg:text-8xl"
            >
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-2xl font-medium tracking-[-0.04em] text-muted-foreground sm:text-3xl lg:text-4xl">
                {subtitle}
              </p>
            ) : null}
          </div>
        </header>

        <div className="mt-12 sm:mt-16">
          <div
            className="hidden grid-cols-3 items-end pb-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase md:grid lg:grid-cols-4"
            aria-hidden="true"
          >
            <span className="hidden lg:block" />
            <span className="md:col-span-2">{labels.milestone}</span>
            <div className="flex items-baseline justify-between gap-4">
              <span>{labels.type}</span>
              <span>{labels.year}</span>
            </div>
          </div>
          <Separator className="hidden md:block" />

          <ol className="m-0 list-none p-0">
            {items.map((item, index) => (
              <li key={`${item.year}-${item.title}`}>
                {index > 0 ? <Separator /> : null}
                <article className="grid grid-cols-1 items-baseline gap-2 py-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
                  <span className="hidden font-mono text-sm text-muted-foreground tabular-nums lg:block">
                    {padIndex(index)}
                  </span>
                  <h3 className="text-base font-semibold tracking-[-0.03em] text-balance md:col-span-2 sm:text-lg">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">{item.type}</span>
                    <span className="font-mono tabular-nums text-foreground">
                      {item.year}
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
