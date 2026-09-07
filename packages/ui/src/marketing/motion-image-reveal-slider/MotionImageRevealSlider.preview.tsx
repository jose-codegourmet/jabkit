// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { MotionImageRevealSlider } from "./MotionImageRevealSlider";
import { motionImageRevealSliderMocks } from "./MotionImageRevealSlider.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <MotionImageRevealSlider {...motionImageRevealSliderMocks.default} />
    </div>
    <div className="dark bg-background">
      <MotionImageRevealSlider {...motionImageRevealSliderMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <MotionImageRevealSlider {...motionImageRevealSliderMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <MotionImageRevealSlider {...motionImageRevealSliderMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
