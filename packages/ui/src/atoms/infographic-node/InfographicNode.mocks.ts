import type { InfographicNodeProps } from "./InfographicNode.types";

export const infographicNodeMocks = {
  default: {
    label: "Sessions",
    value: "12.4k",
    state: "active",
    tone: "warning",
    shape: "pill",
  },
  alternate: {
    label: "Events",
    value: "84",
    state: "idle",
    tone: "success",
    shape: "circle",
  },
} satisfies Record<string, InfographicNodeProps>;
