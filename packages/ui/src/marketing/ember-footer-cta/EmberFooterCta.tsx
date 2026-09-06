"use client";

import { type FormEvent, useId } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { EmberFooterCtaProps } from "./EmberFooterCta.types";

const defaults = {
  eyebrow: "Last call",
  title: "Join the waitlist.",
  description: "Leave a work email. We will hold your desk.",
  emailLabel: "Work email",
  emailPlaceholder: "you@studio.work",
  submitLabel: "Get early access",
  brand: "Harbor, est. 2026",
  links: [
    { label: "Changelog", href: "#changelog" },
    { label: "Twitter", href: "#twitter" },
    { label: "GitHub", href: "#github" },
  ],
  footnote: "No spam, one launch email",
  showEmber: true,
};

const SPARK_TONES = [
  "color-mix(in oklab, var(--jk-primary) 88%, transparent)",
  "color-mix(in oklab, var(--jk-chart-4) 82%, transparent)",
  "color-mix(in oklab, var(--jk-warning) 78%, transparent)",
] as const;

type Spark = {
  id: string;
  left: string;
  bottom: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
  tone: (typeof SPARK_TONES)[number];
};

function buildSparks(count: number): Spark[] {
  const sparks: Spark[] = [];
  for (let index = 0; index < count; index++) {
    const left = (index * 137.508) % 100;
    const dist = Math.abs(left - 50) / 50;
    const ridge = (1 - dist * dist) * 42 + 4;
    const jitter = ((index * 53) % 17) / 17;
    const bottom = jitter * ridge;
    const size = 2 + (index % 5);
    sparks.push({
      id: `${left.toFixed(2)}-${bottom.toFixed(2)}-${size}-${index}`,
      left: `${left.toFixed(2)}%`,
      bottom: `${bottom.toFixed(2)}%`,
      size,
      delay: `${((index * 0.17) % 3.6).toFixed(2)}s`,
      duration: `${(3.4 + (index % 5) * 0.45).toFixed(2)}s`,
      opacity: 0.35 + ((index * 13) % 50) / 100,
      tone: SPARK_TONES[index % SPARK_TONES.length],
    });
  }
  return sparks;
}

const SPARKS = buildSparks(72);

function EmberBed() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] overflow-hidden"
    >
      <div className="absolute inset-x-[-12%] bottom-[-28%] h-[90%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--jk-primary)_42%,transparent),transparent_68%)] blur-2xl" />
      <div className="absolute inset-x-[8%] bottom-[-22%] h-[70%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--jk-chart-4)_36%,transparent),transparent_72%)] blur-xl" />
      <div className="absolute inset-x-[22%] bottom-[-18%] h-[48%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--jk-warning)_22%,transparent),transparent_70%)] blur-lg" />
      {SPARKS.map((spark) => (
        <span
          key={spark.id}
          className="jk-ember-footer-cta-spark absolute rounded-[1px]"
          style={{
            left: spark.left,
            bottom: spark.bottom,
            width: spark.size,
            height: spark.size,
            opacity: spark.opacity,
            backgroundColor: spark.tone,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
            boxShadow: `0 0 ${spark.size * 2}px ${spark.tone}`,
          }}
        />
      ))}
    </div>
  );
}

export function EmberFooterCta({
  className,
  eyebrow = defaults.eyebrow,
  title = defaults.title,
  description = defaults.description,
  emailLabel = defaults.emailLabel,
  emailPlaceholder = defaults.emailPlaceholder,
  submitLabel = defaults.submitLabel,
  onSubscribe,
  onSubmit,
  brand = defaults.brand,
  links = defaults.links,
  footnote = defaults.footnote,
  showEmber = defaults.showEmber,
  ...props
}: EmberFooterCtaProps) {
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
      data-slot="ember-footer-cta"
      aria-labelledby={headingId}
      className={cn(
        "relative isolate overflow-hidden bg-background text-foreground",
        className,
      )}
      {...props}
    >
      <style href="jk-ember-footer-cta" precedence="default">{`
        @keyframes jk-ember-footer-cta-rise {
          0%, 100% { transform: translateY(0); opacity: 0.35; }
          50% { transform: translateY(-10px); opacity: 0.9; }
        }
        .jk-ember-footer-cta-spark {
          animation: jk-ember-footer-cta-rise 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-ember-footer-cta-spark { animation: none; }
        }
      `}</style>
      {showEmber ? <EmberBed /> : null}

      <div className="relative mx-auto flex min-h-[28rem] max-w-5xl flex-col justify-between gap-16 px-5 pt-20 pb-8 sm:px-8 sm:pt-24 sm:pb-10 lg:px-10">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
          {eyebrow ? (
            <p className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="mt-4 font-serif text-4xl leading-[1.12] font-normal tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}

          <form
            className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
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
                className="h-12 rounded-[--radius] border-input bg-card px-4 text-sm md:text-sm"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 shrink-0 rounded-[--radius] border-transparent bg-[linear-gradient(135deg,var(--jk-warning),var(--jk-destructive))] text-destructive-foreground shadow-[0_16px_32px_-20px_color-mix(in_oklab,var(--jk-destructive),transparent_25%)] hover:brightness-110"
            >
              {submitLabel}
            </Button>
          </form>
        </div>

        <div className="grid gap-4 border-t border-border/60 pt-6 text-xs tracking-wide text-muted-foreground sm:grid-cols-3 sm:items-center">
          <p className="text-center sm:text-left">{brand}</p>
          {links.length > 0 ? (
            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              {links.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : (
            <span />
          )}
          <p className="text-center sm:text-right">{footnote}</p>
        </div>
      </div>
    </section>
  );
}
