import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = { title: "Atoms/Label", component: Label } satisfies Meta<
  typeof Label
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Label /> };
export const Variants: Story = { render: () => <Label className="w-full" /> };
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Label />
    </div>
  ),
};
