"use client";

import { ArrowRightIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Announcement4Props } from "./Announcement4.types";

const defaults = {
  message:
    "A better version is here. Faster, cleaner, and built to scale with you.",
  ctaLabel: "See what's new",
  ctaHref: "#whats-new",
  dismissLabel: "Dismiss announcement",
};

const bloomClip =
  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)";

function Bloom({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl",
        className,
      )}
    >
      <div
        className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-primary to-primary/60 opacity-30"
        style={{ clipPath: bloomClip }}
      />
    </div>
  );
}

export function Announcement4({
  className,
  message = defaults.message,
  ctaLabel = defaults.ctaLabel,
  ctaHref = defaults.ctaHref,
  dismissLabel = defaults.dismissLabel,
  onCtaClick,
  onDismiss,
  ...props
}: Announcement4Props) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <section
      data-slot="announcement-4"
      aria-label={message}
      className={cn(
        "flex items-center justify-center bg-background p-4 text-foreground",
        className,
      )}
      {...props}
    >
      <div className="relative isolate flex w-full items-center justify-center overflow-hidden rounded-sm border border-primary/20 bg-primary/10 px-4 py-1.5 tracking-tight">
        <Bloom className="left-[max(-7rem,calc(50%-52rem))]" />
        <Bloom className="left-[max(45rem,calc(50%+8rem))]" />

        <div className="relative z-10 flex flex-col items-center space-y-2 pr-10 text-sm sm:flex-row sm:gap-3 sm:space-y-0 sm:pr-12">
          <p className="text-center font-medium text-pretty text-foreground sm:text-left">
            {message}
          </p>

          <div className="group flex items-center gap-3">
            <span
              aria-hidden="true"
              className="hidden size-1 rounded-full bg-primary sm:block"
            />

            <a
              href={ctaHref}
              onClick={onCtaClick}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/20 bg-background/40 px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground",
                "shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--jk-background),transparent_50%),inset_0_-2px_5px_color-mix(in_oklab,var(--jk-foreground),transparent_90%),0_8px_20px_color-mix(in_oklab,var(--jk-foreground),transparent_90%)]",
                "dark:border-foreground/20 dark:bg-foreground/10 dark:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--jk-foreground),transparent_90%),inset_0_-2px_4px_color-mix(in_oklab,var(--jk-background),transparent_70%),0_8px_20px_color-mix(in_oklab,var(--jk-background),transparent_75%)]",
                "transition-[transform,box-shadow,filter] duration-200 hover:brightness-110 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "motion-reduce:transition-none motion-reduce:active:scale-100",
              )}
            >
              {ctaLabel}
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>

        <button
          type="button"
          aria-label={dismissLabel}
          onClick={(event) => {
            onDismiss?.(event);
            if (event.defaultPrevented) return;
            setOpen(false);
          }}
          className={cn(
            "absolute right-2 inline-flex size-8 items-center justify-center rounded-lg text-foreground",
            "hover:bg-transparent hover:text-foreground/70",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          <XIcon aria-hidden="true" className="size-4" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
