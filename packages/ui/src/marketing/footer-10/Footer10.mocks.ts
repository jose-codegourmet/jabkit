import type { Footer10LinkColumn, Footer10Props } from "./Footer10.types";

export const footer10LinkColumns: Footer10LinkColumn[] = [
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

export const footer10Mocks = {
  default: {
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
    linkColumns: footer10LinkColumns,
    brandName: "Fieldline",
    copyright: "© 2026 Fieldline. All rights reserved.",
  },
  alternate: {
    bannerTagline: "Built with studios",
    bannerHeading:
      "Need a quieter path for your next launch, or just want the field notes?",
    bannerCtaLabel: "See the method",
    bannerCtaHref: "#method",
    bannerBackgroundImage: undefined,
    contactLabel: "Write to us :",
    contactEmail: "desk@harbor.studio",
    contactEmailHref: "mailto:desk@harbor.studio",
    description:
      "A focused cloud desk for product teams who want speed without the noise. Built for makers. Kept small on purpose.",
    newsletterPlaceholder: "Work email",
    linkColumns: [
      {
        title: "Work",
        links: [
          { label: "Projects", href: "#projects" },
          { label: "Process", href: "#process" },
          { label: "Index", href: "#index" },
        ],
      },
      {
        title: "Studio",
        links: [
          { label: "About", href: "#about" },
          { label: "People", href: "#people" },
          { label: "Visit", href: "#visit" },
        ],
      },
      {
        title: "Notes",
        links: [
          { label: "Journal", href: "#journal" },
          { label: "Updates", href: "#updates" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#privacy" },
          { label: "Terms", href: "#terms" },
        ],
      },
    ],
    brandName: "harbor.studio",
    copyright: "© 2026 harbor.studio. All rights reserved.",
  },
} satisfies Record<string, Footer10Props>;
