// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { useId } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/atoms/avatar/Avatar";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  Feature261AvatarsTile,
  Feature261ImageTile,
  Feature261PricingTile,
  Feature261PromoTile,
  Feature261Props,
  Feature261StatTile,
} from "./Feature261.types";

const defaults = {
  title: "Proof, price, and the people who ship it",
  description:
    "A single mosaic for the objections a buyer actually has. Imagery, a hard number, a clear seat price, and the crew already on the floor.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&h=1600&q=80",
    alt: "Product team gathered around a table reviewing work",
    caption: "Standup on the studio floor",
  },
  stat: {
    value: "47 hrs",
    label: "Median time from brief to first review",
    hint: "Last 90 days, paid seats only",
  },
  pricing: {
    amount: "$48",
    period: "/ seat / month",
    caption: "Includes reviews, markup, and field capture. No per-project fees.",
    ctaLabel: "See plans",
    href: "#plans",
  },
  promo: {
    title: "One workspace for desk and site",
    body: "Markups, photos, and sign-off land in the same thread. No second tool for the jobsite.",
  },
  avatars: {
    title: "Already in the room",
    body: "Operators at Harbor, Northline, and Kindred run weekly reviews here.",
    extraCount: "18",
    people: [
      {
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Ines Calder",
        fallback: "IC",
      },
      {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Rowan Hale",
        fallback: "RH",
      },
      {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Priya Nair",
        fallback: "PN",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Eli Voss",
        fallback: "EV",
      },
    ],
  },
  supportingImage: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=900&q=80",
    alt: "Sunlit studio desks with plants and open notebooks",
    caption: "Desk side of the same thread",
  },
} satisfies Required<
  Pick<
    Feature261Props,
    | "title"
    | "description"
    | "heroImage"
    | "stat"
    | "pricing"
    | "promo"
    | "avatars"
    | "supportingImage"
  >
>;

const tileClass =
  "h-full overflow-hidden rounded-[calc(var(--radius)+0.55rem)] border border-border";

function ImageTile({
  tile,
  className,
  priority,
}: {
  tile: Feature261ImageTile;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn(tileClass, "relative bg-muted", className)}>
      <img
        src={tile.src}
        alt={tile.alt}
        className={cn(
          "h-full w-full object-cover",
          priority ? "min-h-[18rem] sm:min-h-[24rem] lg:min-h-0" : "min-h-[14rem]",
        )}
      />
      {tile.caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-background/80 px-4 py-3 text-sm text-foreground backdrop-blur-sm">
          {tile.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function StatTile({ tile }: { tile: Feature261StatTile }) {
  return (
    <div
      className={cn(
        tileClass,
        "flex flex-col justify-between bg-primary p-6 text-primary-foreground sm:p-7",
      )}
    >
      <p className="font-semibold text-5xl tracking-[-0.06em] sm:text-6xl">
        {tile.value}
      </p>
      <div className="mt-6 space-y-1">
        <p className="text-base font-medium leading-6 text-balance">
          {tile.label}
        </p>
        {tile.hint ? (
          <p className="text-sm text-primary-foreground/75">{tile.hint}</p>
        ) : null}
      </div>
    </div>
  );
}

function PricingTile({ tile }: { tile: Feature261PricingTile }) {
  return (
    <div
      className={cn(
        tileClass,
        "flex flex-col justify-between bg-card p-6 text-card-foreground sm:p-7",
      )}
    >
      <div>
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-semibold text-4xl tracking-[-0.05em] sm:text-5xl">
            {tile.amount}
          </span>
          <span className="text-sm text-muted-foreground">{tile.period}</span>
        </p>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          {tile.caption}
        </p>
      </div>
      <Button asChild variant="secondary" size="md" className="mt-6 w-fit">
        <a href={tile.href}>{tile.ctaLabel}</a>
      </Button>
    </div>
  );
}

function PromoTile({ tile }: { tile: Feature261PromoTile }) {
  return (
    <div
      className={cn(
        tileClass,
        "flex flex-col justify-center gap-3 bg-muted p-6 sm:p-7",
      )}
    >
      <h3 className="text-xl font-semibold tracking-[-0.04em] text-balance">
        {tile.title}
      </h3>
      <p className="text-sm leading-6 text-muted-foreground">{tile.body}</p>
    </div>
  );
}

function AvatarsTile({ tile }: { tile: Feature261AvatarsTile }) {
  return (
    <div
      className={cn(
        tileClass,
        "flex flex-col justify-between bg-card p-6 text-card-foreground sm:p-7",
      )}
    >
      <AvatarGroup className="mb-5">
        {tile.people.map((person) => (
          <Avatar key={person.fallback} size="lg">
            <AvatarImage src={person.src} alt={person.alt} />
            <AvatarFallback>{person.fallback}</AvatarFallback>
          </Avatar>
        ))}
        {tile.extraCount ? (
          <AvatarGroupCount>+{tile.extraCount}</AvatarGroupCount>
        ) : null}
      </AvatarGroup>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-[-0.03em]">
          {tile.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">{tile.body}</p>
      </div>
    </div>
  );
}

export function Feature261({
  className,
  title = defaults.title,
  description = defaults.description,
  heroImage = defaults.heroImage,
  stat = defaults.stat,
  pricing = defaults.pricing,
  promo = defaults.promo,
  avatars = defaults.avatars,
  supportingImage = defaults.supportingImage,
  ...props
}: Feature261Props) {
  const headingId = useId();

  return (
    <section
      data-slot="feature261"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mb-10 max-w-2xl space-y-3 sm:mb-12">
          <h2
            id={headingId}
            className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-7 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(12rem,auto)_minmax(12rem,auto)_minmax(14rem,auto)] lg:gap-5">
          <ImageTile
            tile={heroImage}
            priority
            className="min-h-[18rem] sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-0"
          />
          <div className="h-full lg:col-span-5">
            <StatTile tile={stat} />
          </div>
          <div className="h-full lg:col-span-5">
            <PricingTile tile={pricing} />
          </div>
          <div className="h-full lg:col-span-4">
            <PromoTile tile={promo} />
          </div>
          <div className="h-full lg:col-span-4">
            <AvatarsTile tile={avatars} />
          </div>
          <ImageTile
            tile={supportingImage}
            className="lg:col-span-4 lg:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}
