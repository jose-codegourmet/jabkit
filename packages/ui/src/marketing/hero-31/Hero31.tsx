"use client";

import {
  ArrowRightIcon,
  BlocksIcon,
  CommandIcon,
  SparklesIcon,
  WorkflowIcon,
  ZapIcon,
} from "lucide-react";
import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type {
  Hero31Action,
  Hero31Logo,
  Hero31LogoIcon,
  Hero31LogoWeight,
  Hero31Props,
} from "./Hero31.types";

const defaults = {
  brand: "Northline",
  brandHref: "#top",
  title: "Innovation that Drives Impact.",
  subtitle:
    "Northline empowers teams to build, scale, and transform with technology that drives real results.",
  trustedByText: "TRUSTED BY AMBITIOUS TEAMS",
  backgroundImage: "/assets/5f56206b8544c593.webp",
  backgroundAlt: "Soft glowing curtain of light across a dark field",
} as const;

const defaultNavItems = [
  { label: "Product", href: "#product" },
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const defaultSignUp: Hero31Action = { label: "Sign up", href: "#signup" };
const defaultCta: Hero31Action = { label: "Request a Demo", href: "#demo" };

const defaultLogos: Hero31Logo[] = [
  { icon: "command", name: "novo", weight: "tight" },
  { icon: "workflow", name: "Telia Cygate", weight: "medium" },
  { icon: "blocks", name: "customer.io", weight: "bold" },
  { icon: "sparkles", name: "Fastmail", weight: "medium" },
  { icon: "zap", name: "Medtronic", weight: "tight" },
];

const logoIcons: Record<
  Hero31LogoIcon,
  (props: { className?: string }) => ReactNode
> = {
  command: (props) => <CommandIcon {...props} />,
  workflow: (props) => <WorkflowIcon {...props} />,
  blocks: (props) => <BlocksIcon {...props} />,
  sparkles: (props) => <SparklesIcon {...props} />,
  zap: (props) => <ZapIcon {...props} />,
};

const logoWeights: Record<Hero31LogoWeight, string> = {
  tight: "font-bold tracking-tighter",
  medium: "font-medium tracking-tight",
  bold: "font-bold tracking-tight",
};

const metal =
  "rounded-none bg-[color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_14%)] text-background shadow-[inset_0_2px_0_color-mix(in_oklab,var(--jk-background),transparent_8%),inset_0_-2px_0_color-mix(in_oklab,var(--jk-foreground),transparent_80%)]";

function SquareAction({
  action,
  size,
}: {
  action: Hero31Action;
  size: "nav" | "hero";
}) {
  const className = cn(
    "group inline-flex items-center font-medium transition-transform duration-200 ease-out",
    "active:scale-[0.96] motion-reduce:active:scale-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    metal,
    size === "nav" ? "h-10 gap-2 px-5 text-sm" : "h-14 gap-3 px-8 text-base",
  );
  const arrow = (
    <ArrowRightIcon
      aria-hidden="true"
      className={cn(
        "transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0",
        size === "nav" ? "size-4" : "size-5",
      )}
    />
  );

  if (action.href) {
    return (
      <a href={action.href} className={className}>
        {action.label}
        {arrow}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={action.onClick}>
      {action.label}
      {arrow}
    </button>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid size-8 shrink-0 place-items-center text-foreground",
        className,
      )}
    >
      <SparklesIcon className="size-8" />
    </span>
  );
}

