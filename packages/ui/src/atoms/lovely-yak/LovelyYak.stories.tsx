import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { LovelyYak } from "./LovelyYak";
import { lovelyYakMocks } from "./LovelyYak.mocks";

const meta = {
  title: "Atoms/LovelyYak",
  component: LovelyYak,
  parameters: { layout: "centered" },
} satisfies Meta<typeof LovelyYak>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...lovelyYakMocks.default },
  render: () => (
    <LovelyYak {...lovelyYakMocks.default} />
  ),
};

export const WithAction: Story = {
  args: { ...lovelyYakMocks.withAction },
  render: () => (
    <LovelyYak {...lovelyYakMocks.withAction} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...lovelyYakMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <LovelyYak {...lovelyYakMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <LovelyYak {...lovelyYakMocks.withAction} />
      </div>
    </div>
  ),
};
