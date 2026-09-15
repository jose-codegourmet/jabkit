import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { StepperWithTitles } from "./StepperWithTitles";
import { stepperWithTitlesMocks } from "./StepperWithTitles.mocks";

const meta = {
  title: "Atoms/StepperWithTitles",
  component: StepperWithTitles,
  parameters: { layout: "centered" },
} satisfies Meta<typeof StepperWithTitles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...stepperWithTitlesMocks.checkout },
  render: () => (
    <div className="w-[36rem] bg-background p-8 text-foreground">
      <StepperWithTitles {...stepperWithTitlesMocks.checkout} />
    </div>
  ),
};

export const Onboarding: Story = {
  args: { ...stepperWithTitlesMocks.onboarding },
  render: () => (
    <div className="w-[42rem] bg-background p-8 text-foreground">
      <StepperWithTitles {...stepperWithTitlesMocks.onboarding} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...stepperWithTitlesMocks.checkout },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <StepperWithTitles {...stepperWithTitlesMocks.checkout} />
      </div>
      <div className="dark bg-background p-8">
        <StepperWithTitles {...stepperWithTitlesMocks.checkout} />
      </div>
    </div>
  ),
};
