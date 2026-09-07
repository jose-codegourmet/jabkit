// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { MotionLoadingProgressBar } from "./MotionLoadingProgressBar";
import { motionLoadingProgressBarMocks } from "./MotionLoadingProgressBar.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.default} />
    </div>
    <div className="dark bg-background">
      <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <MotionLoadingProgressBar {...motionLoadingProgressBarMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
