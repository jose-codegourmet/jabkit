import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = { title: "Atoms/Textarea", component: Textarea } satisfies Meta<
  typeof Textarea
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Textarea /> };
export const Variants: Story = {
  render: () => <Textarea className="w-full" />,
};
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Textarea />
    </div>
  ),
};
