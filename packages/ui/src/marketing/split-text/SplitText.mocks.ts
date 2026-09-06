import type { SplitTextProps } from "./SplitText.types";

export const splitTextMocks = {
  default: {
    eyebrow: "Launch copy",
    text: "Make every headline land, letter by letter.",
    description:
      "A marketing headline that splits into glyphs, then rises into place with a staggered ease. Quiet on reduced motion.",
    splitBy: "chars",
    align: "center",
    delay: 80,
    stagger: 28,
    duration: 720,
  },
  alternate: {
    eyebrow: "Editorial",
    text: "Ship quieter launches\nwith words that wait their turn.",
    description:
      "Word-level split keeps phrases intact while each token still arrives on its own beat.",
    splitBy: "words",
    align: "left",
    delay: 40,
    stagger: 90,
    duration: 640,
    as: "h2",
  },
} satisfies Record<"default" | "alternate", SplitTextProps>;
