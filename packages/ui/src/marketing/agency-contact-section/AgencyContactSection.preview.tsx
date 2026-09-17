// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgencyContactSection } from "./AgencyContactSection";
import { agencyContactSectionMocks } from "./AgencyContactSection.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <AgencyContactSection {...agencyContactSectionMocks.default} />
    </div>
    <div className="dark bg-background">
      <AgencyContactSection {...agencyContactSectionMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <AgencyContactSection {...agencyContactSectionMocks.default} />
  ),
  Variants: () => (
    <AgencyContactSection {...agencyContactSectionMocks.alternate} />
  ),
  ThemeComparison,
};
