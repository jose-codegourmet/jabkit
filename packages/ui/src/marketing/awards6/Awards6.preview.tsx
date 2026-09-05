// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Awards6 } from "./Awards6";
import { awards6Mocks } from "./Awards6.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Awards6 {...awards6Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Awards6 {...awards6Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Awards6 {...awards6Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Awards6 {...awards6Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
