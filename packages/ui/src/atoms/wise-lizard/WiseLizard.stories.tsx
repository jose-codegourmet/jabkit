import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { WiseLizard } from "./WiseLizard";
import { wiseLizardMocks } from "./WiseLizard.mocks";

const meta = {
  title: "Atoms/WiseLizard",
  component: WiseLizard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof WiseLizard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...wiseLizardMocks.default },
  render: () => (
    <WiseLizard {...wiseLizardMocks.default} />
  ),
};

export const Filled: Story = {
  args: { ...wiseLizardMocks.filled },
  render: () => (
    <WiseLizard {...wiseLizardMocks.filled} />
  ),
};

export const Compact: Story = {
  args: { ...wiseLizardMocks.compact },
  render: () => (
    <WiseLizard {...wiseLizardMocks.compact} />
  ),
};

export const ThemeComparison: Story = {
  args: { ...wiseLizardMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-10">
        <WiseLizard {...wiseLizardMocks.default} />
      </div>
      <div className="dark flex items-center justify-center bg-background p-10">
        <WiseLizard {...wiseLizardMocks.filled} />
      </div>
    </div>
  ),
};
