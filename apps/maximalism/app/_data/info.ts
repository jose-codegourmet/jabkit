export type InfoSectionId =
  | "getting-there"
  | "venue"
  | "accessibility"
  | "safety"
  | "policies"
  | "faq";

export interface InfoSection {
  id: InfoSectionId;
  label: string;
  /** One-line description used by the Home "Know before you go" links. */
  homeBlurb?: string;
}

export const infoSections: InfoSection[] = [
  {
    id: "getting-there",
    label: "Getting there",
    homeBlurb: "Transport and entrances.",
  },
  { id: "venue", label: "Venue map" },
  {
    id: "accessibility",
    label: "Accessibility",
    homeBlurb: "Step-free routes, viewing areas, and access requests.",
  },
  {
    id: "safety",
    label: "Safety",
    homeBlurb: "Welfare, lost friends, and who to ask.",
  },
  { id: "policies", label: "Policies" },
  {
    id: "faq",
    label: "FAQ",
    homeBlurb: "Bags, re-entry, weather, and more.",
  },
];

export function infoHref(id: InfoSectionId): string {
  return `/info#${id}`;
}

/** Home "Know before you go" links, in brief order. */
export const homeInfoLinks = infoSections.filter(
  (section) => section.homeBlurb !== undefined,
);

export type PolicyId =
  | "bags"
  | "re-entry"
  | "prohibited"
  | "refunds"
  | "age"
  | "weather"
  | "access-tickets"
  | "transfers";

export interface Policy {
  id: PolicyId;
  label: string;
  placeholder: string;
}

export const policies: Policy[] = [
  {
    id: "bags",
    label: "Bags",
    placeholder: "[Bag policy — client to confirm]",
  },
  {
    id: "re-entry",
    label: "Re-entry",
    placeholder: "[Re-entry policy — client to confirm]",
  },
  {
    id: "prohibited",
    label: "Prohibited items",
    placeholder: "[List — client to confirm]",
  },
  {
    id: "refunds",
    label: "Refunds",
    placeholder: "[Refund policy — client to confirm]",
  },
  { id: "age", label: "Age", placeholder: "[Age policy — client to confirm]" },
  {
    id: "weather",
    label: "Weather",
    placeholder: "[Weather policy — client to confirm]",
  },
  {
    id: "access-tickets",
    label: "Access and companion tickets",
    placeholder: "[Access ticket policy — client to confirm]",
  },
  {
    id: "transfers",
    label: "Transfers and resale",
    placeholder: "[Transfer policy — client to confirm]",
  },
];

export function getPolicy(id: PolicyId): Policy {
  const policy = policies.find((entry) => entry.id === id);
  if (!policy) throw new Error(`Unknown policy: ${id}`);
  return policy;
}

/** Info page Policies accordion, in brief order. */
export const infoPolicyIds: PolicyId[] = [
  "bags",
  "re-entry",
  "prohibited",
  "refunds",
  "age",
  "weather",
];

/** Tickets page "Access, refunds, and transfers" items, in brief order. */
export const ticketPolicyIds: PolicyId[] = [
  "access-tickets",
  "refunds",
  "transfers",
  "age",
];
