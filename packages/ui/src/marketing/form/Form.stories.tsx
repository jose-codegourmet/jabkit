import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Form } from "./Form";
import { formMocks } from "./Form.mocks";

const meta = {
  title: "Marketing/Form",
  component: Form,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...formMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Form {...formMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...formMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Form {...formMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...formMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Form {...formMocks.default} />
      </div>
      <div className="dark bg-background">
        <Form {...formMocks.default} />
      </div>
    </div>
  ),
};
