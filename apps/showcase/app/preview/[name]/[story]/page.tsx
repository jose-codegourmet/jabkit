import { Avatar, AvatarFallback, AvatarGroup } from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge/Badge";
import { Button } from "@/atoms/button/Button";
import { Checkbox } from "@/atoms/checkbox/Checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { Input } from "@/atoms/input/Input";
import { Label } from "@/atoms/label/Label";
import { Separator } from "@/atoms/separator/Separator";
import { Skeleton } from "@/atoms/skeleton/Skeleton";
import { Switch } from "@/atoms/switch/Switch";
import { Textarea } from "@/atoms/textarea/Textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/atoms/tooltip/Tooltip";
import { Hero228 } from "@/marketing/hero228/Hero228";
import { hero228Mocks } from "@/marketing/hero228/Hero228.mocks";
import "../../../globals.css";

function PreviewContent({ name, story }: { name: string; story: string }) {
  const alternate = story === "Variants";
  switch (name) {
    case "avatar":
      return (
        <AvatarGroup>
          <Avatar size="lg">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      );
    case "badge":
      return (
        <Badge variant={alternate ? "secondary" : "primary"}>
          {alternate ? "In review" : "New"}
        </Badge>
      );
    case "button":
      return (
        <Button variant={alternate ? "secondary" : "primary"}>
          Browse the library
        </Button>
      );
    case "checkbox":
      return (
        <label
          className="flex items-center gap-2 text-sm"
          htmlFor="preview-checkbox"
        >
          <Checkbox defaultChecked={alternate} id="preview-checkbox" /> Enable
          notifications
        </label>
      );
    case "dialog":
      return (
        <Dialog defaultOpen>
          <DialogTrigger render={<Button size="sm">Open dialog</Button>} />
          <DialogContent
            showCloseButton={false}
            className="!static !w-64 !translate-x-0 !translate-y-0 !shadow-none"
          >
            <DialogHeader>
              <DialogTitle>Invite teammate</DialogTitle>
              <DialogDescription>
                Give your team access in seconds.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    case "dropdown-menu":
      return (
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger render={<Button size="sm">Actions</Button>} />
          <DropdownMenuContent className="!static !w-40 !shadow-none">
            <DropdownMenuItem>Copy link</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "input":
      return (
        <div className="w-52">
          <Label htmlFor="preview-input">Email</Label>
          <Input
            id="preview-input"
            className="mt-2"
            placeholder="you@example.com"
            defaultValue={alternate ? "hello@jabkit.dev" : undefined}
          />
        </div>
      );
    case "label":
      return (
        <div className="grid gap-2">
          <Label htmlFor="preview-label">Project name</Label>
          <Input id="preview-label" className="w-48" defaultValue="JabKit" />
        </div>
      );
    case "separator":
      return (
        <div className="w-52">
          <div className="text-sm font-medium">Workspace</div>
          <Separator className="my-3" />
          <div className="text-sm text-muted-foreground">
            Shared with your team
          </div>
        </div>
      );
    case "skeleton":
      return (
        <div className="w-52 space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <Skeleton className="h-3 w-full" />
        </div>
      );
    case "switch":
      return (
        <label
          className="flex items-center gap-3 text-sm"
          htmlFor="preview-switch"
        >
          <Switch defaultChecked={alternate} id="preview-switch" /> Dark mode
        </label>
      );
    case "textarea":
      return (
        <div className="w-52">
          <Label htmlFor="preview-textarea">Notes</Label>
          <Textarea
            id="preview-textarea"
            className="mt-2 min-h-20"
            defaultValue={
              alternate ? "Shipping a better component library." : undefined
            }
            placeholder="Add a note…"
          />
        </div>
      );
    case "tooltip":
      return (
        <TooltipProvider>
          <Tooltip defaultOpen>
            <TooltipTrigger render={<Button size="sm">Hover me</Button>} />
            <TooltipContent>Helpful context</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    case "hero228":
      return (
        <div className="w-full">
          <Hero228
            {...(alternate ? hero228Mocks.studio : hero228Mocks.default)}
          />
        </div>
      );
    default:
      return <Button>{name}</Button>;
  }
}

export default async function Preview({
  params,
  searchParams,
}: {
  params: Promise<{ name: string; story: string }>;
  searchParams: Promise<{ theme?: string }>;
}) {
  const { name, story } = await params;
  const query = await searchParams;
  const isDark = query.theme === "dark" || story === "ThemeComparison";
  const isHero = name === "hero228";
  return (
    <main
      className={`${isDark ? "dark" : ""} min-h-dvh bg-background text-foreground ${isHero ? "" : "grid place-items-center overflow-hidden p-6"}`}
    >
      <PreviewContent name={name} story={story} />
    </main>
  );
}
