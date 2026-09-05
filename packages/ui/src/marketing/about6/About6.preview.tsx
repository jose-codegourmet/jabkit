// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { About6 } from "./About6";
import { about6Mocks } from "./About6.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <About6 {...about6Mocks.default} />
    </div>
    <div className="dark bg-background">
      <About6 {...about6Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <About6 {...about6Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <About6 {...about6Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
