import type { Meta, StoryObj } from "@storybook/react";
import {
  CalculatorIcon,
  CalendarIcon,
  ClipboardPasteIcon,
  CopyIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  FolderPlusIcon,
  HomeIcon,
  InboxIcon,
  PlusIcon,
  ScissorsIcon,
  SettingsIcon,
  SmileIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./Command";
import { commandMocks } from "./Command.mocks";

const meta = {
  title: "Atoms/Command",
  component: Command,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="max-w-sm rounded-lg border border-border">
      <CommandInput placeholder={commandMocks.placeholder} />
      <CommandList>
        <CommandEmpty>{commandMocks.empty}</CommandEmpty>
        <CommandGroup heading={commandMocks.suggestionsHeading}>
          <CommandItem>
            <CalendarIcon />
            <span>{commandMocks.suggestions[0].label}</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>{commandMocks.suggestions[1].label}</span>
          </CommandItem>
          <CommandItem disabled>
            <CalculatorIcon />
            <span>{commandMocks.suggestions[2].label}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={commandMocks.settingsHeading}>
          <CommandItem>
            <UserIcon />
            <span>{commandMocks.settings[0].label}</span>
            <CommandShortcut>
              {commandMocks.settings[0].shortcut}
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            <span>{commandMocks.settings[1].label}</span>
            <CommandShortcut>
              {commandMocks.settings[1].shortcut}
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>{commandMocks.settings[2].label}</span>
            <CommandShortcut>
              {commandMocks.settings[2].shortcut}
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

function CommandPalette() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button className="w-fit" onClick={() => setOpen(true)} variant="secondary">
        {commandMocks.dialogTrigger}
      </Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <Command>
          <CommandInput placeholder={commandMocks.placeholder} />
          <CommandList>
            <CommandEmpty>{commandMocks.empty}</CommandEmpty>
            <CommandGroup heading={commandMocks.settingsHeading}>
              <CommandItem>
                <UserIcon />
                <span>{commandMocks.settings[0].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[0].shortcut}
                </CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>{commandMocks.settings[1].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[1].shortcut}
                </CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>{commandMocks.settings[2].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[2].shortcut}
                </CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <CommandPalette />
      <Command className="max-w-sm rounded-lg border border-border">
        <CommandInput placeholder={commandMocks.placeholder} />
        <CommandList>
          <CommandEmpty>{commandMocks.empty}</CommandEmpty>
          <CommandGroup heading={commandMocks.navigationHeading}>
            <CommandItem>
              <HomeIcon />
              <span>{commandMocks.navigation[0].label}</span>
              <CommandShortcut>
                {commandMocks.navigation[0].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <InboxIcon />
              <span>{commandMocks.navigation[1].label}</span>
              <CommandShortcut>
                {commandMocks.navigation[1].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FileTextIcon />
              <span>{commandMocks.navigation[2].label}</span>
              <CommandShortcut>
                {commandMocks.navigation[2].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FolderIcon />
              <span>{commandMocks.navigation[3].label}</span>
              <CommandShortcut>
                {commandMocks.navigation[3].shortcut}
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={commandMocks.actionsHeading}>
            <CommandItem>
              <PlusIcon />
              <span>{commandMocks.actions[0].label}</span>
              <CommandShortcut>
                {commandMocks.actions[0].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FolderPlusIcon />
              <span>{commandMocks.actions[1].label}</span>
              <CommandShortcut>
                {commandMocks.actions[1].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CopyIcon />
              <span>{commandMocks.actions[2].label}</span>
              <CommandShortcut>
                {commandMocks.actions[2].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ScissorsIcon />
              <span>{commandMocks.actions[3].label}</span>
              <CommandShortcut>
                {commandMocks.actions[3].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ClipboardPasteIcon />
              <span>{commandMocks.actions[4].label}</span>
              <CommandShortcut>
                {commandMocks.actions[4].shortcut}
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <TrashIcon />
              <span>{commandMocks.actions[5].label}</span>
              <CommandShortcut>
                {commandMocks.actions[5].shortcut}
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Command className="max-w-sm rounded-lg border border-border">
          <CommandInput placeholder={commandMocks.placeholder} />
          <CommandList>
            <CommandEmpty>{commandMocks.empty}</CommandEmpty>
            <CommandGroup heading={commandMocks.suggestionsHeading}>
              <CommandItem>
                <CalendarIcon />
                <span>{commandMocks.suggestions[0].label}</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                <span>{commandMocks.suggestions[1].label}</span>
              </CommandItem>
              <CommandItem disabled>
                <CalculatorIcon />
                <span>{commandMocks.suggestions[2].label}</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={commandMocks.settingsHeading}>
              <CommandItem>
                <UserIcon />
                <span>{commandMocks.settings[0].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[0].shortcut}
                </CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>{commandMocks.settings[1].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[1].shortcut}
                </CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>{commandMocks.settings[2].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[2].shortcut}
                </CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <div className="dark bg-background p-8">
        <Command className="max-w-sm rounded-lg border border-border">
          <CommandInput placeholder={commandMocks.placeholder} />
          <CommandList>
            <CommandEmpty>{commandMocks.empty}</CommandEmpty>
            <CommandGroup heading={commandMocks.suggestionsHeading}>
              <CommandItem>
                <CalendarIcon />
                <span>{commandMocks.suggestions[0].label}</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                <span>{commandMocks.suggestions[1].label}</span>
              </CommandItem>
              <CommandItem disabled>
                <CalculatorIcon />
                <span>{commandMocks.suggestions[2].label}</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={commandMocks.settingsHeading}>
              <CommandItem>
                <UserIcon />
                <span>{commandMocks.settings[0].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[0].shortcut}
                </CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>{commandMocks.settings[1].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[1].shortcut}
                </CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>{commandMocks.settings[2].label}</span>
                <CommandShortcut>
                  {commandMocks.settings[2].shortcut}
                </CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  ),
};
