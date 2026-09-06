import {
  type LucideIcon,
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/cn";
import type {
  FooterColumnContactIcon,
  FooterColumnLink,
  FooterColumnProps,
  FooterColumnSocialIcon,
} from "./FooterColumn.types";

const socialIcons: Record<FooterColumnSocialIcon, LucideIcon> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  dribbble: DribbbleIcon,
};

const contactIcons: Record<FooterColumnContactIcon, LucideIcon> = {
  mail: MailIcon,
  phone: PhoneIcon,
  "map-pin": MapPinIcon,
};

const defaults = {
  brandName: "Harbor",
  brandHref: "#home",
  description:
    "Quiet tools for studios that already ship. Landing blocks, registries, and the copy that holds a page together.",
  socialLinks: [
    { name: "Facebook", href: "#facebook", icon: "facebook" as const },
    { name: "Instagram", href: "#instagram", icon: "instagram" as const },
    { name: "Twitter", href: "#twitter", icon: "twitter" as const },
    { name: "GitHub", href: "#github", icon: "github" as const },
    { name: "Dribbble", href: "#dribbble", icon: "dribbble" as const },
  ],
  aboutTitle: "About us",
  aboutLinks: [
    { label: "Studio history", href: "#history" },
    { label: "Meet the desk", href: "#team" },
    { label: "Handbook", href: "#handbook" },
    { label: "Careers", href: "#careers" },
  ],
  servicesTitle: "Our services",
  serviceLinks: [
    { label: "Product sites", href: "#sites" },
    { label: "Design systems", href: "#systems" },
    { label: "Launch copy", href: "#copy" },
    { label: "Launch ads", href: "#ads" },
  ],
  helpTitle: "Helpful links",
  helpLinks: [
    { label: "FAQs", href: "#faqs" },
    { label: "Support", href: "#support" },
    { label: "Live chat", href: "#chat", indicator: true },
  ],
  contactTitle: "Contact us",
  contactItems: [
    {
      icon: "mail" as const,
      label: "hello@harbor.work",
      href: "mailto:hello@harbor.work",
    },
    {
      icon: "phone" as const,
      label: "+1 (503) 555-0148",
      href: "tel:+15035550148",
    },
    {
      icon: "map-pin" as const,
      label: "18 Dock Street, Portland",
      address: true,
    },
  ],
  copyright: "© 2026 Harbor",
  rightsLabel: "All rights reserved.",
};

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-[--radius] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
    >
      <rect
        width="32"
        height="32"
        rx="16"
        className="fill-primary/15"
      />
      <path
        d="M9 21.5 16 8.5l7 13H9Z"
        className="fill-primary"
      />
    </svg>
  );
}

function LinkList({
  id,
  title,
  links,
}: {
  id: string;
  title: string;
  links: FooterColumnLink[];
}) {
  return (
    <nav aria-labelledby={id} className="text-center sm:text-left">
      <h3 id={id} className="text-lg font-medium tracking-tight">
        {title}
      </h3>
      {links.length ? (
        <ul className="mt-8 m-0 flex list-none flex-col gap-4 p-0">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                className={cn(
                  linkClass,
                  link.indicator &&
                    "inline-flex items-center justify-center gap-1.5 sm:justify-start",
                )}
              >
                <span>{link.label}</span>
                {link.indicator ? (
                  <span className="relative inline-flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full rounded-full bg-primary opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}

export function FooterColumn({
  className,
  brandName = defaults.brandName,
  brandHref = defaults.brandHref,
  description = defaults.description,
  logoSrc,
  logoAlt,
  socialLinks = defaults.socialLinks,
  aboutTitle = defaults.aboutTitle,
  aboutLinks = defaults.aboutLinks,
  servicesTitle = defaults.servicesTitle,
  serviceLinks = defaults.serviceLinks,
  helpTitle = defaults.helpTitle,
  helpLinks = defaults.helpLinks,
  contactTitle = defaults.contactTitle,
  contactItems = defaults.contactItems,
  copyright = defaults.copyright,
  rightsLabel = defaults.rightsLabel,
  ...props
}: FooterColumnProps) {
  const headingId = useId();

  return (
    <footer
      data-slot="footer-column"
      className={cn(
        "w-full rounded-t-[calc(var(--radius)+0.75rem)] bg-secondary text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a
              href={brandHref}
              className="inline-flex w-full items-center justify-center gap-2 text-primary sm:justify-start focus-visible:rounded-[--radius] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={logoAlt ?? ""}
                  className="size-8 rounded-full object-cover"
                />
              ) : (
                <BrandMark className="size-8" />
              )}
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                {brandName}
              </span>
            </a>

            {description ? (
              <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:max-w-xs sm:text-left">
                {description}
              </p>
            ) : null}

            {socialLinks.length ? (
              <ul className="mt-8 m-0 flex list-none justify-center gap-6 p-0 sm:justify-start md:gap-8">
                {socialLinks.map((item) => {
                  const Icon = socialIcons[item.icon];
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-primary transition-colors hover:text-primary/80 focus-visible:rounded-[--radius] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                      >
                        <span className="sr-only">{item.name}</span>
                        <Icon className="size-6" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <LinkList
              id={`${headingId}-about`}
              title={aboutTitle}
              links={aboutLinks}
            />
            <LinkList
              id={`${headingId}-services`}
              title={servicesTitle}
              links={serviceLinks}
            />
            <LinkList
              id={`${headingId}-help`}
              title={helpTitle}
              links={helpLinks}
            />

            <div className="text-center sm:text-left">
              <h3
                id={`${headingId}-contact`}
                className="text-lg font-medium tracking-tight"
              >
                {contactTitle}
              </h3>
              {contactItems.length ? (
                <ul className="mt-8 m-0 flex list-none flex-col gap-4 p-0">
                  {contactItems.map((item) => {
                    const Icon = contactIcons[item.icon];
                    const label = item.address ? (
                      <address className="-mt-0.5 flex-1 not-italic">
                        {item.label}
                      </address>
                    ) : (
                      <span className="flex-1">{item.label}</span>
                    );
                    const body = (
                      <>
                        <Icon
                          className="size-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {label}
                      </>
                    );
                    return (
                      <li
                        key={item.label}
                        className="text-sm text-muted-foreground"
                      >
                        {item.href ? (
                          <a
                            href={item.href}
                            className="inline-flex w-full items-center justify-center gap-1.5 transition-colors hover:text-foreground sm:justify-start focus-visible:rounded-[--radius] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                          >
                            {body}
                          </a>
                        ) : (
                          <span className="inline-flex w-full items-center justify-center gap-1.5 sm:justify-start">
                            {body}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            {rightsLabel ? (
              <p className="text-sm text-foreground">{rightsLabel}</p>
            ) : null}
            {copyright ? (
              <p className="mt-4 text-sm text-muted-foreground sm:order-first sm:mt-0">
                {copyright}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
