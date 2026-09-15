import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { SoftPanda } from "./SoftPanda";
import { softPandaMocks } from "./SoftPanda.mocks";

const meta = {
  title: "Atoms/SoftPanda",
  component: SoftPanda,
  parameters: { layout: "centered" },
} satisfies Meta<typeof SoftPanda>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...softPandaMocks.default },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <SoftPanda {...softPandaMocks.default} />
    </div>
  ),
};

export const Tones: Story = {
  args: { ...softPandaMocks.muted },
  render: () => (
    <div className="flex flex-wrap items-end gap-6 bg-background p-8 text-foreground">
      <SoftPanda {...softPandaMocks.compact} />
      <SoftPanda {...softPandaMocks.muted} />
      <SoftPanda {...softPandaMocks.chart} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...softPandaMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <SoftPanda {...softPandaMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <SoftPanda {...softPandaMocks.default} />
      </div>
    </div>
  ),
};
