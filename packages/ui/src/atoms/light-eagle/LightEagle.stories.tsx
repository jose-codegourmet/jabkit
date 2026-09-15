import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { LightEagle } from "./LightEagle";
import { lightEagleMocks } from "./LightEagle.mocks";

const meta = {
  title: "Atoms/LightEagle",
  component: LightEagle,
  parameters: { layout: "centered" },
} satisfies Meta<typeof LightEagle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...lightEagleMocks.default },
  render: () => (
    <LightEagle {...lightEagleMocks.default} />
  ),
};

export const Tones: Story = {
  args: { ...lightEagleMocks.sky },
  render: () => (
    <div className="flex flex-wrap items-end gap-3 bg-background p-8 text-foreground">
      <LightEagle {...lightEagleMocks.compact} />
      <LightEagle {...lightEagleMocks.default} />
      <LightEagle {...lightEagleMocks.sky} size="lg" />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...lightEagleMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <LightEagle {...lightEagleMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <LightEagle {...lightEagleMocks.sky} />
      </div>
    </div>
  ),
};
