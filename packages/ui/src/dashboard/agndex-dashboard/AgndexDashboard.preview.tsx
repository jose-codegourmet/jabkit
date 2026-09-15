// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgndexDashboard } from "./AgndexDashboard";
import { agndexDashboardMocks } from "./AgndexDashboard.mocks";

export default {
  Default: () => (
    <div className="min-h-dvh bg-background">
      <AgndexDashboard {...agndexDashboardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="min-h-dvh bg-background">
      <AgndexDashboard {...agndexDashboardMocks.alternate} />
    </div>
  ),
};
