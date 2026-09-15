// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ComingSoon3 } from "./ComingSoon3";
import { comingSoon3Mocks } from "./ComingSoon3.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ComingSoon3 {...comingSoon3Mocks.default} />
    </div>
    <div className="dark bg-background">
      <ComingSoon3 {...comingSoon3Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <ComingSoon3 {...comingSoon3Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ComingSoon3 {...comingSoon3Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
