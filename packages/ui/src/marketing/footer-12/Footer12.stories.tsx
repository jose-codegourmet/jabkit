import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Footer12 } from "./Footer12";
import { footer12Mocks } from "./Footer12.mocks";

const meta = {
  title: "Marketing/Footer12",
  component: Footer12,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footer12Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer12 {...footer12Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footer12Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer12 {...footer12Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footer12Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Footer12 {...footer12Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Footer12 {...footer12Mocks.default} />
      </div>
    </div>
  ),
};
