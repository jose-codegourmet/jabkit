import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Route } from "next";
import { expect, userEvent, within } from "storybook/test";
import { menuShelvesFixture } from "../../.storybook/fixtures";
import { MenuBoard } from "./MenuBoard";

const shelves = menuShelvesFixture.map((shelf) => ({
  ...shelf,
  href: shelf.href as Route,
}));

const meta = {
  title: "Home/MenuBoard",
  component: MenuBoard,
  args: { shelves },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof MenuBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HoverSwapsArt: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole("link", { name: /Pricing/ }));
    await expect(canvas.getByText("Pricing · 4 components")).toBeVisible();
  },
};

export const SingleShelf: Story = { args: { shelves: shelves.slice(0, 1) } };
