import { useId } from "react";
import { cn } from "@/lib/cn";
import type {
  About8Image,
  About8Mission,
  About8Product,
  About8Props,
  About8Stat,
  About8Team,
} from "./About8.types";

const DEFAULT_TITLE = "Infrastructure for money that has to settle.";
const DEFAULT_DESCRIPTION =
  "We build the rails teams use when a ledger cannot be approximate — clearing, reconciliation, and the audit trail that follows every transfer.";

const DEFAULT_STATS: About8Stat[] = [
  { value: "48B", label: "Annual volume" },
  { value: "12ms", label: "Median settle" },
  { value: "99.99%", label: "Uptime SLO" },
  { value: "40+", label: "Markets live" },
];

const DEFAULT_MISSION: About8Mission = {
  title: "Keep every transfer accountable.",
  paragraphs: [
    "Finance teams should not wait overnight for a number they already posted. We treat settlement as a product surface: readable, timed, and owned by the same API that moved the funds.",
    "That means idempotent writes, a journal you can query, and operators who can explain a mismatch without opening a war room.",
  ],
};

const DEFAULT_GALLERY: About8Image[] = [
  {
    src: "/assets/7292f284c2f30594.webp",
    alt: "Glass office towers against a clear sky",
  },
  {
    src: "/assets/6c0006cce3d4fa6c.webp",
    alt: "Two colleagues reviewing a screen together",
  },
  {
    src: "/assets/e89d407a6298dce2.webp",
    alt: "Laptop showing charts on a wooden desk",
  },
];

const DEFAULT_PRODUCT: About8Product = {
  title: "LedgerKit is the control plane.",
  description:
    "One contract for authorizations, postings, and statements. Partners integrate once, then route payouts, collections, and FX through the same numbered events.",
};

const DEFAULT_TEAM: About8Team = {
  title: "Founding operators, still on the floor.",
  description:
    "The first six people still own incidents, partner reviews, and the weekly journal walkthrough. We hire people who can read a ledger as fluently as a pull request.",
  image: {
    src: "/assets/9beb102cf6681c6c.webp",
    alt: "Collaborative workshop around a table",
  },
};

function PlusField({ className }: { className?: string }) {
  const patternId = useId();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 text-border [mask-image:radial-gradient(ellipse_at_center,var(--jk-foreground)_12%,transparent_72%)]",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className="size-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M14 9v10M9 14h10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

function StatCell({ stat }: { stat: About8Stat }) {
  return (
    <div className="flex flex-col gap-2 px-5 py-6 sm:px-8 sm:py-8">
      <p className="text-4xl font-semibold tracking-[-0.06em] tabular-nums sm:text-5xl lg:text-6xl">
        {stat.value}
      </p>
      <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        {stat.label}
      </p>
    </div>
  );
}

export function About8({
  className,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  stats = DEFAULT_STATS,
  mission = DEFAULT_MISSION,
  gallery = DEFAULT_GALLERY,
  product = DEFAULT_PRODUCT,
  team = DEFAULT_TEAM,
  ...props
}: About8Props) {
  const headingId = useId();
  const galleryId = useId();

  return (
    <section
      data-slot="about8"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="relative isolate overflow-hidden">
        <PlusField />
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <h2
            id={headingId}
            className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {stats.length ? (
        <div className="border-y border-border">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
            {stats.map((stat) => (
              <StatCell key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      ) : null}

      {mission ? (
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
            {mission.title}
          </h3>
          <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {mission.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}

      {gallery.length ? (
        <section
          id={galleryId}
          aria-roledescription="carousel"
          aria-label="Company stills"
          className="mx-auto max-w-6xl px-5 pb-6 sm:px-8 lg:px-10"
        >
          <ul className="flex list-none snap-x snap-mandatory gap-4 overflow-x-auto p-0 pb-4 [scrollbar-width:thin]">
            {gallery.map((image) => (
              <li
                key={image.src}
                className="w-[82vw] shrink-0 snap-center sm:w-[46vw] lg:w-[22.5rem]"
              >
                <figure className="overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[3/4] size-full object-cover"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {product ? (
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="ml-auto max-w-xl text-left lg:text-right">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
              {product.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {product.description}
            </p>
          </div>
        </div>
      ) : null}

      {team ? (
        <div className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
            <figure className="order-1 overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border bg-muted lg:order-2">
              <img
                src={team.image.src}
                alt={team.image.alt}
                className="aspect-[16/11] size-full object-cover"
              />
            </figure>
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
                {team.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {team.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
