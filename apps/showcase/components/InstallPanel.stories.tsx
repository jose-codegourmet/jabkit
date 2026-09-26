import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { InstallPanel } from "./InstallPanel";

const meta = {
  title: "Chrome/InstallPanel",
  component: InstallPanel,
  args: { name: "hero307" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-[320px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InstallPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cli: Story = {};

export const Prompt: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("tab", { name: "Prompt" }));
    await expect(
      canvas.getByRole("button", { name: /Copy prompt/ }),
    ).toBeVisible();
  },
};

export const Mcp: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cli = canvas.getByRole("tab", { name: "CLI" });
    cli.focus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(canvas.getByRole("tab", { name: "MCP" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  },
};
