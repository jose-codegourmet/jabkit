import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Newsletter5 } from "./Newsletter5";
import { newsletter5Mocks } from "./Newsletter5.mocks";

const meta = {
  title: "Marketing/Newsletter5",
  component: Newsletter5,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Newsletter5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...newsletter5Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Newsletter5 {...newsletter5Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...newsletter5Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Newsletter5 {...newsletter5Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...newsletter5Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Newsletter5 {...newsletter5Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Newsletter5 {...newsletter5Mocks.default} />
      </div>
    </div>
  ),
};
