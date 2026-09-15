import type {
  Footer27LegalLink,
  Footer27LinkColumn,
  Footer27Props,
  Footer27SocialLink,
} from "./Footer27.types";

export const footer27LinkColumns: Footer27LinkColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Team signals", href: "#signals" },
      { label: "Work maps", href: "#maps" },
      { label: "Automation", href: "#automation" },
      { label: "Playbooks", href: "#playbooks" },
      { label: "API", href: "#api" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Getting started", href: "#start" },
      { label: "API reference", href: "#reference" },
      { label: "Guides", href: "#guides" },
      { label: "Patterns", href: "#patterns" },
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
      { label: "Privacy policy", href: "#privacy" },
    ],
  },
];

export const footer27SocialLinks: Footer27SocialLink[] = [
  { label: "Facebook", href: "#facebook", kind: "facebook" },
  { label: "X", href: "#x", kind: "x" },
  { label: "Instagram", href: "#instagram", kind: "instagram" },
  { label: "LinkedIn", href: "#linkedin", kind: "linkedin" },
];

export const footer27LegalLinks: Footer27LegalLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
];

export const footer27Mocks = {
  default: {
    heroSrc: "/assets/21ee8ee30ffbdcb1.webp",
    heroAlt: "A mountain ridge at dusk with pine silhouettes along the valley",
    headline: "The next quarter\nis adaptive.",
    description:
      "Velora helps distributed teams spot patterns and tighten work systems without extra process.",
    primaryCta: { label: "Contact Us", href: "#contact" },
    brandName: "Velora",
    brandHref: "#home",
    tagline: "Crafting work systems that stay useful after the first quarter.",
    connectCta: { label: "Let's Connect", href: "#connect" },
    linkColumns: footer27LinkColumns,
    socialTitle: "Stay Connected",
    socialDescription: "Follow along for updates, notes, and the next release.",
    socialLinks: footer27SocialLinks,
    legalLinks: footer27LegalLinks,
    copyright: "© 2026 Velora, Inc. All rights reserved.",
    wordmark: "VELORA",
  },
  alternate: {
    heroSrc: "/assets/bf4e978c5bd9765e.webp",
    heroAlt: "A wide landscape used as a photographic footer close",
    headline: "Work stays sharp\nwhen it adapts.",
    description:
      "Halden maps how studios actually ship, then cuts the loops that slow the next brief.",
    primaryCta: { label: "Talk to us", href: "#talk" },
    brandName: "Halden",
    brandHref: "#top",
    tagline:
      "A quieter close for teams that ship campaigns and the systems behind them.",
    connectCta: { label: "Start a brief", href: "#brief" },
    linkColumns: [
      {
        title: "Studio",
        links: [
          { label: "Approach", href: "#approach" },
          { label: "People", href: "#people" },
          { label: "Visit", href: "#visit" },
        ],
      },
      {
        title: "Work",
        links: [
          { label: "Index", href: "#index" },
          { label: "Process", href: "#process" },
          { label: "Archive", href: "#archive" },
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
    socialTitle: "Keep in touch",
    socialDescription: "Short notes when a new system ships.",
    socialLinks: footer27SocialLinks,
    legalLinks: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
    ],
    copyright: "© 2026 Halden. All rights reserved.",
    wordmark: "HALDEN",
  },
} satisfies Record<string, Footer27Props>;
