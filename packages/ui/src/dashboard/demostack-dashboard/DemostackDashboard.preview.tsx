// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { DemostackDashboard } from "./DemostackDashboard";
import { demostackDashboardMocks } from "./DemostackDashboard.mocks";

export default {
  Default: () => (
    <div className="min-h-dvh bg-background">
      <DemostackDashboard {...demostackDashboardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="min-h-dvh bg-background">
      <DemostackDashboard {...demostackDashboardMocks.alternate} />
    </div>
  ),
};
