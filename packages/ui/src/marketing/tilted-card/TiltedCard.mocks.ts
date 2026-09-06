import type { TiltedCardProps } from "./TiltedCard.types";

export const tiltedCardMocks = {
  default: {
    eyebrow: "Press kit",
    heading: "A sleeve that follows your hand.",
    description:
      "Pointer tilt, hover lift, and a caption that tags along. Still when motion is reduced.",
    imageSrc: "/assets/462a1be29787cd8e.webp",
    imageAlt: "Low oak lounge chair on a pale floor",
    caption: "Field Notes / Northline",
    overlayTitle: "Field Notes",
    overlaySubtitle: "Northline, 2026",
    rotateAmplitude: 14,
    scaleOnHover: 1.07,
    showCaption: true,
    displayOverlay: true,
  },
  alternate: {
    eyebrow: "Lookbook",
    heading: "Three stills, one tilt.",
    description:
      "A short row of media cards. Same pointer physics, different sleeves and captions.",
    cards: [
      {
        id: "lounge",
        imageSrc: "/assets/462a1be29787cd8e.webp",
        imageAlt: "Low oak lounge chair on a pale floor",
        caption: "Oak lounge",
        overlayTitle: "Lounge",
        overlaySubtitle: "Seating",
      },
      {
        id: "lamp",
        imageSrc: "/assets/6cc11e462a9aaded.webp",
        imageAlt: "Arc floor lamp lighting a quiet corner",
        caption: "Arc lamp",
        overlayTitle: "Arc",
        overlaySubtitle: "Lighting",
      },
      {
        id: "table",
        imageSrc: "/assets/488fa5330da1224c.webp",
        imageAlt: "Sculptural stone side table in a sunlit room",
        caption: "Harbor plate",
        overlayTitle: "Harbor",
        overlaySubtitle: "Table",
      },
    ],
    rotateAmplitude: 10,
    scaleOnHover: 1.05,
    showCaption: true,
    displayOverlay: true,
  },
} satisfies Record<"default" | "alternate", TiltedCardProps>;
