// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { AgencySectionHeadingProps } from "./AgencySectionHeading.types";

function TitleWithEmphasis({
  title,
  emphasis,
}: {
  title: string;
  emphasis?: string;
}) {
  if (!emphasis || !title.includes(emphasis)) {
    return title;
  }

  const [before, ...rest] = title.split(emphasis);
  return (
    <>
      {before}
      <em className="bg-warning px-[0.08em] pb-1 font-semibold text-warning-foreground italic leading-[1.1]">
        {emphasis}
      </em>
      {rest.join(emphasis)}
    </>
  );
}

export function AgencySectionHeading({
  className,
  number = "05",
  label = "Contact",
  meta,
  title,
  emphasis,
  titleAs: TitleTag = "h2",
  ...props
}: AgencySectionHeadingProps) {
  const titleNode =
    typeof title === "string" ? (
      <TitleWithEmphasis title={title} emphasis={emphasis} />
    ) : (
      title
    );

  return (
    <div
      data-slot="agency-section-heading"
      className={cn("text-foreground", className)}
      {...props}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        <p>
          <span className="text-foreground">[{number}]</span>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{label}</span>
        </p>
        {meta ? <p className="text-muted-foreground">{meta}</p> : null}
      </div>
      {titleNode ? (
        <TitleTag className="mt-5 max-w-[18ch] font-[family-name:var(--jk-font-display)] text-4xl font-semibold tracking-tight text-balance text-foreground uppercase leading-[1.1] sm:text-6xl">
          {titleNode}
        </TitleTag>
      ) : null}
    </div>
  );
}
