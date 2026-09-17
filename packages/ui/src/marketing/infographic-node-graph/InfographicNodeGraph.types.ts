import type { HTMLAttributes } from "react";
import type {
  InfographicNodeShape,
  InfographicNodeTone,
} from "@/atoms/infographic-node";

export type InfographicNodeIconName =
  | "lock"
  | "expand"
  | "analytics"
  | "cloud"
  | "database"
  | "thumbs"
  | "cursor"
  | "users"
  | "globe"
  | "share"
  | "network"
  | "plus"
  | "close";

export interface InfographicGraphNode {
  id: string;
  x: number;
  y: number;
  label?: string;
  value?: string;
  tone?: InfographicNodeTone;
  shape?: InfographicNodeShape;
  icon?: InfographicNodeIconName;
}

export interface InfographicGraphEdge {
  from: string;
  to: string;
}

export interface InfographicNodeGraphProps extends HTMLAttributes<HTMLElement> {
  nodes?: InfographicGraphNode[];
  edges?: InfographicGraphEdge[];
  revealOrder?: string[];
}
