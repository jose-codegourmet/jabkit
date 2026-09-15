import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { SeriousStingray } from "./SeriousStingray";
import { seriousStingrayMocks } from "./SeriousStingray.mocks";

const meta = {
  title: "Atoms/SeriousStingray",
  component: SeriousStingray,
  parameters: { layout: "centered" },
} satisfies Meta<typeof SeriousStingray>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...seriousStingrayMocks.default },
  render: () => (
    <SeriousStingray {...seriousStingrayMocks.default} />
  ),
};

export const Accents: Story = {
  args: { ...seriousStingrayMocks.alternate },
  render: () => (
    <div className="flex flex-wrap items-center gap-8 bg-background p-8 text-foreground">
      <SeriousStingray {...seriousStingrayMocks.compact} />
      <SeriousStingray {...seriousStingrayMocks.default} />
      <SeriousStingray {...seriousStingrayMocks.alternate} size="lg" />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...seriousStingrayMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <SeriousStingray {...seriousStingrayMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <SeriousStingray {...seriousStingrayMocks.default} />
      </div>
    </div>
  ),
};
