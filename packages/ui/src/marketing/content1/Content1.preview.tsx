// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Content1 } from "./Content1";
import { content1Mocks } from "./Content1.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Content1 {...content1Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Content1 {...content1Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Content1 {...content1Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Content1 {...content1Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
