import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { BrightLizard } from "./BrightLizard";
import { brightLizardMocks } from "./BrightLizard.mocks";

const meta = {
  title: "Atoms/BrightLizard",
  component: BrightLizard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof BrightLizard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...brightLizardMocks.default },
  render: () => (
    <BrightLizard {...brightLizardMocks.default} />
  ),
};

export const Sizes: Story = {
  args: { ...brightLizardMocks.labeled },
  render: () => (
    <div className="flex flex-wrap items-end gap-8 bg-background p-10 text-foreground">
      <BrightLizard {...brightLizardMocks.compact} showLabel />
      <BrightLizard {...brightLizardMocks.default} showLabel />
      <BrightLizard label="Almost ready" showLabel size="lg" />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...brightLizardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-10">
        <BrightLizard {...brightLizardMocks.labeled} />
      </div>
      <div className="dark bg-background p-10">
        <BrightLizard {...brightLizardMocks.labeled} />
      </div>
    </div>
  ),
};
