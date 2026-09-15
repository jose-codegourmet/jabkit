"use client";

import { ArrowUpRightIcon, GlobeIcon, SparklesIcon } from "lucide-react";
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
  Footer19LinkColumn,
  Footer19NavLink,
  Footer19Props,
} from "./Footer19.types";

const defaultNavColumns: Footer19LinkColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Guides", href: "#guides" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Software", href: "#software" },
      { label: "Hardware", href: "#hardware" },
      { label: "Accessories", href: "#accessories" },
      { label: "Licensing", href: "#licensing" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "#email" },
      { label: "Phone", href: "#phone" },
      { label: "Locations", href: "#locations" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const defaultSocialLinks: Footer19NavLink[] = [
  { label: "Instagram", href: "#instagram" },
  { label: "Linkedin", href: "#linkedin" },
];

const defaults = {
  badgeText: "Trusted by Thousands",
  newsletterHeading:
    "The latest news,\narticles, and resources,\nin your inbox weekly.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Stay Updated",
  brandName: "Northline",
  copyright: "Copyright© Northline Studio",
  location: "Brooklyn, NY",
  time: "07:23:14 AM",
} as const;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function DefaultBrandMark({ className }: { className?: string }) {
  return (
    <SparklesIcon
      aria-hidden="true"
      className={cn("size-6 fill-primary/20 text-primary", className)}
    />
  );
}

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

export function Footer19({
  className,
  badgeText = defaults.badgeText,
  newsletterHeading = defaults.newsletterHeading,
  newsletterPlaceholder = defaults.newsletterPlaceholder,
  newsletterButtonText = defaults.newsletterButtonText,
  onSubscribe,
  brandName = defaults.brandName,
  brandLogo,
  navColumns = defaultNavColumns,
  copyright = defaults.copyright,
  location = defaults.location,
  time = defaults.time,
  socialLinks = defaultSocialLinks,
  ...props
}: Footer19Props) {
  const emailFieldId = useId();
  const [email, setEmail] = useState("");
  const { ref, inView } = useOnceInView<HTMLElement>(0.15);

  function handleSubscribeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = email.trim();
    if (!next) return;
    onSubscribe?.(next);
  }

  return (
    <footer
      ref={ref}
      data-slot="footer-19"
      className={cn(
        "jk-footer19 relative flex min-h-[500px] w-full flex-col overflow-hidden bg-background font-sans text-muted-foreground antialiased",
        inView && "jk-footer19-in",
        className,
      )}
      {...props}
    >
      <style href="jk-footer-19" precedence="default">{`
        .jk-footer19-grid {
          background-image: radial-gradient(
            circle at 2px 2px,
            color-mix(in oklab, var(--jk-foreground) 100%, transparent) 1.5px,
            transparent 0
          );
          background-size: 24px 24px;
        }
        .jk-footer19-rise {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(4px);
        }
        .jk-footer19-in .jk-footer19-rise {
          animation: jk-footer19-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--jk-footer19-delay, 50ms);
        }
        @keyframes jk-footer19-rise {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-footer19-rise,
          .jk-footer19-in .jk-footer19-rise {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="jk-footer19-grid absolute inset-0 opacity-[0.07]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl flex-col justify-between px-6 pt-20 pb-10 md:px-12">
        <div className="mb-24 flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-24">
          <div
            className="jk-footer19-rise max-w-xl"
            style={{ "--jk-footer19-delay": "50ms" } as CSSProperties}
          >
            <div className="mb-6 flex items-center gap-3">
              <span
                className="size-2.5 rounded-full bg-primary shadow-[0_0_12px_color-mix(in_oklab,var(--jk-primary)_80%,transparent)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                {badgeText}
              </span>
            </div>
            <h2 className="text-4xl leading-[1.1] font-light tracking-tight whitespace-pre-line text-foreground md:text-5xl">
              {newsletterHeading}
            </h2>
          </div>

          <form
            className="jk-footer19-rise flex h-14 w-full max-w-md lg:mt-auto"
            style={{ "--jk-footer19-delay": "150ms" } as CSSProperties}
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
                "h-full min-w-0 flex-1 rounded-none border border-r-0 border-border bg-card px-5 text-sm text-foreground",
                "placeholder:text-muted-foreground",
                "transition-shadow duration-200 focus:outline-none focus:ring-1 focus:ring-primary",
              )}
            />
            <button
              type="submit"
              className={cn(
                "inline-flex h-full cursor-pointer items-center justify-center gap-2 rounded-none border border-primary bg-primary px-6 text-sm font-medium text-primary-foreground",
                "transition-[opacity,transform] duration-200 ease-out hover:opacity-90 active:scale-[0.98]",
                "motion-reduce:transition-none motion-reduce:active:scale-100",
                focusRing,
              )}
            >
              {newsletterButtonText}
              <ArrowUpRightIcon aria-hidden="true" className="size-4" />
            </button>
          </form>
        </div>

        <div className="mb-24 flex flex-col items-start justify-between gap-16 md:flex-row">
          <div
            className="jk-footer19-rise flex items-center gap-2 text-foreground"
            style={{ "--jk-footer19-delay": "250ms" } as CSSProperties}
          >
            {brandLogo ?? <DefaultBrandMark />}
            <span className="text-xl font-medium tracking-tight md:text-2xl">
              {brandName}
            </span>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-12 md:grid-cols-3 md:gap-24 lg:gap-32"
          >
            {navColumns.map((column, columnIndex) => (
              <div
                key={column.title}
                className="jk-footer19-rise flex flex-col gap-6"
                style={
                  {
                    "--jk-footer19-delay": `${350 + columnIndex * 100}ms`,
                  } as CSSProperties
                }
              >
                <h3 className="text-xs font-semibold tracking-wider text-foreground uppercase">
                  {column.title}
                </h3>
                <ul className="flex list-none flex-col gap-4 p-0">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className={cn(
                          "inline-flex min-h-5 items-center rounded-none text-sm text-muted-foreground",
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
            ))}
          </nav>
        </div>

        <div
          className="jk-footer19-rise flex flex-col items-center justify-between gap-6 pt-8 text-xs text-muted-foreground md:flex-row"
          style={{ "--jk-footer19-delay": "650ms" } as CSSProperties}
        >
          <p>{copyright}</p>

          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-16">
            <p className="flex items-center gap-2">
              <GlobeIcon aria-hidden="true" className="size-4" />
              <span>{location}</span>
            </p>
            <p className="tracking-widest tabular-nums">{time}</p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-none transition-colors duration-200 hover:text-foreground",
                  focusRing,
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
