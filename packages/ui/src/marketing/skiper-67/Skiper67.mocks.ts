import type { Skiper67Props } from "./Skiper67.types";

export const skiper67Mocks = {
  default: {
    hint: "Click the video to play",
    poster: "/assets/ee004332d5917332.webp",
    posterAlt: "Still from a studio showreel with warm stage light",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    videoLabel: "Studio showreel",
    playLabel: "Play",
  },
  alternate: {
    hint: "Click the tape to play",
    poster: "/assets/1a3c84c318076e07.webp",
    posterAlt: "Night desk still from a product walkthrough",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoLabel: "Night desk walkthrough",
    playLabel: "Play",
  },
} satisfies Record<string, Skiper67Props>;
