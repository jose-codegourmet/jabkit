// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Cta28 } from "./Cta28";
import { cta28Mocks } from "./Cta28.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Cta28 {...cta28Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Cta28 {...cta28Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Cta28 {...cta28Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Cta28 {...cta28Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
