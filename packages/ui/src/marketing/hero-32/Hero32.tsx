import { PlayIcon } from "lucide-react";
import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { Hero32Action, Hero32NavItem, Hero32Props } from "./Hero32.types";

const defaultNavItems: Hero32NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Usecases", href: "#usecases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const defaultLogin: Hero32Action = { label: "Login", href: "#login" };
const defaultPrimary: Hero32Action = { label: "Book a demo", href: "#demo" };
const defaultPlay: Hero32Action = { label: "Play overview", href: "#overview" };

const defaultTitle = (
  <>
    Your Haven for <br />
    <span className="italic">Seamless</span> AI Solutions
  </>
);

const defaultSubtitle = (
  <>
    Confidential, professional help tailored to your unique needs,{" "}
    <br className="hidden md:block" />
    available on your schedule.
  </>
);

const defaults = {
  brand: "Haven",
  brandHref: "#home",
  backgroundImage: "/assets/c7475f3caa3d48fd.webp",
  backgroundAlt: "Sunflowers against a clear sky",
} as const;

const overlayText = "text-background dark:text-foreground";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function PillControl({
  action,
  className,
  children,
}: {
  action: Hero32Action;
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

export function Hero32({
  className,
  brand = defaults.brand,
  brandHref = defaults.brandHref,
  navItems = defaultNavItems,
  login = defaultLogin,
  title = defaultTitle,
  subtitle = defaultSubtitle,
  primaryAction = defaultPrimary,
  playAction = defaultPlay,
  backgroundImage = defaults.backgroundImage,
  backgroundAlt = defaults.backgroundAlt,
  ...props
}: Hero32Props) {
  const headingId = useId();

  return (
    <section
      data-slot="hero-32"
      aria-labelledby={headingId}
      className={cn(
        "relative min-h-[100dvh] w-full overflow-hidden bg-primary font-sans text-foreground antialiased selection:bg-background/20",
        className,
      )}
      {...props}
    >
      <style href="jk-hero-32" precedence="default">{`
        @keyframes jk-hero32-nav {
          from { opacity: 0; transform: translateY(-24px) scale(0.97); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes jk-hero32-title {
          from { opacity: 0; transform: translateY(36px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes jk-hero32-subtitle {
          from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes jk-hero32-cta {
          from { opacity: 0; transform: translateY(10px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .jk-hero32-nav {
          animation: jk-hero32-nav 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-hero32-title {
          animation: jk-hero32-title 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
        }
        .jk-hero32-subtitle {
          animation: jk-hero32-subtitle 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.65s both;
        }
        .jk-hero32-cta {
          animation: jk-hero32-cta 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.85s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-hero32-nav,
          .jk-hero32-title,
          .jk-hero32-subtitle,
          .jk-hero32-cta {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <p className="sr-only">{backgroundAlt}</p>

      <div className="relative z-10 flex min-h-[100dvh] flex-col pt-6">
        <nav
          className={cn(
            "jk-hero32-nav mx-auto flex w-fit items-center gap-8 rounded-full bg-card px-2 py-2",
            "shadow-[0_1px_2px_color-mix(in_oklab,var(--jk-foreground),transparent_88%)]",
          )}
        >
          <a
            href={brandHref}
            className={cn(
              "pl-4 text-base font-bold tracking-tight text-card-foreground 2xl:text-lg",
              focusRing,
            )}
          >
            {brand}
          </a>
          {navItems.length ? (
            <div className="hidden items-center gap-6 px-4 md:flex">
              {navItems.map((item) => (
                <a
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium text-muted-foreground transition-colors hover:text-card-foreground 2xl:text-lg",
                    focusRing,
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
          {login ? (
            <PillControl
              action={login}
              className={cn(
                "rounded-full bg-primary px-6 py-2 text-xs font-medium text-primary-foreground 2xl:text-lg",
                "shadow-[inset_0_2px_0_color-mix(in_oklab,var(--jk-primary-foreground),transparent_80%),inset_0_-2px_0_color-mix(in_oklab,var(--jk-foreground),transparent_80%)]",
                "transition-all hover:brightness-110 active:scale-[0.96] motion-reduce:active:scale-100",
                focusRing,
              )}
            >
              {login.label}
            </PillControl>
          ) : null}
        </nav>

        <div className="flex flex-1 items-start justify-center px-6 pt-20">
          <div className="flex max-w-4xl flex-col items-center text-center 2xl:max-w-6xl">
            <h1
              id={headingId}
              className={cn(
                "jk-hero32-title font-serif text-5xl leading-[1.1] font-normal tracking-tight text-balance md:text-7xl lg:text-[5.5rem] 2xl:text-[7rem]",
                overlayText,
              )}
            >
              {title}
            </h1>
            {subtitle ? (
              <p
                className={cn(
                  "jk-hero32-subtitle mt-6 max-w-2xl pb-1 text-base leading-relaxed font-normal text-pretty md:text-lg",
                  overlayText,
                )}
              >
                {subtitle}
              </p>
            ) : null}
            {primaryAction || playAction ? (
              <div className="jk-hero32-cta mt-8 flex items-center justify-center gap-4">
                {primaryAction ? (
                  <PillControl
                    action={primaryAction}
                    className={cn(
                      "flex min-h-12 items-center rounded-full bg-background/20 px-8 text-sm font-medium 2xl:text-lg",
                      overlayText,
                      "shadow-[inset_2px_2px_0_-0.5px_color-mix(in_oklab,var(--jk-background),transparent_90%),inset_-2px_-2px_0_-0.5px_color-mix(in_oklab,var(--jk-background),transparent_90%)]",
                      "backdrop-blur-sm transition-transform hover:bg-background/30 active:scale-[0.96] motion-reduce:active:scale-100",
                      focusRing,
                    )}
                  >
                    {primaryAction.label}
                  </PillControl>
                ) : null}
                {playAction ? (
                  <PillControl
                    action={playAction}
                    className={cn(
                      "flex size-12 items-center justify-center rounded-full bg-card text-primary",
                      "shadow-[0_18px_36px_-20px_color-mix(in_oklab,var(--jk-foreground),transparent_40%)]",
                      "transition-transform hover:scale-105 active:scale-[0.96] motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
                      focusRing,
                    )}
                  >
                    <PlayIcon aria-hidden="true" className="size-5 fill-current" />
                    <span className="sr-only">{playAction.label}</span>
                  </PillControl>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
