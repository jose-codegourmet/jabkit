import {
  CalendarIcon,
  GalleryVerticalEndIcon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
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

function SidebarPreview({
  collapsible = "offcanvas",
  defaultOpen = true,
}: {
  collapsible?: "offcanvas" | "icon" | "none";
  defaultOpen?: boolean;
}) {
  return (
    <SidebarProvider
      className="h-[28rem] min-h-[28rem] overflow-hidden rounded-[--radius] border border-border bg-background text-foreground"
      defaultOpen={defaultOpen}
    >
      <Sidebar collapsible={collapsible}>
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
                    </SidebarMenuItem>
                  );
                })}
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

export default {
  Default: () => <SidebarPreview />,
  IconCollapsed: () => (
    <SidebarPreview collapsible="icon" defaultOpen={false} />
  ),
};
