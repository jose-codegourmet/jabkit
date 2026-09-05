import type { Pricing28Plan, Pricing28Props } from "./Pricing28.types";

const people = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Portrait of a studio lead",
    fallback: "AL",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Portrait of a product operator",
    fallback: "JN",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Portrait of an editor",
    fallback: "MS",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Portrait of a field lead",
    fallback: "RK",
  },
] as const;

const defaultPlans: Pricing28Plan[] = [
  {
    id: "draft",
    name: "Draft",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    monthlyPeriod: "/ month",
    yearlyPeriod: "/ month",
    tagline: "Includes 200 credits",
    taglineTooltip:
      "Credits cover publishes and exports. Unused credits reset each cycle.",
    ctaLabel: "Start drafting",
    href: "#draft",
    ctaVariant: "secondary",
    groups: [
      {
        title: "Workspace",
        items: [
          { icon: "layers", text: "One live room" },
          { icon: "check", text: "Unlimited drafts" },
          { icon: "users", text: "2 seats" },
        ],
      },
    ],
  },
  {
    id: "studio",
    name: "Studio",
    monthlyPrice: "$29",
    yearlyPrice: "$23",
    monthlyPeriod: "/ month",
    yearlyPeriod: "/ month, billed yearly",
    tagline: "Includes 2,000 credits",
    taglineTooltip:
      "Credits are shared across the workspace. Extra packs can be added any time.",
    ctaLabel: "Choose Studio",
    href: "#studio",
    ctaVariant: "secondary",
    groups: [
      {
        title: "Workspace",
        items: [
          { icon: "layers", text: "Unlimited rooms" },
          { icon: "check", text: "Versioned pages" },
          { icon: "users", text: "8 seats" },
        ],
      },
      {
        title: "Reviews",
        items: [
          { icon: "sparkles", text: "Inline markups" },
          { icon: "zap", text: "Same-day publish" },
        ],
      },
    ],
  },
  {
    id: "floor",
    name: "Floor",
    popular: true,
    popularLabel: "Popular",
    monthlyPrice: "$79",
    yearlyPrice: "$63",
    monthlyPeriod: "/ month",
    yearlyPeriod: "/ month, billed yearly",
    tagline: "Includes 8,000 credits",
    taglineTooltip:
      "Floor credits cover field captures, exports, and guest reviews in one pool.",
    ctaLabel: "Choose Floor",
    href: "#floor",
    ctaVariant: "primary",
    groups: [
      {
        title: "Workspace",
        items: [
          { icon: "layers", text: "Shared shelves" },
          { icon: "check", text: "Audit trail" },
          { icon: "users", text: "25 seats" },
        ],
      },
      {
        title: "Reviews",
        items: [
          { icon: "sparkles", text: "Guest markups" },
          { icon: "zap", text: "Priority queue" },
        ],
      },
      {
        title: "Controls",
        items: [
          { icon: "shield", text: "SSO and roles" },
          { icon: "lock", text: "Retention rules" },
        ],
      },
    ],
  },
  {
    id: "yard",
    name: "Yard",
    monthlyPrice: "Talk",
    yearlyPrice: "Talk",
    monthlyPeriod: "to sales",
    yearlyPeriod: "to sales",
    ctaLabel: "Book a walkthrough",
    href: "#yard",
    ctaVariant: "secondary",
    groups: [
      {
        title: "Workspace",
        items: [
          { icon: "layers", text: "Multi-site orgs" },
          { icon: "check", text: "Custom workflows" },
          { icon: "users", text: "Unlimited seats" },
        ],
      },
      {
        title: "Support",
        items: [
          { icon: "headset", text: "Named operator" },
          { icon: "shield", text: "Security review" },
        ],
      },
    ],
  },
];

export const pricing28Mocks = {
  default: {
    title: "Pricing that stays out of the way of the work",
    people: [...people],
    extraCount: "12",
    trustItems: [
      { value: "2,400+", label: "studios on Northline" },
      { value: "4.9", label: "from operators this quarter" },
    ],
    monthlyLabel: "Monthly",
    yearlyLabel: "Yearly",
    yearlyBadge: "Save 20%",
    defaultInterval: "yearly",
    plans: defaultPlans,
    secureLabel: "Secure payment",
  },
  alternate: {
    title: "Pick a room. Add seats when the crew grows.",
    people: people.slice(0, 3),
    extraCount: "6",
    trustItems: [
      { value: "180", label: "field teams this month" },
      { value: "99.9%", label: "uptime on the last cycle" },
    ],
    monthlyLabel: "Month",
    yearlyLabel: "Year",
    yearlyBadge: "Two months free",
    defaultInterval: "monthly",
    plans: [
      {
        ...defaultPlans[0],
        id: "site",
        name: "Site",
        ctaLabel: "Open a site",
        href: "#site",
      },
      {
        ...defaultPlans[1],
        id: "crew",
        name: "Crew",
        monthlyPrice: "$39",
        yearlyPrice: "$31",
        ctaLabel: "Choose Crew",
        href: "#crew",
      },
      {
        ...defaultPlans[2],
        id: "ops",
        name: "Ops",
        popularLabel: "Best fit",
        monthlyPrice: "$99",
        yearlyPrice: "$79",
        ctaLabel: "Choose Ops",
        href: "#ops",
      },
      {
        ...defaultPlans[3],
        id: "fleet",
        name: "Fleet",
        ctaLabel: "Talk with ops",
        href: "#fleet",
      },
    ],
    secureLabel: "Billed securely",
  },
} satisfies Record<"default" | "alternate", Pricing28Props>;
