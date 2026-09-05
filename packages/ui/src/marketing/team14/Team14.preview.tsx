// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Team14 } from "./Team14";
import { team14Mocks } from "./Team14.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Team14 {...team14Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Team14 {...team14Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Team14 {...team14Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Team14 {...team14Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
