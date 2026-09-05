// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Compare5 } from "./Compare5";
import { compare5Mocks } from "./Compare5.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Compare5 {...compare5Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Compare5 {...compare5Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Compare5 {...compare5Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Compare5 {...compare5Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
