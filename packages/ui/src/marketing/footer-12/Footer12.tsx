"use client";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import {
  type CSSProperties,
  type FormEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import type {
  Footer12Appearance,
  Footer12LinkColumn,
  Footer12Props,
  Footer12SocialKind,
  Footer12SocialLink,
} from "./Footer12.types";

const defaultLinkColumns: Footer12LinkColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Transactional mail", href: "#transactional" },
      { label: "Campaign mail", href: "#campaigns" },
      { label: "Automations", href: "#automations" },
      { label: "Composer", href: "#composer" },
      { label: "SMTP", href: "#smtp" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Start here", href: "#start" },
      { label: "API reference", href: "#api" },
      { label: "Guides", href: "#guides" },
      { label: "Delivery", href: "#delivery" },
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
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

const defaultSocialLinks: Footer12SocialLink[] = [
  { label: "Facebook", href: "#facebook", kind: "facebook" },
  { label: "X", href: "#x", kind: "x" },
  { label: "Instagram", href: "#instagram", kind: "instagram" },
  { label: "LinkedIn", href: "#linkedin", kind: "linkedin" },
];

const defaults = {
  newsletterTitle:
    "Keep the quarterly dispatch close. Product notes, delivery, and the mail we send.",
  newsletterPlaceholder: "Enter your email",
  subscribeLabel: "Subscribe",
  brandName: "Postlane",
  copyright: "© 2026 Postlane, Inc. All rights reserved.",
  languageLabel: "English",
} as const;

const plate =
  "bg-[color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_12%)] dark:bg-[color-mix(in_oklab,var(--jk-background),var(--jk-foreground)_6%)]";
const ink = "text-background dark:text-foreground";
const inkSoft = "text-background/90 dark:text-foreground/90";
const inkMute = "text-background/70 dark:text-foreground/70";
const paper =
  "bg-background text-foreground dark:bg-foreground dark:text-background";
const paperMuted =
  "bg-[color-mix(in_oklab,var(--jk-background),var(--jk-foreground)_14%)] text-foreground dark:bg-[color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_14%)] dark:text-background";

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
      <rect x="8" y="8" width="64" height="64" rx="22" />
      <path d="M26 24h12v32H26z" opacity="0.35" />
    </svg>
  );
}

