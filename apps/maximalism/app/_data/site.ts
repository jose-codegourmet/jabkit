export interface NavLink {
  label: string;
  href: string;
}

export const brand = {
  name: "FULL VOLUME",
  tagline: "More sound. More color. More together.",
  kicker: "Two days. Four stages. One very loud weekend.",
} as const;

export const navItems: NavLink[] = [
  { label: "Lineup", href: "/lineup" },
  { label: "Schedule", href: "/schedule" },
  { label: "Info", href: "/info" },
];

export const ticketsNavItem: NavLink = { label: "Tickets", href: "/tickets" };

export const mobileMenuItems: NavLink[] = [
  { label: "Lineup", href: "/lineup" },
  { label: "Schedule", href: "/schedule" },
  { label: "Tickets", href: "/tickets" },
  { label: "Info", href: "/info" },
  { label: "Contact", href: "/contact" },
];

export const contactEmailPlaceholder = "[Contact email — client to confirm]";

export type FooterColumnId = "festival" | "visit" | "talk" | "legal";

export interface FooterColumn {
  id: FooterColumnId;
  title: string;
  links: NavLink[];
  /** Plain-text lines that are not links, such as placeholder contact details. */
  notes?: string[];
  /** The Legal column also renders the motion toggle after its links. */
  motionToggle?: boolean;
}

export const footerColumns: FooterColumn[] = [
  {
    id: "festival",
    title: "Festival",
    links: [
      { label: "Lineup", href: "/lineup" },
      { label: "Schedule", href: "/schedule" },
      { label: "Tickets", href: "/tickets" },
    ],
  },
  {
    id: "visit",
    title: "Visit",
    links: [
      { label: "Getting there", href: "/info#getting-there" },
      { label: "Venue map", href: "/info#venue" },
      { label: "Accessibility", href: "/info#accessibility" },
      { label: "Safety", href: "/info#safety" },
      { label: "FAQ", href: "/info#faq" },
    ],
  },
  {
    id: "talk",
    title: "Talk to us",
    links: [{ label: "Contact", href: "/contact" }],
    notes: [contactEmailPlaceholder],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    motionToggle: true,
  },
];

export const legalLine =
  "© [Year — client to confirm] FULL VOLUME Festival. [Legal entity name — client to confirm].";

export const demoNotice = {
  full: "Demo data. Artists, stages, set times, dates, venue, and prices on this site are placeholders for the JabKit showcase. FULL VOLUME is a fictional festival.",
  short: "Demo site for JabKit. All festival details are placeholders.",
  tickets:
    "Demo tickets. No tickets are sold and no payment is taken on this site.",
  contact: "Demo form — messages are not sent.",
} as const;

export const ctaBand = {
  headline: "More sound. More color. More together.",
  body: "Pick a weekend pass or a single day. Every price, fee, and inclusion is written out before you commit.",
  primary: { label: "Choose your ticket", href: "/tickets" },
  secondary: { label: "Read the practical info", href: "/info" },
  imageId: "max-cta",
  mobileImageId: "max-cta-mobile",
} as const;

export const festivalFacts = {
  dates: "[Dates — client to confirm]",
  venue: "[Venue — client to confirm]",
  label: "Demo dates and venue",
} as const;

export const motionLabels = {
  pause: "Pause motion",
  play: "Play motion",
} as const;
