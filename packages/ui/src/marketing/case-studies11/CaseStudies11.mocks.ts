import type {
  CaseStudies11Props,
  CaseStudies11Study,
} from "./CaseStudies11.types";

export const caseStudies11DefaultStudies: CaseStudies11Study[] = [
  {
    company: "Harbor",
    title: "Night docks that stay on the clock",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&h=1200&q=80",
    imageAlt: "Shipping containers stacked along a lit harbor dock",
    href: "#harbor",
  },
  {
    company: "Northline",
    title: "A quieter console for the lab floor",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&h=1200&q=80",
    imageAlt: "Researcher reviewing data on a laptop in a bright lab",
    href: "#northline",
  },
  {
    company: "Fieldwork",
    title: "From brief to built in one studio",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&h=1200&q=80",
    imageAlt: "Sunlit studio desks with plants and open laptops",
    href: "#fieldwork",
  },
];

export const caseStudies11EditorialStudies: CaseStudies11Study[] = [
  {
    company: "Helio",
    title: "Routing light across three time zones",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&h=1200&q=80",
    imageAlt: "Glass office atrium with warm interior lighting",
    href: "#helio",
  },
  {
    company: "Orbit",
    title: "A launch desk that stays calm",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&h=1200&q=80",
    imageAlt: "Retail interior with hanging lamps and wood fixtures",
    href: "#orbit",
  },
  {
    company: "Ampere",
    title: "Power maps the floor can read",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&h=1200&q=80",
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
