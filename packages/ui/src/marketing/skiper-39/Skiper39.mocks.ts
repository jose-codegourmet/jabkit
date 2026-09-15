import { SKIPER39_PEEPS_SRC } from "./Skiper39";
import type { Skiper39Props } from "./Skiper39.types";

export const skiper39Mocks = {
  default: {
    label: "Croud Canvas",
    src: SKIPER39_PEEPS_SRC,
    rows: 15,
    cols: 7,
  },
  alternate: {
    label: "Open Peeps",
    src: SKIPER39_PEEPS_SRC,
    rows: 15,
    cols: 7,
  },
} satisfies Record<"default" | "alternate", Skiper39Props>;
