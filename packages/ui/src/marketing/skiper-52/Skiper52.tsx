"use client";

import { useId, useState } from "react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { Skiper52Image, Skiper52Props } from "./Skiper52.types";

const DEFAULT_EYEBROW = "Hover expand";
const DEFAULT_HEADING = "Plates that open when you linger.";
const DEFAULT_DESCRIPTION =
  "Idle strips stay narrow. The one under the pointer grows so the photograph can be read, then the rest close back in.";

const DEFAULT_IMAGES: Skiper52Image[] = [
  {
    src: "/assets/462a1be29787cd8e.webp",
    alt: "Low oak lounge chair on a pale floor",
    code: "# 01",
  },
  {
    src: "/assets/6cc11e462a9aaded.webp",
    alt: "Arc floor lamp lighting a quiet corner",
    code: "# 02",
  },
  {
    src: "/assets/488fa5330da1224c.webp",
    alt: "Sculptural stone side table in a sunlit room",
    code: "# 03",
  },
  {
    src: "/assets/7cb36691e11ed9af.webp",
    alt: "Linen daybed against a plaster wall",
    code: "# 04",
  },
  {
    src: "/assets/4f6410f5452c0ba5.webp",
    alt: "Hand-thrown ceramic pendant light",
    code: "# 05",
  },
  {
    src: "/assets/97c532d558fa4fbc.webp",
    alt: "Concrete structure photographed from the ground",
    code: "# 06",
  },
  {
    src: "/assets/d3f9bde61c9a29e7.webp",
    alt: "Glass rooms along an empty daylight corridor",
    code: "# 07",
  },
];

function clampIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return Math.min(Math.max(0, index), length - 1);
}

export function Skiper52({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  images = DEFAULT_IMAGES,
  initialActive = 1,
  ...props
}: Skiper52Props) {
  const headingId = useId();
  const groupId = useId();
  const [active, setActive] = useState(() =>
    clampIndex(initialActive, images.length),
  );

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="skiper-52"
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
            id={headingId}
          >
            {heading}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </header>
        <div
          aria-labelledby={headingId}
          className="flex h-[20rem] w-full items-stretch justify-center gap-2 sm:h-96 sm:gap-3"
          role="radiogroup"
        >
          {images.map((image, index) => {
            const selected = index === clampIndex(active, images.length);
            const optionId = `${groupId}-${index}`;
            return (
              <button
                aria-checked={selected}
                className={cn(
                  "relative isolate overflow-hidden rounded-[calc(var(--radius)+0.85rem)] border border-border bg-muted text-left outline-none",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  "transition-[flex-grow,flex-basis,min-width] duration-300 ease-in-out motion-reduce:transition-none",
                  selected
                    ? "min-w-[10.5rem] flex-[6_1_14rem] sm:min-w-[18rem] sm:flex-[8_1_22rem]"
                    : "min-w-[2.5rem] flex-[0_0_2.75rem] sm:min-w-[4.5rem] sm:flex-[0_0_5rem]",
                )}
                id={optionId}
                key={`${image.src}-${image.code}`}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                role="radio"
                type="button"
              >
                <img
                  alt={image.alt}
                  className="absolute inset-0 size-full object-cover"
                  src={image.src}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/55 to-transparent",
                    "transition-opacity duration-300 ease-in-out motion-reduce:transition-none",
                    selected ? "opacity-100" : "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "pointer-events-none absolute right-3 bottom-3 font-mono text-xs tracking-wide text-background sm:right-4 sm:bottom-4 sm:text-sm",
                    "transition-opacity duration-300 ease-in-out motion-reduce:transition-none",
                    selected ? "opacity-100" : "opacity-0",
                  )}
                >
                  {image.code}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
