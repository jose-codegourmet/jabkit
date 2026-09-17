import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Progress, ProgressLabel, ProgressValue } from "./Progress";
import { progressMocks } from "./Progress.mocks";

const meta = {
  title: "Atoms/Progress",
  component: Progress,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Progress className="w-full max-w-sm" value={progressMocks.default.value} />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Progress className="w-full max-w-sm" value={progressMocks.labeled.value}>
      <ProgressLabel>{progressMocks.labeled.label}</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Progress
          className="w-full max-w-sm"
          value={progressMocks.labeled.value}
        >
          <ProgressLabel>{progressMocks.labeled.label}</ProgressLabel>
          <ProgressValue />
        </Progress>
      </div>
      <div className="dark bg-background p-8">
        <Progress
          className="w-full max-w-sm"
          value={progressMocks.labeled.value}
        >
          <ProgressLabel>{progressMocks.labeled.label}</ProgressLabel>
          <ProgressValue />
        </Progress>
      </div>
    </div>
  ),
};
