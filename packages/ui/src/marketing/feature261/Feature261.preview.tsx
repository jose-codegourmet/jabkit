// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Feature261 } from "./Feature261";
import { feature261Mocks } from "./Feature261.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Feature261 {...feature261Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Feature261 {...feature261Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Feature261 {...feature261Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Feature261 {...feature261Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
