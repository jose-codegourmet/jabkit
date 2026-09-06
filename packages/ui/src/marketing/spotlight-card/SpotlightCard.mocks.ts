import type { SpotlightCardProps } from "./SpotlightCard.types";

export const spotlightCardMocks = {
  default: {
    eyebrow: "Pointer light",
    heading: "A lamp that stays on the work.",
    description:
      "Radial light tracks the pointer across each panel. Quiet when motion is reduced.",
    cards: [
      {
        id: "signal",
        kicker: "Signal",
        title: "Lock on the active panel",
        body: "The highlight follows your hand so the card you are reading is obvious without a heavy border.",
      },
      {
        id: "field",
        kicker: "Field",
        title: "Light, not noise",
        body: "The glow is primary mixed through transparency. Same tokens in light and dark.",
      },
      {
        id: "still",
        kicker: "Still",
        title: "Parks when asked",
        body: "If the system prefers reduced motion, the lamp sits in the center and stops tracking.",
      },
    ],
    spotlightSize: 18,
  },
  alternate: {
    eyebrow: "Capability row",
    heading: "Two surfaces, one lamp.",
    description:
      "A tighter pair for a product row. Same pointer tracking, longer copy.",
    cards: [
      {
        id: "compose",
        kicker: "Compose",
        title: "Write once, light everywhere",
        body: "Drop the block under a hero. Each card keeps its own lamp so a grid never shares one hotspot.",
      },
      {
        id: "inspect",
        kicker: "Inspect",
        title: "See the token mix",
        body: "Primary through color-mix, card fill, and a quiet border. No palette hex in the component.",
      },
    ],
    spotlightSize: 22,
  },
} satisfies Record<"default" | "alternate", SpotlightCardProps>;
