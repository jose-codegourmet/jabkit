import type {
  CaseStudies13Props,
  CaseStudies13Study,
} from "./CaseStudies13.types";

const defaultStudies: CaseStudies13Study[] = [
  {
    href: "#northline",
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Sunlit studio desks with plants and open notebooks",
    },
    metric: "3.8×",
    category: "Product",
    client: "Northline",
    title: "A console the room could demo live.",
    description:
      "Rebuilt the launch narrative around a living admin preview so sales stopped sending screenshots.",
  },
  {
    href: "#harbor",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Laptop showing charts on a wooden desk",
    },
    metric: "41%",
    category: "Growth",
    client: "Harbor",
    title: "Pipeline that reads like a ledger.",
    description:
      "Turned a scattered win list into four outcome tiles operators could scan before the standup.",
  },
  {
    href: "#lumen",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Collaborative workshop around a table",
    },
    metric: "12w",
    category: "Brand",
    client: "Lumen",
    title: "A studio site that sold the process.",
    description:
      "Paired cover photography with hard metrics so the portfolio argued for the work, not the vibe.",
  },
  {
    href: "#orbit",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Quiet desk with a laptop and coffee",
    },
    metric: "2.1M",
    category: "Platform",
    client: "Orbit",
    title: "Self-serve that finally stuck.",
    description:
      "Cut the onboarding story to one metric, one badge, and a sentence a prospect could repeat.",
  },
];

const editorialStudies: CaseStudies13Study[] = [
  {
    href: "#fieldwork",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Team gathered around laptops in a bright workspace",
    },
    metric: "64%",
    category: "Ops",
    client: "Fieldwork",
    title: "Handoffs without the war room.",
    description:
      "Replaced weekly status decks with four tiles the floor could read in a glance.",
  },
  {
    href: "#solstice",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Two colleagues reviewing a screen together",
    },
    metric: "9d",
    category: "Launch",
    client: "Solstice",
    title: "A cycle time the board believed.",
    description:
      "Put cycle time on the card so the story started with proof, not process.",
  },
  {
    href: "#kindred",
    image: {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Empty meeting room with a long table and glass walls",
    },
    metric: "5.2×",
    category: "Retail",
    client: "Kindred",
    title: "Stores that sold themselves online.",
    description:
      "Used cover shots from the floor and a single conversion number per location.",
  },
  {
    href: "#aperture",
    image: {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Person typing on a laptop at a wooden desk",
    },
    metric: "180k",
    category: "Media",
    client: "Aperture",
    title: "A newsletter people forwarded.",
    description:
      "Kept the card quiet: one metric, a category badge, and a headline editors could reuse.",
  },
];

export const caseStudies13Mocks: Required<
  Pick<CaseStudies13Props, "title" | "description" | "allWork" | "studies">
> = {
  title: "Work that moved the number.",
  description:
    "Four proof-led case studies for agencies and product studios — cover, outcome, and the short story behind each engagement.",
  allWork: { label: "View all work", href: "#work" },
  studies: defaultStudies,
};

export const caseStudies13EditorialMocks: typeof caseStudies13Mocks = {
  title: "Selected work from this season.",
  description:
    "A quieter grid for editorial sites: same four tiles, different proof, still clickable without heavy chrome.",
  allWork: { label: "See the archive", href: "#archive" },
  studies: editorialStudies,
};
