import * as React from "react";
import { cn } from "@/lib/cn";
import { AgencyContactSection } from "@/marketing/agency-contact-section";
import { AgencyIndexSection } from "@/marketing/agency-index-section";
import { AgencyServicesSection } from "@/marketing/agency-services-section";
import { AgencyTopbar } from "@/marketing/agency-topbar";
import type { AgencyLayoutPageProps } from "./AgencyLayoutPage.types";

const defaultFooterColumns = [
  {
    title: "Index",
    links: [
      { label: "Top", href: "#top" },
      { label: "Works", href: "#works" },
      { label: "Services", href: "#services" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Are.na", href: "#arena" },
      { label: "Instagram", href: "#instagram" },
      { label: "Read.cv", href: "#readcv" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Imprint", href: "#imprint" },
      { label: "Privacy", href: "#privacy" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
  {
    title: "Colophon",
    links: [
      { label: "Set in Archivo and JBR", href: "#colophon" },
      { label: "OKLCH color space", href: "#color" },
      { label: "Hand-coded HTML/CSS", href: "#build" },
    ],
  },
];

export function AgencyLayoutPage({
  className,
  nav,
  index,
  services,
  contact,
  footerBrand = "LA YO UT",
  footerColumns = defaultFooterColumns,
  ...props
}: AgencyLayoutPageProps) {
  return (
    <div
      id="top"
      data-slot="agency-layout-page"
      className={cn(
        "bg-background text-foreground motion-safe:scroll-smooth",
        className,
      )}
      {...props}
    >
      <AgencyTopbar {...nav} />
      <AgencyIndexSection {...index} />
      <AgencyServicesSection {...services} />
      <AgencyContactSection {...contact} />
      <footer className="bg-foreground px-[var(--jk-space-gutter)] py-16 text-background">
        <p className="font-[family-name:var(--jk-font-display)] text-5xl font-semibold tracking-tight uppercase sm:text-7xl">
          {footerBrand.split(" ").map((part) => (
            <React.Fragment key={part}>
              <span
                aria-hidden="true"
                className="mx-1 text-warning first:hidden"
              >
                ●
              </span>
              {part}
            </React.Fragment>
          ))}
        </p>
        <nav
          aria-label="Footer"
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-background/70">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-background no-underline transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </footer>
    </div>
  );
}
