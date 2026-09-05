// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { About14 } from "./About14";
import { about14Mocks } from "./About14.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <About14 {...about14Mocks.default} />
    </div>
    <div className="dark bg-background">
      <About14 {...about14Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <About14 {...about14Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <About14 {...about14Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
