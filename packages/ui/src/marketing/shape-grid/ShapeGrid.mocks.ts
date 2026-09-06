import type { ShapeGridProps } from "./ShapeGrid.types";

export const shapeGridMocks = {
  default: {
    eyebrow: "Tile field",
    heading: "Shapes that drift under the copy.",
    description:
      "Outlined squares slide on a diagonal, then fill when the pointer lands. Quiet when motion is reduced.",
    direction: "diagonal",
    speed: 0.5,
    squareSize: 40,
    shape: "square",
    hoverTrailAmount: 0,
    lineWidth: 1,
    gridOpacity: 0.45,
    hoverOpacity: 0.28,
    tone: "primary",
  },
  alternate: {
    eyebrow: "Hex lattice",
    heading: "A slower field. A longer trail.",
    description:
      "Hex tiles drift left, and recent hovers linger as a fading wake — for a denser product hero.",
    direction: "left",
    speed: 0.32,
    squareSize: 48,
    shape: "hexagon",
    hoverTrailAmount: 8,
    lineWidth: 1.2,
    gridOpacity: 0.5,
    hoverOpacity: 0.34,
    tone: "ring",
  },
} satisfies Record<"default" | "alternate", ShapeGridProps>;
