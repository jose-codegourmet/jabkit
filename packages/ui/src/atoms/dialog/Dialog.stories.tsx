import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import { dialogMocks } from "./Dialog.mocks";

const meta = {
  title: "Atoms/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: false },
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button>{dialogMocks.default.trigger}</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogMocks.default.title}</DialogTitle>
          <DialogDescription>
            {dialogMocks.default.description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose
            render={
              <Button variant="secondary">{dialogMocks.default.cancel}</Button>
            }
          />
          <Button>{dialogMocks.default.confirm}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Variants: Story = {
  args: { defaultOpen: false },
  render: () => (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="destructive">{dialogMocks.confirm.trigger}</Button>
        }
      />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>{dialogMocks.confirm.title}</DialogTitle>
          <DialogDescription>
            {dialogMocks.confirm.description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <DialogClose
            render={
              <Button variant="secondary">{dialogMocks.confirm.cancel}</Button>
            }
          />
          <Button variant="destructive">{dialogMocks.confirm.confirm}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ThemeComparison: Story = {
  args: { defaultOpen: true },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Dialog defaultOpen modal={false}>
          <DialogTrigger
            render={<Button size="sm">{dialogMocks.default.trigger}</Button>}
          />
          <DialogContent className="static max-w-xs translate-x-0 translate-y-0">
            <DialogHeader>
              <DialogTitle>{dialogMocks.default.title}</DialogTitle>
              <DialogDescription>
                {dialogMocks.default.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="dark bg-background p-8">
        <Dialog defaultOpen modal={false}>
          <DialogTrigger
            render={<Button size="sm">{dialogMocks.default.trigger}</Button>}
          />
          <DialogContent className="static max-w-xs translate-x-0 translate-y-0">
            <DialogHeader>
              <DialogTitle>{dialogMocks.default.title}</DialogTitle>
              <DialogDescription>
                {dialogMocks.default.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ),
};
