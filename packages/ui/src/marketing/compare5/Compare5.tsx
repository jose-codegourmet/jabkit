import { useId } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  Compare5Action,
  Compare5Option,
  Compare5Props,
} from "./Compare5.types";

const defaultLeft: Compare5Option = {
  title: "The old stack",
  description:
    "Status lives in inboxes, slides, and a spreadsheet someone last touched on Thursday.",
  imageSrc: "/assets/1bf986d4f35769a9.webp",
  imageAlt: "Paper notes and a crowded analog desk",
  action: { label: "Keep the current process", href: "#legacy" },
  accent: true,
};

const defaultRight: Compare5Option = {
  title: "The new stack",
  description:
    "One canvas for the brief, the handoff, and the record — so the work stays in view.",
  imageSrc: "/assets/1a2d35c6581e840f.webp",
  imageAlt: "Bright open studio with a long communal table",
  action: { label: "See the new way", href: "#modern" },
};

const defaults = {
  title: "Old vs New",
  description:
    "Two paths through the same operation. Pick the one that still feels like work — or the one that finally reads as a system.",
  dividerLabel: "OR",
} as const;

function OptionAction({ action }: { action: Compare5Action }) {
  const className =
    "border border-foreground/45 bg-transparent text-foreground shadow-none hover:bg-foreground/10";
  if (action.href) {
    return (
      <Button variant="ghost" size="md" className={className} asChild>
        <a href={action.href}>{action.label}</a>
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
      {action.label}
    </Button>
  );
}

function CompareCard({ option }: { option: Compare5Option }) {
  return (
    <article
      className={cn(
        "relative isolate min-h-[28rem] overflow-hidden rounded-[calc(var(--radius)+0.45rem)] border sm:min-h-[34rem] lg:min-h-[38rem]",
        option.accent
          ? "border-primary/70 shadow-[0_28px_56px_-36px_color-mix(in_oklab,var(--jk-primary),transparent_35%)] ring-1 ring-primary/35"
          : "border-border shadow-[0_28px_56px_-36px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)]",
      )}
    >
      <img
        src={option.imageSrc}
        alt={option.imageAlt}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="dark absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--jk-background),transparent_4%)_0%,color-mix(in_oklab,var(--jk-background),transparent_28%)_38%,transparent_72%)] backdrop-blur-[1.5px] [mask-image:linear-gradient(to_top,var(--jk-foreground)_42%,transparent_88%)]"
      />
      <div className="dark absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-3 px-6 py-7 text-foreground sm:px-8 sm:py-9">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
          {option.title}
        </h3>
        <p className="max-w-md text-sm leading-6 text-foreground/80 sm:text-base sm:leading-7">
          {option.description}
        </p>
        <OptionAction action={option.action} />
      </div>
    </article>
  );
}

export function Compare5({
  className,
  title = defaults.title,
  description = defaults.description,
  dividerLabel = defaults.dividerLabel,
  left = defaultLeft,
  right = defaultRight,
  ...props
}: Compare5Props) {
  const headingId = useId();

  return (
    <section
      data-slot="compare5"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id={headingId}
            className="text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </header>

        <div className="relative mt-10 sm:mt-14">
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
            <CompareCard option={left} />
            <CompareCard option={right} />
          </div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <span className="grid size-14 place-items-center rounded-full border border-border bg-background text-xs font-semibold tracking-[0.18em] text-foreground uppercase shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--jk-foreground),transparent_40%)] sm:size-16 sm:text-sm">
              {dividerLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
