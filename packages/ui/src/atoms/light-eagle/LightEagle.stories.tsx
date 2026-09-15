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
    <div className="h-64 w-80 bg-background text-foreground">
      <LightEagle {...lightEagleMocks.default} />
    </div>
  ),
};

export const Tones: Story = {
  args: { ...lightEagleMocks.slate },
  render: () => (
    <div className="flex w-80 flex-col gap-4 bg-background text-foreground">
      <div className="h-56">
        <LightEagle {...lightEagleMocks.default} />
      </div>
      <div className="h-56">
        <LightEagle {...lightEagleMocks.slate} />
      </div>
      <div className="h-56">
        <LightEagle {...lightEagleMocks.ink} />
      </div>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...lightEagleMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <div className="h-56">
          <LightEagle {...lightEagleMocks.default} />
        </div>
      </div>
      <div className="dark bg-background p-8">
        <div className="h-56">
          <LightEagle {...lightEagleMocks.default} />
        </div>
      </div>
    </div>
  ),
};
