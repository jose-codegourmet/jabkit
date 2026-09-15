// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { StepperVerticalInline } from "./StepperVerticalInline";
import { stepperVerticalInlineMocks } from "./StepperVerticalInline.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-8">
      <StepperVerticalInline {...stepperVerticalInlineMocks.default} />
    </div>
    <div className="dark bg-background p-8">
      <StepperVerticalInline {...stepperVerticalInlineMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full min-w-[300px]">
      <StepperVerticalInline {...stepperVerticalInlineMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full min-w-[300px]">
      <StepperVerticalInline {...stepperVerticalInlineMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
