// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TraffoFeaturesSection } from "./TraffoFeaturesSection";
import { traffoFeaturesSectionMocks } from "./TraffoFeaturesSection.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TraffoFeaturesSection {...traffoFeaturesSectionMocks.default} />
    </div>
    <div className="dark bg-background">
      <TraffoFeaturesSection {...traffoFeaturesSectionMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <TraffoFeaturesSection {...traffoFeaturesSectionMocks.default} />
  ),
  Variants: () => (
    <TraffoFeaturesSection {...traffoFeaturesSectionMocks.alternate} />
  ),
  ThemeComparison,
};
