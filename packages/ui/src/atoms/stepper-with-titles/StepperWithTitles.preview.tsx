// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { StepperWithTitles } from "./StepperWithTitles";
import { stepperWithTitlesMocks } from "./StepperWithTitles.mocks";

export default {
  Default: () => (
    <div className="w-[36rem] bg-background p-8 text-foreground">
      <StepperWithTitles {...stepperWithTitlesMocks.default} />
    </div>
  ),
  Onboarding: () => (
    <div className="w-[42rem] bg-background p-8 text-foreground">
      <StepperWithTitles {...stepperWithTitlesMocks.onboarding} />
    </div>
  ),
};
