import type { Meta, StoryObj } from "@storybook/react";
import { BluetoothIcon, Trash2Icon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";
import { alertDialogMocks } from "./AlertDialog.mocks";

const meta = {
  title: "Atoms/AlertDialog",
  component: AlertDialog,
  parameters: { layout: "centered" },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: false },
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant="secondary">
            {alertDialogMocks.default.trigger}
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertDialogMocks.default.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {alertDialogMocks.default.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            {alertDialogMocks.default.cancel}
          </AlertDialogCancel>
          <AlertDialogAction>
            {alertDialogMocks.default.confirm}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Variants: Story = {
  args: { defaultOpen: false },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button variant="secondary">
              {alertDialogMocks.small.trigger}
            </Button>
          }
        />
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia>
              <BluetoothIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>{alertDialogMocks.small.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertDialogMocks.small.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              {alertDialogMocks.small.cancel}
            </AlertDialogCancel>
            <AlertDialogAction>
              {alertDialogMocks.small.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button variant="destructive">
              {alertDialogMocks.destructive.trigger}
            </Button>
          }
        />
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive">
              <Trash2Icon />
            </AlertDialogMedia>
            <AlertDialogTitle>
              {alertDialogMocks.destructive.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this chat conversation. View{" "}
              <a href="#settings">Settings</a> to delete any memories saved
              during this chat.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="ghost">
              {alertDialogMocks.destructive.cancel}
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              {alertDialogMocks.destructive.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { defaultOpen: true },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <AlertDialog defaultOpen>
          <AlertDialogTrigger
            render={
              <Button size="sm" variant="secondary">
                {alertDialogMocks.default.trigger}
              </Button>
            }
          />
          <AlertDialogContent className="static max-w-xs translate-x-0 translate-y-0">
            <AlertDialogHeader>
              <AlertDialogTitle>
                {alertDialogMocks.default.title}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {alertDialogMocks.default.description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel size="sm">
                {alertDialogMocks.default.cancel}
              </AlertDialogCancel>
              <AlertDialogAction size="sm">
                {alertDialogMocks.default.confirm}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="dark bg-background p-8">
        <AlertDialog defaultOpen>
          <AlertDialogTrigger
            render={
              <Button size="sm" variant="secondary">
                {alertDialogMocks.default.trigger}
              </Button>
            }
          />
          <AlertDialogContent className="static max-w-xs translate-x-0 translate-y-0">
            <AlertDialogHeader>
              <AlertDialogTitle>
                {alertDialogMocks.default.title}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {alertDialogMocks.default.description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel size="sm">
                {alertDialogMocks.default.cancel}
              </AlertDialogCancel>
              <AlertDialogAction size="sm">
                {alertDialogMocks.default.confirm}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  ),
};
