import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { LetterCascade } from "./LetterCascade";
import { letterCascadeMocks } from "./LetterCascade.mocks";

const meta = {
  title: "Atoms/LetterCascade",
  component: LetterCascade,
  parameters: { layout: "centered" },
} satisfies Meta<typeof LetterCascade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...letterCascadeMocks.default },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <LetterCascade {...letterCascadeMocks.default} />
    </div>
  ),
};

export const CenterWave: Story = {
  args: { ...letterCascadeMocks.centerWave },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <LetterCascade {...letterCascadeMocks.centerWave} />
    </div>
  ),
};

export const ExtraBouncy: Story = {
  args: { ...letterCascadeMocks.extraBouncy },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <LetterCascade {...letterCascadeMocks.extraBouncy} />
    </div>
  ),
};

export const ClickTrigger: Story = {
  args: { ...letterCascadeMocks.clickTrigger },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <LetterCascade {...letterCascadeMocks.clickTrigger} />
    </div>
  ),
};

export const Snappy: Story = {
  args: { ...letterCascadeMocks.snappy },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <LetterCascade {...letterCascadeMocks.snappy} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...letterCascadeMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <LetterCascade {...letterCascadeMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <LetterCascade {...letterCascadeMocks.default} />
      </div>
    </div>
  ),
};
