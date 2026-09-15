import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Footer27 } from "./Footer27";
import { footer27Mocks } from "./Footer27.mocks";

const meta = {
  title: "Marketing/Footer27",
  component: Footer27,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer27>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footer27Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer27 {...footer27Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footer27Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer27 {...footer27Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footer27Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Footer27 {...footer27Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Footer27 {...footer27Mocks.default} />
      </div>
    </div>
  ),
};
