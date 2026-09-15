"use client";

import { useId, useState } from "react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { Skiper52Image, Skiper52Props } from "./Skiper52.types";

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
  {
    src: "/assets/46d405deede5a407.webp",
    alt: "Turned wood stool in a quiet studio",
    code: "# 08",
  },
  {
    src: "/assets/e40131b7fd7bf05b.webp",
    alt: "Paper lantern hanging over a work table",
    code: "# 09",
  },
];

function clampIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return Math.min(Math.max(0, index), length - 1);
}

export function Skiper52({
  className,
  eyebrow,
  heading,
  description,
  images = DEFAULT_IMAGES,
  initialActive = 1,
  ...props
}: Skiper52Props) {
  const headingId = useId();
  const groupId = useId();
  const [active, setActive] = useState(() =>
    clampIndex(initialActive, images.length),
  );
  const hasCopy = Boolean(eyebrow || heading || description);

  return (
    <section
      aria-labelledby={heading ? headingId : undefined}
      className={cn(
        "flex h-full min-h-[36rem] w-full flex-col items-center justify-center overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="skiper-52"
      {...props}
    >
      <style href="jk-skiper-52" precedence="default">{`
        @keyframes jk-skiper-52-enter {
          from { opacity: 0; transform: translateY(1.25rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .jk-skiper-52-enter {
          animation: jk-skiper-52-enter 0.3s ease both;
          animation-delay: 0.5s;
        }
        .jk-skiper-52-fade {
          animation: jk-skiper-52-enter 0.3s ease both;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-skiper-52-enter,
          .jk-skiper-52-fade { animation: none; }
        }
      `}</style>
      {hasCopy ? (
        <header className="mx-auto w-full max-w-6xl px-5 pb-8 text-center">
          {eyebrow ? (
            <p className="mb-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          {heading ? (
            <h2
              className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl"
              id={headingId}
            >
              {heading}
            </h2>
          ) : null}
          {description ? (
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
      ) : null}
      <div className="jk-skiper-52-enter relative w-full max-w-6xl px-5">
        <div
          aria-label={heading || "Hover expand gallery"}
          className="jk-skiper-52-fade flex w-full items-center justify-center gap-1"
          role="radiogroup"
        >
          {images.map((image, index) => {
            const selected = index === clampIndex(active, images.length);
            return (
              <button
                aria-checked={selected}
                className={cn(
                  "relative h-96 shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-muted text-left outline-none",
                  "transition-[width] duration-300 ease-in-out motion-reduce:transition-none",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  selected ? "w-96" : "w-20",
                )}
                id={`${groupId}-${index}`}
                key={`${image.src}-${image.code}-${index}`}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                role="radio"
                type="button"
              >
                <img
                  alt={image.alt}
                  className="size-full object-cover"
                  src={image.src}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent",
                    "transition-opacity duration-300 ease-in-out motion-reduce:transition-none",
                    selected ? "opacity-100" : "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "pointer-events-none absolute inset-0 flex flex-col items-end justify-end p-4",
                    "transition-opacity duration-300 ease-in-out motion-reduce:transition-none",
                    selected ? "opacity-100" : "opacity-0",
                  )}
                >
                  <span className="text-left text-xs text-background/50">
                    {image.code}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
