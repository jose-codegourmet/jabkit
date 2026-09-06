import type { StickyContentWrapperProps } from "./StickyContentWrapper.types";

export const stickyContentWrapperMocks = {
  default: {
    mediaSide: "end",
    scaleMedia: true,
    snap: true,
    items: [
      {
        id: "rooms",
        heading: "Rooms that hold a brief",
        body: "Keep the claim on screen while the proof changes beside it. One surface, four rooms, no extra chrome.",
        points: [
          "Open plan with a quiet wall",
          "Daylight as the primary lamp",
          "Materials named, not guessed",
        ],
        cta: { href: "#floor-plan", label: "See the floor" },
        imageSrc: "/assets/462a1be29787cd8e.webp",
        imageAlt: "Low oak lounge chair on a pale floor",
      },
      {
        id: "light",
        heading: "Light as a product",
        body: "The lamp is not decoration. It sets the tempo of the room and the photograph that sits next to the copy.",
        points: [
          "Arc that clears a reading chair",
          "Warm falloff, no glare on copy",
          "Still when motion is reduced",
        ],
        cta: { href: "#lighting", label: "Read the spec" },
        imageSrc: "/assets/6cc11e462a9aaded.webp",
        imageAlt: "Arc floor lamp lighting a quiet corner",
      },
      {
        id: "stone",
        heading: "Weight you can place",
        body: "A table that does not move when the layout does. Pair the still object with a line of copy that can change.",
        points: [
          "Sculpted stone, one piece",
          "Height set for a laptop and a cup",
          "Sits in sun without bleaching",
        ],
        cta: { href: "#tables", label: "View the table" },
        imageSrc: "/assets/488fa5330da1224c.webp",
        imageAlt: "Sculptural stone side table in a sunlit room",
      },
      {
        id: "rest",
        heading: "A pause that looks finished",
        body: "The daybed is the last frame. Copy, list, and CTA stay in the same column so the image can scale and swap.",
        points: [
          "Linen that reads in light and dark",
          "Plaster wall as a quiet ground",
          "Caption lives in the copy, not on the photo",
        ],
        cta: { href: "#daybed", label: "See the finish" },
        imageSrc: "/assets/7cb36691e11ed9af.webp",
        imageAlt: "Linen daybed against a plaster wall",
      },
    ],
  },
  alternate: {
    mediaSide: "start",
    scaleMedia: true,
    snap: false,
    items: [
      {
        id: "desk",
        heading: "A desk that keeps the page",
        body: "Image first on wide screens. Copy still steps through as you scroll, with a shorter pair for a product row.",
        points: [
          "Walnut with one drawer",
          "Cable path hidden in the rail",
        ],
        cta: { href: "#desk", label: "Open the desk" },
        imageSrc: "/assets/21aecf698128f57b.webp",
        imageAlt: "Walnut writing desk with a single drawer",
      },
      {
        id: "shade",
        heading: "Paper that holds the lamp",
        body: "The paired still swaps without a carousel. Same tokens, same column math, fewer beats.",
        points: [
          "Folded shade, even glow",
          "Works over a desk or a table",
        ],
        cta: { href: "#shade", label: "See the shade" },
        imageSrc: "/assets/e40131b7fd7bf05b.webp",
        imageAlt: "Folded paper pendant shade",
      },
    ],
  },
} satisfies Record<"default" | "alternate", StickyContentWrapperProps>;
