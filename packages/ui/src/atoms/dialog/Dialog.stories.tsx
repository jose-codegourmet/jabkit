import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

const meta = { title: "Atoms/Dialog", component: Dialog } satisfies Meta<
  typeof Dialog
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Dialog /> };
export const Variants: Story = { render: () => <Dialog /> };
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Dialog />
    </div>
  ),
};
