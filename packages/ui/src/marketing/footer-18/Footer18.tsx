"use client";

import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import {
  type CSSProperties,
  type FormEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import type {
  Footer18LinkColumn,
  Footer18NavLink,
  Footer18Props,
} from "./Footer18.types";

const defaultFeatureColumn: Footer18LinkColumn = {
  title: "Features",
  links: [
    { label: "Accounts payable", href: "#payable" },
    { label: "Approval workflows", href: "#approvals" },
    { label: "Bulk payments", href: "#bulk" },
    { label: "Global receivables", href: "#receivables" },
    { label: "Currency conversions", href: "#currency" },
    { label: "Corporate cards", href: "#cards" },
    { label: "Integrations", href: "#integrations" },
  ],
};

const defaultReciteColumn: Footer18LinkColumn = {
  title: "Recites",
  links: [
    { label: "Journal", href: "#journal" },
    { label: "Masterclass", href: "#masterclass" },
    { label: "Tools", href: "#tools" },
    { label: "Changelog", href: "#changelog" },
  ],
};

const defaultPricingColumn: Footer18LinkColumn = {
  title: "Pricing",
  links: [{ label: "Security", href: "#security" }],
};

const defaultBottomNav: Footer18NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Monopage", href: "#monopage" },
  { label: "Contact", href: "#contact" },
];

const defaultSocialLinks: Footer18NavLink[] = [
  { label: "Instagram", href: "#instagram" },
  { label: "Facebook", href: "#facebook" },
  { label: "Twitter", href: "#twitter" },
  { label: "Behance", href: "#behance" },
];

