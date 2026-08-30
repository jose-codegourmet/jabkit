import type { Hero228HeadlinePart, Hero228Portrait } from "./Hero228.types";

const defaultHeadline: Hero228HeadlinePart[] = [
  { text: "The people who " },
  { text: "shape", italic: true },
  { text: " what we ship" },
];

const defaultPortraits: Hero228Portrait[] = [
  {
    name: "Amara Cole",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&h=960&q=80",
    alt: "Portrait of Amara Cole",
  },
  {
    name: "Julian Voss",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=720&h=960&q=80",
    alt: "Portrait of Julian Voss",
  },
  {
    name: "Noor Elahi",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=720&h=960&q=80",
    alt: "Portrait of Noor Elahi",
  },
  {
    name: "Mateo Ruiz",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=720&h=960&q=80",
    alt: "Portrait of Mateo Ruiz",
  },
  {
    name: "Iris Chen",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=720&h=960&q=80",
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
