import type {
  Footer12LinkColumn,
  Footer12Props,
  Footer12SocialLink,
} from "./Footer12.types";

export const footer12LinkColumns: Footer12LinkColumn[] = [
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

export const footer12SocialLinks: Footer12SocialLink[] = [
  { label: "Facebook", href: "#facebook", kind: "facebook" },
  { label: "X", href: "#x", kind: "x" },
  { label: "Instagram", href: "#instagram", kind: "instagram" },
  { label: "LinkedIn", href: "#linkedin", kind: "linkedin" },
];

export const footer12Mocks = {
  default: {
    newsletterTitle:
      "Keep the quarterly dispatch close. Product notes, delivery, and the mail we send.",
    newsletterPlaceholder: "Enter your email",
    subscribeLabel: "Subscribe",
    linkColumns: footer12LinkColumns,
    brandName: "Postlane",
    copyright: "© 2026 Postlane, Inc. All rights reserved.",
    socialLinks: footer12SocialLinks,
    languageLabel: "English",
    defaultAppearance: "light",
  },
  alternate: {
    newsletterTitle:
      "A shorter studio letter, four times a year. Tools, launches, and field notes.",
    newsletterPlaceholder: "Work email",
    subscribeLabel: "Join the list",
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
    brandName: "Harbor",
    copyright: "© 2026 Harbor. All rights reserved.",
    socialLinks: footer12SocialLinks,
    languageLabel: "Deutsch",
    defaultAppearance: "dark",
  },
} satisfies Record<string, Footer12Props>;
