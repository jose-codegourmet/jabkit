import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CrowdCanvas, SKIPER39_PEEPS_SRC, Skiper39 } from "./Skiper39";
import { skiper39Mocks } from "./Skiper39.mocks";

const meta = {
  title: "Marketing/Skiper39",
  component: Skiper39,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Skiper39>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...skiper39Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Skiper39 {...skiper39Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...skiper39Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Skiper39 {...skiper39Mocks.alternate} />
    </div>
  ),
};

export const CanvasOnly: Story = {
  args: { ...skiper39Mocks.default },
  render: () => (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-background">
      <CrowdCanvas cols={7} rows={15} src={SKIPER39_PEEPS_SRC} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...skiper39Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Skiper39 {...skiper39Mocks.default} className="min-h-[28rem]" />
      </div>
      <div className="dark bg-background">
        <Skiper39 {...skiper39Mocks.default} className="min-h-[28rem]" />
      </div>
    </div>
  ),
};
