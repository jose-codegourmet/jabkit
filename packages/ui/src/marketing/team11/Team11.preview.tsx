// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Team11 } from "./Team11";
import { team11Mocks } from "./Team11.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Team11 {...team11Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Team11 {...team11Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Team11 {...team11Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Team11 {...team11Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
