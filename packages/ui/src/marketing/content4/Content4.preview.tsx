// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Content4 } from "./Content4";
import { content4Mocks } from "./Content4.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Content4 {...content4Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Content4 {...content4Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Content4 {...content4Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Content4 {...content4Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
