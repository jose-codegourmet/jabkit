"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CornerDownRightIcon,
} from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type { Team14Action, Team14Member, Team14Props } from "./Team14.types";

const DEFAULT_TITLE = "We're hiring";
const DEFAULT_DESCRIPTION =
  "The studio is small on purpose. We need another pair of hands who can sit with a brief, argue for the quieter layout, and still ship on Thursday.";
const DEFAULT_ACTION: Team14Action = {
  label: "Join the team",
  href: "#careers",
};
const DEFAULT_MEMBERS: Team14Member[] = [
  {
    src: "/assets/bd48582e630a15fa.webp",
    alt: "Portrait of Amara Cole",
    name: "Amara Cole",
    role: "Design director",
  },
  {
    src: "/assets/8e9489842d5e2cdf.webp",
    alt: "Portrait of Julian Hart",
    name: "Julian Hart",
    role: "Product engineer",
  },
  {
    src: "/assets/4132445424a19cc6.webp",
    alt: "Portrait of Priya Nair",
    name: "Priya Nair",
    role: "Brand lead",
  },
];

function HireAction({ action }: { action: Team14Action }) {
  const className =
    "h-11 w-fit gap-2 px-0 text-base font-medium hover:bg-transparent";
  const label = (
    <>
      <span>{action.label}</span>
      <CornerDownRightIcon
        aria-hidden="true"
        className="size-4 stroke-[1.75] text-primary"
      />
    </>
  );

  if (action.href) {
    return (
      <Button variant="ghost" size="md" className={className} asChild>
        <a href={action.href}>{label}</a>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="md"
      className={className}
      onClick={action.onClick}
    >
      {label}
    </Button>
  );
}

function MemberCard({ member }: { member: Team14Member }) {
  return (
    <article className="flex h-full min-w-0 flex-col">
      <figure className="overflow-hidden rounded-[--radius] bg-muted">
        <img
          src={member.src}
          alt={member.alt}
          className="aspect-[3/4] w-full object-cover object-top"
        />
      </figure>
      <h3 className="mt-4 text-base font-medium tracking-[-0.02em]">
        {member.name}
      </h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{member.role}</p>
    </article>
  );
}

function MemberCarousel({ members }: { members: Team14Member[] }) {
  const carouselId = useId();
  const [active, setActive] = useState(0);
  const count = members.length;

  if (count === 0) return null;

  const go = (direction: -1 | 1) => {
    setActive((current) => (current + direction + count) % count);
  };

  return (
    <div className="min-w-0 flex-1">
      <div className="hidden h-full gap-6 lg:grid lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={`${member.name}-${member.src}`} member={member} />
        ))}
      </div>

      <section
        id={carouselId}
        aria-roledescription="carousel"
        aria-label="Team members"
        className="lg:hidden"
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {members.map((member) => (
              <div
                key={`${member.name}-${member.src}`}
                className="w-full shrink-0 pr-0"
                aria-hidden={members[active] !== member}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
        {count > 1 ? (
          <div className="mt-5 flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              aria-label="Previous team member"
              aria-controls={carouselId}
              className="size-9 border border-border p-0"
              onClick={() => go(-1)}
            >
              <ChevronLeftIcon aria-hidden="true" className="size-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              aria-label="Next team member"
              aria-controls={carouselId}
              className="size-9 border border-border p-0"
              onClick={() => go(1)}
            >
              <ChevronRightIcon aria-hidden="true" className="size-4" />
            </Button>
            <p className="sr-only" aria-live="polite">
              {members[active].name}, {active + 1} of {count}
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export function Team14({
  className,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  action = DEFAULT_ACTION,
  members = DEFAULT_MEMBERS,
  ...props
}: Team14Props) {
  const headingId = useId();

  return (
    <section
      data-slot="team14"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="flex min-h-[22rem] flex-col justify-between gap-10 rounded-[calc(var(--radius)+0.35rem)] border border-border p-8 sm:p-10 lg:w-[22rem] lg:shrink-0 xl:w-[24rem]">
            <div>
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
            </div>
            {action ? <HireAction action={action} /> : null}
          </div>
          <MemberCarousel members={members} />
        </div>
      </div>
    </section>
  );
}
