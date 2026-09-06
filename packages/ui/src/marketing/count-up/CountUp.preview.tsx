// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CountUp } from "./CountUp";
import { countUpMocks } from "./CountUp.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <CountUp {...countUpMocks.default} />
    </div>
    <div className="dark bg-background">
      <CountUp {...countUpMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <CountUp {...countUpMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <CountUp {...countUpMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
