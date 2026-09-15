import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { VCheckbox11 } from "./VCheckbox11";
import { vCheckbox11Mocks } from "./VCheckbox11.mocks";

const meta = {
  title: "Atoms/VCheckbox11",
  component: VCheckbox11,
  parameters: { layout: "centered" },
} satisfies Meta<typeof VCheckbox11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...vCheckbox11Mocks.default },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <VCheckbox11 {...vCheckbox11Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...vCheckbox11Mocks.alternate },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <VCheckbox11 {...vCheckbox11Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...vCheckbox11Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <VCheckbox11 {...vCheckbox11Mocks.default} />
      </div>
      <div className="dark bg-background p-6">
        <VCheckbox11 {...vCheckbox11Mocks.default} />
      </div>
    </div>
  ),
};
