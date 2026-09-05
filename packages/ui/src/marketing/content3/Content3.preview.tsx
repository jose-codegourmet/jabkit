// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Content3 } from "./Content3";
import { content3Mocks } from "./Content3.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Content3 {...content3Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Content3 {...content3Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Content3 {...content3Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Content3 {...content3Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
