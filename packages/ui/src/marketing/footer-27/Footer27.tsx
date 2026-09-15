"use client";

import { ArrowRightIcon } from "lucide-react";
import { type CSSProperties, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type {
  Footer27LinkColumn,
  Footer27NavLink,
  Footer27Props,
  Footer27SocialKind,
  Footer27SocialLink,
} from "./Footer27.types";

const defaultLinkColumns: Footer27LinkColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Team signals", href: "#signals" },
      { label: "Work maps", href: "#maps" },
      { label: "Automation", href: "#automation" },
      { label: "Playbooks", href: "#playbooks" },
      { label: "API", href: "#api" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Getting started", href: "#start" },
      { label: "API reference", href: "#reference" },
      { label: "Guides", href: "#guides" },
      { label: "Patterns", href: "#patterns" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Journal", href: "#journal" },
      { label: "Glossary", href: "#glossary" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Fair use", href: "#fair-use" },
      { label: "Terms", href: "#terms" },
      { label: "Subprocessors", href: "#subprocessors" },
      { label: "Privacy policy", href: "#privacy" },
    ],
  },
];

const defaultSocialLinks: Footer27SocialLink[] = [
  { label: "Facebook", href: "#facebook", kind: "facebook" },
  { label: "X", href: "#x", kind: "x" },
  { label: "Instagram", href: "#instagram", kind: "instagram" },
  { label: "LinkedIn", href: "#linkedin", kind: "linkedin" },
];

const defaultLegalLinks: Footer27NavLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
];

const defaults = {
  heroSrc: "/assets/21ee8ee30ffbdcb1.webp",
  heroAlt: "A mountain ridge at dusk with pine silhouettes along the valley",
  headline: "The next quarter\nis adaptive.",
  description:
    "Velora helps distributed teams spot patterns and tighten work systems without extra process.",
  primaryCta: { label: "Contact Us", href: "#contact" },
  brandName: "Velora",
  brandHref: "#home",
  tagline: "Crafting work systems that stay useful after the first quarter.",
  connectCta: { label: "Let's Connect", href: "#connect" },
  socialTitle: "Stay Connected",
  socialDescription: "Follow along for updates, notes, and the next release.",
  copyright: "© 2026 Velora, Inc. All rights reserved.",
  wordmark: "VELORA",
} as const;

const plate =
  "bg-[color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_8%)] dark:bg-[color-mix(in_oklab,var(--jk-background),var(--jk-foreground)_4%)]";
const ink = "text-background dark:text-foreground";
const inkSoft = "text-background/65 dark:text-foreground/65";
const inkMute = "text-background/45 dark:text-foreground/45";
const inkLegal = "text-background/50 dark:text-foreground/50";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function DefaultBrandMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 36 36"
      className={className}
      fill="currentColor"
    >
      <rect x="3" y="3" width="30" height="30" rx="10" />
      <path d="M12 10h5.2v16H12z" opacity="0.35" />
      <circle cx="23.5" cy="18" r="4.2" opacity="0.55" />
    </svg>
  );
}

