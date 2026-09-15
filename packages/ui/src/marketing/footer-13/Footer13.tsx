"use client";

import { ArrowRightIcon } from "lucide-react";
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
  Footer13BottomLink,
  Footer13LinkColumn,
  Footer13Props,
  Footer13SocialKind,
  Footer13SocialLink,
} from "./Footer13.types";

const defaultLinkColumns: Footer13LinkColumn[] = [
  {
    title: "Company",
    links: [
      { label: "Manifesto", href: "#manifesto" },
      { label: "Careers", href: "#careers" },
      { label: "Partners", href: "#partners" },
      { label: "Inquiries", href: "#inquiries" },
    ],
  },
  {
    title: "Journal",
    links: [
      { label: "Dispatches", href: "#dispatches" },
      { label: "Ethics", href: "#ethics" },
      { label: "Almanac", href: "#almanac" },
      { label: "Papers", href: "#papers" },
      { label: "Briefings", href: "#briefings" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Method", href: "#method" },
      { label: "Studio", href: "#studio" },
      { label: "Contact", href: "#contact" },
      { label: "Products", href: "#products" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Security Policy", href: "#security" },
    ],
  },
];

const defaultSocialLinks: Footer13SocialLink[] = [
  { label: "Facebook", href: "#facebook", kind: "facebook" },
  { label: "X", href: "#x", kind: "x" },
  { label: "Instagram", href: "#instagram", kind: "instagram" },
  { label: "LinkedIn", href: "#linkedin", kind: "linkedin" },
];

const defaultBottomLinks: Footer13BottomLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
];

const defaults = {
  heroSrc: "/assets/21ee8ee30ffbdcb1.webp",
  heroAlt: "A mountain ridge at dusk with pine silhouettes along the valley",
  brandName: "Pinemoor",
  contactTitle: "Contact Us",
  emailPlaceholder: "Enter your email",
  subscribeLabel: "Subscribe",
  subscribeTagline: "Quiet dusk notes,\nonce a month.",
  copyright: "© 2026 Pinemoor. All rights reserved.",
} as const;

const plate =
  "bg-[color-mix(in_oklab,var(--jk-foreground),var(--jk-background)_8%)] dark:bg-[color-mix(in_oklab,var(--jk-background),var(--jk-foreground)_4%)]";
const ink = "text-background dark:text-foreground";
const inkSoft = "text-background/55 dark:text-foreground/55";
const inkMute = "text-background/70 dark:text-foreground/70";
const inkFaint = "text-background/40 dark:text-foreground/40";
const paper =
  "bg-background text-foreground dark:bg-foreground dark:text-background";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function DefaultBrandMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <rect x="3" y="3" width="26" height="26" rx="8" />
      <path d="M11 8h5v16h-5z" opacity="0.35" />
    </svg>
  );
}

