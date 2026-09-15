import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { JollyChicken } from "./JollyChicken";
import { jollyChickenMocks } from "./JollyChicken.mocks";

const meta = {
  title: "Atoms/JollyChicken",
  component: JollyChicken,
  parameters: { layout: "centered" },
} satisfies Meta<typeof JollyChicken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...jollyChickenMocks.default },
  render: () => (
    <JollyChicken {...jollyChickenMocks.default} />
  ),
};

export const Night: Story = {
  args: { ...jollyChickenMocks.night },
  render: () => (
    <JollyChicken {...jollyChickenMocks.night} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...jollyChickenMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <JollyChicken {...jollyChickenMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <JollyChicken {...jollyChickenMocks.night} />
      </div>
    </div>
  ),
};
