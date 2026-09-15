import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { LoudParrot } from "./LoudParrot";
import { loudParrotMocks } from "./LoudParrot.mocks";

const meta = {
  title: "Atoms/LoudParrot",
  component: LoudParrot,
  parameters: { layout: "centered" },
} satisfies Meta<typeof LoudParrot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...loudParrotMocks.default },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <LoudParrot {...loudParrotMocks.default} />
    </div>
  ),
};

export const Tones: Story = {
  args: { ...loudParrotMocks.muted },
  render: () => (
    <div className="flex flex-wrap items-end gap-6 bg-background p-8 text-foreground">
      <LoudParrot {...loudParrotMocks.compact} />
      <LoudParrot {...loudParrotMocks.muted} />
      <LoudParrot {...loudParrotMocks.chart} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...loudParrotMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-none border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <LoudParrot {...loudParrotMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <LoudParrot {...loudParrotMocks.default} />
      </div>
    </div>
  ),
};
