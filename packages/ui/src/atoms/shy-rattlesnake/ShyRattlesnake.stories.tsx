import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ShyRattlesnake } from "./ShyRattlesnake";
import { shyRattlesnakeMocks } from "./ShyRattlesnake.mocks";

const meta = {
  title: "Atoms/ShyRattlesnake",
  component: ShyRattlesnake,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ShyRattlesnake>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...shyRattlesnakeMocks.default },
  render: () => (
    <ShyRattlesnake {...shyRattlesnakeMocks.default} />
  ),
};

export const GuestPass: Story = {
  args: { ...shyRattlesnakeMocks.compact },
  render: () => (
    <ShyRattlesnake {...shyRattlesnakeMocks.compact} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...shyRattlesnakeMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <ShyRattlesnake {...shyRattlesnakeMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <ShyRattlesnake {...shyRattlesnakeMocks.compact} />
      </div>
    </div>
  ),
};