export function Hero31({
  className,
  brand = defaults.brand,
  brandHref = defaults.brandHref,
  brandMark,
  navItems = defaultNavItems,
  signUp = defaultSignUp,
  title = defaults.title,
  subtitle = defaults.subtitle,
  cta = defaultCta,
  trustedByText = defaults.trustedByText,
  logos = defaultLogos,
  backgroundImage = defaults.backgroundImage,
  backgroundAlt = defaults.backgroundAlt,
  ...props
}: Hero31Props) {
  const headingId = useId();
  const titleWords = title.split(" ").filter(Boolean);

  return (
    <section
      data-slot="hero-31"
      aria-labelledby={headingId}
      className={cn(
        "relative min-h-[100dvh] w-full overflow-hidden bg-background font-sans text-foreground antialiased",
        className,
      )}
      {...props}
    >
      <style href="jk-hero-31" precedence="default">{`
        @keyframes jk-hero31-nav {
          from { opacity: 0; transform: translateY(-16px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes jk-hero31-word {
          from { opacity: 0; transform: translateY(28px) rotateX(12deg); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0) rotateX(0deg); filter: blur(0); }
        }
        @keyframes jk-hero31-body {
          from { opacity: 0; transform: translateY(14px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes jk-hero31-logo {
          from { opacity: 0; transform: translateY(10px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .jk-hero31-nav {
          animation: jk-hero31-nav 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: calc(0.1s + (var(--jk-hero31-i, 0) * 80ms));
        }
        .jk-hero31-word {
          animation: jk-hero31-word 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: calc(0.45s + (var(--jk-hero31-i, 0) * 70ms));
        }
        .jk-hero31-body {
          animation: jk-hero31-body 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: calc(0.85s + (var(--jk-hero31-i, 0) * 120ms));
        }
        .jk-hero31-logo {
          animation: jk-hero31-logo 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: calc(1.2s + (var(--jk-hero31-i, 0) * 60ms));
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hero31-nav,
          .jk-hero31-word,
          .jk-hero31-body,
          .jk-hero31-logo {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--jk-background),transparent_22%)_0%,color-mix(in_oklab,var(--jk-background),transparent_58%)_48%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--jk-background),transparent_18%)_0%,transparent_42%)]"
        />
      </div>
      <p className="sr-only">{backgroundAlt}</p>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col px-6 py-8 md:px-12">
        <nav className="flex items-center justify-between">
          <a
            href={brandHref}
            className="jk-hero31-nav flex items-center gap-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ ["--jk-hero31-i" as string]: 0 }}
          >
            {brandMark ?? <BrandMark />}
            <span className="font-serif text-2xl tracking-wide italic">
              {brand}
            </span>
          </a>

          {navItems.length ? (
            <div
              className="jk-hero31-nav hidden items-center gap-10 md:flex"
              style={{ ["--jk-hero31-i" as string]: 1 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}

          {signUp ? (
            <div
              className="jk-hero31-nav"
              style={{ ["--jk-hero31-i" as string]: 2 }}
            >
              <SquareAction action={signUp} size="nav" />
            </div>
          ) : null}
        </nav>

        <div
          className="mt-32 flex max-w-[42rem] flex-col gap-6 md:mt-40"
          style={{ perspective: "800px" }}
        >
          <h1
            id={headingId}
            className="text-5xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-7xl lg:leading-[1.1]"
          >
            {titleWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="jk-hero31-word mr-[0.25em] inline-block last:mr-0"
                style={{ ["--jk-hero31-i" as string]: index }}
              >
                {word}
              </span>
            ))}
          </h1>

          <div className="flex flex-col gap-6">
            {subtitle ? (
              <p
                className="jk-hero31-body text-lg leading-relaxed font-light text-pretty text-foreground/80 md:text-xl"
                style={{ ["--jk-hero31-i" as string]: 0 }}
              >
                {subtitle}
              </p>
            ) : null}
            {cta ? (
              <div
                className="jk-hero31-body mt-4"
                style={{ ["--jk-hero31-i" as string]: 1 }}
              >
                <SquareAction action={cta} size="hero" />
              </div>
            ) : null}
          </div>
        </div>

        {logos.length || trustedByText ? (
          <div className="mt-auto flex flex-col gap-8 pt-32 pb-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
            {trustedByText ? (
              <span
                className="jk-hero31-logo shrink-0 text-sm font-bold tracking-wide text-foreground/50 tabular-nums"
                style={{ ["--jk-hero31-i" as string]: 0 }}
              >
                {trustedByText}
              </span>
            ) : null}
            {logos.length ? (
              <div className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-16">
                {logos.map((logo, index) => {
                  const Icon = logo.icon ? logoIcons[logo.icon] : null;
                  const weight = logoWeights[logo.weight ?? "medium"];
                  const content = (
                    <>
                      {Icon ? <Icon className="size-6" /> : null}
                      <span className={cn("text-xl", weight)}>{logo.name}</span>
                    </>
                  );
                  const sharedClass = cn(
                    "jk-hero31-logo flex items-center gap-2 text-foreground opacity-60 grayscale transition-all duration-300",
                    "hover:opacity-100 hover:grayscale-0",
                  );
                  const style = { ["--jk-hero31-i" as string]: index + 1 };
                  if (logo.href) {
                    return (
                      <a
                        key={logo.name}
                        href={logo.href}
                        className={sharedClass}
                        style={style}
                      >
                        {content}
                      </a>
                    );
                  }
                  return (
                    <div key={logo.name} className={sharedClass} style={style}>
                      {content}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
