import type { Route } from "next";

export type NavLink = {
  label: string;
  href: Route;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
  /** Plain text lines shown under the links (for example the support placeholder). */
  notes?: string[];
};

export const brand = {
  name: "DAYMARK",
  company: "DAYMARK Operations",
  tagline: "The whole day, in view.",
} as const;

export const headerNav: NavLink[] = [
  { label: "Product", href: "/product" },
  { label: "Who it's for", href: "/who-its-for" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
];

export const headerSecondary: NavLink = {
  label: "See a sample dashboard",
  href: "/demo",
};

export const headerPrimary: NavLink = {
  label: "Request a walkthrough",
  href: "/walkthrough",
};

/** Mobile sheet order: the four nav links, the sample dashboard, then the primary button. */
export const mobileMenu: NavLink[] = [
  ...headerNav,
  headerSecondary,
  headerPrimary,
];

/** Every `[… — client to confirm]` string used on more than one page. */
export const placeholders = {
  supportEmail: "[Support email — client to confirm]",
  year: "[Year — client to confirm]",
  walkthroughLength: "[length — client to confirm]",
  setupTimeline: "[Setup timeline — client to confirm]",
  importOptions: "[Import options — client to confirm]",
  rolePermissions: "[Role permissions — client to confirm]",
  integrationList: "[Integration list — client to confirm]",
  price: "[Price — client to confirm]",
  supportHours: "[Support hours and channel — client to confirm]",
  dataHandling: "[Data handling — client to confirm]",
  privacyNotice: "[Privacy notice — client to confirm]",
  privacyPolicy: "[Privacy policy — client to confirm]",
  termsOfService: "[Terms of service — client to confirm]",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Sample dashboard", href: "/demo" },
      { label: "Card states", href: "/demo/states" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Who it's for", href: "/who-its-for" },
      { label: "How it works", href: "/how-it-works" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Get started",
    links: [{ label: "Request a walkthrough", href: "/walkthrough" }],
    notes: [`Support: ${placeholders.supportEmail}`],
  },
];

export const footerLegal = {
  copyright: `© ${placeholders.year} DAYMARK Operations. The whole day, in view.`,
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ] satisfies NavLink[],
};

export const demoNotice = {
  footer:
    "Numbers, names and bookings shown on this site are fictional demo data, not customer results.",
  strip:
    "Demo portal. Juniper Street Studio is a fictional business and every number here is sample data.",
  stripLink: { label: "Back to DAYMARK site", href: "/" } satisfies NavLink,
} as const;

export const ctaBand = {
  headline: "See your own day in one view.",
  /** Rendered as: before + walkthroughLength placeholder + after. */
  body: {
    before: "Book a ",
    placeholder: placeholders.walkthroughLength,
    after:
      " walkthrough. Bring your current calendar and task list and we'll map them to DAYMARK tiles together.",
  },
  primary: headerPrimary,
  secondary: headerSecondary,
  imageId: "ben-cta",
  mobileImageId: "ben-cta-mobile",
} as const;
