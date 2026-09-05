import type { Team14Props } from "./Team14.types";

export const team14Mocks = {
  default: {
    title: "We're hiring",
    description:
      "The studio is small on purpose. We need another pair of hands who can sit with a brief, argue for the quieter layout, and still ship on Thursday.",
    action: { label: "Join the team", href: "#careers" },
    members: [
      {
        src: "/assets/bd48582e630a15fa.webp",
        alt: "Portrait of Amara Cole",
        name: "Amara Cole",
        role: "Design director",
      },
      {
        src: "/assets/8e9489842d5e2cdf.webp",
        alt: "Portrait of Julian Hart",
        name: "Julian Hart",
        role: "Product engineer",
      },
      {
        src: "/assets/4132445424a19cc6.webp",
        alt: "Portrait of Priya Nair",
        name: "Priya Nair",
        role: "Brand lead",
      },
    ],
  },
  alternate: {
    title: "Open seats",
    description:
      "Harbor is staffing the next operator pod. If you like long tables, honest photography, and software that does not need a tour, write to us.",
    action: { label: "See open roles", href: "#roles" },
    members: [
      {
        src: "/assets/8c18989537b833e8.webp",
        alt: "Portrait of Eli Voss",
        name: "Eli Voss",
        role: "Studio producer",
      },
      {
        src: "/assets/bd48582e630a15fa.webp",
        alt: "Portrait of Ines Calder",
        name: "Ines Calder",
        role: "Research lead",
      },
      {
        src: "/assets/8e9489842d5e2cdf.webp",
        alt: "Portrait of Rowan Hale",
        name: "Rowan Hale",
        role: "Frontend",
      },
      {
        src: "/assets/4132445424a19cc6.webp",
        alt: "Portrait of Noor Elamin",
        name: "Noor Elamin",
        role: "Ops",
      },
    ],
  },
} satisfies Record<string, Team14Props>;
