import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { KindPanther } from "./KindPanther";
import { kindPantherMocks } from "./KindPanther.mocks";

const meta = {
  title: "Atoms/KindPanther",
  component: KindPanther,
  parameters: { layout: "centered" },
} satisfies Meta<typeof KindPanther>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...kindPantherMocks.default },
  render: () => (
    <KindPanther {...kindPantherMocks.default} />
  ),
};

export const Dense: Story = {
  args: { ...kindPantherMocks.dense },
  render: () => (
    <div className="flex flex-wrap items-end gap-3 bg-background p-8 text-foreground">
      <KindPanther {...kindPantherMocks.compact} />
      <KindPanther {...kindPantherMocks.default} />
      <KindPanther {...kindPantherMocks.dense} size="lg" />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...kindPantherMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <KindPanther {...kindPantherMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <KindPanther {...kindPantherMocks.default} />
      </div>
    </div>
  ),
};
