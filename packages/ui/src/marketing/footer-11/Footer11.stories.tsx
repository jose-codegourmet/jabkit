import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Footer11 } from "./Footer11";
import { footer11Mocks } from "./Footer11.mocks";

const meta = {
  title: "Marketing/Footer11",
  component: Footer11,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footer11Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer11 {...footer11Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footer11Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer11 {...footer11Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footer11Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Footer11 {...footer11Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Footer11 {...footer11Mocks.default} />
      </div>
    </div>
  ),
};
