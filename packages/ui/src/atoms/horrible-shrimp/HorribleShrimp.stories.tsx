import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { HorribleShrimp } from "./HorribleShrimp";
import { horribleShrimpMocks } from "./HorribleShrimp.mocks";

const meta = {
  title: "Atoms/HorribleShrimp",
  component: HorribleShrimp,
  parameters: { layout: "centered" },
} satisfies Meta<typeof HorribleShrimp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...horribleShrimpMocks.default },
  render: () => (
    <HorribleShrimp {...horribleShrimpMocks.default} />
  ),
};

export const Checked: Story = {
  args: { ...horribleShrimpMocks.alternate },
  render: () => (
    <HorribleShrimp {...horribleShrimpMocks.alternate} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...horribleShrimpMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <HorribleShrimp {...horribleShrimpMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <HorribleShrimp {...horribleShrimpMocks.alternate} />
      </div>
    </div>
  ),
};
