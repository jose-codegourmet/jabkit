import { useId } from "react";
import { Badge } from "@/atoms/badge";
import { cn } from "@/lib/cn";
import type {
  CaseStudies13Props,
  CaseStudies13Study,
} from "./CaseStudies13.types";

const defaults = {
  title: "Work that moved the number.",
  description:
    "Four proof-led case studies for agencies and product studios — cover, outcome, and the short story behind each engagement.",
  allWork: { label: "View all work", href: "#work" },
} as const;

const defaultStudies: CaseStudies13Study[] = [
  {
    href: "#northline",
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Sunlit studio desks with plants and open notebooks",
    },
    metric: "3.8×",
    category: "Product",
    client: "Northline",
    title: "A console the room could demo live.",
    description:
      "Rebuilt the launch narrative around a living admin preview so sales stopped sending screenshots.",
  },
  {
    href: "#harbor",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Laptop showing charts on a wooden desk",
    },
    metric: "41%",
    category: "Growth",
    client: "Harbor",
    title: "Pipeline that reads like a ledger.",
    description:
      "Turned a scattered win list into four outcome tiles operators could scan before the standup.",
  },
  {
    href: "#lumen",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Collaborative workshop around a table",
    },
    metric: "12w",
    category: "Brand",
    client: "Lumen",
    title: "A studio site that sold the process.",
    description:
      "Paired cover photography with hard metrics so the portfolio argued for the work, not the vibe.",
  },
  {
    href: "#orbit",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Quiet desk with a laptop and coffee",
    },
    metric: "2.1M",
    category: "Platform",
    client: "Orbit",
    title: "Self-serve that finally stuck.",
    description:
      "Cut the onboarding story to one metric, one badge, and a sentence a prospect could repeat.",
  },
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      fill="none"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StudyCard({ study }: { study: CaseStudies13Study }) {
  const body = (
    <>
      <div className="overflow-hidden bg-muted">
        <img
          src={study.image.src}
          alt={study.image.alt}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
          {study.metric}
        </p>
        <Badge variant="outline">{study.category}</Badge>
        <p className="text-sm font-medium text-muted-foreground">
          {study.client}
        </p>
        <h3 className="text-lg font-semibold tracking-[-0.03em] text-balance">
          {study.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">
          {study.description}
        </p>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-[--radius] border border-border bg-card text-left no-underline transition-[border-color,box-shadow] duration-200 ease-out hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none";

  if (study.href) {
    return (
      <a href={study.href} className={className}>
        {body}
      </a>
    );
  }

  return <article className={className}>{body}</article>;
}

export function CaseStudies13({
  className,
  title = defaults.title,
  description = defaults.description,
  allWork = defaults.allWork,
  studies = defaultStudies,
  ...props
}: CaseStudies13Props) {
  const headingId = useId();

  return (
    <section
      data-slot="case-studies13"
      aria-labelledby={headingId}
      className={cn(
        "bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id={headingId}
              className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {description}
              </p>
            ) : null}
          </div>
          {allWork ? (
            <a
              href={allWork.href}
              className="group/link inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {allWork.label}
              <ArrowRight className="transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          ) : null}
        </div>

        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-4">
          {studies.map((study) => (
            <li key={`${study.client}-${study.metric}`} className="min-w-0">
              <StudyCard study={study} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
