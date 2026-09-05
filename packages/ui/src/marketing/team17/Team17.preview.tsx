// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Team17 } from "./Team17";
import { team17Mocks } from "./Team17.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Team17 {...team17Mocks.default} />
    </div>
    <div className="dark bg-background">
      <Team17 {...team17Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Team17 {...team17Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Team17 {...team17Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