const defaults = {
  newsletterHeading: "Subscribe to our\nnewsletter",
  newsletterPlaceholder: "Email address",
  brandName: "Kestrel",
  exploreText: "Explore",
  exploreHref: "#explore",
  trialText: "Start free trial",
  trialHref: "#trial",
  address:
    "18 Harbor Lane, Suite 400\n\nPortland, Oregon\n97204, United States",
} as const;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function useOnceInView<T extends HTMLElement>(threshold = 0.15) {
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

function ColumnLinks({
  column,
  className,
}: {
  column: Footer18LinkColumn;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-base font-medium text-foreground">{column.title}</h3>
      <ul className="flex list-none flex-col gap-3 p-0">
        {column.links.map((link) => (
          <li key={`${column.title}-${link.label}`}>
            <a
              href={link.href}
              className={cn(
                "inline-flex min-h-5 items-center rounded-none text-[15px] leading-tight text-muted-foreground",
                "transition-colors duration-200 hover:text-foreground",
                focusRing,
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer18({
  className,
  newsletterHeading = defaults.newsletterHeading,
  newsletterPlaceholder = defaults.newsletterPlaceholder,
  onSubscribe,
  brandName = defaults.brandName,
  featureColumn = defaultFeatureColumn,
  reciteColumn = defaultReciteColumn,
  pricingColumn = defaultPricingColumn,
  exploreText = defaults.exploreText,
  exploreHref = defaults.exploreHref,
  trialText = defaults.trialText,
  trialHref = defaults.trialHref,
  address = defaults.address,
  bottomNav = defaultBottomNav,
  socialLinks = defaultSocialLinks,
  ...props
}: Footer18Props) {
  const emailFieldId = useId();
  const [email, setEmail] = useState("");
  const { ref, inView } = useOnceInView<HTMLElement>(0.15);
  const wordmarkWidth = Math.max(brandName.length * 90, 400);
  const exploreLabel =
    exploreText === "Explore" ? `Explore ${brandName}` : exploreText;

  function handleSubscribeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = email.trim();
    if (!next) return;
    onSubscribe?.(next);
  }

  return (
    <footer
      ref={ref}
      data-slot="footer-18"
      className={cn(
        "jk-footer18 relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-background font-sans text-muted-foreground antialiased",
        inView && "jk-footer18-in",
        className,
      )}
      {...props}
    >
      <style href="jk-footer-18" precedence="default">{`
        .jk-footer18-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='jkFooter18Noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23jkFooter18Noise)'/%3E%3C/svg%3E");
        }
        .jk-footer18-rise,
        .jk-footer18-word {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(4px);
        }
        .jk-footer18-word {
          transform: translateY(30px);
          filter: blur(8px);
        }
        .jk-footer18-in .jk-footer18-rise {
          animation: jk-footer18-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--jk-footer18-delay, 50ms);
        }
        .jk-footer18-in .jk-footer18-word {
          animation: jk-footer18-word 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--jk-footer18-delay, 280ms);
        }
        @keyframes jk-footer18-rise {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes jk-footer18-word {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-footer18-rise,
          .jk-footer18-word,
          .jk-footer18-in .jk-footer18-rise,
          .jk-footer18-in .jk-footer18-word {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }
      `}</style>

      <div
        className="jk-footer18-noise pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply dark:opacity-[0.04] dark:mix-blend-overlay"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col px-6 pt-16 md:px-12 md:pt-20 lg:px-20">
        <div className="mb-12 flex flex-col gap-12 lg:flex-row lg:gap-24">
          <div
            className="jk-footer18-rise flex min-h-[300px] w-full shrink-0 flex-col justify-between rounded-md border border-border bg-card p-6 shadow-sm md:min-h-[420px] md:p-8 lg:w-[450px]"
            style={{ "--jk-footer18-delay": "50ms" } as CSSProperties}
          >
            <h2 className="text-3xl leading-[1.1] font-medium tracking-tight whitespace-pre-line text-foreground md:text-4xl">
              {newsletterHeading}
            </h2>

            <form
              className="relative mt-12 w-full md:mt-16"
              onSubmit={handleSubscribeSubmit}
            >
              <label className="sr-only" htmlFor={emailFieldId}>
                {newsletterPlaceholder}
              </label>
              <input
                id={emailFieldId}
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={newsletterPlaceholder}
                required
                autoComplete="email"
                className={cn(
                  "w-full rounded-none border-0 border-b border-border bg-transparent pb-4 pr-10 text-sm text-foreground",
                  "placeholder:text-muted-foreground",
                  "transition-colors duration-200 focus:border-foreground focus:outline-none",
                )}
              />
              <button
                type="submit"
                aria-label="Submit newsletter subscription"
                className={cn(
                  "absolute top-0 right-0 flex cursor-pointer items-center justify-center rounded-none pb-4 text-muted-foreground",
                  "transition-colors duration-200 hover:text-foreground",
                  focusRing,
                )}
              >
                <ArrowRightIcon aria-hidden="true" className="size-5" />
              </button>
            </form>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid flex-1 grid-cols-1 gap-12 pt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8"
          >
            <div
              className="jk-footer18-rise flex flex-col gap-10 md:gap-12"
              style={{ "--jk-footer18-delay": "150ms" } as CSSProperties}
            >
              <ColumnLinks column={featureColumn} />
              <div className="mt-2 flex flex-col gap-6 md:mt-4">
                <a
                  href={trialHref}
                  className={cn(
                    "inline-flex w-fit items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background",
                    "transition-[opacity,transform] duration-200 ease-out hover:opacity-90 active:scale-[0.98]",
                    "motion-reduce:transition-none motion-reduce:active:scale-100",
                    focusRing,
                  )}
                >
                  {trialText}
                </a>
                <p className="max-w-2xl text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                  {address}
                </p>
              </div>
            </div>

            <div
              className="jk-footer18-rise"
              style={{ "--jk-footer18-delay": "250ms" } as CSSProperties}
            >
              <ColumnLinks column={reciteColumn} />
            </div>

            <div
              className="jk-footer18-rise flex h-full flex-col justify-between gap-12"
              style={{ "--jk-footer18-delay": "350ms" } as CSSProperties}
            >
              <ColumnLinks column={pricingColumn} />
              <div className="mt-8 md:mt-auto">
                <a
                  href={exploreHref}
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-none text-[22px] text-foreground",
                    "transition-colors duration-200 hover:text-muted-foreground",
                    focusRing,
                  )}
                >
                  {exploreLabel}
                  <ArrowUpRightIcon
                    aria-hidden="true"
                    className="size-[22px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="relative z-10 mt-auto flex w-full flex-col">
        <div className="mx-auto mb-8 flex w-full max-w-[1500px] flex-col items-start justify-between gap-8 px-6 md:mb-4 md:flex-row md:items-center md:px-12 lg:px-20">
          <div
            className="jk-footer18-rise flex flex-wrap gap-x-8 gap-y-4"
            style={{ "--jk-footer18-delay": "420ms" } as CSSProperties}
          >
            {bottomNav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-[11px] font-medium tracking-widest text-muted-foreground uppercase",
                  "transition-colors duration-200 hover:text-foreground",
                  focusRing,
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className="jk-footer18-rise flex flex-wrap gap-x-8 gap-y-4"
            style={{ "--jk-footer18-delay": "500ms" } as CSSProperties}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest text-muted-foreground uppercase",
                  "transition-colors duration-200 hover:text-foreground",
                  focusRing,
                )}
              >
                {link.label}
                <ArrowUpRightIcon
                  aria-hidden="true"
                  className="size-3 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                />
              </a>
            ))}
          </div>
        </div>

        <div
          className="jk-footer18-word w-full"
          style={{ "--jk-footer18-delay": "280ms" } as CSSProperties}
        >
          <svg
            className="h-auto w-full select-none text-muted-foreground/40 dark:text-foreground/20"
            viewBox={`0 0 ${wordmarkWidth} 110`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <text
              x="0"
              y="105"
              dominantBaseline="alphabetic"
              textAnchor="start"
              textLength="100%"
              lengthAdjust="spacing"
              className="fill-current font-sans font-bold tracking-tighter"
              fontSize="140"
            >
              {brandName.toUpperCase()}
            </text>
          </svg>
          <span className="sr-only">{brandName}</span>
        </div>
      </div>
    </footer>
  );
}
