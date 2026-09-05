import type { About11Props } from "./About11.types";

export const about11Mocks = {
  default: {
    kicker: "Studio",
    title: "About us",
    description:
      "We are a small studio that treats every brief like a room that has to feel finished. Photography, type, and product sit on the same desk so the work arrives as one piece, not a pile of parts.",
    studioNote:
      "Three makers. One table. We keep the crew small so the work stays close to the people who will live with it.",
    members: [
      {
        name: "Amara Cole",
        role: "Creative director",
        image: "/assets/fc2d8371236ac90c.webp",
        imageAlt: "Portrait of Amara Cole",
      },
      {
        name: "Julian Voss",
        role: "Design lead",
        image: "/assets/2a364f729e4f7c09.webp",
        imageAlt: "Portrait of Julian Voss",
      },
      {
        name: "Noor Elahi",
        role: "Producer",
        image: "/assets/45dad0903fef5d02.webp",
        imageAlt: "Portrait of Noor Elahi",
      },
    ],
    processKicker: "Method",
    processTitle: "How a brief becomes a room",
    processDescription:
      "We start with what has to be true, then we cut until the layout can stand without extra explanation.",
    processSteps: [
      {
        title: "Read the room",
        description:
          "We sit with the people who will use the work and write down what must stay, what can go, and what would embarrass us later.",
      },
      {
        title: "Build the spine",
        description:
          "Type, photography, and the first screens share one grid before anyone talks about decoration.",
      },
      {
        title: "Ship the quiet version",
        description:
          "We present the version we would keep if the budget closed tomorrow, then we only add what still earns its place.",
      },
    ],
    logos: [
      { name: "Harbor" },
      { name: "Northline" },
      { name: "Fieldwork" },
      { name: "Lumen" },
      { name: "Kite & Co." },
      { name: "Velvet Rail" },
    ],
    honorsKicker: "Honors",
    honorsTitle: "Work the room noticed",
    honors: [
      {
        year: "2025",
        title: "Site of the Day",
        description: "A quiet commerce rebuild for a coastal grocer.",
      },
      {
        year: "2024",
        title: "Studio Award, Print",
        description: "A season book for a lighting house in two inks.",
      },
      {
        year: "2023",
        title: "Best in Show, Identity",
        description: "A mark system that still holds at postage size.",
      },
    ],
    quote: {
      text: "Make the work feel like it was always supposed to live here.",
      attribution: "Studio note, pinned above the printer",
      image: "/assets/6ab18a652c6b3562.webp",
      imageAlt: "Sunlit studio desks with plants and open laptops",
    },
    motivations: [
      {
        title: "Why we still print",
        description:
          "A screen can lie about scale. Paper cannot. We still make proofs you can hold so the type, the crop, and the color have to survive in a room with windows.",
        image: "/assets/c8ed8f9471a82715.webp",
        imageAlt: "Hands marking a printed layout on a wooden table",
      },
      {
        title: "Why we keep the crew small",
        description:
          "Fewer seats at the table means the brief does not get translated three times. The person who heard the problem is still in the file when it ships.",
        image: "/assets/b4bdf0047c9613f6.webp",
        imageAlt: "Small team talking around a conference table",
      },
    ],
  },
  alternate: {
    kicker: "Practice",
    title: "The desk",
    description:
      "A quieter practice for teams that want the about page to feel like the studio: slow type, real faces, and a list of the work that paid for the lights.",
    studioNote:
      "We take a handful of clients a year. The photos are of the people who will answer your mail.",
    members: [
      {
        name: "Iris Chen",
        role: "Partner",
        image: "/assets/d111cc60a8f2bf68.webp",
        imageAlt: "Portrait of Iris Chen",
      },
      {
        name: "Mateo Ruiz",
        role: "Type",
        image: "/assets/2bd1b12951fdbdb5.webp",
        imageAlt: "Portrait of Mateo Ruiz",
      },
      {
        name: "Samira Ott",
        role: "Image",
        image: "/assets/cd01783ad0367a47.webp",
        imageAlt: "Portrait of Samira Ott",
      },
    ],
    processKicker: "Cadence",
    processTitle: "A week, then another",
    processDescription:
      "No decks for the sake of decks. We show the next real artifact and we talk about what it still owes the brief.",
    processSteps: [
      {
        title: "Week one",
        description:
          "A written brief, a type direction, and the first crop. If those three disagree, we stop.",
      },
      {
        title: "The middle",
        description:
          "We build the pages that will actually ship, not a separate concept layer that dies in Figma.",
      },
      {
        title: "Handoff",
        description:
          "Files named for the next person, proofs marked, and a call to walk through what we would still change.",
      },
    ],
    logos: [
      { name: "Oak & Line" },
      { name: "Paper Mill" },
      { name: "Civic Press" },
      { name: "Third Shift" },
      { name: "Mira" },
    ],
    honorsKicker: "Record",
    honorsTitle: "A short honors list",
    honors: [
      {
        year: "2026",
        title: "Editorial Merit",
        description: "A membership magazine that still uses a contents page.",
      },
      {
        year: "2025",
        title: "Craft Prize",
        description: "Packaging for a mill that prints on leftover stock.",
      },
    ],
    quote: {
      text: "If it needs a paragraph to explain the layout, the layout is not done.",
      attribution: "Iris, on the studio wall",
      image: "/assets/ae58c412be22e34e.webp",
      imageAlt: "Empty modern office with a long wooden table",
    },
    motivations: [
      {
        title: "Slow enough to see",
        description:
          "We leave extra days between rounds so the work can be looked at in the morning, not only at midnight.",
        image: "/assets/14573d2d5a225d90.webp",
        imageAlt: "Laptop and notebook on a sunlit desk",
      },
      {
        title: "Built to be handed on",
        description:
          "The files should make sense to a stranger. If they do not, we have not finished the job.",
        image: "/assets/161a5edc1845a242.webp",
        imageAlt: "Team working together at laptops in an open office",
      },
    ],
  },
} satisfies Record<string, About11Props>;
