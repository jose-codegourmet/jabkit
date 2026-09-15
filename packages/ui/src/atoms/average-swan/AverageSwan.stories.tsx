import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AverageSwan } from "./AverageSwan";
import { averageSwanMocks } from "./AverageSwan.mocks";

const meta = {
  title: "Atoms/AverageSwan",
  component: AverageSwan,
  parameters: { layout: "centered" },
} satisfies Meta<typeof AverageSwan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...averageSwanMocks.default },
  render: () => (
    <AverageSwan {...averageSwanMocks.default} />
  ),
};

export const Sizes: Story = {
  args: { ...averageSwanMocks.alternate },
  render: () => (
    <div className="flex flex-wrap items-end justify-center gap-8 bg-background p-8 text-foreground">
      <AverageSwan {...averageSwanMocks.compact} />
      <AverageSwan {...averageSwanMocks.default} />
      <AverageSwan {...averageSwanMocks.alternate} size="lg" />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...averageSwanMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <AverageSwan {...averageSwanMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <AverageSwan {...averageSwanMocks.default} />
      </div>
    </div>
  ),
};
