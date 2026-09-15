import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Footer13 } from "./Footer13";
import { footer13Mocks } from "./Footer13.mocks";

const meta = {
  title: "Marketing/Footer13",
  component: Footer13,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footer13Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer13 {...footer13Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footer13Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer13 {...footer13Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footer13Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Footer13 {...footer13Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Footer13 {...footer13Mocks.default} />
      </div>
    </div>
  ),
};
