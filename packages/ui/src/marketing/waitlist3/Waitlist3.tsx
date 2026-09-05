"use client";

import { ArrowRightIcon } from "lucide-react";
import { type FormEvent, useId } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type {
  Waitlist3Logo,
  Waitlist3Person,
  Waitlist3Photo,
  Waitlist3Props,
} from "./Waitlist3.types";

const defaults = {
  logo: { name: "Northline", href: "#home" } satisfies Waitlist3Logo,
  badge: "Opening this fall",
  title: "Get a desk before the room fills.",
  description:
    "One email when operator seats open. No drip, no product tour — just the date and a link to claim a workspace.",
  emailLabel: "Work email",
  emailPlaceholder: "you@studio.work",
  submitLabel: "Join the waitlist",
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
  ] satisfies Waitlist3Person[],
  socialProof: "2,400 operators already in line",
  copyright: "© 2026 Northline. Seats open in that order.",
  photo: {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&h=2000&q=80",
    alt: "Sunlit glass meeting room looking onto a quiet studio floor",
  } satisfies Waitlist3Photo,
};

function BrandMark({ logo }: { logo: Waitlist3Logo }) {
  const mark = logo.src ? (
    <img src={logo.src} alt="" className="size-7 object-contain" />
  ) : (
    <span
      aria-hidden="true"
      className="grid size-7 place-items-center rounded-[calc(var(--radius)-0.1rem)] bg-foreground text-[0.7rem] font-semibold tracking-tight text-background"
    >
      {logo.name.slice(0, 1)}
    </span>
  );

  const label = (
    <span className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
      {mark}
      <span>{logo.name}</span>
    </span>
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        className="inline-flex w-fit text-foreground transition-opacity hover:opacity-80"
      >
        {label}
      </a>
    );
  }

  return label;
}

export function Waitlist3({
  className,
  logo = defaults.logo,
  badge = defaults.badge,
  title = defaults.title,
  description = defaults.description,
  emailLabel = defaults.emailLabel,
  emailPlaceholder = defaults.emailPlaceholder,
  submitLabel = defaults.submitLabel,
  people = defaults.people,
  socialProof = defaults.socialProof,
  copyright = defaults.copyright,
  photo = defaults.photo,
  onSubscribe,
  onSubmit,
  ...props
}: Waitlist3Props) {
  const headingId = useId();
  const emailId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    const email = String(
      new FormData(event.currentTarget).get("email") ?? "",
    ).trim();
    onSubscribe?.(email);
  };

  return (
    <section
      data-slot="waitlist3"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="grid min-h-dvh lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-12 px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
          <BrandMark logo={logo} />

          <div className="mx-auto w-full max-w-md space-y-7 lg:mx-0">
            {badge ? (
              <Badge variant="outline" className="h-7 px-3 text-[0.7rem]">
                {badge}
              </Badge>
            ) : null}

            <header className="space-y-3">
              <h1
                id={headingId}
                className="text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl"
              >
                {title}
              </h1>
              {description ? (
                <p className="text-base leading-7 text-muted-foreground sm:text-[1.05rem] sm:leading-8">
                  {description}
                </p>
              ) : null}
            </header>

            <form
              className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
              onSubmit={handleSubmit}
            >
              <div className="min-w-0 flex-1">
                <Label htmlFor={emailId} className="sr-only">
                  {emailLabel}
                </Label>
                <Input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={emailPlaceholder}
                  className="h-12 rounded-[--radius] bg-background"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="h-12 gap-2 sm:px-5"
              >
                {submitLabel}
                <ArrowRightIcon aria-hidden="true" className="size-4" />
              </Button>
            </form>

            {people.length > 0 || socialProof ? (
              <div className="flex flex-wrap items-center gap-3">
                {people.length > 0 ? (
                  <AvatarGroup>
                    {people.map((person) => (
                      <Avatar key={person.fallback} size="sm">
                        <AvatarImage src={person.src} alt={person.alt} />
                        <AvatarFallback>{person.fallback}</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                ) : null}
                {socialProof ? (
                  <p className="text-sm text-muted-foreground">{socialProof}</p>
                ) : null}
              </div>
            ) : null}
          </div>

          {copyright ? (
            <p className="text-xs tracking-wide text-muted-foreground">
              {copyright}
            </p>
          ) : null}
        </div>

        <figure className="relative min-h-[18rem] overflow-hidden bg-muted lg:min-h-dvh">
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 size-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
