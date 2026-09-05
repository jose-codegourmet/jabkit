import type { Compare5Option, Compare5Props } from "./Compare5.types";

export const compare5Left: Compare5Option = {
  title: "The old stack",
  description:
    "Status lives in inboxes, slides, and a spreadsheet someone last touched on Thursday.",
  imageSrc: "/assets/1bf986d4f35769a9.webp",
  imageAlt: "Paper notes and a crowded analog desk",
  action: { label: "Keep the current process", href: "#legacy" },
  accent: true,
};

export const compare5Right: Compare5Option = {
  title: "The new stack",
  description:
    "One canvas for the brief, the handoff, and the record — so the work stays in view.",
  imageSrc: "/assets/1a2d35c6581e840f.webp",
  imageAlt: "Bright open studio with a long communal table",
  action: { label: "See the new way", href: "#modern" },
};

export const compare5Mocks = {
  default: {
    title: "Old vs New",
    description:
      "Two paths through the same operation. Pick the one that still feels like work — or the one that finally reads as a system.",
    dividerLabel: "OR",
    left: compare5Left,
    right: compare5Right,
  },
  alternate: {
    title: "Manual vs Guided",
    description:
      "Keep running the room from memory, or let a quieter console hold the sequence so the crew can look up.",
    dividerLabel: "OR",
    left: {
      title: "Run it by hand",
      description:
        "Every standup starts with reconstructing what moved. Useful until the week gets loud.",
      imageSrc: "/assets/6593e2b5c93d4704.webp",
      imageAlt: "Hands reviewing printed plans on a wooden table",
      action: { label: "Stay analog", href: "#manual" },
      accent: true,
    },
    right: {
      title: "Run it in view",
      description:
        "The same beats, captured once. Operators walk in already knowing the next move.",
      imageSrc: "/assets/b39e28fa56f26dca.webp",
      imageAlt: "Laptop and notebook on a clean modern workstation",
      action: { label: "Tour the console", href: "#guided" },
    },
  },
} satisfies Record<string, Compare5Props>;
