// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Pricing28 } from "./Pricing28";
import { pricing28Mocks } from "./Pricing28.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Pricing28 {...pricing28Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Pricing28 {...pricing28Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Pricing28 {...pricing28Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Pricing28 {...pricing28Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
