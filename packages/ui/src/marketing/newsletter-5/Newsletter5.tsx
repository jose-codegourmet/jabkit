"use client";

import { ArrowRightIcon, CircleCheckIcon, SendIcon } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { cn } from "@/lib/cn";
import type { Newsletter5Props } from "./Newsletter5.types";

const defaults = {
  eyebrow: "Friday dispatch",
  title: "One useful product letter every week",
  description:
    "A short read on launches, retention loops, design systems, and the small interface choices that help teams ship with more clarity.",
  emailLabel: "Email address",
  emailPlaceholder: "you@studio.work",
  subscribeLabel: "Subscribe",
  reassurance: "No spam, no daily drip, and no sponsored clutter.",
};

const GRID_CELLS = Array.from({ length: 12 * 6 }, (_, cell) => `cell-${cell}`);

function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden rounded-[2rem] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)] [mask-size:19rem] [mask-position:center] [mask-repeat:no-repeat]"
    >
      <div className="grid h-full w-full grid-cols-12 grid-rows-6">
        {GRID_CELLS.map((cellId, index) => (
          <div
            key={cellId}
            className={cn(
              "aspect-square border border-border/50 bg-background/90 transition-colors duration-300 motion-reduce:transition-none motion-safe:hover:bg-primary/20",
              index % 8 === 0 && "bg-primary/10",
              index % 13 === 0 && "bg-background/80",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function Newsletter5({
  className,
  eyebrow = defaults.eyebrow,
  title = defaults.title,
  description = defaults.description,
  emailLabel = defaults.emailLabel,
  emailPlaceholder = defaults.emailPlaceholder,
  subscribeLabel = defaults.subscribeLabel,
  reassurance = defaults.reassurance,
  onSubscribe,
  onSubmit,
  ...props
}: Newsletter5Props) {
  const headingId = useId();
  const emailId = useId();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    const next = email.trim();
    onSubscribe?.(next);
    setEmail("");
  };

  return (
    <section
      data-slot="newsletter-5"
      aria-labelledby={headingId}
      className={cn(
        "flex items-center justify-center bg-background p-4 text-foreground sm:p-6 md:p-8",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-muted px-4 py-6 sm:px-8 lg:px-14",
          "shadow-[inset_0_10px_20px_10px_color-mix(in_oklab,var(--jk-background),transparent_30%),inset_0_-10px_20px_10px_color-mix(in_oklab,var(--jk-foreground),transparent_95%)]",
          "dark:shadow-[inset_0_-10px_20px_0_color-mix(in_oklab,var(--jk-foreground),transparent_90%),inset_0_10px_20px_0_color-mix(in_oklab,var(--jk-background),transparent_95%)]",
        )}
      >
        <BackgroundGrid />

        <div className="pointer-events-none relative z-10 grid min-h-96 grid-cols-1 gap-10 p-0 md:grid-cols-5 md:items-center">
          <div className="flex max-w-2xl flex-col justify-center gap-7 text-center md:col-span-3 md:text-left">
            <div className="space-y-2">
              <p className="mx-auto flex h-9 w-fit items-center gap-2 rounded-none bg-background/70 px-3 text-sm font-semibold text-foreground backdrop-blur-2xl md:mx-0">
                <SendIcon
                  aria-hidden="true"
                  className="size-5 text-primary"
                  strokeWidth={2}
                />
                {eyebrow}
              </p>

              <div className="space-y-4">
                <h2
                  id={headingId}
                  className="text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
                >
                  {title}
                </h2>
                <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>
            </div>

            <form
              className="pointer-events-auto mx-auto w-full max-w-xl space-y-3 md:mx-0"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor={emailId}>
                {emailLabel}
              </label>
              <div className="flex flex-col items-center gap-0 rounded-none bg-background/70 shadow-[0_1px_2px_color-mix(in_oklab,var(--jk-foreground),transparent_92%)] backdrop-blur-2xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-muted sm:flex-row sm:gap-2">
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={emailPlaceholder}
                  className="h-12 w-full rounded-none border-0 bg-transparent px-4 text-base text-foreground shadow-none outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className={cn(
                    "group mr-0 flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-none bg-primary px-5 text-sm font-semibold text-primary-foreground sm:mr-1 sm:w-auto",
                    "shadow-[0_0_4px_1px_color-mix(in_oklab,var(--jk-foreground),transparent_95%),inset_0_0_4px_1px_color-mix(in_oklab,var(--jk-background),transparent_55%),inset_0_1px_0_color-mix(in_oklab,var(--jk-background),transparent_65%)]",
                    "transition-transform duration-200 hover:brightness-110 active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted",
                  )}
                >
                  {subscribeLabel}
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    strokeWidth={2}
                  />
                </button>
              </div>

              <p className="flex items-start gap-2 text-left text-sm leading-relaxed text-muted-foreground">
                <CircleCheckIcon
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  strokeWidth={2}
                />
                <span>{reassurance}</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
