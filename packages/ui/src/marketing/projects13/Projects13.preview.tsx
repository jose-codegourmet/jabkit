// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Projects13 } from "./Projects13";
import { projects13AlternateMocks, projects13Mocks } from "./Projects13.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Projects13 {...projects13Mocks} />
    </div>
    <div className="dark bg-background">
      <Projects13 {...projects13Mocks} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Projects13 {...projects13Mocks} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Projects13 {...projects13AlternateMocks} />
    </div>
  ),
  ThemeComparison,
};
