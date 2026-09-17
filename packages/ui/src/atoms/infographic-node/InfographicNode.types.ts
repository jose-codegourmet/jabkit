import type { HTMLAttributes, ReactNode } from "react";

export type InfographicNodeState = "idle" | "active";
export type InfographicNodeTone = "ink" | "success" | "warning" | "accent";
export type InfographicNodeShape = "pill" | "circle" | "hub";

export interface InfographicNodeProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  state?: InfographicNodeState;
  tone?: InfographicNodeTone;
  shape?: InfographicNodeShape;
  icon?: ReactNode;
}
