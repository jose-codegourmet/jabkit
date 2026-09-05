import type { Waitlist3Props } from "./Waitlist3.types";

export const waitlist3Mocks = {
  default: {
    logo: { name: "Northline", href: "#home" },
    badge: "Opening this fall",
    title: "Get a desk before the room fills.",
    description:
      "One email when operator seats open. No drip, no product tour — just the date and a link to claim a workspace.",
    emailLabel: "Work email",
    emailPlaceholder: "you@studio.work",
    submitLabel: "Join the waitlist",
    people: [
      {
        src: "/assets/bd48582e630a15fa.webp",
        alt: "Portrait of Ines Calder",
        fallback: "IC",
      },
      {
        src: "/assets/8e9489842d5e2cdf.webp",
        alt: "Portrait of Rowan Hale",
        fallback: "RH",
      },
      {
        src: "/assets/4132445424a19cc6.webp",
        alt: "Portrait of Priya Nair",
        fallback: "PN",
      },
      {
        src: "/assets/8c18989537b833e8.webp",
        alt: "Portrait of Eli Voss",
        fallback: "EV",
      },
    ],
    socialProof: "2,400 operators already in line",
    copyright: "© 2026 Northline. Seats open in that order.",
    photo: {
      src: "/assets/2c2fae7d2bbfbdb2.webp",
      alt: "Sunlit glass meeting room looking onto a quiet studio floor",
    },
  },
  alternate: {
    logo: { name: "Harbor", href: "#home" },
    badge: "Private beta",
    title: "Hold a field seat for the next crew.",
    description:
      "Harbor's waitlist is for site leads who already run punch lists on paper. We'll mail once when the field workspace is ready.",
    emailLabel: "Jobsite email",
    emailPlaceholder: "lead@jobsite.co",
    submitLabel: "Request a seat",
    people: [
      {
        src: "/assets/7f349b80885c2b4d.webp",
        alt: "Portrait of Amara Cole",
        fallback: "AC",
      },
      {
        src: "/assets/167acbe9e3afc083.webp",
        alt: "Portrait of Julian Hart",
        fallback: "JH",
      },
      {
        src: "/assets/ea07d2da071b9238.webp",
        alt: "Portrait of Noor Elamin",
        fallback: "NE",
      },
    ],
    socialProof: "890 site leads waiting with you",
    copyright: "© 2026 Harbor Field. Built for the yard, not the slide.",
    photo: {
      src: "/assets/1b9ee8cc56aea60c.webp",
      alt: "Construction site with scaffolding against a bright sky",
    },
  },
} satisfies Record<"default" | "alternate", Waitlist3Props>;
