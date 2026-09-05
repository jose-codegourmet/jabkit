import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Bento19 } from "./Bento19";
import { bento19Mocks } from "./Bento19.mocks";

const meta = {
  title: "Marketing/Bento19",
  component: Bento19,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Bento19>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...bento19Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Bento19 {...bento19Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...bento19Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Bento19 {...bento19Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...bento19Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Bento19 {...bento19Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Bento19 {...bento19Mocks.default} />
      </div>
    </div>
  ),
};
