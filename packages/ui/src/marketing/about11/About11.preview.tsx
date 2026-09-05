// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { About11 } from "./About11";
import { about11Mocks } from "./About11.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <About11 {...about11Mocks.default} />
    </div>
    <div className="dark bg-background">
      <About11 {...about11Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <About11 {...about11Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <About11 {...about11Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
