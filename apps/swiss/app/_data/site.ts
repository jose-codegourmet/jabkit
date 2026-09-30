export interface NavLink {
  label: string;
  href: string;
}

export const brand = "FRAME/01";
export const tagline = "Cinema, clearly seen.";
export const festivalDatesPlaceholder = "[Festival dates — client to confirm]";
export const cityPlaceholder = "[City — client to confirm]";

export const primaryNav: NavLink[] = [
  { label: "Program", href: "/program" },
  { label: "Schedule", href: "/schedule" },
  { label: "Venues", href: "/venues" },
  { label: "About", href: "/about" },
];

export const mobileNav: NavLink[] = [
  { label: "01 Program", href: "/program" },
  { label: "02 Schedule", href: "/schedule" },
  { label: "03 Venues", href: "/venues" },
  { label: "04 About", href: "/about" },
  { label: "05 FAQ", href: "/faq" },
];

export const ticketsLink: NavLink = {
  label: "Tickets",
  href: "/tickets",
};

export const footerColumns = [
  {
    title: "Festival",
    links: primaryNav,
  },
  {
    title: "Visit",
    links: [
      { label: "Tickets & passes", href: "/tickets" },
      { label: "FAQ", href: "/faq" },
      { label: "Access", href: "/faq#access" },
      { label: "Venue arrival", href: "/faq#arrival" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "General: [email — client to confirm]",
        href: "mailto:[email — client to confirm]",
      },
      {
        label: "Press: [press email — client to confirm]",
        href: "mailto:[press email — client to confirm]",
      },
      {
        label: "[Social links — client to confirm]",
        href: "#social-links-client-to-confirm",
      },
    ],
  },
] satisfies { title: string; links: NavLink[] }[];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms of sale", href: "/terms" },
];

export const demoNotice =
  "Demo program. Films, times, and passes on this site are fictional samples. No tickets are sold and no payment is taken.";

export const ctaBand = {
  eyebrow: "05 Tickets",
  headline: "Choose a screening. Or see all four days.",
  body: "Single screenings, day passes, and a festival pass. Compare what each includes before you choose.",
  primary: { label: "Compare passes", href: "/tickets" },
  secondary: { label: "Open the schedule", href: "/schedule" },
} as const;
