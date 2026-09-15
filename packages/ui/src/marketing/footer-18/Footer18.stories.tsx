import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Footer18 } from "./Footer18";
import { footer18Mocks } from "./Footer18.mocks";

const meta = {
  title: "Marketing/Footer18",
  component: Footer18,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer18>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footer18Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer18 {...footer18Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footer18Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer18 {...footer18Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footer18Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Footer18 {...footer18Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Footer18 {...footer18Mocks.default} />
      </div>
    </div>
  ),
};
