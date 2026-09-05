// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TwoFactor5 } from "./TwoFactor5";
import { twoFactor5Mocks } from "./TwoFactor5.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TwoFactor5 {...twoFactor5Mocks.default} />
    </div>
    <div className="dark bg-background">
      <TwoFactor5 {...twoFactor5Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <TwoFactor5 {...twoFactor5Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <TwoFactor5 {...twoFactor5Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
