// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencySectionHeading } from "@/atoms/agency-section-heading";
import { cn } from "@/lib/cn";
import { AgencyContactForm } from "@/marketing/agency-contact-form";
import type { AgencyContactSectionProps } from "./AgencyContactSection.types";

const defaults = {
  id: "contact",
  number: "05",
  label: "Contact",
  title: "Let's make something specific.",
  emphasis: "specific.",
  body: "Currently booking projects starting Q3 2026. Reach out with a brief, a budget range, and a timeline. Replies within 48 hours.",
  studioName: "Studio Layout",
  address: "123 Cr. Victor Hugo, 33000 Bordeaux",
  hours: "Mon-Fri, 09/00-18/00",
  appointment: "By appointment",
} as const;

export function AgencyContactSection({
  className,
  id = defaults.id,
  number = defaults.number,
  label = defaults.label,
  title = defaults.title,
  emphasis = defaults.emphasis,
  body = defaults.body,
  studioName = defaults.studioName,
  address = defaults.address,
  hours = defaults.hours,
  appointment = defaults.appointment,
  form,
  ...props
}: AgencyContactSectionProps) {
  return (
    <section
      id={id}
      data-slot="agency-contact-section"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto grid max-w-[90rem] gap-12 px-[var(--jk-space-gutter)] py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <AgencySectionHeading
            number={number}
            label={label}
            title={title}
            emphasis={emphasis}
          />
          <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-muted-foreground uppercase">
            {body}
          </p>
          <div
            aria-hidden="true"
            className="relative mt-10 aspect-[5/4] overflow-hidden rounded-none border border-foreground bg-muted"
          >
            <div className="absolute inset-[12%] border border-dashed border-foreground/40" />
            <div className="absolute top-1/2 right-[8%] left-[8%] h-px bg-foreground/30" />
            <div className="absolute top-[18%] bottom-[18%] left-1/2 w-px bg-foreground/30" />
            <p className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
              {studioName}
            </p>
            <p className="absolute right-4 bottom-4 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
              La Garonne
            </p>
            <span className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warning" />
          </div>
          <dl className="mt-6 space-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
            <div>
              <dt className="sr-only">Studio</dt>
              <dd>{studioName}</dd>
            </div>
            <div>
              <dt className="sr-only">Address</dt>
              <dd>{address}</dd>
            </div>
            <div>
              <dt className="sr-only">Visit</dt>
              <dd>
                {appointment} / {hours}
              </dd>
            </div>
          </dl>
        </div>
        <AgencyContactForm {...form} />
      </div>
    </section>
  );
}
