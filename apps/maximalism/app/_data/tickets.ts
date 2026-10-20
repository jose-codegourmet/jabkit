export type PassId = "weekend" | "day-1" | "day-2";

export type Availability = "available" | "sold-out";

export interface Pass {
  id: PassId;
  name: string;
  /** Short line used by the Home tickets teaser. */
  teaser: string;
  /** Plain description used on /tickets. */
  description: string;
  pricePlaceholder: string;
  availability: Availability;
  /** True when the availability shown is a demo state, not real data. */
  demoState?: boolean;
  soldOutHelper?: string;
}

export const passes: Pass[] = [
  {
    id: "weekend",
    name: "Weekend pass",
    teaser: "Both days, all four stages.",
    description: "Entry both days. All four stages.",
    pricePlaceholder: "[Price — client to confirm]",
    availability: "available",
  },
  {
    id: "day-1",
    name: "Day 1 pass",
    teaser: "Day 1 only, all four stages.",
    description: "Entry on Day 1. All four stages.",
    pricePlaceholder: "[Price — client to confirm]",
    availability: "sold-out",
    demoState: true,
    soldOutHelper:
      "Day 1 is also included in the Weekend pass while that's available.",
  },
  {
    id: "day-2",
    name: "Day 2 pass",
    teaser: "Day 2 only, all four stages.",
    description: "Entry on Day 2. All four stages.",
    pricePlaceholder: "[Price — client to confirm]",
    availability: "available",
  },
];

export const availabilityLabels: Record<Availability, string> = {
  available: "Available",
  "sold-out": "Sold out",
};

export function getPass(id: PassId): Pass {
  const pass = passes.find((entry) => entry.id === id);
  if (!pass) throw new Error(`Unknown pass: ${id}`);
  return pass;
}

export function isPassId(value: unknown): value is PassId {
  return value === "weekend" || value === "day-1" || value === "day-2";
}

export const inclusions = [
  "Entry on your day(s)",
  "Access to all four stages",
  "Visual arts spaces",
  "[Other inclusions — client to confirm]",
] as const;

export const exclusionsPlaceholder = "[Exclusions — client to confirm]";

export const feeNote =
  "Fees are shown before checkout. No countdowns, no pressure.";

export const maxPerOrderPlaceholder = "[Max per order — client to confirm]";

export const bookingFeePlaceholder = "[Booking fee — client to confirm]";

export const totalPlaceholder = "[Total — calculated from confirmed prices]";

export const ticketingProviderPlaceholder =
  "[Ticketing provider — client to confirm]";
