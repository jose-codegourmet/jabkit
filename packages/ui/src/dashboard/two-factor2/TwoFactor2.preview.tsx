// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TwoFactor2 } from "./TwoFactor2";
import { twoFactor2Mocks } from "./TwoFactor2.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TwoFactor2 {...twoFactor2Mocks.default} />
    </div>
    <div className="dark bg-background">
      <TwoFactor2 {...twoFactor2Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <TwoFactor2 {...twoFactor2Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <TwoFactor2 {...twoFactor2Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
