import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CleverPanther } from "./CleverPanther";
import { cleverPantherMocks } from "./CleverPanther.mocks";

const meta = {
  title: "Atoms/CleverPanther",
  component: CleverPanther,
  parameters: { layout: "centered" },
} satisfies Meta<typeof CleverPanther>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...cleverPantherMocks.default },
  render: () => (
    <CleverPanther {...cleverPantherMocks.default} />
  ),
};

export const Tones: Story = {
  args: { ...cleverPantherMocks.raised },
  render: () => (
    <div className="flex flex-wrap items-end gap-8 bg-background p-10 text-foreground">
      <CleverPanther {...cleverPantherMocks.compact} />
      <CleverPanther {...cleverPantherMocks.default} />
      <CleverPanther {...cleverPantherMocks.raised} size="lg">
        Night route
      </CleverPanther>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...cleverPantherMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-10">
        <CleverPanther {...cleverPantherMocks.default} />
      </div>
      <div className="dark bg-background p-10">
        <CleverPanther {...cleverPantherMocks.default} />
      </div>
    </div>
  ),
};
