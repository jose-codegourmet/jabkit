// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AgencySectionHeading } from "./AgencySectionHeading";
import { agencySectionHeadingMocks } from "./AgencySectionHeading.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-8">
      <AgencySectionHeading {...agencySectionHeadingMocks.default} />
    </div>
    <div className="dark bg-background p-8">
      <AgencySectionHeading {...agencySectionHeadingMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <AgencySectionHeading {...agencySectionHeadingMocks.default} />
  ),
  Variants: () => (
    <AgencySectionHeading {...agencySectionHeadingMocks.alternate} />
  ),
  ThemeComparison,
};
