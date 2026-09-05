// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Content2 } from "./Content2";
import { content2Mocks } from "./Content2.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Content2 {...content2Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Content2 {...content2Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Content2 {...content2Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Content2 {...content2Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
