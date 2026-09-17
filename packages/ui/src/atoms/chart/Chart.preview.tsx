// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ChartBarDefault, ChartBarMultiple } from "./Chart.examples";

export default {
  Default: () => <ChartBarDefault />,
  Variants: () => <ChartBarMultiple />,
};
