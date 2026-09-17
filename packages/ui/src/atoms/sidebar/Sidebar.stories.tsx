import type { Meta, StoryObj } from "@storybook/react";
import {
  CalendarIcon,
  GalleryVerticalEndIcon,
  HomeIcon,
  InboxIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "./Sidebar";
import { sidebarMocks } from "./Sidebar.mocks";

const icons = {
  home: HomeIcon,
  inbox: InboxIcon,
  calendar: CalendarIcon,
  search: SearchIcon,
  settings: SettingsIcon,
};

function SidebarDemo({
  collapsible = "offcanvas",
  defaultOpen = true,
  variant = "sidebar",
}: {
  collapsible?: "offcanvas" | "icon" | "none";
  defaultOpen?: boolean;
  variant?: "sidebar" | "floating" | "inset";
}) {
  return (
    <SidebarProvider
      className="h-[28rem] min-h-[28rem] max-w-4xl overflow-hidden rounded-[--radius] border border-border bg-background text-foreground"
      defaultOpen={defaultOpen}
    >
      <Sidebar collapsible={collapsible} variant={variant}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GalleryVerticalEndIcon className="size-4" />
                </div>
                <span>{sidebarMocks.brand}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarInput placeholder={sidebarMocks.headerSearch} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarMocks.nav.map((item) => {
                  const Icon = icons[item.icon];
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={item.isActive}
                        tooltip={item.title}
                      >
                        <Icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      {item.badge ? (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      ) : null}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>{sidebarMocks.projectsLabel}</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add project">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>Workspace</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {sidebarMocks.projects.map((project) => (
                      <SidebarMenuSubItem key={project.title}>
                        <SidebarMenuSubButton href={project.href}>
                          <span>{project.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>{sidebarMocks.footer}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">{sidebarMocks.insetTitle}</span>
        </header>
        <div className="p-4 text-sm text-muted-foreground">
          {sidebarMocks.insetBody}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const meta = {
  title: "Atoms/Sidebar",
  component: Sidebar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="bg-background text-foreground">
      <SidebarDemo />
    </div>
  ),
};

export const IconCollapsed: Story = {
  args: {},
  render: () => (
    <div className="bg-background text-foreground">
      <SidebarDemo collapsible="icon" defaultOpen={false} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: {},
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background p-4">
        <SidebarDemo />
      </div>
      <div className="dark bg-background p-4">
        <SidebarDemo />
      </div>
    </div>
  ),
};
