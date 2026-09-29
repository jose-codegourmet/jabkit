import type { FooterColumn, NavLink } from "./types";

export const brand = {
  name: "Pillo",
  tagline: "Little steps. Lighter days.",
  promise: "Make everyday routines easier to see, share, and celebrate.",
  studio: "Pillo Studio",
} as const;

export const navLinks: NavLink[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "For families", href: "/for-families" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export const mobileExtraLinks: NavLink[] = [
  { label: "Routine ideas", href: "/routines" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = {
  label: "Start free",
  href: "/start",
};

export const footerColumns: FooterColumn[] = [
  {
    id: "brand",
    title: brand.name,
    text: [brand.tagline, brand.promise],
    links: [],
  },
  {
    id: "product",
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "For families", href: "/for-families" },
      { label: "Routine ideas", href: "/routines" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    id: "help",
    title: "Help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Create a free board", href: "/start" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const legalLine =
  "© [Year] Pillo Studio. [Company legal name and registered address — client to confirm]";

export const sampleNotice =
  "Pillo is a sample brand built to demonstrate the JabKit Claymorphism design system. Boards, names and progress shown on this site are example data.";

export const ctaBand = {
  headline: "One small step can change the feel of a whole day.",
  body: "Start with one routine. Add the rest when it feels right.",
  button: {
    label: "Create your first board",
    href: "/start",
  },
  secondaryLink: {
    label: "See how it works",
    href: "/how-it-works",
  },
  imageId: "cla-cta",
  mobileImageId: "cla-cta-mobile",
} as const satisfies {
  headline: string;
  body: string;
  button: NavLink;
  secondaryLink: NavLink;
  imageId: string;
  mobileImageId: string;
};

export const exampleBadgeLabel = "Example board";
