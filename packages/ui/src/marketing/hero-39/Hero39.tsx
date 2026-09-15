"use client";

import { LeafIcon, SearchIcon } from "lucide-react";
import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { Hero39Action, Hero39Logo, Hero39Props } from "./Hero39.types";

const defaultNavItems = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
];

const defaultHeaderAction: Hero39Action = {
  label: "Book a call",
  href: "#book",
};

const defaultSearchAction: Hero39Action = {
  label: "Find Peace",
  href: "#search",
};

const defaultLogos: Hero39Logo[] = [
  { name: "Forbes", face: "serif" },
  { name: "healthline", face: "sans" },
  { name: "Bloomberg", face: "sans" },
  { name: "The Washington Post", face: "serif" },
];

const defaults = {
  brand: "Retreats",
  brandHref: "#home",
  badge: "A peaceful place to disconnect",
  titleLead: "The best place to find",
  titlePrefix: "your",
  titleEmphasis: "Inner Stillness",
  description:
    "Find an escape to reconnect with nature and your inner self. Your moment of clarity is waiting.",
  searchPlaceholder: "Enter a nature retreat name...",
  searchName: "q",
  logosLabel: "Trusted by seekers of calm",
  backgroundImage: "/assets/21a7a386e170d4cf.webp",
  backgroundAlt: "Peaceful nature landscape painting",
} as const;

