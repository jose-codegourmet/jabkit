// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Projects16 } from "./Projects16";
import { projects16AlternateMocks, projects16Mocks } from "./Projects16.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Projects16 {...projects16Mocks} />
    </div>
    <div className="dark bg-background">
      <Projects16 {...projects16Mocks} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Projects16 {...projects16Mocks} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Projects16 {...projects16AlternateMocks} />
    </div>
  ),
  ThemeComparison,
};
