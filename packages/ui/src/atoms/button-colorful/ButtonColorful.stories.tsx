import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ButtonColorful } from "./ButtonColorful";
import { buttonColorfulMocks } from "./ButtonColorful.mocks";

const meta = {
  title: "Atoms/ButtonColorful",
  component: ButtonColorful,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ButtonColorful>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...buttonColorfulMocks.default },
  render: () => (
    <>
      <ButtonColorful {...buttonColorfulMocks.default} />
    </>
  ),
};

export const LabelOnly: Story = {
  args: { ...buttonColorfulMocks.labelOnly },
  render: () => (
    <>
      <ButtonColorful {...buttonColorfulMocks.labelOnly} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...buttonColorfulMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <ButtonColorful {...buttonColorfulMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <ButtonColorful {...buttonColorfulMocks.default} />
      </div>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <ButtonColorful asChild>
      <a href="/components">Explore Components</a>
    </ButtonColorful>
  ),
};
