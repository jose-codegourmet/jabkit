"use client";

import {
  Archive,
  ArrowDownWideNarrow,
  ArrowUpRight,
  Bell,
  Blocks,
  Building2,
  ChartNoAxesCombined,
  ChevronRight,
  ChevronsUpDown,
  Copy,
  EllipsisVertical,
  ExternalLink,
  Filter,
  FolderInput,
  FolderPlus,
  GraduationCap,
  Grid2X2,
  Home,
  Images,
  Info,
  Layers,
  LayoutGrid,
  Lightbulb,
  List,
  LogOut,
  Menu,
  Moon,
  Palette,
  PanelLeft,
  Pencil,
  Play,
  Plug,
  Plus,
  Search,
  Settings,
  Sparkles,
  Sun,
  Trash2,
  User,
  UserRound,
  Users,
  Video,
  X,
} from "lucide-react";
import {
  type ReactNode,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/atoms/tooltip/Tooltip";
import { cn } from "@/lib/cn";
import { demostackDashboardMocks } from "./DemostackDashboard.mocks";
import type {
  DemostackDashboardInspiration,
  DemostackDashboardNavId,
  DemostackDashboardNavItem,
  DemostackDashboardOrganization,
  DemostackDashboardPageId,
  DemostackDashboardProps,
  DemostackDashboardSort,
  DemostackDashboardStack,
  DemostackDashboardView,
} from "./DemostackDashboard.types";

const defaults = demostackDashboardMocks.default;

const sortLabels: Record<DemostackDashboardSort, string> = {
  recent: "Recent",
  ascending: "Title A-Z",
  descending: "Title Z-A",
};

const pageCopy: Record<
  Exclude<DemostackDashboardPageId, "home" | "demostacks">,
  { title: string; body: string }
> = {
  showcases: {
    title: "Showcases",
    body: "Published galleries for prospects live here when your team shares them.",
  },
  videos: {
    title: "Videos",
    body: "Recorded walkthroughs will appear in this beta workspace.",
  },
  "demo-hub": {
    title: "Demo Hub",
    body: "Shared landing pages for live demos will collect here.",
  },
  analytics: {
    title: "Analytics",
    body: "Views, completion, and share activity will land on this board.",
  },
  theme: {
    title: "Theme",
    body: "Workspace color and logo settings stay with this organization.",
  },
  integration: {
    title: "Integration",
    body: "Connect CRM and calendar tools from this admin surface.",
  },
  settings: {
    title: "Settings",
    body: "Members, roles, and workspace preferences live here.",
  },
};

function BrandMark({
  brand,
  collapsed,
}: {
  brand: string;
  collapsed?: boolean;
}) {
  return (
    <span className="flex min-w-0 items-center gap-2 text-foreground">
      <span
        aria-hidden="true"
        className="grid size-6 shrink-0 grid-cols-2 gap-0.5"
      >
        <span className="rounded-[2px] bg-foreground" />
        <span className="rounded-[2px] bg-foreground/70" />
        <span className="rounded-[2px] bg-foreground/45" />
        <span className="rounded-[2px] bg-primary" />
      </span>
      {collapsed ? (
        <span className="sr-only">{brand}</span>
      ) : (
        <span className="truncate text-lg font-semibold tracking-tight">
          {brand}
        </span>
      )}
    </span>
  );
}

function NavGlyph({
  id,
  className,
}: {
  id: DemostackDashboardNavId;
  className?: string;
}) {
  const iconClass = cn("size-5 shrink-0", className);
  switch (id) {
    case "home":
      return <Home className={iconClass} />;
    case "demostacks":
      return <Layers className={iconClass} />;
    case "showcases":
      return <Images className={iconClass} />;
    case "videos":
      return <Video className={iconClass} />;
    case "demo-hub":
      return <LayoutGrid className={iconClass} />;
    case "analytics":
      return <ChartNoAxesCombined className={iconClass} />;
    case "theme":
      return <Palette className={iconClass} />;
    case "integration":
      return <Plug className={iconClass} />;
    case "settings":
      return <Settings className={iconClass} />;
    case "profile":
      return <User className={iconClass} />;
    default:
      return <LogOut className={iconClass} />;
  }
}

function ActionGlyph({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const iconClass = cn(
    "relative z-10 size-6 text-primary-foreground",
    className,
  );
  if (title.toLowerCase().includes("tutorial"))
    return <Video className={iconClass} />;
  if (title.toLowerCase().includes("gallery"))
    return <Images className={iconClass} />;
  return <FolderPlus className={iconClass} />;
}

function ResourceGlyph({ label }: { label: string }) {
  const iconClass =
    "relative z-10 mt-3 size-6 text-primary-foreground motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-110";
  if (
    label.toLowerCase().includes("academy") ||
    label.toLowerCase().includes("learning")
  )
    return <GraduationCap className={iconClass} />;
  if (
    label.toLowerCase().includes("knowledge") ||
    label.toLowerCase().includes("playbook")
  )
    return <Lightbulb className={iconClass} />;
  if (
    label.toLowerCase().includes("how") ||
    label.toLowerCase().includes("office")
  )
    return <Play className={iconClass} />;
  return <Sparkles className={iconClass} />;
}

function InspirationGlyph({ title }: { title: string }) {
  const iconClass =
    "size-7 text-primary motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-105";
  if (
    title.toLowerCase().includes("payment") ||
    title.toLowerCase().includes("billing")
  )
    return <Blocks className={iconClass} />;
  if (
    title.toLowerCase().includes("team") ||
    title.toLowerCase().includes("workspace") ||
    title.toLowerCase().includes("kickoff")
  )
    return <Users className={iconClass} />;
  if (
    title.toLowerCase().includes("analytics") ||
    title.toLowerCase().includes("recap")
  )
    return <ChartNoAxesCombined className={iconClass} />;
  return <LayoutGrid className={iconClass} />;
}

function FolderPlate({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex size-20 items-center justify-center motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-1">
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-2 h-3 w-8 rounded-t-md bg-primary/80"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-1 bottom-0 top-3 rounded-md bg-primary"
      />
      {children}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function findPageLabel(
  page: DemostackDashboardPageId,
  groups: NonNullable<DemostackDashboardProps["navGroups"]>,
) {
  for (const group of groups) {
    const match = group.items.find((item) => item.id === page);
    if (match) return match.label;
  }
  return "Home";
}

function HomeView({
  actions,
  inspiration,
  resources,
  tips,
}: {
  actions: NonNullable<DemostackDashboardProps["actions"]>;
  inspiration: DemostackDashboardInspiration[];
  resources: NonNullable<DemostackDashboardProps["resources"]>;
  tips: NonNullable<DemostackDashboardProps["tips"]>;
}) {
  const [tipsOpen, setTipsOpen] = useState(true);
  const tipTrack = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-6 md:space-y-[2.625rem] md:px-7 md:py-8">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {actions.map((action) => (
          <button
            className="flex w-full flex-col items-start gap-8 rounded-2xl border border-border px-4 pt-4 pb-3.5 text-left outline-none hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring motion-safe:transition-colors"
            key={action.title}
            type="button"
          >
            <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-lg">
              <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                height={44}
                src={action.image}
                width={44}
              />
              <ActionGlyph title={action.title} />
            </span>
            <span className="flex w-full flex-col gap-1">
              <span className="font-medium">{action.title}</span>
              <span className="text-sm leading-snug text-muted-foreground">
                {action.description}
              </span>
            </span>
          </button>
        ))}
      </section>

      {tipsOpen ? (
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold">Demostack Tips</h2>
              <p className="mt-2 max-w-prose text-muted-foreground">
                Drive successful outcomes across multiple departments and
                interactive demos
              </p>
            </div>
            <button
              aria-label="Close tips"
              className="inline-flex h-auto shrink-0 items-center gap-2 self-start rounded-full bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setTipsOpen(false)}
              type="button"
            >
              Close Tips
              <X className="size-[1.125rem]" />
            </button>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              ref={tipTrack}
            >
              {tips.map((tip) => (
                <article
                  className="group flex w-64 shrink-0 flex-col items-start gap-4"
                  key={tip.title}
                >
                  <div className="relative aspect-[3/2] w-64 overflow-hidden rounded-2xl">
                    <img
                      alt=""
                      className="size-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-105"
                      height={176}
                      src={tip.image}
                      width={256}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <h3 className="font-medium">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tip.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-16 bg-gradient-to-l from-background via-background/70 to-transparent md:w-36" />
            <button
              aria-label="Show more tips"
              className="absolute top-28 right-0 z-10 inline-flex size-10 items-center justify-center rounded-full border-0 bg-secondary text-foreground outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => {
                tipTrack.current?.scrollBy({
                  left: tipTrack.current.clientWidth,
                  behavior: "smooth",
                });
              }}
              type="button"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </section>
      ) : null}

      <div className="flex flex-col gap-8 lg:flex-row">
        <section className="flex flex-1 flex-col items-start gap-8 lg:max-w-lg">
          <h2 className="text-lg font-semibold">Resources</h2>
          <div className="grid w-full grid-cols-2 gap-4">
            {resources.map((resource) => (
              <button
                className="group flex flex-col items-start gap-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
                key={resource.label}
                type="button"
              >
                <span className="flex h-32 w-full items-center justify-center overflow-hidden rounded-xl bg-secondary">
                  <FolderPlate>
                    <ResourceGlyph label={resource.label} />
                  </FolderPlate>
                </span>
                <span className="font-medium">{resource.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="flex flex-1 flex-col items-start gap-8">
          <h2 className="text-lg font-semibold">Get Inspired</h2>
          <div className="flex w-full flex-col gap-2">
            {inspiration.map((item) => (
              <button
                className="group flex h-[4.5rem] w-full items-center justify-between rounded-2xl bg-secondary py-4 pr-8 pl-6 text-left outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
                key={item.title}
                type="button"
              >
                <span className="flex items-center gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center">
                    <InspirationGlyph title={item.title} />
                  </span>
                  <span className="font-medium">{item.title}</span>
                </span>
                <ArrowUpRight className="size-6 text-muted-foreground motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1" />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function EmptyPanel({
  className,
  description,
  title,
}: {
  className?: string;
  description: string;
  title: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-64 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-muted/40 px-6 text-center",
        className,
      )}
    >
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function StackMenu({ title }: { title: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`More options for ${title}`}
        className="inline-flex size-7 items-center justify-center rounded-full text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <EllipsisVertical className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem>
          <ExternalLink />
          Open
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pencil />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FolderInput />
          Move to folder
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Archive />
          Archive
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Trash2 />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function StackCollection({
  stacks,
  view,
}: {
  stacks: DemostackDashboardStack[];
  view: DemostackDashboardView;
}) {
  if (!stacks.length) {
    return (
      <EmptyPanel
        description="Clear or change the active creator filters."
        title="No matching Demostacks"
      />
    );
  }

  return (
    <section
      className={cn(
        view === "grid"
          ? "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
          : "space-y-3",
      )}
    >
      {stacks.map((stack) => (
        <article
          className={cn(
            "group",
            view === "list" &&
              "flex w-full max-w-full items-center gap-3 overflow-hidden rounded-2xl border border-border p-3 motion-safe:transition-colors hover:bg-muted/40 sm:gap-4",
          )}
          key={stack.id}
        >
          <div
            className={cn(
              "relative aspect-[3/2] overflow-hidden rounded-2xl border border-border",
              view === "list" && "w-2/5 max-w-44 shrink-0",
            )}
          >
            <img
              alt=""
              className="size-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-105"
              height={800}
              src={stack.image}
              width={1200}
            />
          </div>
          <div className={cn("space-y-2", view === "grid" ? "mt-4" : "flex-1")}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="truncate font-medium motion-safe:transition-colors group-hover:text-primary">
                {stack.title}
              </h3>
              <StackMenu title={stack.title} />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Avatar className="shrink-0" size="sm">
                {stack.avatar ? (
                  <AvatarImage alt={stack.author} src={stack.avatar} />
                ) : null}
                <AvatarFallback>{getInitials(stack.author)}</AvatarFallback>
              </Avatar>
              <span className="truncate">{stack.author}</span>
              <span aria-hidden="true">-</span>
              <time className="shrink-0" dateTime={stack.dateTime}>
                {stack.updatedAt}
              </time>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function DemostacksView({ stacks }: { stacks: DemostackDashboardStack[] }) {
  const [library, setLibrary] = useState<"demostacks" | "screenshots">(
    "demostacks",
  );
  const [shelf, setShelf] = useState<"shared" | "personal" | "archive">(
    "shared",
  );
  const [sort, setSort] = useState<DemostackDashboardSort>("recent");
  const [authors, setAuthors] = useState<string[]>([]);
  const [view, setView] = useState<DemostackDashboardView>("grid");
  const authorNames = useMemo(
    () => [...new Set(stacks.map((stack) => stack.author))],
    [stacks],
  );

  const visible = useMemo(() => {
    const filtered = authors.length
      ? stacks.filter((stack) => authors.includes(stack.author))
      : stacks;
    if (sort === "ascending") {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sort === "descending") {
      return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    }
    return filtered;
  }, [authors, sort, stacks]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-7 md:py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Team Demostacks</h2>
          <Tooltip>
            <TooltipTrigger
              aria-label="About team Demostacks"
              className="inline-flex text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Info className="size-[1.125rem]" />
            </TooltipTrigger>
            <TooltipContent>
              Demostacks shared with everyone in your workspace
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex w-full min-w-0 items-center gap-2 sm:ml-auto sm:w-auto sm:gap-4">
          <div className="flex h-auto min-w-0 flex-1 gap-1 rounded-[14px] bg-secondary p-1 sm:w-auto sm:flex-none sm:gap-3">
            {(
              [
                ["demostacks", "Demostacks"],
                ["screenshots", "Screenshots"],
              ] as const
            ).map(([value, label]) => (
              <button
                className={cn(
                  "h-9 min-w-0 flex-1 rounded-[10px] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-none sm:px-6 sm:py-3 sm:text-base",
                  library === value
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
                key={value}
                onClick={() => setLibrary(value)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex h-11 shrink-0 items-center gap-1 rounded-xl bg-primary px-3 text-base font-medium text-primary-foreground outline-none hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring sm:px-4">
              Create
              <Plus className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Plus />
                New Demostack
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Plus />
                New Screenshot
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {library === "screenshots" ? (
        <EmptyPanel
          className="mt-10"
          description="Create a screenshot to see it in this workspace."
          title="No screenshots yet"
        />
      ) : (
        <div className="mt-6 flex flex-col gap-4 md:mt-[2.625rem] md:gap-8">
          <div className="flex flex-col gap-4 border-b border-border lg:flex-row lg:items-end lg:justify-between">
            <div className="flex h-11 w-full gap-0 sm:w-auto">
              {(
                [
                  ["shared", Users, "Team", "Shared with Team"],
                  ["personal", UserRound, "Personal", "Personal"],
                  ["archive", Archive, "Archive", "Archive"],
                ] as const
              ).map(([value, Icon, shortLabel, longLabel]) => (
                <button
                  className={cn(
                    "relative flex h-11 min-w-0 flex-1 items-center justify-center gap-1.5 px-2 py-2 text-sm outline-none after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:bg-transparent focus-visible:ring-2 focus-visible:ring-ring sm:flex-none sm:justify-start sm:gap-2 sm:pr-6 sm:pl-4 sm:text-base",
                    shelf === value
                      ? "font-medium text-primary after:bg-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  key={value}
                  onClick={() => setShelf(value)}
                  type="button"
                >
                  <Icon className="size-5" />
                  <span className="sm:hidden">{shortLabel}</span>
                  <span className="hidden sm:inline">{longLabel}</span>
                </button>
              ))}
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 pb-3 lg:w-auto lg:gap-3 lg:pb-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="mr-auto inline-flex h-11 items-center gap-1 rounded-xl border border-border px-4 py-3 text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
                  <ArrowDownWideNarrow className="size-5" />
                  {sortLabels[sort]}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuRadioGroup
                    onValueChange={(value) =>
                      setSort(value as DemostackDashboardSort)
                    }
                    value={sort}
                  >
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    {Object.entries(sortLabels).map(([value, label]) => (
                      <DropdownMenuRadioItem key={value} value={value}>
                        {label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  aria-label="Filter by creator"
                  className={cn(
                    "inline-flex h-11 items-center gap-1 rounded-xl border border-border px-4 py-3 text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
                    authors.length > 0 && "bg-muted",
                  )}
                >
                  <Filter className="size-5" />
                  <span className="hidden sm:inline">Filter</span>
                  {authors.length > 0 ? (
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {authors.length}
                    </span>
                  ) : null}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Filter by creator</DropdownMenuLabel>
                    {authorNames.map((author) => (
                      <DropdownMenuCheckboxItem
                        checked={authors.includes(author)}
                        key={author}
                        onCheckedChange={(checked) => {
                          setAuthors((current) =>
                            checked
                              ? [...current, author]
                              : current.filter((name) => name !== author),
                          );
                        }}
                      >
                        {author}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuGroup>
                  {authors.length > 0 ? (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setAuthors([])}>
                        Clear filters
                      </DropdownMenuItem>
                    </>
                  ) : null}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  aria-label="Folder options"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <FolderPlus className="size-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem>
                    <FolderPlus />
                    New folder
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FolderInput />
                    Manage folders
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                aria-label={view === "grid" ? "Use list view" : "Use grid view"}
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
                  view === "list" && "bg-muted",
                )}
                onClick={() => setView(view === "grid" ? "list" : "grid")}
                type="button"
              >
                {view === "grid" ? (
                  <List className="size-5" />
                ) : (
                  <Grid2X2 className="size-5" />
                )}
              </button>
            </div>
          </div>

          {shelf === "shared" ? (
            <StackCollection stacks={visible} view={view} />
          ) : null}
          {shelf === "personal" ? (
            <EmptyPanel
              description="Demostacks visible only to you will appear here."
              title="No personal Demostacks yet"
            />
          ) : null}
          {shelf === "archive" ? (
            <EmptyPanel
              description="Archived Demostacks will appear here."
              title="Archive is empty"
            />
          ) : null}
        </div>
      )}
    </div>
  );
}

function SimpleView({ body, title }: { body: string; title: string }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 md:px-7 md:py-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="max-w-prose text-muted-foreground">{body}</p>
    </div>
  );
}

function SidebarBody({
  brand,
  collapsed,
  navGroups,
  onCollapse,
  onNavigate,
  onSelectOrganization,
  onToggleTheme,
  organization,
  organizations,
  page,
  theme,
  user,
}: {
  brand: string;
  collapsed: boolean;
  navGroups: NonNullable<DemostackDashboardProps["navGroups"]>;
  onCollapse: () => void;
  onNavigate: (page: DemostackDashboardPageId) => void;
  onSelectOrganization: (id: string) => void;
  onToggleTheme: () => void;
  organization: DemostackDashboardOrganization;
  organizations: DemostackDashboardOrganization[];
  page: DemostackDashboardPageId;
  theme: "light" | "dark";
  user: NonNullable<DemostackDashboardProps["user"]>;
}) {
  return (
    <>
      <div className={cn("p-1.5", collapsed && "px-1.5")}>
        <div
          className={cn(
            "rounded-2xl border border-border p-3 pt-3.5",
            collapsed && "p-2.5",
          )}
        >
          <div
            className={cn(
              "mb-6 flex items-center justify-between",
              collapsed && "mb-2 justify-center",
            )}
          >
            <BrandMark brand={brand} collapsed={collapsed} />
            <button
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className={cn(
                "hidden size-10 items-center justify-center rounded-xl text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring md:inline-flex",
                collapsed && "size-12",
              )}
              onClick={onCollapse}
              type="button"
            >
              <PanelLeft className="size-5" />
            </button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "flex w-full items-center gap-2 rounded-xl bg-secondary p-2 pr-2.5 text-left outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
                collapsed && "size-12 justify-center gap-0 p-2",
              )}
            >
              <span className="flex size-[1.875rem] items-center justify-center rounded-full bg-foreground text-background">
                <Building2 className="size-3.5" />
              </span>
              {collapsed ? (
                <span className="sr-only">{organization.name}</span>
              ) : (
                <>
                  <span className="flex min-w-0 flex-col items-start">
                    <span className="truncate text-xs font-medium">
                      {organization.name}
                    </span>
                    <span className="text-[0.625rem] text-muted-foreground">
                      {organization.role}
                    </span>
                  </span>
                  <ChevronsUpDown className="ml-auto size-[1.125rem] text-muted-foreground" />
                </>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Select organization</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                onValueChange={onSelectOrganization}
                value={organization.id}
              >
                {organizations.map((item) => (
                  <DropdownMenuRadioItem key={item.id} value={item.id}>
                    <span className="flex flex-col">
                      <span className="text-xs">{item.name}</span>
                      <span className="text-[0.625rem] text-muted-foreground">
                        {item.role}
                      </span>
                    </span>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {collapsed ? null : (
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">
                MEMBERS [{organization.members.length}]
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {organization.members.map((member) => (
                  <Avatar className="size-8" key={member.name}>
                    {member.image ? (
                      <AvatarImage alt={member.name} src={member.image} />
                    ) : null}
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <nav
        className={cn(
          "flex-1 overflow-y-auto px-2.5 pt-6 pb-3",
          collapsed && "overflow-x-hidden px-1.5",
        )}
      >
        {navGroups.map((group) => (
          <div className="mb-6" key={group.label}>
            {collapsed ? (
              <p className="sr-only">{group.label}</p>
            ) : (
              <p className="mb-3 px-1 text-sm text-muted-foreground">
                {group.label}
              </p>
            )}
            <ul className="flex flex-col gap-2">
              {group.items.map((item: DemostackDashboardNavItem) => {
                const active = page === item.id;
                return (
                  <li key={item.id}>
                    <button
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-xl border border-transparent p-3 text-left text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
                        active &&
                          "border-border bg-muted font-medium text-foreground",
                        collapsed && "size-12 justify-center gap-0 p-0",
                      )}
                      onClick={() => onNavigate(item.id)}
                      type="button"
                    >
                      <NavGlyph id={item.id} />
                      {collapsed ? (
                        <span className="sr-only">{item.label}</span>
                      ) : (
                        <>
                          <span className="text-base">{item.label}</span>
                          {item.badge ? (
                            <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium leading-none text-primary">
                              {item.badge}
                            </span>
                          ) : null}
                        </>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={cn("p-3", collapsed && "p-2.5")}>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "flex w-full items-center gap-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring",
              collapsed && "size-12 justify-center gap-0",
            )}
          >
            <Avatar className="size-10 after:border-[2.5px] after:border-border/50">
              {user.image ? (
                <AvatarImage alt={user.name} src={user.image} />
              ) : null}
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            {collapsed ? (
              <span className="sr-only">{user.name}</span>
            ) : (
              <span className="min-w-0">
                <span className="block truncate font-medium text-foreground">
                  {user.name}
                </span>
                <span className="block truncate text-sm text-muted-foreground">
                  {user.email}
                </span>
              </span>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <p className="font-medium text-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Account Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onToggleTheme}>
              {theme === "dark" ? <Sun /> : <Moon />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export function DemostackDashboard({
  actions = [...defaults.actions],
  brand = defaults.brand,
  className,
  inspiration = [...defaults.inspiration],
  initialOrganizationId = defaults.initialOrganizationId,
  initialPage = defaults.initialPage,
  navGroups = defaults.navGroups,
  notifications = [...defaults.notifications],
  organizations = [...defaults.organizations],
  resources = [...defaults.resources],
  searchPlaceholder = defaults.searchPlaceholder,
  stacks = [...defaults.stacks],
  tips = [...defaults.tips],
  user = defaults.user,
  ...props
}: DemostackDashboardProps) {
  const titleId = useId();
  const searchRef = useRef<HTMLInputElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState<DemostackDashboardPageId>(initialPage);
  const [organizationId, setOrganizationId] = useState(initialOrganizationId);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const organization =
    organizations.find((item) => item.id === organizationId) ??
    organizations[0];

  const pageLabel = findPageLabel(page, navGroups);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (window.matchMedia("(max-width: 767px)").matches) {
          setMobileSearch(true);
          requestAnimationFrame(() => mobileSearchRef.current?.focus());
          return;
        }
        searchRef.current?.focus();
      }
      if (event.key === "Escape") setMobileSearch(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (next: DemostackDashboardPageId) => {
    setPage(next);
    setMobileOpen(false);
  };

  let content: ReactNode;
  if (page === "home") {
    content = (
      <HomeView
        actions={actions}
        inspiration={inspiration}
        resources={resources}
        tips={tips}
      />
    );
  } else if (page === "demostacks") {
    content = <DemostacksView stacks={stacks} />;
  } else {
    const copy = pageCopy[page];
    content = <SimpleView body={copy.body} title={copy.title} />;
  }

  const sidebar = organization ? (
    <SidebarBody
      brand={brand}
      collapsed={collapsed}
      navGroups={navGroups}
      onCollapse={() => setCollapsed((value) => !value)}
      onNavigate={goTo}
      onSelectOrganization={setOrganizationId}
      onToggleTheme={() =>
        setTheme((value) => (value === "dark" ? "light" : "dark"))
      }
      organization={organization}
      organizations={organizations}
      page={page}
      theme={theme}
      user={user}
    />
  ) : null;

  return (
    <TooltipProvider>
      <section
        aria-labelledby={titleId}
        className={cn(
          "flex h-svh overflow-hidden bg-background text-foreground",
          theme === "dark" && "dark",
          className,
        )}
        data-slot="demostack-dashboard"
        {...props}
      >
        <h2 className="sr-only" id={titleId}>
          {brand} product demo workspace
        </h2>

        <aside
          className={cn(
            "hidden h-full shrink-0 flex-col overflow-hidden bg-background md:flex",
            collapsed ? "w-[5.125rem]" : "w-[16.25rem]",
          )}
        >
          {sidebar}
        </aside>

        {mobileOpen ? (
          <div className="fixed inset-0 z-40 md:hidden">
            <button
              aria-label="Close navigation"
              className="absolute inset-0 bg-foreground/20"
              onClick={() => setMobileOpen(false)}
              type="button"
            />
            <aside className="relative z-10 flex h-full w-[16.25rem] flex-col bg-background shadow-lg">
              <button
                aria-label="Close navigation"
                className="absolute top-4 right-3 inline-flex size-8 items-center justify-center rounded-xl text-muted-foreground outline-none hover:bg-muted"
                onClick={() => setMobileOpen(false)}
                type="button"
              >
                <X className="size-4" />
              </button>
              {sidebar}
            </aside>
          </div>
        ) : null}

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden md:p-1.5 md:pl-0">
          <header className="sticky top-0 z-20 flex h-[4.125rem] shrink-0 items-center justify-between border border-border bg-background px-4 md:rounded-t-2xl md:px-7">
            {mobileSearch ? (
              <div className="flex w-full items-center gap-2.5 md:hidden">
                <label className="flex h-[2.125rem] flex-1 items-center gap-1.5 rounded-full bg-secondary px-2.5">
                  <Search className="size-3.5 text-muted-foreground" />
                  <span className="sr-only">Quick search</span>
                  <input
                    aria-label="Quick search"
                    className="h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={searchPlaceholder}
                    ref={mobileSearchRef}
                    value={query}
                  />
                </label>
                <button
                  aria-label="Close search"
                  className="inline-flex size-[2.125rem] shrink-0 items-center justify-center rounded-full border border-border outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => setMobileSearch(false)}
                  type="button"
                >
                  <X className="size-[1.125rem]" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex min-w-0 items-center md:gap-[1.125rem]">
                  <button
                    aria-label="Open navigation"
                    className="inline-flex size-[2.125rem] shrink-0 items-center justify-center rounded-xl text-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                    onClick={() => setMobileOpen(true)}
                    type="button"
                  >
                    <Menu className="size-5" />
                  </button>
                  <div className="hidden items-center gap-1.5 md:flex">
                    <NavGlyph className="size-4" id={page} />
                    <h1 className="text-lg leading-none font-medium">
                      {pageLabel}
                    </h1>
                  </div>
                  <label className="hidden h-[2.125rem] items-center gap-1.5 rounded-full bg-secondary p-1 pl-2.5 md:flex md:w-[18.75rem]">
                    <Search className="size-3.5 text-muted-foreground" />
                    <span className="sr-only">Quick search</span>
                    <input
                      aria-label="Quick search"
                      className="h-full min-w-0 flex-1 bg-transparent px-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={searchPlaceholder}
                      ref={searchRef}
                      value={query}
                    />
                    {query === "" ? (
                      <span className="mr-1 flex items-center gap-1 rounded-sm bg-background px-1.5 py-1 text-xs leading-none text-muted-foreground">
                        ⌘K
                      </span>
                    ) : null}
                  </label>
                </div>

                <div className="flex shrink-0 items-center gap-2.5">
                  <button
                    className="hidden h-[2.125rem] items-center gap-3 rounded-full bg-secondary px-3 py-2 pl-4 text-xs leading-none text-secondary-foreground outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
                    type="button"
                  >
                    <Blocks className="size-[1.125rem]" />
                    Add Extension
                  </button>
                  <button
                    aria-label="Add Extension"
                    className="inline-flex size-[2.125rem] items-center justify-center rounded-full border border-border outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
                    type="button"
                  >
                    <Blocks className="size-[1.125rem]" />
                  </button>
                  <button
                    aria-label="Open search"
                    className="inline-flex size-[2.125rem] items-center justify-center rounded-full border border-border outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                    onClick={() => {
                      setMobileSearch(true);
                      requestAnimationFrame(() =>
                        mobileSearchRef.current?.focus(),
                      );
                    }}
                    type="button"
                  >
                    <Search className="size-[1.125rem]" />
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      aria-label="Notifications"
                      className="inline-flex size-[2.125rem] items-center justify-center rounded-full border border-border outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Bell className="size-[1.125rem]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-72">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {notifications.map((item) => (
                          <DropdownMenuItem
                            className="items-start py-2"
                            key={item.id}
                          >
                            <span>
                              <span className="block font-medium">
                                {item.title}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {item.description}
                              </span>
                              <span className="mt-1 block text-xs text-muted-foreground">
                                {item.time}
                              </span>
                            </span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="justify-center">
                        View all notifications
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            )}
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="min-h-full border-x border-b border-border md:rounded-b-2xl">
              {content}
            </div>
          </div>
        </main>
      </section>
    </TooltipProvider>
  );
}
