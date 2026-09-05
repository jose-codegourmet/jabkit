import { useId } from "react";
import { cn } from "@/lib/cn";
import type {
  CaseStudies11Props,
  CaseStudies11Study,
} from "./CaseStudies11.types";

const DEFAULT_TITLE = "Work that changed the room";
const DEFAULT_DESCRIPTION =
  "Three featured stories. Poster-like plates with the company mark and the outcome — no carousel, no extra copy on the cards.";

const DEFAULT_STUDIES: CaseStudies11Study[] = [
  {
    company: "Harbor",
    title: "Night docks that stay on the clock",
    image: "/assets/d7eddb427ba6f203.webp",
    imageAlt: "Shipping containers stacked along a lit harbor dock",
    href: "#harbor",
  },
  {
    company: "Northline",
    title: "A quieter console for the lab floor",
    image: "/assets/4cc437eeea3384d1.webp",
    imageAlt: "Researcher reviewing data on a laptop in a bright lab",
    href: "#northline",
  },
  {
    company: "Fieldwork",
    title: "From brief to built in one studio",
    image: "/assets/462c849dc9a41e59.webp",
    imageAlt: "Sunlit studio desks with plants and open laptops",
    href: "#fieldwork",
  },
];

function CompanyMark({ study }: { study: CaseStudies11Study }) {
  if (study.logoSrc) {
    return (
      <img
        src={study.logoSrc}
        alt={study.logoAlt ?? study.company}
        className="h-7 w-auto max-w-32 object-contain"
      />
    );
  }

  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="grid size-7 place-items-center rounded-md border border-foreground/20 bg-foreground/10 font-mono text-[11px] font-semibold tracking-tight"
      >
        {study.company.slice(0, 1)}
      </span>
      <span className="text-sm font-semibold tracking-[-0.03em]">
        {study.company}
      </span>
    </span>
  );
}

function CaseStudyCard({ study }: { study: CaseStudies11Study }) {
  const label = `${study.company}: ${study.title}`;
  const className =
    "group relative block aspect-[3/4] overflow-hidden rounded-[calc(var(--radius)+0.15rem)] border border-border bg-muted shadow-[0_28px_56px_-36px_color-mix(in_oklab,var(--jk-foreground),transparent_50%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const body = (
    <>
      <img
        src={study.image}
        alt={study.imageAlt}
        className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        aria-hidden="true"
        className="dark pointer-events-none absolute inset-0 bg-gradient-to-t from-background from-[12%] via-background/70 to-transparent"
      />
      <div className="dark absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-3 p-5 text-foreground sm:p-6">
        <CompanyMark study={study} />
        <p className="text-lg leading-snug font-semibold tracking-[-0.035em] text-balance sm:text-xl">
          {study.title}
        </p>
      </div>
    </>
  );

  if (study.href) {
    return (
      <a href={study.href} aria-label={label} className={className}>
        {body}
      </a>
    );
  }

  return <article className={className}>{body}</article>;
}

export function CaseStudies11({
  className,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  studies = DEFAULT_STUDIES,
  ...props
}: CaseStudies11Props) {
  const headingId = useId();
  const featured = studies.slice(0, 3);

  return (
    <section
      data-slot="case-studies11"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <header className="mx-auto max-w-2xl text-center">
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

        {featured.length ? (
          <ul className="mt-12 grid list-none gap-5 p-0 sm:mt-16 md:grid-cols-3 md:gap-6">
            {featured.map((study) => (
              <li key={`${study.company}-${study.title}`}>
                <CaseStudyCard study={study} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
