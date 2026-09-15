import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { StepperVerticalInline } from "./StepperVerticalInline";
import { stepperVerticalInlineMocks } from "./StepperVerticalInline.mocks";

const meta = {
  title: "Atoms/StepperVerticalInline",
  component: StepperVerticalInline,
  parameters: { layout: "centered" },
} satisfies Meta<typeof StepperVerticalInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...stepperVerticalInlineMocks.default },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <StepperVerticalInline {...stepperVerticalInlineMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...stepperVerticalInlineMocks.alternate },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <StepperVerticalInline {...stepperVerticalInlineMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...stepperVerticalInlineMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <StepperVerticalInline {...stepperVerticalInlineMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <StepperVerticalInline {...stepperVerticalInlineMocks.default} />
      </div>
    </div>
  ),
};
