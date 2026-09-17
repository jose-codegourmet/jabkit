// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgencyServicesSection } from "./AgencyServicesSection";
import { agencyServicesSectionMocks } from "./AgencyServicesSection.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <AgencyServicesSection {...agencyServicesSectionMocks.default} />
    </div>
    <div className="dark bg-background">
      <AgencyServicesSection {...agencyServicesSectionMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <AgencyServicesSection {...agencyServicesSectionMocks.default} />
  ),
  Variants: () => (
    <AgencyServicesSection {...agencyServicesSectionMocks.alternate} />
  ),
  ThemeComparison,
};
