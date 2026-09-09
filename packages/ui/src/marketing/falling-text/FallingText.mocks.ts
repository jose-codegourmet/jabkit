import type { FallingTextProps } from "./FallingText.types";

export const fallingTextMocks = {
  default: {
    eyebrow: "Motion copy",
    text: "Drop the headline and let gravity finish the pitch.",
    description:
      "Words rest in place until they fall. Highlighted tokens keep the semantic accent while the rest of the line settles on the floor.",
    highlightWords: ["gravity", "pitch"],
    trigger: "auto",
    gravity: 1,
    align: "center",
  },
  alternate: {
    eyebrow: "Interactive line",
    text: "Click the sentence and watch each word find the floor.",
    description:
      "Click or keyboard activation starts the fall. Hover and scroll triggers are available for quieter landings.",
    highlightWords: ["Click", "word", "floor"],
    trigger: "click",
    gravity: 1.15,
    align: "left",
    as: "h2",
  },
} satisfies Record<"default" | "alternate", FallingTextProps>;
