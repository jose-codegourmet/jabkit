import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { JollyParrot } from "./JollyParrot";
import { jollyParrotMocks } from "./JollyParrot.mocks";

const meta = {
  title: "Atoms/JollyParrot",
  component: JollyParrot,
  parameters: { layout: "centered" },
} satisfies Meta<typeof JollyParrot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...jollyParrotMocks.default },
  render: () => (
    <JollyParrot {...jollyParrotMocks.default} />
  ),
};

export const Tones: Story = {
  args: { ...jollyParrotMocks.alternate },
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <JollyParrot {...jollyParrotMocks.default} />
      <JollyParrot {...jollyParrotMocks.alternate} />
      <JollyParrot {...jollyParrotMocks.chart} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...jollyParrotMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <JollyParrot {...jollyParrotMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <JollyParrot {...jollyParrotMocks.default} />
      </div>
    </div>
  ),
};
