import type { Compare5Option, Compare5Props } from "./Compare5.types";

export const compare5Left: Compare5Option = {
  title: "The old stack",
  description:
    "Status lives in inboxes, slides, and a spreadsheet someone last touched on Thursday.",
  imageSrc:
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&h=1800&q=80",
  imageAlt: "Paper notes and a crowded analog desk",
  action: { label: "Keep the current process", href: "#legacy" },
  accent: true,
};

export const compare5Right: Compare5Option = {
  title: "The new stack",
  description:
    "One canvas for the brief, the handoff, and the record — so the work stays in view.",
  imageSrc:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&h=1800&q=80",
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
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&h=1800&q=80",
      imageAlt: "Hands reviewing printed plans on a wooden table",
      action: { label: "Stay analog", href: "#manual" },
      accent: true,
    },
    right: {
      title: "Run it in view",
      description:
        "The same beats, captured once. Operators walk in already knowing the next move.",
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&h=1800&q=80",
      imageAlt: "Laptop and notebook on a clean modern workstation",
      action: { label: "Tour the console", href: "#guided" },
    },
  },
} satisfies Record<string, Compare5Props>;
