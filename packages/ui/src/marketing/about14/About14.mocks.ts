import type { About14Props } from "./About14.types";

export const about14Mocks = {
  default: {
    title: "About Us",
    label: "The studio",
    intro:
      "We design product sites and brand systems for teams that need the work to read clearly on first pass, then hold up in the room.",
    profile: {
      src: "/assets/bd48582e630a15fa.webp",
      alt: "Portrait of Mira Solano",
      name: "Mira Solano",
      role: "Founding designer",
      fallback: "MS",
    },
    philosophy:
      "Photography first, copy second, and a grid that stays honest when the page gets quiet.",
    image: {
      src: "/assets/862cb37aa54e557e.webp",
      alt: "Sunlit studio with long work tables and plants",
    },
  },
  alternate: {
    title: "Who we are",
    label: "The practice",
    intro:
      "A small editorial shop for operators who want an about page that shows the people and the space, not a slogan wall.",
    profile: {
      src: "/assets/8e9489842d5e2cdf.webp",
      alt: "Portrait of Theo Park",
      name: "Theo Park",
      role: "Studio lead",
      fallback: "TP",
    },
    philosophy:
      "If the picture does the talking, the rest of the section only needs a name, a role, and one sentence we can stand behind.",
    image: {
      src: "/assets/c6d63647f42aa90a.webp",
      alt: "Interior of a quiet gallery with wood floors",
    },
  },
} satisfies Record<string, About14Props>;
