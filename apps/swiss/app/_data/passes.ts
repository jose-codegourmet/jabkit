import { checkoutHref } from "./screenings";

export interface Pass {
  id: "single" | "day" | "festival";
  name: string;
  price: string;
  description: string;
  includes: string[];
  action: { label: string; href: string };
  unavailableExample?: string;
}

export const passes: Pass[] = [
  {
    id: "single",
    name: "Single screening",
    price: "[Price — client to confirm]",
    description: "One seat at one screening.",
    includes: [
      "Choose any available screening",
      "Seat type: [Seating policy — client to confirm]",
    ],
    action: { label: "Choose a screening", href: "/schedule" },
  },
  {
    id: "day",
    name: "Day pass",
    price: "[Price — client to confirm]",
    description: "Every screening on one festival day.",
    includes: [
      "Pick your day at checkout",
      "Entry subject to capacity: [Policy — client to confirm]",
    ],
    action: { label: "Choose day pass", href: checkoutHref({ pass: "day" }) },
    unavailableExample: "Day pass — Friday: Not on sale yet",
  },
  {
    id: "festival",
    name: "Festival pass",
    price: "[Price — client to confirm]",
    description: "All four days.",
    includes: [
      "Every screening, subject to capacity",
      "Talks: [Talk access — client to confirm]",
    ],
    action: {
      label: "Choose festival pass",
      href: checkoutHref({ pass: "festival" }),
    },
  },
];

export function getPass(id: string) {
  return passes.find((pass) => pass.id === id);
}

export const passComparison = [
  {
    label: "Screenings",
    single: "1",
    day: "[Client to confirm]",
    festival: "[Client to confirm]",
  },
  { label: "Days", single: "1", day: "1 day", festival: "4 days" },
  {
    label: "Talks",
    single: "[Client to confirm]",
    day: "[Client to confirm]",
    festival: "[Client to confirm]",
  },
  {
    label: "Transferable",
    single: "[Client to confirm]",
    day: "[Client to confirm]",
    festival: "[Client to confirm]",
  },
  {
    label: "Refunds",
    single: "[Client to confirm]",
    day: "[Client to confirm]",
    festival: "[Client to confirm]",
  },
] as const;
