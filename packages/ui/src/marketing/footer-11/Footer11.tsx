"use client";

import { ArrowRightIcon, ArrowUpIcon } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/cn";
import type { Footer11NavLink, Footer11Props } from "./Footer11.types";

const defaultNavLinks: Footer11NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const defaults = {
  badgeText: "Loved by Creators",
  heading:
    "Want to collaborate with us, explore our tools or just curious to know more?",
  contactLabel: "Reach out at:",
  contactEmail: "hello@northline.studio",
  contactEmailHref: "mailto:hello@northline.studio",
  brandName: "northline.io",
} as const;

const plate =
  "bg-[color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_4%)] dark:bg-[color-mix(in_oklab,var(--jk-background),var(--jk-foreground)_3%)]";
const ink = "text-background dark:text-foreground";
const inkSoft = "text-background/50 dark:text-foreground/50";
const inkStrong = "text-background/90 dark:text-foreground/90";
const markFill = "fill-background/20 dark:fill-foreground/20";
const markInk = "text-background/20 dark:text-foreground/20";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function DefaultBrandMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      className={className}
      fill="currentColor"
    >
      <rect x="10" y="10" width="60" height="60" rx="20" />
      <path d="M28 22h10v36H28z" opacity="0.35" />
    </svg>
  );
}

function scrollPageToTop() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export function Footer11({
  className,
  badgeText = defaults.badgeText,
  heading = defaults.heading,
  contactLabel = defaults.contactLabel,
  contactEmail = defaults.contactEmail,
  contactEmailHref = defaults.contactEmailHref,
  navLinks = defaultNavLinks,
  brandName = defaults.brandName,
  brandLogo,
  onScrollToTop,
  ...props
}: Footer11Props) {
  const headingId = useId();
  const wordmarkWidth = Math.max(brandName.length * 90, 400);

  const handleScrollToTop = (
    event: Parameters<NonNullable<Footer11Props["onScrollToTop"]>>[0],
  ) => {
    if (onScrollToTop) {
      onScrollToTop(event);
      return;
    }
    scrollPageToTop();
  };

  return (
    <footer
      data-slot="footer-11"
      className={cn("w-full overflow-hidden font-sans antialiased", className)}
      {...props}
    >
      <style href="jk-footer-11" precedence="default">{`
        .jk-footer11-arrow {
          transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .jk-footer11-scroll:hover .jk-footer11-arrow,
        .jk-footer11-scroll:focus-visible .jk-footer11-arrow {
          transform: translateY(-2px);
        }
        .jk-footer11-mail:hover .jk-footer11-arrow,
        .jk-footer11-mail:focus-visible .jk-footer11-arrow {
          transform: translateX(4px);
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-footer11-arrow {
            transition: none;
          }
          .jk-footer11-scroll:hover .jk-footer11-arrow,
          .jk-footer11-scroll:focus-visible .jk-footer11-arrow,
          .jk-footer11-mail:hover .jk-footer11-arrow,
          .jk-footer11-mail:focus-visible .jk-footer11-arrow {
            transform: none;
          }
        }
      `}</style>

      <div
        className={cn(
          "relative px-6 pt-8 pb-10 sm:px-10 md:px-16 lg:px-20",
          plate,
        )}
      >
        <div className="flex items-center justify-between gap-6">
          <p
            className={cn(
              "inline-flex items-center gap-2 text-base font-light",
              ink,
            )}
          >
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-primary"
            />
            <span>{badgeText}</span>
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className={cn(
              "jk-footer11-scroll inline-flex items-center gap-1.5 rounded-none text-base font-light tracking-wide",
              inkStrong,
              "transition-colors duration-200 hover:opacity-90",
              focusRing,
            )}
          >
            <span>Scroll to Top</span>
            <ArrowUpIcon
              aria-hidden="true"
              className="jk-footer11-arrow size-4"
            />
          </button>
        </div>

        <div className="mt-8 max-w-lg sm:mt-10 md:mt-12">
          <h2
            id={headingId}
            className={cn(
              "text-2xl leading-snug font-light tracking-tight sm:text-3xl md:text-4xl",
              ink,
            )}
          >
            {heading}
          </h2>
        </div>

        <div className="mt-20 flex flex-col gap-8 sm:mt-24 md:mt-28 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className={cn("text-lg font-light tracking-wide", inkSoft)}>
              {contactLabel}
            </p>
            <a
              href={contactEmailHref}
              className={cn(
                "jk-footer11-mail inline-flex items-center gap-2 rounded-none text-2xl font-medium",
                inkStrong,
                "transition-colors duration-200 hover:opacity-100",
                focusRing,
              )}
            >
              <span>{contactEmail}</span>
              <ArrowRightIcon
                aria-hidden="true"
                className="jk-footer11-arrow size-6"
              />
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap items-center gap-6 p-0 sm:gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <a
                    href={link.href}
                    className={cn(
                      "rounded-none text-base font-medium",
                      inkStrong,
                      "transition-colors duration-200 hover:opacity-90",
                      focusRing,
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={cn(
          "relative px-6 pt-10 pb-12 sm:px-10 md:px-16 lg:px-20 lg:pt-14 lg:pb-16",
          plate,
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 h-full w-3/4 blur-lg sm:w-2/3"
        >
          <div className="absolute right-0 bottom-0 h-full w-full bg-gradient-to-tl from-primary/80 via-primary/30 to-transparent" />
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-6 overflow-hidden sm:flex-row sm:gap-8">
          <div className={cn("hidden shrink-0 sm:block", markInk)}>
            {brandLogo ?? <DefaultBrandMark className="size-20 lg:size-32" />}
          </div>

          <svg
            className="h-auto w-full flex-1 select-none"
            viewBox={`0 0 ${wordmarkWidth} 100`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={brandName}
          >
            <title>{brandName}</title>
            <text
              x="0%"
              y="100%"
              dominantBaseline="alphabetic"
              textAnchor="start"
              textLength="90%"
              lengthAdjust="spacing"
              className={cn("font-sans font-bold tracking-tight", markFill)}
              fontSize="140"
            >
              {brandName}
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
