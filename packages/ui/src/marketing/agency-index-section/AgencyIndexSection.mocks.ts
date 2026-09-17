import type {
  AgencyIndexSectionProps,
  AgencyIndexWork,
} from "./AgencyIndexSection.types";

export const agencyIndexWorks: AgencyIndexWork[] = [
  {
    title: "Atlas Type System",
    href: "#work-atlas",
    image: {
      src: "/assets/d7aec5a4066ae4f7.webp",
      alt: "Studio still for the Atlas type system",
    },
  },
  {
    title: "Harbor Review",
    href: "#work-harbor",
    image: {
      src: "/assets/42c22367c0be8e21.webp",
      alt: "Printed pages from Harbor Review",
    },
  },
  {
    title: "North Grid",
    href: "#work-north",
    image: {
      src: "/assets/47795ebdce09455e.webp",
      alt: "North Grid identity lockup on a table",
    },
  },
  {
    title: "Field Notes 26",
    href: "#work-field",
    image: {
      src: "/assets/63aeec58a6ab5c74.webp",
      alt: "Bound field notes on a desk",
    },
  },
  {
    title: "Signal Pack",
    href: "#work-signal",
    image: {
      src: "/assets/02a7269595e4f4e6.webp",
      alt: "Packaging sample from Signal Pack",
    },
  },
  {
    title: "River Marks",
    href: "#work-river",
    image: {
      src: "/assets/5267138413360745.webp",
      alt: "River Marks print specimens",
    },
  },
  {
    title: "Index Cards",
    href: "#work-cards",
    image: {
      src: "/assets/ec2b22380882848a.webp",
      alt: "Stacked index cards from a brand system",
    },
  },
  {
    title: "Screen Ledger",
    href: "#work-ledger",
    image: {
      src: "/assets/ece1ed59bb6c27ee.webp",
      alt: "Screen-based typography study",
    },
  },
];

export const agencyIndexSectionMocks = {
  default: {
    id: "index",
    number: "01",
    label: "Index",
    meta: "128 items",
    kicker: "[01] Independent design practice est. 2019",
    availability: "[05] BDX -- Berlin available Q3-Q4 2026",
    title: "Form follows friction",
    emphasis: "friction",
    body: "A graphic design practice working at the intersection of brand systems, editorial design, and screen-based typography. Built one grid at a time, with attention to the seams.",
    ctaLabel: "Browse index 128",
    ctaHref: "#works",
    categories: [
      "Brand systems",
      "Editorial design",
      "Web and interaction",
      "Print and packaging",
    ],
    worksHeading: "Selected works 2019-26",
    works: agencyIndexWorks,
  },
  alternate: {
    id: "index",
    number: "01",
    label: "Work",
    meta: "48 items",
    kicker: "[01] Studio practice est. 2021",
    availability: "[05] BER booking autumn 2026",
    title: "Type before decoration",
    emphasis: "decoration",
    body: "A smaller index of identity, print, and screen commissions for publishers and product teams.",
    ctaLabel: "Browse work 48",
    ctaHref: "#works",
    categories: ["Identity", "Print", "Screens"],
    worksHeading: "Selected works 2021-26",
    works: agencyIndexWorks.slice(0, 4),
  },
} satisfies Record<string, AgencyIndexSectionProps>;
