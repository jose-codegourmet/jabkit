import type {
  Footer16LegalLink,
  Footer16LinkColumn,
  Footer16Props,
  Footer16SocialLink,
} from "./Footer16.types";

export const footer16LinkColumns: Footer16LinkColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Demand pipelines", href: "#demand" },
      { label: "Search presence", href: "#search" },
      { label: "Conversion paths", href: "#conversion" },
      { label: "Lifecycle loops", href: "#lifecycle" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Site systems", href: "#sites" },
      { label: "Brand kits", href: "#brand" },
      { label: "Growth studios", href: "#growth" },
      { label: "Commerce rails", href: "#commerce" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Field notes", href: "#notes" },
      { label: "Briefings", href: "#briefings" },
      { label: "Playbooks", href: "#playbooks" },
      { label: "Reports", href: "#reports" },
    ],
  },
];

export const footer16SocialLinks: Footer16SocialLink[] = [
  { label: "Facebook", href: "#facebook", kind: "facebook" },
  { label: "X", href: "#x", kind: "x" },
  { label: "Instagram", href: "#instagram", kind: "instagram" },
  { label: "LinkedIn", href: "#linkedin", kind: "linkedin" },
];

export const footer16LegalLinks: Footer16LegalLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
];

export const footer16Mocks = {
  default: {
    brandName: "MERID",
    brandHref: "#home",
    tagline:
      "Change the next quarter with demand\nand growth systems. Everything you need\nstarts here.",
    linkColumns: footer16LinkColumns,
    legalLinks: footer16LegalLinks,
    socialLinks: footer16SocialLinks,
    copyright: "© 2026 Merid. All rights reserved.",
    backgroundImage: "/assets/bf4e978c5bd9765e.webp",
  },
  alternate: {
    brandName: "HALDEN",
    brandHref: "#top",
    tagline:
      "A quieter close for studios that ship\ncampaigns, sites, and the systems behind them.",
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
    ],
    legalLinks: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
    ],
    socialLinks: footer16SocialLinks,
    copyright: "© 2026 Halden. All rights reserved.",
    backgroundImage: "/assets/bf4e978c5bd9765e.webp",
  },
} satisfies Record<string, Footer16Props>;
