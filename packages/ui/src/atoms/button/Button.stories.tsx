import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "./Button";
import { buttonMocks } from "./Button.mocks";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: buttonMocks.actions.primary },
  render: () => <Button>{buttonMocks.actions.primary}</Button>,
};

export const Variants: Story = {
  args: { children: "Continue" },
  render: () => (
    <div className="flex flex-wrap gap-3 bg-background p-8 text-foreground">
      <Button>Continue</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="ghost">Learn more</Button>
      <Button variant="destructive">Remove</Button>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { children: "Light mode" },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Button>Light mode</Button>
      </div>
      <div className="dark bg-background p-8">
        <Button>Dark mode</Button>
      </div>
    </div>
  ),
};
