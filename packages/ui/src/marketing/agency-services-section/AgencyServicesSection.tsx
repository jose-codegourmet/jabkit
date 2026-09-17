"use client";

import { useState } from "react";
import { AgencySectionHeading } from "@/atoms/agency-section-heading";
import { cn } from "@/lib/cn";
import { agencyServiceItems } from "./AgencyServicesSection.mocks";
import type { AgencyServicesSectionProps } from "./AgencyServicesSection.types";

const defaults = {
  id: "services",
  number: "04",
  label: "Services",
  meta: "04 categories",
  title: "What I do",
} as const;

export function AgencyServicesSection({
  className,
  id = defaults.id,
  number = defaults.number,
  label = defaults.label,
  meta = defaults.meta,
  title = defaults.title,
  items = [...agencyServiceItems],
  ...props
}: AgencyServicesSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id={id}
      data-slot="agency-services-section"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-[90rem] px-[var(--jk-space-gutter)] py-16">
        <AgencySectionHeading
          number={number}
          label={label}
          meta={meta}
          title={title}
        />
        <ul className="mt-10 border-t border-foreground">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <li key={item.number} className="border-b border-foreground">
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between gap-4 rounded-none px-0 py-5 text-left transition-colors duration-300 motion-reduce:transition-none",
                    open
                      ? "bg-foreground px-4 text-background sm:px-5"
                      : "bg-background text-foreground hover:bg-muted",
                  )}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="font-[family-name:var(--jk-font-display)] text-xl font-semibold uppercase tracking-tight sm:text-3xl">
                    {item.number} {item.title}
                  </span>
                  <span aria-hidden="true" className="font-mono text-lg">
                    {open ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p
                      className={cn(
                        "max-w-[62ch] px-4 py-5 text-sm leading-relaxed sm:px-5",
                        open
                          ? "bg-foreground text-background"
                          : "bg-background text-muted-foreground",
                      )}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
