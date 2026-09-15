import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { QuickPanther } from "./QuickPanther";
import { quickPantherMocks } from "./QuickPanther.mocks";

const meta = {
  title: "Atoms/QuickPanther",
  component: QuickPanther,
  parameters: { layout: "centered" },
} satisfies Meta<typeof QuickPanther>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...quickPantherMocks.default },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <QuickPanther {...quickPantherMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...quickPantherMocks.alternate },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <QuickPanther {...quickPantherMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...quickPantherMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <QuickPanther {...quickPantherMocks.default} />
      </div>
      <div className="dark bg-background p-6">
        <QuickPanther {...quickPantherMocks.default} />
      </div>
    </div>
  ),
};
