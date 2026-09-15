import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { GoodDonkey } from "./GoodDonkey";
import { goodDonkeyMocks } from "./GoodDonkey.mocks";

const meta = {
  title: "Atoms/GoodDonkey",
  component: GoodDonkey,
  parameters: { layout: "centered" },
} satisfies Meta<typeof GoodDonkey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...goodDonkeyMocks.default },
  render: () => (
    <GoodDonkey {...goodDonkeyMocks.default} />
  ),
};

export const Filled: Story = {
  args: { ...goodDonkeyMocks.filled },
  render: () => (
    <GoodDonkey {...goodDonkeyMocks.filled} />
  ),
};

export const Compact: Story = {
  args: { ...goodDonkeyMocks.compact },
  render: () => (
    <GoodDonkey {...goodDonkeyMocks.compact} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...goodDonkeyMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <GoodDonkey {...goodDonkeyMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <GoodDonkey {...goodDonkeyMocks.filled} />
      </div>
    </div>
  ),
};
