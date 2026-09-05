import type { Projects13Project, Projects13Props } from "./Projects13.types";

const defaultProjects: Projects13Project[] = [
  {
    index: "01",
    title: "Northline Console",
    date: "Mar 2024",
    description:
      "A live admin preview so sales could walk a room through the product without sending screenshots.",
    image: {
      src: "/assets/e8b49d7b4617a825.webp",
      alt: "Sunlit studio desks with plants and open notebooks",
    },
  },
  {
    index: "02",
    title: "Harbor Ledger",
    date: "Jun 2024",
    description:
      "A win list rewritten as four outcome tiles operators could scan before the morning standup.",
    image: {
      src: "/assets/1ab3b7a7ea329629.webp",
      alt: "Laptop showing charts on a wooden desk",
    },
  },
  {
    index: "03",
    title: "Lumen Studio",
    date: "Sep 2024",
    description:
      "Cover photography paired with hard metrics so the portfolio argued for the work, not the mood.",
    image: {
      src: "/assets/55f54dbff1523af3.webp",
      alt: "Collaborative workshop around a table",
    },
  },
  {
    index: "04",
    title: "Orbit Onboarding",
    date: "Jan 2025",
    description:
      "Self-serve cut to one metric, one sentence, and a first-run a prospect could finish alone.",
    image: {
      src: "/assets/ce3d6a8dc5cff4d8.webp",
      alt: "Quiet desk with a laptop and coffee",
    },
  },
];

const alternateProjects: Projects13Project[] = [
  {
    index: "01",
    title: "Field Rooms",
    date: "Feb 2025",
    description:
      "Still interiors from two seasons: plaster, timber, and one lamp, kept in the order they were shot.",
    image: {
      src: "/assets/d3f9bde61c9a29e7.webp",
      alt: "Empty office corridor with glass rooms and daylight",
    },
  },
  {
    index: "02",
    title: "Harbor Dock",
    date: "Apr 2025",
    description:
      "Night photography along stacked containers, cropped tight so the lights do the sequencing.",
    image: {
      src: "/assets/d7eddb427ba6f203.webp",
      alt: "Shipping containers stacked along a lit harbor dock",
    },
  },
  {
    index: "03",
    title: "Stairwell Study",
    date: "Aug 2025",
    description:
      "A concrete stair and a skylight, printed as a three-line case note rather than a gallery spread.",
    image: {
      src: "/assets/672651fa6e0f526b.webp",
      alt: "Architectural concrete stairwell with a skylight",
    },
  },
];

export const projects13Mocks: Required<
  Pick<Projects13Props, "label" | "projects">
> = {
  label: "Selected projects",
  projects: defaultProjects,
};

export const projects13AlternateMocks: typeof projects13Mocks = {
  label: "Studio archive",
  projects: alternateProjects,
};
