import type {
  Footer13BottomLink,
  Footer13LinkColumn,
  Footer13Props,
  Footer13SocialLink,
} from "./Footer13.types";

export const footer13LinkColumns: Footer13LinkColumn[] = [
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

export const footer13SocialLinks: Footer13SocialLink[] = [
  { label: "Facebook", href: "#facebook", kind: "facebook" },
  { label: "X", href: "#x", kind: "x" },
  { label: "Instagram", href: "#instagram", kind: "instagram" },
  { label: "LinkedIn", href: "#linkedin", kind: "linkedin" },
];

export const footer13BottomLinks: Footer13BottomLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
];

export const footer13Mocks = {
  default: {
    heroSrc: "/assets/21ee8ee30ffbdcb1.webp",
    heroAlt: "A mountain ridge at dusk with pine silhouettes along the valley",
    brandName: "Pinemoor",
    linkColumns: footer13LinkColumns,
    contactTitle: "Contact Us",
    emailPlaceholder: "Enter your email",
    subscribeLabel: "Subscribe",
    subscribeTagline: "Quiet dusk notes,\nonce a month.",
    copyright: "© 2026 Pinemoor. All rights reserved.",
    socialLinks: footer13SocialLinks,
    bottomLinks: footer13BottomLinks,
  },
  alternate: {
    heroSrc: "/assets/21ee8ee30ffbdcb1.webp",
    heroAlt: "Wide landscape of a dusk ridge used as the footer close",
    brandName: "Harbor",
    linkColumns: [
      {
        title: "Studio",
        links: [
          { label: "About", href: "#about" },
          { label: "People", href: "#people" },
          { label: "Visit", href: "#visit" },
        ],
      },
      {
        title: "Work",
        links: [
          { label: "Projects", href: "#projects" },
          { label: "Process", href: "#process" },
          { label: "Index", href: "#index" },
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
    contactTitle: "Stay close",
    emailPlaceholder: "Work email",
    subscribeLabel: "Join the list",
    subscribeTagline: "A short studio letter.\nFour times a year.",
    copyright: "© 2026 Harbor. All rights reserved.",
    socialLinks: footer13SocialLinks,
    bottomLinks: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
} satisfies Record<string, Footer13Props>;
