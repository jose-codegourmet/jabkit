import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const meta = { title: "Atoms/Separator", component: Separator } satisfies Meta<
  typeof Separator
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Separator /> };
export const Variants: Story = {
  render: () => <Separator className="w-full" />,
};
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Separator />
    </div>
  ),
};
