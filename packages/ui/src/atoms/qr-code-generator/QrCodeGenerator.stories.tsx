import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { QrCodeGenerator } from "./QrCodeGenerator";
import { qrCodeGeneratorMocks } from "./QrCodeGenerator.mocks";

const meta = {
  title: "Atoms/QrCodeGenerator",
  component: QrCodeGenerator,
  parameters: { layout: "centered" },
} satisfies Meta<typeof QrCodeGenerator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...qrCodeGeneratorMocks.default },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <QrCodeGenerator {...qrCodeGeneratorMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...qrCodeGeneratorMocks.event },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <QrCodeGenerator {...qrCodeGeneratorMocks.event} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...qrCodeGeneratorMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <QrCodeGenerator {...qrCodeGeneratorMocks.default} />
      </div>
      <div className="dark bg-background p-6">
        <QrCodeGenerator {...qrCodeGeneratorMocks.default} />
      </div>
    </div>
  ),
};
