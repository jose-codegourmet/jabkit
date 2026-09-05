// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { About8 } from "./About8";
import { about8Mocks } from "./About8.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <About8 {...about8Mocks.default} />
    </div>
    <div className="dark bg-background">
      <About8 {...about8Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <About8 {...about8Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <About8 {...about8Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
