import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AgencySectionHeading } from "./AgencySectionHeading";
import { agencySectionHeadingMocks } from "./AgencySectionHeading.mocks";

const meta = {
  title: "Atoms/AgencySectionHeading",
  component: AgencySectionHeading,
  parameters: { layout: "centered" },
} satisfies Meta<typeof AgencySectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...agencySectionHeadingMocks.default },
  render: () => (
    <div className="w-[min(720px,92vw)] bg-background p-8">
      <AgencySectionHeading {...agencySectionHeadingMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...agencySectionHeadingMocks.alternate },
  render: () => (
    <div className="w-[min(720px,92vw)] bg-background p-8">
      <AgencySectionHeading {...agencySectionHeadingMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...agencySectionHeadingMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <AgencySectionHeading {...agencySectionHeadingMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <AgencySectionHeading {...agencySectionHeadingMocks.default} />
      </div>
    </div>
  ),
};
