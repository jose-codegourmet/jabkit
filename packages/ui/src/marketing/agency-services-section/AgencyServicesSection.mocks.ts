import type { AgencyServicesSectionProps } from "./AgencyServicesSection.types";

export const agencyServiceItems = [
  {
    number: "01",
    title: "Identity",
    body: "Naming, marks, type systems, and the rules that keep a brand readable across print and screen.",
  },
  {
    number: "02",
    title: "Editorial",
    body: "Publications, campaigns, and long-form layouts where hierarchy and paper still matter.",
  },
  {
    number: "03",
    title: "Web",
    body: "Sites and interfaces built as typographic systems, not template skins.",
  },
  {
    number: "04",
    title: "Direction",
    body: "Art direction and commissioning across photography, motion, and production partners.",
  },
] as const;

export const agencyServicesSectionMocks = {
  default: {
    id: "services",
    number: "04",
    label: "Services",
    meta: "04 categories",
    title: "What I do",
    items: [...agencyServiceItems],
  },
  alternate: {
    id: "services",
    number: "03",
    label: "Practice",
    meta: "03 categories",
    title: "How we work",
    items: [
      {
        number: "01",
        title: "Audit",
        body: "A short read of the current system before any new marks are drawn.",
      },
      {
        number: "02",
        title: "Build",
        body: "A focused set of assets and rules, not a 200-page unused brand book.",
      },
      {
        number: "03",
        title: "Steer",
        body: "Ongoing direction when the first applications hit print and product.",
      },
    ],
  },
} satisfies Record<string, AgencyServicesSectionProps>;
