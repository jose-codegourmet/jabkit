import type { MotionImageRevealSliderProps } from "./MotionImageRevealSlider.types";

export const motionImageRevealSliderMocks = {
  default: {
    eyebrow: "Reveal",
    heading: "Color waiting under the grain.",
    description:
      "Drag the handle to peel grayscale back and show the photograph underneath. Arrow keys work too.",
    imageSrc: "/assets/1a2d35c6581e840f.webp",
    imageAlt: "Bright open studio with a long communal table",
    grayscaleOverlay: true,
    leftLabel: "Color",
    rightLabel: "Mono",
    initialPosition: 48,
    step: 5,
  },
  alternate: {
    eyebrow: "Compare",
    heading: "The room, before and after.",
    description:
      "Two stills, one rail. Slide to watch the analog desk give way to the open studio.",
    imageSrc: "/assets/1a2d35c6581e840f.webp",
    imageAlt: "Bright open studio with a long communal table",
    overlaySrc: "/assets/1bf986d4f35769a9.webp",
    overlayAlt: "Paper notes and a crowded analog desk",
    grayscaleOverlay: false,
    leftLabel: "After",
    rightLabel: "Before",
    initialPosition: 52,
    step: 8,
  },
} satisfies Record<"default" | "alternate", MotionImageRevealSliderProps>;
