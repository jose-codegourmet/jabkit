import type { HTMLAttributes } from "react";

export type ShapeGridDirection = "diagonal" | "up" | "right" | "down" | "left";
export type ShapeGridShape = "square" | "hexagon" | "circle" | "triangle";
export type ShapeGridTone = "primary" | "foreground" | "ring";

export interface ShapeGridProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  direction?: ShapeGridDirection;
  speed?: number;
  squareSize?: number;
  shape?: ShapeGridShape;
  hoverTrailAmount?: number;
  lineWidth?: number;
  gridOpacity?: number;
  hoverOpacity?: number;
  tone?: ShapeGridTone;
}
