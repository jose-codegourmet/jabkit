import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Scanner } from "./Scanner";
import { scannerMocks } from "./Scanner.mocks";

const meta = {
  title: "Marketing/Scanner",
  component: Scanner,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Scanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...scannerMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Scanner {...scannerMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...scannerMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Scanner {...scannerMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...scannerMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Scanner {...scannerMocks.default} />
      </div>
      <div className="dark bg-background">
        <Scanner {...scannerMocks.default} />
      </div>
    </div>
  ),
};
