import type { Metadata, Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { MaxImage } from "./_components/MaxImage";
import { Sticker } from "./_components/Sticker";
import shared from "./style.module.css";

const notFoundSeo = {
  title: "Page not found — FULL VOLUME",
  description:
    "This page isn't playing. Head back to the FULL VOLUME home page, lineup, or tickets.",
} as const;

export const metadata: Metadata = {
  title: { absolute: notFoundSeo.title },
  description: notFoundSeo.description,
};

const notFoundCopy = {
  title: "Wrong stage.",
  body: "This page isn't playing. The rest of the weekend is still loud.",
  primary: { label: "Back to home", href: "/" },
  lineup: { label: "See the lineup", href: "/lineup" },
  tickets: { label: "Choose your ticket", href: "/tickets" },
  imageId: "max-404",
  imageAlt:
    "Paper collage of a tangerine speaker, unplugged, alone on an empty stage.",
} as const;

/*
 * This route only owns this file, so its styles ship as a hoisted, deduped
 * React <style> (same pattern as the other design-system apps' 404s).
 * Collage and stickers stay in the art column; copy sits on the plain page.
 * Every kinetic rule is keyed off html[data-motion="playing"].
 */
const notFoundStyles = `
.max-nf {
  display: grid;
  align-items: center;
  gap: clamp(2.25rem, 5vw, 4.5rem);
  min-height: min(70dvh, 46rem);
  padding-block: clamp(0.5rem, 3vw, 2.5rem);
}

.max-nf-art {
  position: relative;
  justify-self: start;
  width: min(100%, 21rem);
  padding: 1.1rem 1.25rem 1.5rem 0.75rem;
}

.max-nf-art::before {
  position: absolute;
  inset: 0.2rem 0.35rem 0.6rem 0;
  border: 2px solid var(--jk-foreground);
  border-radius: var(--jk-radius-surface);
  background-color: var(--max-lime);
  background-image: var(--max-halftone);
  background-size: 10px 10px;
  content: "";
  transform: rotate(3deg);
}

.max-nf-frame {
  position: relative;
  overflow: clip;
  border: 3px solid var(--jk-foreground);
  border-radius: var(--jk-radius-surface);
  background: var(--jk-card);
  box-shadow: 8px 8px 0 var(--max-pink);
  transform: rotate(-2deg);
}

.max-nf-sticker-a,
.max-nf-sticker-b,
.max-nf-sticker-c {
  position: absolute;
  z-index: 1;
}

.max-nf-sticker-a {
  top: -0.35rem;
  right: -0.15rem;
}

.max-nf-sticker-b {
  bottom: -0.25rem;
  left: -0.5rem;
}

.max-nf-sticker-c {
  right: 0.35rem;
  bottom: 0.2rem;
}

.max-nf-copy {
  display: grid;
  gap: clamp(1.1rem, 2vw, 1.5rem);
  min-width: 0;
}

.max-nf-copy > * {
  margin: 0;
}

.max-nf-title {
  font-size: clamp(3.5rem, 1.4rem + 9vw, 8.5rem);
  text-shadow: 0.05em 0.05em 0 var(--max-pink);
  overflow-wrap: anywhere;
}

.max-nf-body {
  max-width: 34ch;
}

.max-nf-actions {
  margin-top: 0.5rem;
}

.max-nf-more {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 0.75rem;
}

.max-nf-more a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
}

.max-nf-dot {
  font-weight: 900;
}

html[data-motion="playing"] .max-nf-frame {
  animation: max-nf-sway 7s ease-in-out infinite;
}

@keyframes max-nf-sway {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(-0.5deg) translateY(-4px);
  }
}

@media (min-width: 768px) {
  .max-nf {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }

  .max-nf-art {
    justify-self: center;
    width: min(100%, 32rem);
    padding: 1.75rem 2rem 2.25rem 1.25rem;
  }

  .max-nf-sticker-a {
    top: -0.5rem;
    right: -0.25rem;
  }

  .max-nf-sticker-b {
    bottom: -0.25rem;
    left: -0.75rem;
  }
}
`;

export default function NotFound() {
  const { lineup, tickets } = notFoundCopy;
  return (
    <>
      <style href="max-not-found" precedence="default">
        {notFoundStyles}
      </style>
      <section aria-labelledby="max-not-found-title" className="max-nf">
        <div className="max-nf-art">
          <div className="max-nf-frame">
            <MaxImage
              alt={notFoundCopy.imageAlt}
              id={notFoundCopy.imageId}
              priority
              ratio="1:1"
              sizes="(max-width: 767px) 21rem, 32rem"
            />
          </div>
          <Sticker
            className="max-nf-sticker-a"
            motion="spin"
            shape="burst"
            size="clamp(3.25rem, 7vw, 5.5rem)"
            tone="tangerine"
          />
          <Sticker
            className="max-nf-sticker-b"
            motion="drift"
            rotate={-14}
            shape="star"
            size="clamp(2.75rem, 5.5vw, 4.25rem)"
            tone="lime"
          />
          <Sticker
            className="max-nf-sticker-c"
            rotate={12}
            shape="squiggle"
            size="clamp(2.5rem, 4.5vw, 3.5rem)"
            tone="cobalt"
          />
        </div>

        <div className="max-nf-copy">
          <h1 className="jk-display max-nf-title" id="max-not-found-title">
            {notFoundCopy.title}
          </h1>
          <p className="jk-lead max-nf-body">{notFoundCopy.body}</p>
          <div className={cn(shared.buttonRow, "max-nf-actions")}>
            <Button asChild size="lg">
              <Link href={notFoundCopy.primary.href as Route}>
                {notFoundCopy.primary.label}
              </Link>
            </Button>
            <p className="max-nf-more">
              <Link className={shared.textLink} href={lineup.href as Route}>
                {lineup.label}
              </Link>
              <span aria-hidden="true" className="max-nf-dot">
                ·
              </span>
              <Link className={shared.textLink} href={tickets.href as Route}>
                {tickets.label}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
