import type { About14Props } from "./About14.types";

export const about14Mocks = {
  default: {
    title: "About Us",
    label: "The studio",
    intro:
      "We design product sites and brand systems for teams that need the work to read clearly on first pass, then hold up in the room.",
    profile: {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
      alt: "Portrait of Mira Solano",
      name: "Mira Solano",
      role: "Founding designer",
      fallback: "MS",
    },
    philosophy:
      "Photography first, copy second, and a grid that stays honest when the page gets quiet.",
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=900&q=80",
      alt: "Sunlit studio with long work tables and plants",
    },
  },
  alternate: {
    title: "Who we are",
    label: "The practice",
    intro:
      "A small editorial shop for operators who want an about page that shows the people and the space, not a slogan wall.",
    profile: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
      alt: "Portrait of Theo Park",
      name: "Theo Park",
      role: "Studio lead",
      fallback: "TP",
    },
    philosophy:
      "If the picture does the talking, the rest of the section only needs a name, a role, and one sentence we can stand behind.",
    image: {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&h=900&q=80",
      alt: "Interior of a quiet gallery with wood floors",
    },
  },
} satisfies Record<string, About14Props>;
