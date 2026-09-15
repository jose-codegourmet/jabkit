import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { StupidInsect } from "./StupidInsect";
import { stupidInsectMocks } from "./StupidInsect.mocks";

const meta = {
  title: "Atoms/StupidInsect",
  component: StupidInsect,
  parameters: { layout: "centered" },
} satisfies Meta<typeof StupidInsect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...stupidInsectMocks.default },
  render: () => (
    <StupidInsect
      className="h-64 w-80"
      {...stupidInsectMocks.default}
    />
  ),
};

export const ChartTone: Story = {
  args: { ...stupidInsectMocks.chart },
  render: () => (
    <StupidInsect
      className="h-64 w-80"
      {...stupidInsectMocks.chart}
    />
  ),
};

export const ThemeComparison: Story = {
  args: { ...stupidInsectMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <StupidInsect
          className="h-56 w-full"
          {...stupidInsectMocks.default}
        />
      </div>
      <div className="dark bg-background p-8">
        <StupidInsect
          className="h-56 w-full"
          {...stupidInsectMocks.default}
        />
      </div>
    </div>
  ),
};
