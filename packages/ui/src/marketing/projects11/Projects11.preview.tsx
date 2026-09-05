// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Projects11 } from "./Projects11";
import { projects11AlternateMocks, projects11Mocks } from "./Projects11.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Projects11 {...projects11Mocks} />
    </div>
    <div className="dark bg-background">
      <Projects11 {...projects11Mocks} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Projects11 {...projects11Mocks} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Projects11 {...projects11AlternateMocks} />
    </div>
  ),
  ThemeComparison,
};
