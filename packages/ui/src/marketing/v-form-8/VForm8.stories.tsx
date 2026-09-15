import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { VForm8 } from "./VForm8";
import { vForm8Mocks } from "./VForm8.mocks";

const meta = {
  title: "Marketing/VForm8",
  component: VForm8,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof VForm8>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...vForm8Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <VForm8 {...vForm8Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...vForm8Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <VForm8 {...vForm8Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...vForm8Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <VForm8 {...vForm8Mocks.default} />
      </div>
      <div className="dark bg-background">
        <VForm8 {...vForm8Mocks.default} />
      </div>
    </div>
  ),
};
