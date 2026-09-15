// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { GridlineDashboard } from "./GridlineDashboard";
import { gridlineDashboardMocks } from "./GridlineDashboard.mocks";

export default {
  Default: () => (
    <div className="min-h-dvh bg-background">
      <GridlineDashboard {...gridlineDashboardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="min-h-dvh bg-background">
      <GridlineDashboard {...gridlineDashboardMocks.alternate} />
    </div>
  ),
};