function SocialGlyph({ kind }: { kind: Footer27SocialKind }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "size-[18px]",
    fill: "currentColor",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  if (kind === "facebook") {
    return (
      <svg {...common}>
        <title>Facebook</title>
        <path d="M14.5 9H17V6h-2.5C12 6 11 7.3 11 9.2V11H9v3h2v7h3v-7h2.4l.6-3H14v-1.3c0-.5.2-.7.5-.7Z" />
      </svg>
    );
  }
  if (kind === "x") {
    return (
      <svg {...common}>
        <title>X</title>
        <path d="M14.7 10.4 21.2 3h-1.5l-5.7 6.4L9.5 3H3.2l6.9 10.1L3.2 21h1.5l6-6.8 4.8 6.8h6.3L14.7 10.4Zm-2.1 2.4-.7-1-5.6-7.8h2.4l4.5 6.3.7 1 5.9 8.2h-2.4l-4.8-6.7Z" />
      </svg>
    );
  }
  if (kind === "instagram") {
    return (
      <svg {...common}>
        <title>Instagram</title>
        <path d="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8A4.5 4.5 0 0 1 16 20.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm0 1.6A2.9 2.9 0 0 0 5.1 8v8A2.9 2.9 0 0 0 8 18.9h8A2.9 2.9 0 0 0 18.9 16V8A2.9 2.9 0 0 0 16 5.1H8Zm8.4 1.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <title>LinkedIn</title>
      <path d="M6.3 9.2H3.6V20h2.7V9.2ZM4.95 4A1.55 1.55 0 1 0 5 7.1 1.55 1.55 0 0 0 4.95 4ZM20.4 20h-2.68v-5.5c0-1.55-.53-2.6-1.86-2.6-1.01 0-1.62.68-1.88 1.34-.1.24-.12.57-.12.9V20H11.2s.04-9.7 0-10.8h2.67v1.53c.36-.55 1-1.33 2.43-1.33 1.77 0 3.1 1.16 3.1 3.65V20Z" />
    </svg>
  );
}

function useOnceInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Footer27({
  className,
  heroSrc = defaults.heroSrc,
  heroAlt = defaults.heroAlt,
  headline = defaults.headline,
  description = defaults.description,
  primaryCta = defaults.primaryCta,
  brandName = defaults.brandName,
  brandHref = defaults.brandHref,
  brandLogo,
  tagline = defaults.tagline,
  connectCta = defaults.connectCta,
  linkColumns = defaultLinkColumns,
  socialTitle = defaults.socialTitle,
  socialDescription = defaults.socialDescription,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  copyright = defaults.copyright,
  wordmark = defaults.wordmark,
  ...props
}: Footer27Props) {
  const markGradientId = useId().replace(/:/g, "");
  const wordmarkWidth = Math.max(wordmark.length * 92, 520);
  const { ref, inView } = useOnceInView<HTMLElement>(0.08);

  return (
    <footer
      ref={ref}
      data-slot="footer-27"
      className={cn(
        "jk-footer27 relative w-full overflow-hidden font-sans antialiased",
        plate,
        ink,
        inView && "jk-footer27-in",
        className,
      )}
      {...props}
    >
      <style href="jk-footer-27" precedence="default">{`
        .jk-footer27-veil {
          background-image: linear-gradient(
            180deg,
            transparent 40%,
            color-mix(in oklab, var(--jk-foreground) 60%, transparent) 70%,
            color-mix(in oklab, var(--jk-foreground) 92%, var(--jk-background) 8%) 100%
          );
        }
        .dark .jk-footer27-veil {
          background-image: linear-gradient(
            180deg,
            transparent 40%,
            color-mix(in oklab, var(--jk-background) 60%, transparent) 70%,
            color-mix(in oklab, var(--jk-background) 96%, var(--jk-foreground) 4%) 100%
          );
        }
        .jk-footer27-hero {
          opacity: 0;
          transform: scale(1.05);
        }
        .jk-footer27-rise {
          opacity: 0;
          transform: translateY(18px);
          filter: blur(4px);
        }
        .jk-footer27-link {
          opacity: 0;
          transform: translateX(-8px);
          filter: blur(4px);
        }
        .jk-footer27-fade {
          opacity: 0;
        }
        .jk-footer27-slam {
          opacity: 0;
          transform: translateY(80px);
        }
        .jk-footer27-in .jk-footer27-hero {
          animation: jk-footer27-hero 1.3s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-footer27-in .jk-footer27-rise {
          animation: jk-footer27-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--jk-footer27-delay, 50ms);
        }
        .jk-footer27-in .jk-footer27-link {
          animation: jk-footer27-link 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--jk-footer27-delay, 0ms);
        }
        .jk-footer27-in .jk-footer27-fade {
          animation: jk-footer27-fade 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .jk-footer27-in .jk-footer27-slam {
          animation: jk-footer27-slam 1.05s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes jk-footer27-hero {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes jk-footer27-rise {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes jk-footer27-link {
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }
        @keyframes jk-footer27-fade {
          to { opacity: 1; }
        }
        @keyframes jk-footer27-slam {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-footer27-hero,
          .jk-footer27-rise,
          .jk-footer27-link,
          .jk-footer27-fade,
          .jk-footer27-slam,
          .jk-footer27-in .jk-footer27-hero,
          .jk-footer27-in .jk-footer27-rise,
          .jk-footer27-in .jk-footer27-link,
          .jk-footer27-in .jk-footer27-fade,
          .jk-footer27-in .jk-footer27-slam {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }
      `}</style>

      <div className="relative w-full">
        <img
          src={heroSrc}
          alt={heroAlt}
          className="jk-footer27-hero h-[300px] w-full object-cover object-center outline outline-1 -outline-offset-1 outline-background/10 sm:h-[360px] md:h-[420px] lg:h-[500px] dark:outline-foreground/10"
        />
        <div className="jk-footer27-veil pointer-events-none absolute inset-0" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16">
          <h2
            className={cn(
              "jk-footer27-rise max-w-xs text-3xl leading-[1.15] font-semibold tracking-[-0.02em] text-balance whitespace-pre-line sm:max-w-sm sm:text-4xl md:max-w-md md:text-5xl",
              ink,
            )}
            style={{ "--jk-footer27-delay": "80ms" } as CSSProperties}
          >
            {headline}
          </h2>
          <p
            className={cn(
              "jk-footer27-rise mt-3 max-w-[270px] text-sm leading-relaxed text-pretty sm:text-[15px]",
              inkSoft,
            )}
            style={{ "--jk-footer27-delay": "180ms" } as CSSProperties}
          >
            {description}
          </p>
          <div
            className="jk-footer27-rise mt-5"
            style={{ "--jk-footer27-delay": "280ms" } as CSSProperties}
          >
            <a
              href={primaryCta.href}
              className={cn(
                "group inline-flex items-center gap-2.5 rounded-full bg-background py-1.5 pr-1.5 pl-5 text-sm font-medium text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-background)_20%,transparent)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-background/90 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-background)_40%,transparent)] active:scale-[0.96] dark:bg-foreground dark:text-background dark:shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-foreground)_20%,transparent)] dark:hover:bg-foreground/90",
                "motion-reduce:transition-none motion-reduce:active:scale-100",
                focusRing,
              )}
            >
              {primaryCta.label}
              <span className="flex size-7 items-center justify-center rounded-full bg-foreground/10 transition-transform duration-200 group-hover:translate-x-0.5 dark:bg-background/10 motion-reduce:group-hover:translate-x-0">
                <ArrowRightIcon aria-hidden="true" className="size-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 pt-10 pb-0 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div
            className="jk-footer27-rise flex flex-col gap-5 sm:col-span-2 lg:col-span-3"
            style={{ "--jk-footer27-delay": "80ms" } as CSSProperties}
          >
            <a
              href={brandHref}
              className={cn(
                "inline-flex items-center gap-2.5",
                ink,
                "transition-opacity duration-200 hover:opacity-85",
                focusRing,
              )}
              aria-label={`${brandName} home`}
            >
              <span className="shrink-0">
                {brandLogo ?? <DefaultBrandMark className="size-9" />}
              </span>
              <span className="text-lg tracking-[0.05em] uppercase select-none">
                {brandName}
              </span>
            </a>
            <p
              className={cn(
                "max-w-[210px] text-[13px] leading-relaxed text-pretty",
                inkMute,
              )}
            >
              {tagline}
            </p>
            <a
              href={connectCta.href}
              className={cn(
                "group inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 text-[13px] font-medium",
                ink,
                "shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-background)_20%,transparent)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-background/5 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-background)_35%,transparent)] active:scale-[0.96] dark:shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-foreground)_20%,transparent)] dark:hover:bg-foreground/5",
                "motion-reduce:transition-none motion-reduce:active:scale-100",
                focusRing,
              )}
            >
              {connectCta.label}
              <ArrowRightIcon
                aria-hidden="true"
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
              />
            </a>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-6 lg:ml-8"
          >
            {linkColumns.map((column, columnIndex) => (
              <div
                key={column.title}
                className="jk-footer27-rise flex flex-col gap-4"
                style={
                  {
                    "--jk-footer27-delay": `${160 + columnIndex * 80}ms`,
                  } as CSSProperties
                }
              >
                <h3
                  className={cn(
                    "text-sm font-semibold tracking-[0.1em] text-balance uppercase",
                    ink,
                  )}
                >
                  {column.title}
                </h3>
                <ul className="flex list-none flex-col gap-[10px] p-0">
                  {column.links.map((link, linkIndex) => (
                    <li
                      key={`${column.title}-${link.label}`}
                      className="jk-footer27-link"
                      style={
                        {
                          "--jk-footer27-delay": `${280 + columnIndex * 80 + linkIndex * 35}ms`,
                        } as CSSProperties
                      }
                    >
                      <a
                        href={link.href}
                        className={cn(
                          "inline-block text-[13px] leading-snug text-pretty",
                          inkMute,
                          "transition-colors duration-150 hover:text-background dark:hover:text-foreground",
                          focusRing,
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div
            className="jk-footer27-rise flex flex-col gap-4 lg:col-span-3"
            style={{ "--jk-footer27-delay": "360ms" } as CSSProperties}
          >
            <h3 className={cn("text-xl font-semibold text-balance", ink)}>
              {socialTitle}
            </h3>
            <p
              className={cn(
                "max-w-[220px] text-[13px] leading-relaxed text-pretty",
                inkMute,
              )}
            >
              {socialDescription}
            </p>
            <ul
              className="flex items-center gap-2 p-0"
              aria-label="Social links"
            >
              {socialLinks.map((link, index) => (
                <li
                  key={link.label}
                  className="jk-footer27-link"
                  style={
                    {
                      "--jk-footer27-delay": `${420 + index * 45}ms`,
                    } as CSSProperties
                  }
                >
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full bg-background/5",
                      inkMute,
                      "shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-background)_8%,transparent)] transition-[background-color,color,box-shadow,transform] duration-150 hover:bg-background/10 hover:text-background hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-background)_15%,transparent)] active:scale-[0.96] dark:bg-foreground/5 dark:shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-foreground)_8%,transparent)] dark:hover:bg-foreground/10 dark:hover:text-foreground",
                      "motion-reduce:transition-none motion-reduce:active:scale-100",
                      focusRing,
                    )}
                  >
                    {link.icon ??
                      (link.kind ? (
                        <SocialGlyph kind={link.kind} />
                      ) : (
                        link.label
                      ))}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={cn(
            "jk-footer27-fade mt-10 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-5 pb-6 text-[13px] sm:flex-row sm:items-center dark:border-foreground/10",
            inkLegal,
          )}
        >
          <p className="leading-none tabular-nums">{copyright}</p>
          <ul className="flex flex-wrap items-center gap-5 leading-none p-0">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "transition-colors duration-150 hover:text-background/80 dark:hover:text-foreground/80",
                    focusRing,
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative w-full overflow-hidden" aria-hidden="true">
        <div className="jk-footer27-slam flex w-full items-end select-none">
          <div className="shrink-0 self-end px-4 pb-0 sm:px-6 lg:px-8">
            {brandLogo ?? (
              <DefaultBrandMark className="h-[90px] w-auto text-muted-foreground sm:h-[120px] lg:h-[160px] xl:h-[180px]" />
            )}
          </div>
          <div className="min-w-0 flex-1 overflow-hidden">
            <svg
              aria-hidden="true"
              className="h-auto w-full"
              viewBox={`0 0 ${wordmarkWidth} 170`}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id={markGradientId}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop
                    offset="0%"
                    stopColor="color-mix(in oklab, var(--jk-muted-foreground) 80%, var(--jk-foreground))"
                    stopOpacity="0.9"
                  />
                  <stop
                    offset="100%"
                    stopColor="color-mix(in oklab, var(--jk-foreground) 70%, var(--jk-background))"
                    stopOpacity="0.7"
                  />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="90%"
                dominantBaseline="auto"
                textAnchor="middle"
                textLength={wordmarkWidth}
                lengthAdjust="spacingAndGlyphs"
                fontSize="175"
                fontWeight="700"
                letterSpacing="-0.025em"
                fill={`url(#${markGradientId})`}
                className="font-sans"
              >
                {wordmark}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
