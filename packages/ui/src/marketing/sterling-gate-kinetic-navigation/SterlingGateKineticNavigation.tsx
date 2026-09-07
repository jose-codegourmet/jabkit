"use client";

import { MenuIcon, XIcon } from "lucide-react";
import {
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import type {
  SterlingGateKineticNavigationLink,
  SterlingGateKineticNavigationProps,
} from "./SterlingGateKineticNavigation.types";

const defaults = {
  brand: "Northglass",
  brandHref: "#top",
  menuLabel: "Index",
  closeLabel: "Close",
  tagline: "Spatial identity for places that last.",
  footnote: "New work by referral",
  cta: { label: "Book a visit", href: "#visit" },
  links: [
    {
      label: "Work",
      href: "#work",
      index: "01",
      kicker: "Selected rooms",
    },
    {
      label: "Practice",
      href: "#practice",
      index: "02",
      kicker: "How we build",
    },
    {
      label: "Journal",
      href: "#journal",
      index: "03",
      kicker: "Site notes",
    },
    {
      label: "Contact",
      href: "#contact",
      index: "04",
      kicker: "New briefs",
    },
  ],
} satisfies {
  brand: string;
  brandHref: string;
  menuLabel: string;
  closeLabel: string;
  tagline: string;
  footnote: string;
  cta: { label: string; href: string };
  links: SterlingGateKineticNavigationLink[];
};

function KineticLabel({ text }: { text: string }) {
  const glyphs = Array.from(text, (value, order) => ({
    key: `${text}:${order}:${value.codePointAt(0) ?? 0}`,
    value,
    order,
  }));
  return (
    <span className="inline-flex flex-wrap" aria-hidden="true">
      {glyphs.map((glyph) => (
        <span
          className="jk-sg-glyph inline-block"
          key={glyph.key}
          style={{ "--jk-sg-i": glyph.order } as CSSProperties}
        >
          {glyph.value === " " ? "\u00a0" : glyph.value}
        </span>
      ))}
    </span>
  );
}

function HeaderBar({
  brand,
  brandHref,
  action,
}: {
  brand: string;
  brandHref: string;
  action: ReactNode;
}) {
  return (
    <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
      <a
        className="text-sm font-medium tracking-[0.18em] text-foreground uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        href={brandHref}
      >
        {brand}
      </a>
      {action}
    </div>
  );
}

export function SterlingGateKineticNavigation({
  className,
  brand = defaults.brand,
  brandHref = defaults.brandHref,
  menuLabel = defaults.menuLabel,
  closeLabel = defaults.closeLabel,
  links = defaults.links,
  cta = defaults.cta,
  footnote = defaults.footnote,
  tagline = defaults.tagline,
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  ...props
}: SterlingGateKineticNavigationProps) {
  const panelId = useId();
  const titleId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const onOpenChangeRef = useRef(onOpenChange);
  const openPropRef = useRef(openProp);
  onOpenChangeRef.current = onOpenChange;
  openPropRef.current = openProp;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = openProp ?? uncontrolledOpen;

  const setOpen = (next: boolean) => {
    if (openPropRef.current === undefined) setUncontrolledOpen(next);
    onOpenChangeRef.current?.(next);
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        if (openPropRef.current === undefined) setUncontrolledOpen(false);
        onOpenChangeRef.current?.(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButtonRef.current?.focus();
    };
  }, [open]);

  const moveSheen = (event: PointerEvent<HTMLDivElement>) => {
    const node = panelRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--jk-sg-px", `${event.clientX - rect.left}px`);
    node.style.setProperty("--jk-sg-py", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      className={cn(
        "relative isolate min-h-[100dvh] overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="sterling-gate-kinetic-navigation"
      {...props}
    >
      <style href="jk-sterling-gate-kinetic-navigation" precedence="default">{`
        @keyframes jk-sg-panel {
          from { opacity: 0; transform: translate3d(0, -6%, 0); }
          to { opacity: 1; transform: none; }
        }
        @keyframes jk-sg-item {
          from { opacity: 0; transform: translate3d(0, 1.1rem, 0); }
          to { opacity: 1; transform: none; }
        }
        @keyframes jk-sg-ripple {
          0% { transform: translate3d(0, 0, 0); }
          38% { transform: translate3d(0, -0.12em, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-sg-panel {
            animation: jk-sg-panel 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .jk-sg-item {
            animation: jk-sg-item 0.76s cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: calc(90ms + var(--jk-sg-n) * 68ms);
          }
          .jk-sg-link:is(:hover, :focus-visible) .jk-sg-glyph {
            animation: jk-sg-ripple 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
            animation-delay: calc(var(--jk-sg-i) * 28ms);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-sg-panel, .jk-sg-item, .jk-sg-glyph { animation: none; }
          .jk-sg-sheen { display: none; }
        }
      `}</style>

      <header className="relative z-10 border-b border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/55">
        <HeaderBar
          brand={brand}
          brandHref={brandHref}
          action={
            <button
              aria-controls={panelId}
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium tracking-[0.16em] text-foreground uppercase outline-none transition-[transform,background-color] duration-200 motion-reduce:transition-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
              onClick={() => setOpen(true)}
              ref={menuButtonRef}
              type="button"
            >
              <MenuIcon aria-hidden="true" className="size-3.5" />
              {menuLabel}
            </button>
          }
        />
      </header>

      <div className="relative z-0 flex min-h-[calc(100dvh-4rem)] flex-col justify-end px-5 pb-16 sm:px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(48rem_28rem_at_82%_12%,color-mix(in_oklab,var(--jk-foreground)_8%,transparent),transparent_68%)]"
        />
        <div className="relative max-w-3xl">
          {children ?? (
            <p className="max-w-xl text-2xl leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {tagline}
            </p>
          )}
        </div>
      </div>

      {open ? (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="jk-sg-panel absolute inset-0 z-50 flex min-h-[100dvh] flex-col bg-background text-foreground"
          id={panelId}
          onPointerMove={moveSheen}
          ref={panelRef}
          role="dialog"
        >
          <div
            aria-hidden="true"
            className="jk-sg-sheen pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(28rem 22rem at var(--jk-sg-px, 72%) var(--jk-sg-py, 18%), color-mix(in oklab, var(--jk-foreground) 12%, transparent), transparent 72%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--jk-muted)_70%,transparent),transparent)]"
          />

          <HeaderBar
            brand={brand}
            brandHref={brandHref}
            action={
              <button
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium tracking-[0.16em] text-foreground uppercase outline-none transition-[transform,background-color] duration-200 motion-reduce:transition-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
                onClick={() => setOpen(false)}
                ref={closeButtonRef}
                type="button"
              >
                <XIcon aria-hidden="true" className="size-3.5" />
                {closeLabel}
              </button>
            }
          />

          <div className="relative flex min-h-0 flex-1 flex-col justify-between gap-10 px-5 pt-6 pb-8 sm:px-8 sm:pt-8 lg:px-10">
            <nav aria-labelledby={titleId} className="max-w-5xl">
              <h2 className="sr-only" id={titleId}>
                {brand} navigation
              </h2>
              <ul className="flex flex-col">
                {links.map((link, index) => (
                  <li
                    className="jk-sg-item border-t border-border/80 last:border-b"
                    key={`${link.href}-${link.label}`}
                    style={{ "--jk-sg-n": index } as CSSProperties}
                  >
                    <a
                      className="jk-sg-link group flex items-baseline justify-between gap-6 py-3 outline-none sm:py-4"
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                        {link.index ? (
                          <span className="w-8 shrink-0 text-[11px] tracking-[0.16em] text-muted-foreground">
                            {link.index}
                          </span>
                        ) : null}
                        <span className="min-w-0 text-4xl leading-[1.1] font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                          <span className="sr-only">{link.label}</span>
                          <KineticLabel text={link.label} />
                        </span>
                      </span>
                      {link.kicker ? (
                        <span className="hidden max-w-[12rem] text-right text-sm text-muted-foreground transition-colors duration-200 motion-reduce:transition-none group-hover:text-foreground group-focus-visible:text-foreground sm:block">
                          {link.kicker}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="jk-sg-item flex flex-col gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-end sm:justify-between">
              {cta ? (
                <a
                  className="inline-flex w-fit items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background outline-none transition-[transform,filter] duration-200 motion-reduce:transition-none hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
                  href={cta.href}
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </a>
              ) : null}
              {footnote ? (
                <p className="text-sm text-muted-foreground">{footnote}</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
