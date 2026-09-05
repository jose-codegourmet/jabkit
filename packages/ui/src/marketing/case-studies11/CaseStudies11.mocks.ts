import type {
  CaseStudies11Props,
  CaseStudies11Study,
} from "./CaseStudies11.types";

export const caseStudies11DefaultStudies: CaseStudies11Study[] = [
  {
    company: "Harbor",
    title: "Night docks that stay on the clock",
    image: "/assets/d7eddb427ba6f203.webp",
    imageAlt: "Shipping containers stacked along a lit harbor dock",
    href: "#harbor",
  },
  {
    company: "Northline",
    title: "A quieter console for the lab floor",
    image: "/assets/4cc437eeea3384d1.webp",
    imageAlt: "Researcher reviewing data on a laptop in a bright lab",
    href: "#northline",
  },
  {
    company: "Fieldwork",
    title: "From brief to built in one studio",
    image: "/assets/462c849dc9a41e59.webp",
    imageAlt: "Sunlit studio desks with plants and open laptops",
    href: "#fieldwork",
  },
];

export const caseStudies11EditorialStudies: CaseStudies11Study[] = [
  {
    company: "Helio",
    title: "Routing light across three time zones",
    image: "/assets/dd6c26bc44cd7218.webp",
    imageAlt: "Glass office atrium with warm interior lighting",
    href: "#helio",
  },
  {
    company: "Orbit",
    title: "A launch desk that stays calm",
    image: "/assets/7c4790dcbb9fd01c.webp",
    imageAlt: "Retail interior with hanging lamps and wood fixtures",
    href: "#orbit",
  },
  {
    company: "Ampere",
    title: "Power maps the floor can read",
    image: "/assets/672651fa6e0f526b.webp",
    imageAlt: "Architectural concrete stairwell with a skylight",
    href: "#ampere",
  },
];

export const caseStudies11Mocks = {
  default: {
    title: "Work that changed the room",
    description:
      "Three featured stories. Poster-like plates with the company mark and the outcome — no carousel, no extra copy on the cards.",
    studies: caseStudies11DefaultStudies,
  },
  alternate: {
    title: "Proof, not a portfolio dump",
    description:
      "A formal opener and three plates. Enough to show range without asking anyone to page through a longer list.",
    studies: caseStudies11EditorialStudies,
  },
} satisfies Record<string, CaseStudies11Props>;
