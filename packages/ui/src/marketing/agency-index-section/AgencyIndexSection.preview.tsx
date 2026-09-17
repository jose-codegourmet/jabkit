// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgencyIndexSection } from "./AgencyIndexSection";
import { agencyIndexSectionMocks } from "./AgencyIndexSection.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <AgencyIndexSection {...agencyIndexSectionMocks.default} />
    </div>
    <div className="dark bg-background">
      <AgencyIndexSection {...agencyIndexSectionMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <AgencyIndexSection {...agencyIndexSectionMocks.default} />,
  Variants: () => <AgencyIndexSection {...agencyIndexSectionMocks.alternate} />,
  ThemeComparison,
};
