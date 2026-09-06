import type { HoloCardProps } from "./HoloCard.types";

export const holoCardMocks = {
  default: {
    eyebrow: "Limited foil",
    heading: "A card that tracks the light.",
    description:
      "Pointer tilt, rainbow foil, and a shadow that leans with the surface. Quiet when motion is reduced.",
    brand: "Northline",
    badge: "Foil",
    title: "Holo Card",
    subtitle: "Move the pointer across the card.",
    serial: "0001 / 2026",
    mark: "northline.studio",
    maxTilt: 16,
    aspect: 1.586,
  },
  alternate: {
    eyebrow: "Studio editions",
    heading: "Three cuts of the same foil.",
    description:
      "A short row of holographic editions. Same tilt physics, different serials and copy.",
    cards: [
      {
        id: "studio",
        brand: "Northline",
        badge: "Studio",
        title: "Field Cut",
        subtitle: "Soft-light foil on a compact trading face.",
        serial: "0048 / 2026",
        mark: "edition.studio",
      },
      {
        id: "archive",
        brand: "Northline",
        badge: "Archive",
        title: "Harbor Plate",
        subtitle: "Chart-token rainbow that follows the pointer.",
        serial: "0112 / 2026",
        mark: "edition.archive",
      },
      {
        id: "proof",
        brand: "Northline",
        badge: "Proof",
        title: "Lumen Proof",
        subtitle: "A contact shadow that leans with the card.",
        serial: "0207 / 2026",
        mark: "edition.proof",
      },
    ],
    maxTilt: 12,
    aspect: 1.586,
  },
} satisfies Record<"default" | "alternate", HoloCardProps>;
