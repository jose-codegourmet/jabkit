// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { SterlingGateKineticNavigation } from "./SterlingGateKineticNavigation";
import { sterlingGateKineticNavigationMocks } from "./SterlingGateKineticNavigation.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <SterlingGateKineticNavigation
        {...sterlingGateKineticNavigationMocks.alternate}
      />
    </div>
    <div className="dark bg-background">
      <SterlingGateKineticNavigation
        {...sterlingGateKineticNavigationMocks.alternate}
      />
    </div>
  </div>
);

export default {
  Default: () => (
    <SterlingGateKineticNavigation
      {...sterlingGateKineticNavigationMocks.default}
    />
  ),
  Variants: () => (
    <SterlingGateKineticNavigation
      {...sterlingGateKineticNavigationMocks.alternate}
    />
  ),
  ThemeComparison,
};
