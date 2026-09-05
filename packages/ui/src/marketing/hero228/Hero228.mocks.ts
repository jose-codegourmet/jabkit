import type { Hero228HeadlinePart, Hero228Portrait } from "./Hero228.types";

const defaultHeadline: Hero228HeadlinePart[] = [
  { text: "The people who " },
  { text: "shape", italic: true },
  { text: " what we ship" },
];

const defaultPortraits: Hero228Portrait[] = [
  {
    name: "Amara Cole",
    src: "/assets/fc2d8371236ac90c.webp",
    alt: "Portrait of Amara Cole",
  },
  {
    name: "Julian Voss",
    src: "/assets/2a364f729e4f7c09.webp",
    alt: "Portrait of Julian Voss",
  },
  {
    name: "Noor Elahi",
    src: "/assets/45dad0903fef5d02.webp",
    alt: "Portrait of Noor Elahi",
  },
  {
    name: "Mateo Ruiz",
    src: "/assets/2bd1b12951fdbdb5.webp",
    alt: "Portrait of Mateo Ruiz",
  },
  {
    name: "Iris Chen",
    src: "/assets/d111cc60a8f2bf68.webp",
    alt: "Portrait of Iris Chen",
  },
];

export const hero228Mocks = {
  default: {
    headline: defaultHeadline,
    description:
      "A tight crew of editors, makers, and operators. They take ambitious briefs and leave finished product.",
    portraits: defaultPortraits,
    autoplay: true,
    interval: 2800,
  },
  studio: {
    headline: [
      { text: "Studio notes, " },
      { text: "faces first", italic: true },
    ] satisfies Hero228HeadlinePart[],
    description:
      "Three partners. One practice. Portraits that rotate the way a conversation does — one voice forward, two listening.",
    portraits: [
      defaultPortraits[0],
      defaultPortraits[2],
      defaultPortraits[4],
    ] satisfies Hero228Portrait[],
    autoplay: false,
    interval: 2800,
  },
};
