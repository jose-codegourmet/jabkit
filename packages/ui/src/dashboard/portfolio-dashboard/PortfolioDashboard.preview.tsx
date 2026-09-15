// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { PortfolioDashboard } from "./PortfolioDashboard";
import { portfolioDashboardMocks } from "./PortfolioDashboard.mocks";

export default {
  Default: () => (
    <div className="min-h-dvh bg-background">
      <PortfolioDashboard {...portfolioDashboardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="min-h-dvh bg-background">
      <PortfolioDashboard {...portfolioDashboardMocks.alternate} />
    </div>
  ),
};
