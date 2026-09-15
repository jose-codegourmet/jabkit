import type { Skiper67Props } from "./Skiper67.types";

export const skiper67Mocks = {
  default: {
    eyebrow: "Showreel",
    heading: "Watch the cut before you book the room.",
    description:
      "Hover the frame. The play control stays with your pointer. Click to open the player and scrub the reel.",
    poster: "/assets/ee004332d5917332.webp",
    posterAlt: "Still from a studio showreel with warm stage light",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    videoLabel: "Studio showreel",
    playLabel: "Play showreel",
  },
  alternate: {
    eyebrow: "Field tape",
    heading: "A quieter cut for the night desk.",
    description:
      "Same player, cooler still. Open the modal when you want the full timeline and mute control.",
    poster: "/assets/1a3c84c318076e07.webp",
    posterAlt: "Night desk still from a product walkthrough",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoLabel: "Night desk walkthrough",
    playLabel: "Play walkthrough",
  },
} satisfies Record<string, Skiper67Props>;