const overlayText = "text-card dark:text-foreground";
const overlaySoft = "text-card/90 dark:text-foreground/90";
const overlayMuted = "text-card/70 dark:text-foreground/70";
const lightFill = "bg-card dark:bg-foreground";
const lightInk = "text-card-foreground dark:text-background";
const lightMuted = "text-muted-foreground dark:text-background/45";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function PillControl({
  action,
  className,
  children,
}: {
  action: Hero39Action;
  className: string;
  children: ReactNode;
}) {
  if (action.href) {
    return (
      <a href={action.href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={action.onClick}>
      {children}
    </button>
  );
}

export function Hero39({
  className,
  brand = defaults.brand,
  brandHref = defaults.brandHref,
  navItems = defaultNavItems,
  headerAction = defaultHeaderAction,
  badge = defaults.badge,
  titleLead = defaults.titleLead,
  titlePrefix = defaults.titlePrefix,
  titleEmphasis = defaults.titleEmphasis,
  description = defaults.description,
  searchPlaceholder = defaults.searchPlaceholder,
  searchAction = defaultSearchAction,
  searchName = defaults.searchName,
  logosLabel = defaults.logosLabel,
  logos = defaultLogos,
  backgroundImage = defaults.backgroundImage,
  backgroundAlt = defaults.backgroundAlt,
  onSearch,
  ...props
}: Hero39Props) {
  const headingId = useId();
  const searchId = useId();

  return (
    <section
      data-slot="hero-39"
      aria-labelledby={headingId}
      className={cn(
        "relative min-h-[100dvh] w-full overflow-hidden bg-primary font-sans antialiased",
        "selection:bg-card/30 selection:text-card dark:selection:bg-foreground/30 dark:selection:text-foreground",
        className,
      )}
      {...props}
    >
      <style href="jk-hero-39" precedence="default">{`
        @keyframes jk-hero39-nav {
          from { opacity: 0; transform: translateY(-20px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes jk-hero39-bg {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes jk-hero39-item {
          from { opacity: 0; transform: translateY(20px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes jk-hero39-title {
          from { opacity: 0; transform: translateY(40px); filter: blur(12px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes jk-hero39-logo {
          from { opacity: 0; transform: translateY(15px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .jk-hero39-bg {
          animation: jk-hero39-bg 1.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-hero39-nav {
          animation: jk-hero39-nav 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both;
        }
        .jk-hero39-item {
          animation: jk-hero39-item 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-hero39-title-line {
          animation: jk-hero39-title 0.95s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-hero39-logos-label {
          animation: jk-hero39-logo 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
        }
        .jk-hero39-logo {
          animation: jk-hero39-logo 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hero39-bg,
          .jk-hero39-nav,
          .jk-hero39-item,
          .jk-hero39-title-line,
          .jk-hero39-logos-label,
          .jk-hero39-logo {
            animation: none;
          }
        }
      `}</style>

      <div className="jk-hero39-bg pointer-events-none absolute inset-0 z-0 select-none will-change-transform">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/30 to-transparent mix-blend-multiply"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-foreground/5" />
      </div>
      <p className="sr-only">{backgroundAlt}</p>

      <div className="relative z-10 flex min-h-[100dvh] flex-col">
        <nav className="jk-hero39-nav flex w-full items-center justify-between px-6 py-5 sm:px-8 md:px-12 lg:px-16">
          <a
            href={brandHref}
            className={cn(
              "flex items-center gap-2.5",
              overlayText,
              focusRing,
            )}
          >
            <LeafIcon aria-hidden="true" className="size-8" strokeWidth={1.5} />
            <span className="text-lg font-medium tracking-wide">{brand}</span>
          </a>

          {navItems.length ? (
            <div className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <a
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={cn(
                    "flex min-h-10 items-center text-[14.5px] font-medium transition-colors duration-200",
                    overlaySoft,
                    "hover:text-card dark:hover:text-foreground",
                    focusRing,
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}

          {headerAction ? (
            <PillControl
              action={headerAction}
              className={cn(
                "flex min-h-10 items-center justify-center rounded-full px-6 py-2 text-[14.5px] font-medium",
                lightFill,
                lightInk,
                "transition-[transform,background-color] duration-150 ease-out hover:opacity-90 active:scale-[0.96] motion-reduce:active:scale-100",
                focusRing,
              )}
            >
              {headerAction.label}
            </PillControl>
          ) : null}
        </nav>

        <div className="flex flex-1 flex-col items-center justify-start px-6 text-center">
          <div className="flex w-full max-w-4xl flex-col items-center pt-12">
            {badge ? (
              <div
                className="jk-hero39-item will-change-transform"
                style={{ animationDelay: "0.3s" }}
              >
                <div
                  className={cn(
                    "flex items-center gap-2.5 rounded-full border border-card/25 bg-card/10 px-4 py-1 backdrop-blur-sm",
                    "dark:border-foreground/25 dark:bg-foreground/10",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "size-1.5 rounded-full bg-card/90 shadow-[0_0_8px_color-mix(in_oklab,var(--jk-card),transparent_20%)]",
                      "dark:bg-foreground/90 dark:shadow-[0_0_8px_color-mix(in_oklab,var(--jk-foreground),transparent_20%)]",
                    )}
                  />
                  <span
                    className={cn("text-xs font-medium tracking-wide", overlayText)}
                  >
                    {badge}
                  </span>
                </div>
              </div>
            ) : null}

            <h1
              id={headingId}
              className={cn(
                "mt-4 text-[3rem] leading-[1.1] font-normal tracking-tight text-balance sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]",
                overlayText,
              )}
            >
              <span
                className="jk-hero39-title-line block will-change-transform"
                style={{ animationDelay: "0.42s" }}
              >
                {titleLead}
              </span>
              <span
                className="jk-hero39-title-line block will-change-transform pb-1"
                style={{ animationDelay: "0.54s" }}
              >
                {titlePrefix}{" "}
                <span className="font-serif text-[1.05em] tracking-normal italic opacity-95">
                  {titleEmphasis}
                </span>
              </span>
            </h1>

            {description ? (
              <p
                className={cn(
                  "jk-hero39-item mt-3 max-w-[500px] text-base leading-[1.6] font-normal text-pretty will-change-transform",
                  overlayText,
                )}
                style={{ animationDelay: "0.66s" }}
              >
                {description}
              </p>
            ) : null}

            {searchAction ? (
              <form
                className="jk-hero39-item mt-6 w-full max-w-[580px] will-change-transform"
                style={{ animationDelay: "0.78s" }}
                action={searchAction.href}
                method="get"
                onSubmit={onSearch}
              >
                <div
                  className={cn(
                    "rounded-full bg-card/20 p-1 shadow-[0_8px_32px_color-mix(in_oklab,var(--jk-foreground),transparent_90%)] backdrop-blur-md",
                    "dark:bg-foreground/20",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-[54px] w-full items-center justify-between rounded-full pr-2 pl-5 shadow-inner",
                      lightFill,
                    )}
                  >
                    <label className="flex min-w-0 flex-1 items-center gap-3" htmlFor={searchId}>
                      <SearchIcon
                        aria-hidden="true"
                        className={cn("h-5 w-5 shrink-0", lightMuted)}
                      />
                      <span className="sr-only">{searchPlaceholder}</span>
                      <input
                        id={searchId}
                        type="search"
                        name={searchName}
                        placeholder={searchPlaceholder}
                        className={cn(
                          "w-full min-w-0 bg-transparent text-[15px] font-medium focus:outline-none",
                          lightInk,
                          "placeholder:text-muted-foreground dark:placeholder:text-background/45",
                        )}
                      />
                    </label>
                    <button
                      type="submit"
                      className={cn(
                        "flex h-10 min-h-10 items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-primary-foreground",
                        "shadow-[inset_0_2px_4px_1px_color-mix(in_oklab,var(--jk-primary-foreground),transparent_70%),inset_0_-2px_4px_1px_color-mix(in_oklab,var(--jk-foreground),transparent_94%)]",
                        "transition-[transform,filter] duration-150 ease-out hover:brightness-110 active:scale-[0.96] motion-reduce:active:scale-100",
                        focusRing,
                      )}
                    >
                      {searchAction.label}
                    </button>
                  </div>
                </div>
              </form>
            ) : null}
          </div>
        </div>

        {logos.length || logosLabel ? (
          <div className="absolute right-0 bottom-8 left-0 flex w-full flex-col items-center justify-center px-6 sm:bottom-12">
            {logosLabel ? (
              <p
                className={cn(
                  "jk-hero39-logos-label mb-4 text-[13px] font-medium",
                  overlayMuted,
                )}
              >
                {logosLabel}
              </p>
            ) : null}
            {logos.length ? (
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-90 sm:gap-12 md:gap-16 lg:gap-20">
                {logos.map((logo, index) => (
                  <span
                    key={logo.name}
                    className={cn(
                      "jk-hero39-logo will-change-transform font-bold tracking-tight",
                      overlaySoft,
                      logo.face === "serif" ? "font-serif" : "font-sans",
                      logo.name.length > 12
                        ? "text-[22px]"
                        : logo.face === "sans"
                          ? "text-[24px] tracking-tighter"
                          : "text-[24px]",
                    )}
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
