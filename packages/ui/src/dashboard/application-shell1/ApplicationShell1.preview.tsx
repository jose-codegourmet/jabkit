// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ApplicationShell1 } from "./ApplicationShell1";
import { applicationShell1Mocks } from "./ApplicationShell1.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ApplicationShell1 {...applicationShell1Mocks.default} />
    </div>
    <div className="dark bg-background">
      <ApplicationShell1 {...applicationShell1Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <ApplicationShell1 {...applicationShell1Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ApplicationShell1 {...applicationShell1Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
