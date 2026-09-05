import { type ReactNode, useId } from "react";
import { Badge } from "@/atoms/badge";
import { Separator } from "@/atoms/separator";
import { cn } from "@/lib/cn";
import type {
  Content2Guide,
  Content2Props,
  Content2Tip,
  Content2Type,
  Content2TypeKind,
} from "./Content2.types";

const DEFAULT_KICKER = "Content hub";
const DEFAULT_TITLE = "One shelf for every kind of page";
const DEFAULT_DESCRIPTION =
  "Projects, galleries, events, and social links live in the same workspace so editors know where the next piece belongs.";

const DEFAULT_TYPES: Content2Type[] = [
  {
    kind: "project",
    title: "Projects",
    description: "Long-form work with a cover, a brief, and a publish date.",
  },
  {
    kind: "gallery",
    title: "Gallery",
    description: "Image sets editors can reorder without leaving the page.",
  },
  {
    kind: "event",
    title: "Events",
    description: "Dates, locations, and RSVP copy in a single record.",
  },
  {
    kind: "social",
    title: "Social",
    description:
      "Profile links that stay current in the footer and about page.",
  },
];

const DEFAULT_CREATE: Content2Guide = {
  title: "Add an entry",
  description: "Start from a type, then fill only what the record needs.",
  steps: [
    "Choose a content type from the grid.",
    "Complete the required fields for that type.",
    "Save as draft, or publish when the copy is ready.",
  ],
};

const DEFAULT_MANAGE: Content2Guide = {
  title: "Keep the shelf current",
  description: "Filter, edit in place, and archive what no longer ships.",
  steps: [
    "Filter the list by type, status, or owner.",
    "Open a record to edit fields without a new draft.",
    "Archive stale entries so the hub stays scannable.",
  ],
};

const DEFAULT_TIP: Content2Tip = {
  title: "Faster when you are adding many",
  description:
    "Start from a template for repeating layouts, or batch-upload images before you write captions.",
};

function iconClassName(className?: string) {
  return cn("size-5", className);
}

function TypeGlyph({
  kind,
  className,
}: {
  kind?: Content2TypeKind;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: iconClassName(className),
  };

  if (kind === "gallery") {
    return (
      <svg aria-hidden="true" {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m21 16-4.5-4.5L9 19" />
      </svg>
    );
  }

  if (kind === "event") {
    return (
      <svg aria-hidden="true" {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M3 11h18" />
        <path d="M8 15h.01" />
        <path d="M12 15h.01" />
        <path d="M16 15h.01" />
      </svg>
    );
  }

  if (kind === "social") {
    return (
      <svg aria-hidden="true" {...common}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5 15.4 17" />
        <path d="M15.4 7 8.6 10.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" {...common}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H10l2 2.5h5.5A2.5 2.5 0 0 1 20 10v8.5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5Z" />
    </svg>
  );
}

function PlusGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName(className)}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}

function SlidersGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName(className)}
    >
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M2 14h4" />
      <path d="M10 8h4" />
      <path d="M18 16h4" />
    </svg>
  );
}

function InfoGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName(className)}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function TypeTile({ item }: { item: Content2Type }) {
  return (
    <article className="flex gap-3 rounded-[calc(var(--radius)+0.15rem)] border border-border bg-card p-4 sm:p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-[--radius] border border-border bg-muted text-foreground">
        {item.icon ?? <TypeGlyph kind={item.kind} />}
      </span>
      <div className="min-w-0 space-y-1">
        <h3 className="text-sm font-semibold tracking-[-0.02em]">
          {item.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function GuidePanel({
  guide,
  icon,
}: {
  guide: Content2Guide;
  icon: ReactNode;
}) {
  return (
    <article className="rounded-[calc(var(--radius)+0.2rem)] border border-border bg-card p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-[--radius] border border-border bg-muted text-foreground">
          {icon}
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-[-0.03em]">
            {guide.title}
          </h3>
          {guide.description ? (
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {guide.description}
            </p>
          ) : null}
        </div>
      </div>
      {guide.steps.length ? (
        <ol className="mt-5 divide-y divide-border list-none p-0">
          {guide.steps.map((step, index) => (
            <li key={step} className="flex gap-3 py-3 first:pt-0 last:pb-0">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-foreground">{step}</p>
            </li>
          ))}
        </ol>
      ) : null}
    </article>
  );
}

export function Content2({
  className,
  kicker = DEFAULT_KICKER,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  types = DEFAULT_TYPES,
  createGuide = DEFAULT_CREATE,
  manageGuide = DEFAULT_MANAGE,
  tip = DEFAULT_TIP,
  ...props
}: Content2Props) {
  const headingId = useId();

  return (
    <section
      data-slot="content2"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-14">
          <header className="max-w-xl">
            {kicker ? (
              <Badge variant="outline" className="mb-4">
                {kicker}
              </Badge>
            ) : null}
            <h2
              id={headingId}
              className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {description}
              </p>
            ) : null}
          </header>

          {types.length ? (
            <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4">
              {types.map((item) => (
                <li key={item.title}>
                  <TypeTile item={item} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {createGuide || manageGuide ? (
          <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-6">
            {createGuide ? (
              <GuidePanel guide={createGuide} icon={<PlusGlyph />} />
            ) : null}
            {manageGuide ? (
              <GuidePanel guide={manageGuide} icon={<SlidersGlyph />} />
            ) : null}
          </div>
        ) : null}

        {tip ? (
          <>
            <Separator className="my-8 sm:my-10" />
            <div
              role="note"
              className="flex gap-3 rounded-[calc(var(--radius)+0.15rem)] border border-border bg-muted/70 p-4 sm:p-5"
            >
              <span className="mt-0.5 text-foreground">
                <InfoGlyph />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-[-0.02em]">
                  {tip.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
