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
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Ines Calder",
        fallback: "IC",
      },
      {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Rowan Hale",
        fallback: "RH",
      },
      {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Priya Nair",
        fallback: "PN",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Eli Voss",
        fallback: "EV",
      },
    ],
    socialProof: "2,400 operators already in line",
    copyright: "© 2026 Northline. Seats open in that order.",
    photo: {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&h=2000&q=80",
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
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Amara Cole",
        fallback: "AC",
      },
      {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Julian Hart",
        fallback: "JH",
      },
      {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80",
        alt: "Portrait of Noor Elamin",
        fallback: "NE",
      },
    ],
    socialProof: "890 site leads waiting with you",
    copyright: "© 2026 Harbor Field. Built for the yard, not the slide.",
    photo: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&h=2000&q=80",
      alt: "Construction site with scaffolding against a bright sky",
    },
  },
} satisfies Record<"default" | "alternate", Waitlist3Props>;