function SocialGlyph({ kind }: { kind: Footer12SocialKind }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "size-[1em]",
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

function useOnceInView<T extends HTMLElement>() {
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
      { threshold: 0.28 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function Footer12({
  className,
  newsletterTitle = defaults.newsletterTitle,
  newsletterPlaceholder = defaults.newsletterPlaceholder,
  subscribeLabel = defaults.subscribeLabel,
  onSubscribe,
  linkColumns = defaultLinkColumns,
  brandName = defaults.brandName,
  brandLogo,
  copyright = defaults.copyright,
  socialLinks = defaultSocialLinks,
  languageLabel = defaults.languageLabel,
  onLanguageClick,
  appearance,
  defaultAppearance = "light",
  onAppearanceChange,
  ...props
}: Footer12Props) {
  const headingId = useId();
  const emailFieldId = useId();
  const [email, setEmail] = useState("");
  const [uncontrolledAppearance, setUncontrolledAppearance] =
    useState<Footer12Appearance>(defaultAppearance);
  const selectedAppearance = appearance ?? uncontrolledAppearance;
  const { ref, inView } = useOnceInView<HTMLElement>();
  const wordmarkWidth = Math.max(brandName.length * 90, 400);

  const setAppearance = (next: Footer12Appearance) => {
    if (appearance === undefined) {
      setUncontrolledAppearance(next);
    }
    onAppearanceChange?.(next);
  };

  const handleSubscribeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = email.trim();
    if (!next) return;
    onSubscribe?.(next);
    setEmail("");
  };

  return (
    <footer
      ref={ref}
      data-slot="footer-12"
      className={cn(
        "jk-footer12 w-full overflow-hidden font-sans antialiased",
        plate,
        ink,
        inView && "jk-footer12-in",
        className,
      )}
      {...props}
    >
      <style href="jk-footer-12" precedence="default">{`
        .jk-footer12-rise,
        .jk-footer12-brand {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(10px);
        }
        .jk-footer12-brand {
          transform: translateY(28px);
          filter: blur(12px);
        }
        .jk-footer12-in .jk-footer12-rise,
        .jk-footer12-in .jk-footer12-brand {
          animation: jk-footer12-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--jk-footer12-delay, 0ms);
        }
        .jk-footer12-in .jk-footer12-brand {
          animation-duration: 0.85s;
        }
        .jk-footer12-submit {
          transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 200ms ease;
        }
        .jk-footer12-submit:hover {
          opacity: 0.92;
        }
        .jk-footer12-submit:active {
          transform: scale(0.96);
        }
        @keyframes jk-footer12-rise {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-footer12-rise,
          .jk-footer12-brand,
          .jk-footer12-in .jk-footer12-rise,
          .jk-footer12-in .jk-footer12-brand {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
          .jk-footer12-submit,
          .jk-footer12-submit:active {
            transition: none;
            transform: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-12">
        <div className="mx-auto flex min-h-[390px] w-full flex-col justify-between">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,390px)_1fr] lg:gap-20">
            <div
              className="jk-footer12-rise max-w-[390px]"
              style={{ "--jk-footer12-delay": "80ms" } as CSSProperties}
            >
              <h2
                id={headingId}
                className="max-w-[330px] text-[18px] leading-[1.08] font-normal tracking-normal sm:text-[19px]"
              >
                {newsletterTitle}
              </h2>

              <form
                onSubmit={handleSubscribeSubmit}
                className="mt-6 max-w-[390px]"
              >
                <input
                  id={emailFieldId}
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={newsletterPlaceholder}
                  required
                  autoComplete="email"
                  aria-label="Subscribe to our newsletter"
                  className={cn(
                    "h-[50px] w-full rounded-md px-6 text-sm font-normal outline outline-1 outline-foreground/10",
                    paperMuted,
                    "placeholder:text-muted-foreground transition-[background-color,outline-color] duration-200",
                    "focus:outline-background/40 dark:focus:outline-foreground/40",
                    "focus-visible:ring-0",
                  )}
                />

                <button
                  type="submit"
                  className={cn(
                    "jk-footer12-submit mt-5 inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full px-5 text-base font-medium",
                    paper,
                    "shadow-[inset_0_2px_2px_1px_color-mix(in_oklab,var(--jk-background),transparent_0%),inset_0_-2px_2px_1px_color-mix(in_oklab,var(--jk-foreground),transparent_90%)]",
                    "dark:shadow-[inset_0_2px_2px_1px_color-mix(in_oklab,var(--jk-foreground),transparent_8%),inset_0_-2px_2px_1px_color-mix(in_oklab,var(--jk-background),transparent_70%)]",
                    focusRing,
                  )}
                >
                  <span>{subscribeLabel}</span>
                  <ArrowRightIcon aria-hidden="true" className="size-4" />
                </button>
              </form>
            </div>

            {linkColumns.length > 0 ? (
              <nav
                aria-label="Footer"
                className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 lg:pt-0"
              >
                {linkColumns.map((column, index) => (
                  <div
                    key={column.title}
                    className="jk-footer12-rise"
                    style={
                      {
                        "--jk-footer12-delay": `${180 + index * 80}ms`,
                      } as CSSProperties
                    }
                  >
                    <h3 className="text-lg leading-none font-normal tracking-wide uppercase">
                      {column.title}
                    </h3>
                    <ul className="mt-5 flex list-none flex-col gap-3 p-0">
                      {column.links.map((link) => (
                        <li key={`${column.title}-${link.label}`}>
                          <a
                            href={link.href}
                            className={cn(
                              "rounded-sm text-sm leading-none font-light tracking-wide",
                              inkSoft,
                              "transition-opacity duration-200 hover:opacity-100",
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
            ) : null}
          </div>

          <div
            className="jk-footer12-brand mx-auto mt-12 flex w-full items-center justify-center overflow-hidden sm:mt-8 lg:mt-4"
            style={{ "--jk-footer12-delay": "420ms" } as CSSProperties}
          >
            <div className="hidden shrink-0 text-background/80 dark:text-foreground/80 md:block">
              {brandLogo ?? <DefaultBrandMark className="size-20 lg:size-60" />}
            </div>
            <svg
              className="h-auto w-full flex-1 select-none"
              viewBox={`0 0 ${wordmarkWidth} 110`}
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label={brandName}
            >
              <title>{brandName}</title>
              <text
                x="50%"
                y="98%"
                dominantBaseline="alphabetic"
                textAnchor="middle"
                textLength="90%"
                lengthAdjust="spacing"
                className="fill-background font-sans font-normal tracking-wider dark:fill-foreground"
                fontSize="130"
              >
                {brandName}
              </text>
            </svg>
          </div>

          <div
            className="jk-footer12-rise mt-9 grid gap-6 md:grid-cols-3 md:items-center"
            style={{ "--jk-footer12-delay": "520ms" } as CSSProperties}
          >
            <p className={cn("text-base leading-none font-light", inkMute)}>
              {copyright}
            </p>

            <div className="flex items-center gap-5 md:justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={cn(
                    "flex min-h-10 min-w-10 items-center justify-center md:min-h-6 md:min-w-6",
                    inkSoft,
                    "transition-opacity duration-200 hover:opacity-100 active:scale-95",
                    "motion-reduce:active:scale-100",
                    focusRing,
                    "rounded-sm",
                  )}
                >
                  <span className="text-base md:text-[16px]">
                    {link.icon ??
                      (link.kind ? (
                        <SocialGlyph kind={link.kind} />
                      ) : (
                        link.label
                      ))}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              <fieldset
                className={cn(
                  "m-0 flex h-7 items-center rounded-full border-0 p-0.5",
                  paper,
                )}
              >
                <legend className="sr-only">Color theme</legend>
                <AppearanceChip
                  active={selectedAppearance === "light"}
                  label="Light"
                  icon={<SunIcon aria-hidden="true" className="size-2.5" />}
                  onClick={() => setAppearance("light")}
                />
                <AppearanceChip
                  active={selectedAppearance === "dark"}
                  label="Dark"
                  icon={<MoonIcon aria-hidden="true" className="size-2.5" />}
                  onClick={() => setAppearance("dark")}
                />
              </fieldset>

              <button
                type="button"
                onClick={onLanguageClick}
                className={cn(
                  "inline-flex min-h-7 items-center gap-2 rounded-full px-4 text-base font-normal",
                  paper,
                  "transition-opacity duration-200 hover:opacity-90 active:scale-[0.98]",
                  "motion-reduce:active:scale-100",
                  focusRing,
                )}
              >
                <span>{languageLabel}</span>
                <ChevronDownIcon aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AppearanceChip({
  active,
  label,
  icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "flex h-full items-center gap-1.5 rounded-full px-2.5 text-[10px] font-medium",
        active
          ? "bg-[color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_82%)] text-foreground dark:bg-[color-mix(in_oklab,var(--jk-background),var(--jk-foreground)_18%)] dark:text-background"
          : "bg-transparent text-muted-foreground hover:text-foreground dark:hover:text-background",
        focusRing,
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
