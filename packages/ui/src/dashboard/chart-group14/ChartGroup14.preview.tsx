// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ChartGroup14 } from "./ChartGroup14";
import { chartGroup14Mocks } from "./ChartGroup14.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ChartGroup14 {...chartGroup14Mocks.default} />
    </div>
    <div className="dark bg-background">
      <ChartGroup14 {...chartGroup14Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <ChartGroup14 {...chartGroup14Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ChartGroup14 {...chartGroup14Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