function SocialGlyph({ kind }: { kind: Footer13SocialKind }) {
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

export function Footer13({
  className,
  heroSrc = defaults.heroSrc,
  heroAlt = defaults.heroAlt,
  brandName = defaults.brandName,
  brandLogo,
  linkColumns = defaultLinkColumns,
  contactTitle = defaults.contactTitle,
  emailPlaceholder = defaults.emailPlaceholder,
  subscribeLabel = defaults.subscribeLabel,
  subscribeTagline = defaults.subscribeTagline,
  onSubscribe,
  copyright = defaults.copyright,
  socialLinks = defaultSocialLinks,
  bottomLinks = defaultBottomLinks,
  ...props
}: Footer13Props) {
  const emailFieldId = useId();
  const [email, setEmail] = useState("");
  const { ref, inView } = useOnceInView<HTMLElement>(0.08);

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
      data-slot="footer-13"
      className={cn(
        "jk-footer13 w-full overflow-hidden font-sans antialiased",
        inView && "jk-footer13-in",
        className,
      )}
      {...props}
    >
      <style href="jk-footer-13" precedence="default">{`
        .jk-footer13-hero {
          opacity: 0;
          transform: scale(1.04);
        }
        .jk-footer13-rise {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(8px);
        }
        .jk-footer13-in .jk-footer13-hero {
          animation: jk-footer13-hero 1.05s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-footer13-in .jk-footer13-rise {
          animation: jk-footer13-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--jk-footer13-delay, 0ms);
        }
        .jk-footer13-hero-img {
          mask-image: linear-gradient(
            to bottom,
            var(--jk-foreground) 80%,
            transparent
          );
        }
        .jk-footer13-submit {
          background-image: linear-gradient(
            to right,
            var(--jk-primary) 0%,
            var(--jk-destructive) 50%,
            var(--jk-warning) 100%
          );
          color: var(--jk-warning-foreground);
        }
        .jk-footer13-submit:hover {
          filter: brightness(1.06);
        }
        .jk-footer13-submit:active {
          transform: scale(0.96);
        }
        @keyframes jk-footer13-hero {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes jk-footer13-rise {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-footer13-hero,
          .jk-footer13-rise,
          .jk-footer13-in .jk-footer13-hero,
          .jk-footer13-in .jk-footer13-rise {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
          .jk-footer13-submit,
          .jk-footer13-submit:active {
            transform: none;
            filter: none;
          }
        }
      `}</style>

      <div className="jk-footer13-hero relative h-[340px] w-full overflow-hidden sm:h-[400px] md:h-[460px] lg:h-[520px]">
        <img
          src={heroSrc}
          alt={heroAlt}
          className="jk-footer13-hero-img h-full w-full object-cover object-center outline outline-1 outline-offset-[-1px] outline-background/10 select-none dark:outline-foreground/10"
        />
      </div>

      <div className={cn("px-6 pt-8 sm:px-10 lg:px-14 xl:px-20", plate, ink)}>
        <div className="flex flex-col gap-10 border-b border-background/10 pb-8 dark:border-foreground/10">
          <div
            className="jk-footer13-rise flex shrink-0 items-center gap-2"
            style={{ "--jk-footer13-delay": "40ms" } as CSSProperties}
          >
            <span className="shrink-0 text-background dark:text-foreground">
              {brandLogo ?? <DefaultBrandMark className="size-8" />}
            </span>
            <span className="select-none text-xl font-normal tracking-wide uppercase">
              {brandName}
            </span>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid flex-1 grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(210px,350px)]"
          >
            {linkColumns.map((column, index) => (
              <div
                key={column.title}
                className="jk-footer13-rise"
                style={
                  {
                    "--jk-footer13-delay": `${80 + index * 80}ms`,
                  } as CSSProperties
                }
              >
                <h3 className="text-lg leading-none font-light tracking-wide text-balance">
                  {column.title}
                </h3>
                <ul className="mt-[18px] flex list-none flex-col space-y-[11px] p-0">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className={cn(
                          "rounded-none text-sm leading-none font-light",
                          inkSoft,
                          "transition-colors duration-200 hover:text-background dark:hover:text-foreground",
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

            <div
              className="jk-footer13-rise col-span-2 sm:col-span-2 lg:col-span-1"
              style={
                {
                  "--jk-footer13-delay": `${80 + linkColumns.length * 80}ms`,
                } as CSSProperties
              }
            >
              <h3 className="text-sm leading-none font-medium tracking-wide text-balance">
                {contactTitle}
              </h3>
              <form onSubmit={handleSubscribeSubmit} className="mt-[18px]">
                <div className="flex w-full max-w-2xl gap-2 overflow-hidden rounded-none">
                  <label htmlFor={emailFieldId} className="sr-only">
                    Email address
                  </label>
                  <input
                    id={emailFieldId}
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={emailPlaceholder}
                    required
                    autoComplete="email"
                    className={cn(
                      "h-[42px] min-w-0 flex-1 rounded-none px-3 text-sm font-normal",
                      paper,
                      "placeholder:text-muted-foreground",
                      "focus:outline-none",
                      focusRing,
                    )}
                  />
                  <button
                    type="submit"
                    className={cn(
                      "jk-footer13-submit flex h-[42px] shrink-0 cursor-pointer items-center gap-1.5 rounded-none pr-3 pl-3.5 text-sm font-medium outline outline-2 outline-offset-[-2px] outline-background/10 dark:outline-foreground/10",
                      "transition-[filter,transform] duration-150",
                      focusRing,
                    )}
                  >
                    <span>{subscribeLabel}</span>
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-3 shrink-0"
                    />
                  </button>
                </div>
                <p
                  className={cn(
                    "mt-2.5 text-sm leading-[1.55] font-light text-pretty whitespace-pre-line",
                    inkMute,
                  )}
                >
                  {subscribeTagline}
                </p>
              </form>
            </div>
          </nav>
        </div>

        <div
          className="jk-footer13-rise flex flex-col gap-5 py-[18px] text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          style={{ "--jk-footer13-delay": "420ms" } as CSSProperties}
        >
          <p className={cn("text-base font-normal", inkMute)}>{copyright}</p>

          <div className="flex items-center gap-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={cn(
                  "flex min-h-10 min-w-10 items-center justify-center rounded-none",
                  inkSoft,
                  "transition-colors duration-200 hover:text-background dark:hover:text-foreground",
                  "active:scale-95 motion-reduce:active:scale-100",
                  focusRing,
                )}
              >
                <span className="text-[15px]">
                  {link.icon ??
                    (link.kind ? <SocialGlyph kind={link.kind} /> : link.label)}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-none font-normal",
                  inkFaint,
                  "transition-colors duration-200 hover:text-background/70 dark:hover:text-foreground/70",
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
