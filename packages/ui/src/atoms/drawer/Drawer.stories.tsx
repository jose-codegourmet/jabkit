import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";
import { drawerMocks } from "./Drawer.mocks";

const meta = {
  title: "Atoms/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: false },
  render: () => (
    <Drawer>
      <DrawerTrigger
        render={
          <Button variant="secondary">{drawerMocks.default.trigger}</Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{drawerMocks.default.title}</DrawerTitle>
          <DrawerDescription>
            {drawerMocks.default.description}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-muted-foreground">
          {drawerMocks.default.body}
        </div>
        <DrawerFooter>
          <Button>{drawerMocks.default.confirm}</Button>
          <DrawerClose
            render={
              <Button variant="secondary">{drawerMocks.default.cancel}</Button>
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Variants: Story = {
  args: { defaultOpen: false },
  render: () => (
    <Drawer showSwipeHandle swipeDirection="right">
      <DrawerTrigger
        render={<Button variant="secondary">{drawerMocks.side.trigger}</Button>}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{drawerMocks.side.title}</DrawerTitle>
          <DrawerDescription>{drawerMocks.side.description}</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-4 text-sm text-muted-foreground">
          {drawerMocks.side.body}
        </div>
        <DrawerFooter>
          <Button>{drawerMocks.side.confirm}</Button>
          <DrawerClose
            render={
              <Button variant="secondary">{drawerMocks.side.cancel}</Button>
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const ThemeComparison: Story = {
  args: { defaultOpen: true },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Drawer defaultOpen modal={false} disablePointerDismissal>
          <DrawerTrigger
            render={
              <Button size="sm" variant="secondary">
                {drawerMocks.default.trigger}
              </Button>
            }
          />
          <DrawerContent className="static m-0 h-auto max-h-none w-full max-w-xs transform-none">
            <DrawerHeader>
              <DrawerTitle>{drawerMocks.default.title}</DrawerTitle>
              <DrawerDescription>
                {drawerMocks.default.description}
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="dark bg-background p-8">
        <Drawer defaultOpen modal={false} disablePointerDismissal>
          <DrawerTrigger
            render={
              <Button size="sm" variant="secondary">
                {drawerMocks.default.trigger}
              </Button>
            }
          />
          <DrawerContent className="static m-0 h-auto max-h-none w-full max-w-xs transform-none">
            <DrawerHeader>
              <DrawerTitle>{drawerMocks.default.title}</DrawerTitle>
              <DrawerDescription>
                {drawerMocks.default.description}
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  ),
};
