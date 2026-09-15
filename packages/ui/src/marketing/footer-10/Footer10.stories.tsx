import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Footer10 } from "./Footer10";
import { footer10Mocks } from "./Footer10.mocks";

const meta = {
  title: "Marketing/Footer10",
  component: Footer10,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footer10Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer10 {...footer10Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footer10Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer10 {...footer10Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footer10Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Footer10 {...footer10Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Footer10 {...footer10Mocks.default} />
      </div>
    </div>
  ),
};
