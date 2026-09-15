// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { VForm8 } from "./VForm8";
import { vForm8Mocks } from "./VForm8.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <VForm8 {...vForm8Mocks.default} />
    </div>
    <div className="dark bg-background">
      <VForm8 {...vForm8Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <VForm8 {...vForm8Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <VForm8 {...vForm8Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
