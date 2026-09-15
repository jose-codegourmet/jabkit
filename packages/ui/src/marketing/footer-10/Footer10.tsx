"use client";

import { ArrowRightIcon } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { cn } from "@/lib/cn";
import type { Footer10LinkColumn, Footer10Props } from "./Footer10.types";

const defaultLinkColumns: Footer10LinkColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Journal", href: "#journal" },
      { label: "Community", href: "#community" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
];

const defaults = {
  bannerTagline: "Trusted by Thousands",
  bannerHeading:
    "Interested in working together, trying out the platform or simply learning more?",
  bannerCtaLabel: "Learn Our Approach",
  bannerCtaHref: "#approach",
  bannerBackgroundImage: "/assets/67ac039d3bfb4ac9.webp",
  contactLabel: "Reach out :",
  contactEmail: "hello@fieldline.studio",
  contactEmailHref: "mailto:hello@fieldline.studio",
  description:
    "Next-generation cloud platform delivering unmatched speed, security, and scalability. Designed for developers. Engineered for the future.",
  newsletterPlaceholder: "Email address",
  brandName: "Fieldline",
  copyright: "© 2026 Fieldline. All rights reserved.",
} as const;

const plate =
  "bg-[color-mix(in_oklab,var(--jk-primary),var(--jk-background)_94%)]";
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Footer10({
  className,
  bannerTagline = defaults.bannerTagline,
  bannerHeading = defaults.bannerHeading,
  bannerCtaLabel = defaults.bannerCtaLabel,
  bannerCtaHref = defaults.bannerCtaHref,
  bannerBackgroundImage = defaults.bannerBackgroundImage,
  contactLabel = defaults.contactLabel,
  contactEmail = defaults.contactEmail,
  contactEmailHref = defaults.contactEmailHref,
  description = defaults.description,
  newsletterPlaceholder = defaults.newsletterPlaceholder,
  onSubscribe,
  linkColumns = defaultLinkColumns,
  brandName = defaults.brandName,
  copyright = defaults.copyright,
  ...props
}: Footer10Props) {
  const headingId = useId();
  const emailFieldId = useId();
  const [email, setEmail] = useState("");

  const handleSubscribeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = email.trim();
    if (!next) return;
    onSubscribe?.(next);
    setEmail("");
  };

  return (
    <footer
      data-slot="footer-10"
      className={cn(
        "w-full font-sans text-foreground antialiased selection:bg-primary/20",
        className,
      )}
      {...props}
    >
      <style href="jk-footer-10" precedence="default">{`
        .jk-footer10-arrow {
          transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .jk-footer10-cta:hover .jk-footer10-arrow,
        .jk-footer10-cta:focus-visible .jk-footer10-arrow {
          transform: translateX(4px);
        }
        .jk-footer10-mail:hover .jk-footer10-arrow,
        .jk-footer10-mail:focus-visible .jk-footer10-arrow {
          transform: translateX(8px);
        }
        .jk-footer10-submit:hover .jk-footer10-arrow,
        .jk-footer10-submit:focus-visible .jk-footer10-arrow {
          transform: translateX(2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-footer10-arrow {
            transition: none;
          }
          .jk-footer10-cta:hover .jk-footer10-arrow,
          .jk-footer10-cta:focus-visible .jk-footer10-arrow,
          .jk-footer10-mail:hover .jk-footer10-arrow,
          .jk-footer10-mail:focus-visible .jk-footer10-arrow,
          .jk-footer10-submit:hover .jk-footer10-arrow,
          .jk-footer10-submit:focus-visible .jk-footer10-arrow {
            transform: none;
          }
        }
      `}</style>

      <div className={cn("mx-auto w-full max-w-7xl pb-10", plate)}>
        <div className="relative overflow-hidden rounded-none bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16 md:px-16 lg:py-20">
          {bannerBackgroundImage ? (
            <img
              src={bannerBackgroundImage}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90 outline outline-offset-[-1px] outline-primary-foreground/20 select-none"
            />
          ) : null}

          <div className="relative z-10 flex flex-col justify-between gap-6">
            <p className="inline-flex items-center gap-1.5 rounded-full py-1 text-xs font-medium tracking-wide">
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-primary-foreground"
              />
              <span className="font-medium text-primary-foreground/80">
                {bannerTagline}
              </span>
            </p>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <h2
                id={headingId}
                className="max-w-2xl text-2xl leading-tight font-light tracking-tight sm:text-3xl md:text-4xl"
              >
                {bannerHeading}
              </h2>

              <a
                href={bannerCtaHref}
                className={cn(
                  "jk-footer10-cta inline-flex shrink-0 items-center gap-2.5 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground",
                  "transition-opacity duration-200 hover:opacity-90",
                  focusRing,
                )}
              >
                <span>{bannerCtaLabel}</span>
                <ArrowRightIcon
                  aria-hidden="true"
                  className="jk-footer10-arrow size-3.5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 px-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <p className="text-lg font-medium text-muted-foreground">
                {contactLabel}
              </p>
              <a
                href={contactEmailHref}
                className={cn(
                  "jk-footer10-mail mt-1 inline-flex items-baseline gap-2.5 rounded-sm text-2xl font-medium tracking-tight text-foreground",
                  "transition-opacity duration-200 hover:opacity-70",
                  "sm:text-3xl",
                  focusRing,
                )}
              >
                <span>{contactEmail}</span>
                <ArrowRightIcon
                  aria-hidden="true"
                  className="jk-footer10-arrow size-6"
                />
              </a>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-7">
            <form
              onSubmit={handleSubscribeSubmit}
              className="w-full max-w-md self-end"
            >
              <div className="flex items-center justify-between border-b-2 border-border pb-1 transition-colors duration-200 focus-within:border-foreground">
                <input
                  id={emailFieldId}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={newsletterPlaceholder}
                  required
                  autoComplete="email"
                  aria-label="Subscribe to our newsletter"
                  className="h-10 w-full rounded-none border-0 bg-transparent px-0 text-base text-foreground placeholder:text-muted-foreground/60 outline-none focus-visible:ring-0"
                />
                <button
                  type="submit"
                  className={cn(
                    "jk-footer10-submit rounded-sm p-2 text-muted-foreground transition-colors duration-200 hover:text-primary",
                    focusRing,
                  )}
                  aria-label="Submit newsletter subscription"
                >
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="jk-footer10-arrow size-4"
                  />
                </button>
              </div>
            </form>

            {linkColumns.length > 0 ? (
              <nav aria-label="Footer">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
                  {linkColumns.map((column) => (
                    <div key={column.title} className="flex flex-col">
                      <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
                        {column.title}
                      </h3>
                      <ul className="mt-4 flex list-none flex-col gap-3 p-0">
                        {column.links.map((link) => (
                          <li key={`${column.title}-${link.label}`}>
                            <a
                              href={link.href}
                              className={cn(
                                "rounded-sm text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground",
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
                </div>
              </nav>
            ) : null}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-base font-medium text-foreground">
            {brandName}
          </span>
          <span className="text-base font-semibold text-foreground">
            {copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
