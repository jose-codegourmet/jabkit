import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { InputModal } from "./InputModal";
import { inputModalMocks } from "./InputModal.mocks";

const meta = {
  title: "Marketing/InputModal",
  component: InputModal,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof InputModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...inputModalMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <InputModal {...inputModalMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...inputModalMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <InputModal {...inputModalMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...inputModalMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <InputModal {...inputModalMocks.default} presentation="inline" />
      </div>
      <div className="dark bg-background">
        <InputModal {...inputModalMocks.default} presentation="inline" />
      </div>
    </div>
  ),
};
