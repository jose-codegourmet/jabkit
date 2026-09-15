import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Footer19 } from "./Footer19";
import { footer19Mocks } from "./Footer19.mocks";

const meta = {
  title: "Marketing/Footer19",
  component: Footer19,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer19>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footer19Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer19 {...footer19Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footer19Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Footer19 {...footer19Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footer19Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Footer19 {...footer19Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Footer19 {...footer19Mocks.default} />
      </div>
    </div>
  ),
};
