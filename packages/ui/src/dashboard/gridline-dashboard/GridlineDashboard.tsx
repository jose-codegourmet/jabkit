"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Clock3,
  Command,
  Database,
  FileText,
  GitBranch,
  GitCompare,
  Grid3X3,
  House,
  LayoutGrid,
  LogOut,
  Map as MapIcon,
  MapPin,
  Menu,
  MessageSquare,
  Minus,
  MoonStar,
  Network,
  PanelLeft,
  Plus,
  Radio,
  Search,
  Settings,
  Shield,
  SlidersHorizontal,
  SunDim,
  Table2,
  TrendingUp,
  UserRound,
  UsersRound,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
} from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { Switch } from "@/atoms/switch/Switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/atoms/tooltip/Tooltip";
import { cn } from "@/lib/cn";
import { gridlineDashboardMocks } from "./GridlineDashboard.mocks";
import type {
  GridlineDashboardAsset,
  GridlineDashboardFlexibility,
  GridlineDashboardModel,
  GridlineDashboardModellingAction,
  GridlineDashboardNavItem,
  GridlineDashboardPageId,
  GridlineDashboardProps,
  GridlineDashboardRegion,
  GridlineDashboardRegionPosition,
  GridlineDashboardRegionTone,
  GridlineDashboardVoltageFilter,
  GridlineDashboardVoltageTone,
  GridlineDashboardWorkspace,
  GridlineDashboardWorkspaceIcon,
} from "./GridlineDashboard.types";

const defaults = gridlineDashboardMocks.default;

const workspaceIcons: Record<GridlineDashboardWorkspaceIcon, LucideIcon> = {
  database: Database,
  flexibility: Zap,
  planning: TrendingUp,
  operations: Radio,
  stakeholders: UsersRound,
  connections: GitBranch,
};

const navIcons: Record<GridlineDashboardPageId, LucideIcon> = {
  dashboard: House,
  modelling: Database,
  flexibility: Zap,
  planning: TrendingUp,
  operations: Radio,
  stakeholders: UsersRound,
  connections: GitBranch,
};

const actionIcons: Record<
  GridlineDashboardModellingAction["icon"],
  LucideIcon
> = {
  database: Database,
  comparison: GitBranch,
  clearview: Shield,
};

const regionFill: Record<GridlineDashboardRegionTone, string> = {
  "chart-1": "bg-chart-1 border-chart-1",
  "chart-2": "bg-chart-2 border-chart-2",
  "chart-3": "bg-chart-3 border-chart-3",
  "chart-4": "bg-chart-4 border-chart-4",
};

const regionDot: Record<GridlineDashboardRegionTone, string> = {
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
};

const regionPlace: Record<GridlineDashboardRegionPosition, string> = {
  "north-east": "right-3 top-[9%] lg:left-[72%] lg:right-auto",
  central: "right-12 top-[28%] lg:left-[57%] lg:right-auto",
  west: "left-3 top-[50%] lg:left-[40%]",
  "south-east": "right-6 top-[71%] lg:left-[68%] lg:right-auto",
};

const voltageDot: Record<GridlineDashboardVoltageTone, string> = {
  foreground: "bg-foreground",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
  "chart-1": "bg-chart-1",
  "chart-3": "bg-chart-3",
};

const toolTabs: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "browse", label: "Browse", icon: Database },
  { id: "map", label: "Map", icon: MapIcon },
  { id: "graph", label: "Graph", icon: Network },
  { id: "circuit", label: "Circuit", icon: CircuitBoard },
  { id: "table", label: "Table", icon: Table2 },
  { id: "table-plus", label: "Table++", icon: Grid3X3 },
  { id: "ltds", label: "LTDS Table Generator", icon: FileText },
  { id: "compare", label: "Compare", icon: GitCompare },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function BrandMark({
  brand,
  showName,
}: {
  brand: string;
  showName?: boolean;
}) {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"
      >
        <span className="flex flex-col gap-0.5">
          <span className="h-px w-4 bg-current" />
          <span className="h-px w-4 bg-current" />
          <span className="h-px w-3 bg-current" />
        </span>
      </span>
      {showName ? (
        <span className="text-sm font-semibold tracking-tight">{brand}</span>
      ) : (
        <span className="sr-only">{brand}</span>
      )}
    </span>
  );
}

function NetworkBasemap() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full text-muted-foreground"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect className="fill-muted" height="800" width="1200" />
      <path
        className="fill-secondary"
        d="M40 80h430l80 70 210-40 250 90v190l-140 80-90 170H80Z"
      />
      <path
        className="fill-card"
        d="M620 210h310l90 140-40 180-210 70-180-90z"
      />
      <g className="stroke-border" fill="none" strokeWidth="1.2">
        {Array.from({ length: 16 }, (_, index) => (
          <line key={`h-${index}`} x1="0" x2="1200" y1={index * 50} y2={index * 50} />
        ))}
        {Array.from({ length: 24 }, (_, index) => (
          <line key={`v-${index}`} x1={index * 50} x2={index * 50} y1="0" y2="800" />
        ))}
      </g>
      <g className="stroke-foreground/25" fill="none" strokeWidth="2">
        <path d="M120 140c80 40 140 20 220 70s150 40 210-10 160 30 240 90 90 140 40 210" />
        <path d="M80 420c90-20 160 30 250 10s170-80 260-20 190 40 270 10" />
        <path d="M340 90c20 80 10 150 70 210s90 140 40 210" />
      </g>
      <g className="fill-primary">
        <circle cx="340" cy="300" r="4" />
        <circle cx="610" cy="250" r="4" />
        <circle cx="780" cy="390" r="4" />
        <circle cx="520" cy="470" r="4" />
        <circle cx="890" cy="280" r="4" />
      </g>
    </svg>
  );
}

function ProfileMenu({
  placement,
  user,
  className,
}: {
  placement: "sidebar" | "topbar";
  user: { name: string; email: string };
  className?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Open profile menu"
        title="Profile"
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
          placement === "topbar"
            ? "bg-secondary text-secondary-foreground hover:bg-accent"
            : "text-muted-foreground hover:bg-accent hover:text-foreground",
          className,
        )}
      >
        <UserRound aria-hidden="true" className="size-5" strokeWidth={1.7} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48"
        side={placement === "sidebar" ? "right" : "bottom"}
        sideOffset={8}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <span className="block truncate text-foreground">{user.name}</span>
            <span className="block truncate font-normal">{user.email}</span>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <UserRound />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function IconButton({
  label,
  onClick,
  className,
  children,
}: {
  label: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      aria-label={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground outline-none hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function GhostButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-2.5 py-2 font-mono text-xs text-muted-foreground outline-none hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground shadow-lg outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

function GridlineDashboardInner({
  brand,
  company,
  date,
  searchPlaceholder,
  user,
  navItems,
  workspaces,
  model,
  modellingActions,
  regions,
  flexibility,
  assets,
  voltageFilters,
  initialPage,
  className,
  ...props
}: Required<
  Pick<
    GridlineDashboardProps,
    | "brand"
    | "company"
    | "date"
    | "searchPlaceholder"
    | "user"
    | "navItems"
    | "workspaces"
    | "model"
    | "modellingActions"
    | "regions"
    | "flexibility"
    | "assets"
    | "voltageFilters"
    | "initialPage"
  >
> &
  Omit<GridlineDashboardProps, "children">) {
  const searchId = useId();
  const searchRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [page, setPage] = useState<GridlineDashboardPageId>(initialPage);
  const [isDark, setIsDark] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] =
    useState<GridlineDashboardRegion | null>(null);
  const [activeTool, setActiveTool] = useState("browse");
  const [selectedAsset, setSelectedAsset] =
    useState<GridlineDashboardAsset | null>(null);
  const [expandedAssets, setExpandedAssets] = useState<Set<string>>(
    () => new Set(),
  );
  const [assetQuery, setAssetQuery] = useState("");
  const [showAssetsPanel, setShowAssetsPanel] = useState(true);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [mobileSheet, setMobileSheet] = useState<
    null | "assets" | "filters" | "details" | "model"
  >(null);
  const [zoom, setZoom] = useState(1);
  const [enabledVoltages, setEnabledVoltages] = useState<Set<string>>(
    () => new Set(voltageFilters.map((filter) => filter.id)),
  );
  const [showSubstations, setShowSubstations] = useState(true);

  useEffect(() => {
    const host = rootRef.current;
    setIsDark(
      Boolean(
        host?.closest(".dark") ||
          document.documentElement.classList.contains("dark"),
      ),
    );
  }, []);

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const visibleWorkspaces = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return workspaces;
    return workspaces.filter((workspace) =>
      [workspace.title, ...workspace.details]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [query, workspaces]);

  const visibleAssets = useMemo(() => {
    const needle = assetQuery.trim().toLowerCase();
    if (!needle) return assets;
    return assets.filter((asset) =>
      `${asset.name} ${asset.voltage}`.toLowerCase().includes(needle),
    );
  }, [assetQuery, assets]);

  const activeNav =
    navItems.find((item) => item.id === page) ?? navItems[0];

  function goTo(next: GridlineDashboardPageId) {
    setPage(next);
    setMobileNavOpen(false);
    setMobileSheet(null);
    if (next !== "modelling") setSelectedRegion(null);
    if (next !== "flexibility") setSelectedAsset(null);
  }

  function toggleAsset(asset: GridlineDashboardAsset, openDetails = false) {
    setSelectedAsset(asset);
    setExpandedAssets((current) => {
      const next = new Set(current);
      if (next.has(asset.id)) next.delete(asset.id);
      else next.add(asset.id);
      return next;
    });
    if (openDetails) setMobileSheet("details");
  }

  const chrome =
    "border-border bg-muted/80 text-foreground backdrop-blur-sm";

  return (
    <div
      className={cn(
        "relative h-svh min-h-0 overflow-hidden bg-background text-foreground transition-colors",
        isDark && "dark",
        className,
      )}
      data-slot="gridline-dashboard"
      ref={rootRef}
      {...props}
    >
      <aside
        aria-label="Primary navigation"
        className={cn(
          "absolute inset-y-0 left-0 z-30 hidden w-17 flex-col items-center justify-between border-r px-2.5 py-4 md:flex",
          chrome,
        )}
      >
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex w-full justify-center border-b border-border pb-4">
            <BrandMark brand={brand} />
          </div>
          <nav className="flex flex-col items-center gap-4 border-b border-border pb-3">
            {navItems.map((item) => {
              const Icon = navIcons[item.id];
              const active = page === item.id;
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger
                    aria-current={active ? "page" : undefined}
                    aria-label={item.label}
                    className={cn(
                      "inline-flex size-10 items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                    onClick={() => goTo(item.id)}
                    type="button"
                  >
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.6} />
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Tooltip>
            <TooltipTrigger
              aria-label="Documents"
              className="inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground outline-none hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              type="button"
            >
              <FileText aria-hidden="true" className="size-6" strokeWidth={1.6} />
            </TooltipTrigger>
            <TooltipContent side="right">Documents</TooltipContent>
          </Tooltip>
          <ProfileMenu placement="sidebar" user={user} />
        </div>
      </aside>

      <header
        className={cn(
          "absolute top-0 right-0 left-0 z-20 flex h-18 items-center justify-between gap-3 border-b px-3 sm:px-5 md:left-17 md:px-8",
          chrome,
        )}
      >
        <div className="flex min-w-0 items-center gap-3">
          <IconButton
            className="md:hidden"
            label="Open navigation menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu aria-hidden="true" className="size-5" />
          </IconButton>
          <span className="truncate text-sm font-semibold sm:hidden">
            {activeNav.shortLabel}
          </span>
          <div className="hidden h-6.5 shrink-0 items-center overflow-hidden rounded-md bg-background font-mono text-xs tracking-tight sm:flex">
            <span className="flex h-full items-center gap-2 border-r-2 border-border px-2.5 text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              {model.publication}
            </span>
            <span className="flex h-full items-center border-r-2 border-border px-2.5 text-success">
              {model.validation}
            </span>
            <span className="flex h-full items-center px-2.5 text-muted-foreground">
              {model.review}
            </span>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-4 font-mono text-xs text-muted-foreground lg:gap-6">
          <div className="hidden min-w-0 items-center gap-2 lg:flex">
            <span className="truncate">{model.currentModel} Model</span>
            <span className="size-1 rounded-full bg-muted-foreground" />
            <span>{model.currentVersion}</span>
            <ArrowRight aria-hidden="true" className="size-3" />
            <span className="text-primary">{model.latestVersion}</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1 text-foreground">
              {isDark ? (
                <MoonStar aria-hidden="true" className="size-4" strokeWidth={1.5} />
              ) : (
                <SunDim aria-hidden="true" className="size-4.5" strokeWidth={1.5} />
              )}
              <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
            </div>
            <Switch
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              checked={isDark}
              onCheckedChange={setIsDark}
            />
          </div>
          <span className="text-primary md:hidden">{model.latestVersion}</span>
          <ProfileMenu
            className="md:hidden"
            placement="topbar"
            user={user}
          />
        </div>
      </header>

      {mobileNavOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-foreground/20"
            onClick={() => setMobileNavOpen(false)}
            type="button"
          />
          <div className="relative flex h-full w-4/5 max-w-xs flex-col border-r border-border bg-muted text-foreground">
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <BrandMark brand={brand} showName />
              <IconButton
                label="Close navigation menu"
                onClick={() => setMobileNavOpen(false)}
              >
                <ChevronLeft aria-hidden="true" className="size-6" />
              </IconButton>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-3">
              {navItems.map((item) => {
                const Icon = navIcons[item.id];
                const active = page === item.id;
                return (
                  <button
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                    key={item.id}
                    onClick={() => goTo(item.id)}
                    type="button"
                  >
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                    {item.shortLabel}
                  </button>
                );
              })}
            </nav>
            <div className="flex items-center justify-between border-t border-border px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                {isDark ? (
                  <MoonStar aria-hidden="true" className="size-4" />
                ) : (
                  <SunDim aria-hidden="true" className="size-4.5" />
                )}
                <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
              </div>
              <Switch
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                checked={isDark}
                onCheckedChange={setIsDark}
              />
            </div>
          </div>
        </div>
      ) : null}

      <main
        aria-label="Page content"
        className="h-full overflow-y-auto pt-18 md:pl-17"
      >
        {page === "dashboard" ? (
          <HomeView
            company={company}
            date={date}
            query={query}
            searchId={searchId}
            searchPlaceholder={searchPlaceholder}
            searchRef={searchRef}
            setQuery={setQuery}
            visibleWorkspaces={visibleWorkspaces}
            onOpenWorkspace={goTo}
          />
        ) : null}
        {page === "modelling" ? (
          <ModellingView
            actions={modellingActions}
            model={model}
            reducedMotion={reducedMotion}
            regions={regions}
            selectedRegion={selectedRegion}
            onSelectRegion={(region) => {
              setSelectedRegion(region);
              setMobileSheet("model");
            }}
            onCollapse={() => {
              setSelectedRegion(null);
              setMobileSheet(null);
            }}
          />
        ) : null}
        {page === "flexibility" ? (
          <FlexibilityView
            activeTool={activeTool}
            assets={visibleAssets}
            enabledVoltages={enabledVoltages}
            expandedAssets={expandedAssets}
            flexibility={flexibility}
            reducedMotion={reducedMotion}
            regions={regions}
            selectedAsset={selectedAsset}
            setActiveTool={setActiveTool}
            setEnabledVoltages={setEnabledVoltages}
            setShowAssetsPanel={setShowAssetsPanel}
            setShowFilterPanel={setShowFilterPanel}
            setShowSubstations={setShowSubstations}
            setZoom={setZoom}
            showAssetsPanel={showAssetsPanel}
            showFilterPanel={showFilterPanel}
            showSubstations={showSubstations}
            voltageFilters={voltageFilters}
            zoom={zoom}
            assetQuery={assetQuery}
            setAssetQuery={setAssetQuery}
            onSelectAsset={toggleAsset}
            onOpenSheet={setMobileSheet}
            onClearAsset={() => {
              setSelectedAsset(null);
              setMobileSheet(null);
            }}
          />
        ) : null}
        {page !== "dashboard" &&
        page !== "modelling" &&
        page !== "flexibility" ? (
          <PlaceholderView
            navItems={navItems}
            page={page}
            workspaces={workspaces}
          />
        ) : null}
      </main>

      {mobileSheet && page === "modelling" && selectedRegion ? (
        <MobileSheet
          onClose={() => {
            setSelectedRegion(null);
            setMobileSheet(null);
          }}
          title={model.title}
        >
          <ModelPanel
            actions={modellingActions}
            model={model}
            onCollapse={() => {
              setSelectedRegion(null);
              setMobileSheet(null);
            }}
            reducedMotion={reducedMotion}
            region={selectedRegion}
            mobile
          />
        </MobileSheet>
      ) : null}

      {mobileSheet === "assets" && page === "flexibility" ? (
        <MobileSheet
          onClose={() => setMobileSheet(null)}
          title={`${flexibility.regionName} Assets`}
        >
          <AssetList
            assetQuery={assetQuery}
            assets={visibleAssets}
            expandedAssets={expandedAssets}
            flexibility={flexibility}
            onSelectAsset={(asset) => toggleAsset(asset, true)}
            selectedAsset={selectedAsset}
            setAssetQuery={setAssetQuery}
            showHeader
          />
        </MobileSheet>
      ) : null}

      {mobileSheet === "filters" && page === "flexibility" ? (
        <MobileSheet onClose={() => setMobileSheet(null)} title="Map filters">
          <FilterPanel
            enabledVoltages={enabledVoltages}
            flexibility={flexibility}
            regions={regions}
            setEnabledVoltages={setEnabledVoltages}
            setShowSubstations={setShowSubstations}
            showSubstations={showSubstations}
            voltageFilters={voltageFilters}
          />
        </MobileSheet>
      ) : null}

      {mobileSheet === "details" &&
      page === "flexibility" &&
      selectedAsset ? (
        <MobileSheet
          onClose={() => {
            setSelectedAsset(null);
            setMobileSheet(null);
          }}
          title="Substation details"
        >
          <DetailsPanel asset={selectedAsset} flexibility={flexibility} />
        </MobileSheet>
      ) : null}
    </div>
  );
}

function HomeView({
  company,
  date,
  query,
  searchId,
  searchPlaceholder,
  searchRef,
  setQuery,
  visibleWorkspaces,
  onOpenWorkspace,
}: {
  company: string;
  date: string;
  query: string;
  searchId: string;
  searchPlaceholder: string;
  searchRef: RefObject<HTMLInputElement | null>;
  setQuery: (value: string) => void;
  visibleWorkspaces: GridlineDashboardWorkspace[];
  onOpenWorkspace: (id: GridlineDashboardPageId) => void;
}) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8 lg:pt-12">
      <div className="flex flex-col gap-6 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
            {company}
          </h1>
          <p className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground sm:text-base">
            <CalendarDays aria-hidden="true" className="size-5" strokeWidth={1.5} />
            {date}
          </p>
        </div>
        <div className="relative w-full sm:max-w-md">
          <label className="sr-only" htmlFor={searchId}>
            Search the network model
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
            strokeWidth={1.5}
          />
          <input
            className="h-11 w-full rounded-lg border-0 bg-muted pr-4 pl-11 font-mono text-sm shadow-none outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring sm:pr-14"
            id={searchId}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            ref={searchRef}
            type="search"
            value={query}
          />
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <kbd className="pointer-events-none hidden items-center gap-1 rounded-md bg-background px-2 py-1 font-mono text-xs text-muted-foreground sm:flex">
              <Command aria-hidden="true" className="size-3" />
              K
            </kbd>
          </div>
        </div>
      </div>

      <section className="mt-7">
        <h2 className="flex items-center gap-2 text-sm font-medium">
          <Clock3 aria-hidden="true" className="size-5" strokeWidth={1.6} />
          Recents
        </h2>
        <div className="flex flex-col items-center gap-5 py-10 sm:py-12">
          <span className="grid size-14 place-items-center rounded-xl bg-muted">
            <Clock3 aria-hidden="true" className="size-7" strokeWidth={1.5} />
          </span>
          <p className="font-mono text-sm text-muted-foreground">
            Your recent works will appear here
          </p>
        </div>
      </section>

      <section className="space-y-6 pb-8">
        <h2 className="flex items-center gap-2 text-sm font-medium">
          <LayoutGrid aria-hidden="true" className="size-5" strokeWidth={1.6} />
          Workspaces
        </h2>
        {visibleWorkspaces.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {visibleWorkspaces.map((workspace) => {
              const Icon = workspaceIcons[workspace.icon];
              return (
                <button
                  className="h-full rounded-xl bg-secondary p-5 text-left shadow-none outline-none transition-colors hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-ring dark:bg-card/60 dark:hover:bg-card"
                  key={workspace.id}
                  onClick={() => onOpenWorkspace(workspace.id)}
                  type="button"
                >
                  <span className="flex items-start justify-between">
                    <span className="grid size-10 place-items-center rounded-lg bg-background">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.6}
                      />
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-6 text-muted-foreground"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="mt-11 block text-base font-medium">
                    {workspace.title}
                  </span>
                  <ul className="mt-3 space-y-2 font-mono text-xs text-muted-foreground">
                    {workspace.details.map((detail) => (
                      <li className="flex gap-2" key={detail}>
                        <span aria-hidden="true">·</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="flex min-h-48 items-center justify-center rounded-xl bg-muted text-center text-sm text-muted-foreground">
            No workspaces match your search.
          </p>
        )}
      </section>
    </div>
  );
}

function ModellingView({
  actions,
  model,
  reducedMotion,
  regions,
  selectedRegion,
  onSelectRegion,
  onCollapse,
}: {
  actions: GridlineDashboardModellingAction[];
  model: GridlineDashboardModel;
  reducedMotion: boolean;
  regions: GridlineDashboardRegion[];
  selectedRegion: GridlineDashboardRegion | null;
  onSelectRegion: (region: GridlineDashboardRegion) => void;
  onCollapse: () => void;
}) {
  return (
    <div className="absolute inset-x-0 top-18 bottom-0 overflow-hidden bg-muted md:left-17">
      <div className="absolute inset-0 overflow-hidden">
        <NetworkBasemap />
        <div className="absolute inset-0 bg-foreground/5" />
        {regions.map((region) => (
          <button
            aria-pressed={selectedRegion?.id === region.id}
            className={cn(
              "absolute w-36 rounded-xl border-2 p-2 text-left text-background shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring lg:w-48 lg:p-4",
              regionFill[region.tone],
              regionPlace[region.position],
              selectedRegion?.id === region.id && "border-foreground",
              !reducedMotion && "transition-transform hover:-translate-y-0.5",
            )}
            key={region.id}
            onClick={() => onSelectRegion(region)}
            type="button"
          >
            <span className="block text-sm font-medium">{region.name}</span>
            <span className="mt-2 flex items-center gap-2 font-mono text-xs text-background/80">
              Click to load
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-full left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r-2 border-b-2",
                regionFill[region.tone],
              )}
            />
          </button>
        ))}
        <div className="absolute right-5 bottom-5 hidden space-y-1.5 rounded-lg bg-foreground/30 p-3 backdrop-blur-sm lg:block">
          {regions.map((region) => (
            <div
              className="flex items-center gap-2 font-mono text-xs text-background/80"
              key={region.id}
            >
              <span className={cn("size-2 rounded-sm", regionDot[region.tone])} />
              {region.legendName}
            </div>
          ))}
        </div>
      </div>
      {selectedRegion ? (
        <article className="absolute inset-y-4 left-4 z-10 hidden w-96 flex-col overflow-hidden rounded-xl bg-background/95 p-6 shadow-2xl backdrop-blur-xl md:flex">
          <ModelPanel
            actions={actions}
            model={model}
            onCollapse={onCollapse}
            reducedMotion={reducedMotion}
            region={selectedRegion}
          />
        </article>
      ) : null}
    </div>
  );
}

function ModelPanel({
  actions,
  model,
  onCollapse,
  reducedMotion,
  region,
  mobile,
}: {
  actions: GridlineDashboardModellingAction[];
  model: GridlineDashboardModel;
  onCollapse: () => void;
  reducedMotion: boolean;
  region: GridlineDashboardRegion;
  mobile?: boolean;
}) {
  const CollapseIcon = mobile ? ChevronDown : ChevronLeft;
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex shrink-0 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary">
            <Database aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </span>
          <div className="min-w-0">
            <h1 className="truncate text-base font-medium">{model.title}</h1>
            <p className="truncate font-mono text-xs text-muted-foreground">
              {region.name}
            </p>
          </div>
        </div>
        <IconButton label="Collapse model information" onClick={onCollapse}>
          <CollapseIcon aria-hidden="true" className="size-5" />
        </IconButton>
      </header>
      <div className="mt-6 min-h-0 flex-1 space-y-8 overflow-y-auto">
        <section className="space-y-3">
          <p className="max-w-sm font-mono text-xs leading-relaxed text-muted-foreground">
            {model.description}
          </p>
          <div className="flex flex-wrap items-center gap-1 font-mono text-xs">
            <span className="flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1">
              <MapPin aria-hidden="true" className="size-3.5 text-primary" />
              {region.name}
            </span>
            <span className="rounded-md bg-secondary px-2 py-1 text-muted-foreground">
              {model.version}
            </span>
            <span className="flex items-center gap-2 rounded-md bg-secondary px-2 py-1 text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              {model.publication}
            </span>
            <span className="rounded-md bg-secondary px-2 py-1 text-success">
              {model.validation}
            </span>
          </div>
        </section>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-7 rounded-xl bg-secondary/70 p-4">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-current" />
              Current Model
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">{model.currentModel}</p>
              <p className="font-mono text-xs text-primary">{model.currentVersion}</p>
            </div>
          </div>
          <div className="space-y-7 rounded-xl bg-secondary/70 p-4">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-current" />
              Latest Update
            </p>
            <p className="text-sm leading-snug font-medium">{model.latestUpdate}</p>
          </div>
          <div className="col-span-2 space-y-7 rounded-xl bg-secondary/70 p-4">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-current" />
              Status
            </p>
            <div className="space-y-3">
              <p className="flex items-end gap-2">
                <span className="text-base font-medium">{model.coverage}</span>
                <span className="text-xs text-muted-foreground">Coverage</span>
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <p className="text-muted-foreground">
                  Last Published:{" "}
                  <span className="text-foreground/80">{model.lastPublished}</span>
                </p>
                <p className="text-warning">{model.openIssues} open issues</p>
              </div>
            </div>
          </div>
        </div>
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 font-mono text-base text-foreground/80">
            <ArrowUpRight aria-hidden="true" className="size-5" />
            Primary Actions
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {actions.map((action) => {
              const Icon = actionIcons[action.icon];
              return (
                <button
                  className="group flex min-h-40 flex-col justify-between gap-8 rounded-xl bg-secondary/70 p-4 text-left outline-none hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring"
                  key={action.title}
                  type="button"
                >
                  <span className="flex w-full items-start justify-between">
                    <span className="grid size-10 place-items-center rounded-lg bg-background">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.5}
                      />
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={cn(
                        "size-5 text-muted-foreground",
                        !reducedMotion &&
                          "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="space-y-2">
                    <span className="block text-sm font-medium">{action.title}</span>
                    <span className="block font-mono text-xs leading-relaxed text-muted-foreground">
                      {action.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

function FlexibilityView({
  activeTool,
  assets,
  assetQuery,
  enabledVoltages,
  expandedAssets,
  flexibility,
  reducedMotion,
  regions,
  selectedAsset,
  setActiveTool,
  setAssetQuery,
  setEnabledVoltages,
  setShowAssetsPanel,
  setShowFilterPanel,
  setShowSubstations,
  setZoom,
  showAssetsPanel,
  showFilterPanel,
  showSubstations,
  voltageFilters,
  zoom,
  onSelectAsset,
  onOpenSheet,
  onClearAsset,
}: {
  activeTool: string;
  assets: GridlineDashboardAsset[];
  assetQuery: string;
  enabledVoltages: Set<string>;
  expandedAssets: Set<string>;
  flexibility: GridlineDashboardFlexibility;
  reducedMotion: boolean;
  regions: GridlineDashboardRegion[];
  selectedAsset: GridlineDashboardAsset | null;
  setActiveTool: (tool: string) => void;
  setAssetQuery: (value: string) => void;
  setEnabledVoltages: Dispatch<SetStateAction<Set<string>>>;
  setShowAssetsPanel: (value: boolean) => void;
  setShowFilterPanel: (value: boolean) => void;
  setShowSubstations: (value: boolean) => void;
  setZoom: Dispatch<SetStateAction<number>>;
  showAssetsPanel: boolean;
  showFilterPanel: boolean;
  showSubstations: boolean;
  voltageFilters: GridlineDashboardVoltageFilter[];
  zoom: number;
  onSelectAsset: (asset: GridlineDashboardAsset, openDetails?: boolean) => void;
  onOpenSheet: (sheet: "assets" | "filters" | "details") => void;
  onClearAsset: () => void;
}) {
  return (
    <div className="absolute inset-x-0 top-18 bottom-0 overflow-hidden bg-background md:left-17">
      <header className="absolute inset-x-0 top-0 z-20 flex h-14 items-center border-b border-border bg-background/95 backdrop-blur">
        {showAssetsPanel ? (
          <div className="hidden w-64 shrink-0 items-center justify-between border-r border-border px-4 lg:flex">
            <div>
              <p className="text-sm font-medium">{flexibility.regionName} Assets</p>
              <p className="font-mono text-xs text-muted-foreground">
                {flexibility.substationCount} Substations
              </p>
            </div>
            <IconButton
              className="size-8"
              label="Collapse assets panel"
              onClick={() => setShowAssetsPanel(false)}
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </IconButton>
          </div>
        ) : (
          <div className="hidden shrink-0 border-r border-border px-2 lg:flex">
            <GhostButton onClick={() => setShowAssetsPanel(true)}>
              <PanelLeft aria-hidden="true" className="size-4" />
              Assets
            </GhostButton>
          </div>
        )}
        <nav
          aria-label="Asset workspace tools"
          className="flex min-w-0 flex-1 items-center justify-between overflow-x-auto px-2 sm:justify-start sm:gap-1"
        >
          {toolTabs.map(({ id, label, icon: Icon }) => (
            <button
              aria-label={label}
              aria-pressed={activeTool === id}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-lg px-2.5 py-2 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeTool === id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
              key={id}
              onClick={() => setActiveTool(id)}
              type="button"
            >
              <Icon aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </nav>
        {selectedAsset ? (
          <div className="hidden w-64 shrink-0 items-center justify-between border-l border-border px-4 lg:flex">
            <div>
              <p className="text-sm font-medium">Details</p>
              <p className="font-mono text-xs text-muted-foreground">
                {selectedAsset.name}
              </p>
            </div>
            <IconButton
              className="size-8"
              label="Collapse details panel"
              onClick={onClearAsset}
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </IconButton>
          </div>
        ) : null}
      </header>

      <div className="absolute inset-x-0 top-14 bottom-0 flex">
        {showAssetsPanel ? (
          <aside className="hidden w-64 shrink-0 border-r border-border lg:flex">
            <AssetList
              assetQuery={assetQuery}
              assets={assets}
              expandedAssets={expandedAssets}
              flexibility={flexibility}
              onSelectAsset={onSelectAsset}
              selectedAsset={selectedAsset}
              setAssetQuery={setAssetQuery}
            />
          </aside>
        ) : null}

        <section
          aria-label="Substation asset map"
          className="relative min-w-0 flex-1 overflow-hidden bg-muted"
        >
          <div
            className={cn(
              "absolute inset-0 origin-center",
              !reducedMotion && "transition-transform duration-300",
            )}
            style={{ transform: `scale(${zoom})` }}
          >
            <NetworkBasemap />
          </div>
          <div className="absolute inset-0 bg-foreground/5" />

          <div className="pointer-events-none absolute inset-x-3 top-3 z-20 flex items-start justify-between lg:hidden">
            <div className="pointer-events-auto flex gap-2">
              <SecondaryButton onClick={() => onOpenSheet("assets")}>
                <PanelLeft aria-hidden="true" className="size-4" />
                Assets
              </SecondaryButton>
              <SecondaryButton
                aria-label="Filters"
                className="size-9 px-0"
                onClick={() => onOpenSheet("filters")}
              >
                <SlidersHorizontal aria-hidden="true" className="size-4" />
              </SecondaryButton>
            </div>
            {selectedAsset ? (
              <SecondaryButton
                className="pointer-events-auto"
                onClick={() => onOpenSheet("details")}
              >
                <Building2 aria-hidden="true" className="size-4" />
                Details
              </SecondaryButton>
            ) : null}
          </div>

          {showFilterPanel ? (
            <aside className="absolute inset-y-3 left-3 z-10 hidden w-48 overflow-hidden rounded-xl xl:block">
              <FilterPanel
                enabledVoltages={enabledVoltages}
                flexibility={flexibility}
                onCollapse={() => setShowFilterPanel(false)}
                regions={regions}
                setEnabledVoltages={setEnabledVoltages}
                setShowSubstations={setShowSubstations}
                showSubstations={showSubstations}
                voltageFilters={voltageFilters}
              />
            </aside>
          ) : (
            <SecondaryButton
              className="absolute top-3 left-3 z-10 hidden xl:inline-flex"
              onClick={() => setShowFilterPanel(true)}
            >
              <SlidersHorizontal aria-hidden="true" className="size-4" />
              Filters
            </SecondaryButton>
          )}

          <div className="absolute right-3 bottom-3 z-10 flex flex-col rounded-lg bg-background p-1 shadow-lg">
            <IconButton
              className="size-8"
              label="Zoom in"
              onClick={() =>
                setZoom((value) => Math.min(1.4, Number((value + 0.1).toFixed(2))))
              }
            >
              <Plus aria-hidden="true" className="size-4" />
            </IconButton>
            <IconButton
              className="size-8"
              label="Zoom out"
              onClick={() =>
                setZoom((value) => Math.max(1, Number((value - 0.1).toFixed(2))))
              }
            >
              <Minus aria-hidden="true" className="size-4" />
            </IconButton>
          </div>

          {showSubstations
            ? assets.map((asset) => (
                <button
                  aria-label={`Load ${asset.name} ${asset.voltage}`}
                  aria-pressed={selectedAsset?.id === asset.id}
                  className={cn(
                    "group absolute z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    selectedAsset?.id === asset.id && "scale-125 ring-4 ring-primary/25",
                    !reducedMotion && "transition-transform hover:scale-125",
                  )}
                  key={asset.id}
                  onClick={() => onSelectAsset(asset, true)}
                  style={{
                    left: `${asset.mapPosition.x}%`,
                    top: `${asset.mapPosition.y}%`,
                  }}
                  type="button"
                >
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-max max-w-40 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 font-mono text-xs text-background opacity-0 shadow-lg group-hover:opacity-100 group-focus-visible:opacity-100">
                    {asset.name} {asset.voltage}
                  </span>
                </button>
              ))
            : null}

          <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex">
            <SecondaryButton className="font-mono text-xs text-muted-foreground">
              <MessageSquare aria-hidden="true" className="size-4" />
              Feedback
            </SecondaryButton>
            <div className="inline-flex items-center gap-1 rounded-lg bg-background/95 px-3 py-2 font-mono text-xs shadow-lg backdrop-blur">
              <span className="text-muted-foreground">Attribution:</span>
              <span>{flexibility.attributionCompany}</span>
              <Network aria-hidden="true" className="size-4 text-primary" />
              <span className="text-primary">{flexibility.attributionProduct}</span>
            </div>
          </div>
        </section>

        {selectedAsset ? (
          <aside className="hidden w-64 shrink-0 border-l border-border lg:block">
            <DetailsPanel asset={selectedAsset} flexibility={flexibility} />
          </aside>
        ) : null}
      </div>
    </div>
  );
}

function AssetList({
  assets,
  assetQuery,
  expandedAssets,
  flexibility,
  onSelectAsset,
  selectedAsset,
  setAssetQuery,
  showHeader = false,
}: {
  assets: GridlineDashboardAsset[];
  assetQuery: string;
  expandedAssets: Set<string>;
  flexibility: GridlineDashboardFlexibility;
  onSelectAsset: (asset: GridlineDashboardAsset) => void;
  selectedAsset: GridlineDashboardAsset | null;
  setAssetQuery: (value: string) => void;
  showHeader?: boolean;
}) {
  const listSearchId = useId();
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-background">
      <div className="border-b border-border p-3">
        {showHeader ? (
          <div className="pr-10">
            <h2 className="text-sm font-medium">{flexibility.regionName} Assets</h2>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {flexibility.substationCount} Substations
            </p>
          </div>
        ) : null}
        <div className={cn("relative", showHeader && "mt-4")}>
          <label className="sr-only" htmlFor={listSearchId}>
            Search assets
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            className="h-9 w-full rounded-lg border-0 bg-muted pr-3 pl-9 font-mono text-xs shadow-none outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            id={listSearchId}
            onChange={(event) => setAssetQuery(event.target.value)}
            placeholder="Search"
            type="search"
            value={assetQuery}
          />
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        {assets.map((asset) => {
          const isExpanded = expandedAssets.has(asset.id);
          const selected = selectedAsset?.id === asset.id;
          return (
            <div key={asset.id}>
              <button
                aria-expanded={isExpanded}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
                  selected && "bg-primary/10",
                )}
                onClick={() => onSelectAsset(asset)}
                type="button"
              >
                {isExpanded ? (
                  <ChevronDown
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-muted-foreground"
                  />
                ) : (
                  <ChevronRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-muted-foreground"
                  />
                )}
                <Zap
                  aria-hidden="true"
                  className={cn(
                    "size-3.5 shrink-0 text-muted-foreground",
                    selected && "text-primary",
                  )}
                />
                <span className="min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground">
                  {asset.name} {asset.voltage}
                </span>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {asset.equipmentCount}
                </span>
              </button>
              {isExpanded ? (
                <div className="mx-2 mb-1 grid grid-cols-2 gap-2 px-8 py-2 font-mono text-xs text-muted-foreground">
                  <span>Voltage</span>
                  <span className="text-right">{asset.voltage}</span>
                  <span>Equipment</span>
                  <span className="text-right">{asset.equipmentCount} items</span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FilterPanel({
  enabledVoltages,
  flexibility,
  onCollapse,
  regions,
  setEnabledVoltages,
  setShowSubstations,
  showSubstations,
  voltageFilters,
}: {
  enabledVoltages: Set<string>;
  flexibility: GridlineDashboardFlexibility;
  onCollapse?: () => void;
  regions: GridlineDashboardRegion[];
  setEnabledVoltages: Dispatch<SetStateAction<Set<string>>>;
  setShowSubstations: (value: boolean) => void;
  showSubstations: boolean;
  voltageFilters: GridlineDashboardVoltageFilter[];
}) {
  return (
    <div className="flex h-full max-h-full min-h-0 flex-col rounded-xl bg-background/95 p-3 font-mono text-xs shadow-xl backdrop-blur-xl">
      <div className="flex shrink-0 items-center justify-between gap-3 pb-3">
        <h2 className="font-medium">Voltage Levels</h2>
        {onCollapse ? (
          <IconButton
            className="size-8"
            label="Collapse map filters"
            onClick={onCollapse}
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
          </IconButton>
        ) : null}
      </div>
      <div className="min-h-0 flex-1 space-y-4 overflow-x-hidden overflow-y-auto">
        <div className="space-y-1 border-b border-border pb-3">
          {voltageFilters.map((level) => (
            <div
              className="flex items-center justify-between gap-3 rounded-md bg-secondary/70 px-2 py-1.5"
              key={level.id}
            >
              <span className="flex items-center gap-2">
                <span className={cn("size-2 rounded-full", voltageDot[level.tone])} />
                {level.label}
              </span>
              <Switch
                aria-label={`Show ${level.label}`}
                checked={enabledVoltages.has(level.id)}
                onCheckedChange={(checked) =>
                  setEnabledVoltages((current) => {
                    const next = new Set(current);
                    if (checked) next.add(level.id);
                    else next.delete(level.id);
                    return next;
                  })
                }
                size="sm"
              />
            </div>
          ))}
        </div>
        <div className="space-y-2 border-b border-border pb-3">
          <p className="font-medium">Option</p>
          <div className="flex items-center justify-between rounded-md bg-secondary/70 px-2 py-1.5">
            <span>Show Substations</span>
            <Switch
              aria-label="Show substations"
              checked={showSubstations}
              onCheckedChange={setShowSubstations}
              size="sm"
            />
          </div>
        </div>
        <div className="space-y-1 border-b border-border pb-3">
          <p className="pb-1 font-medium">Grid Regions</p>
          {regions.map((region) => {
            const loaded = region.legendName === flexibility.regionName;
            return (
              <button
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-muted-foreground transition-colors hover:bg-muted",
                  loaded && "bg-success/10 text-success",
                )}
                key={region.id}
                type="button"
              >
                <span className={cn("size-2 rounded-sm", regionDot[region.tone])} />
                <span className="flex-1">{region.legendName}</span>
                {loaded ? <span className="text-xs">Loaded</span> : null}
              </button>
            );
          })}
          <GhostButton className="w-full justify-start">
            <MapPin aria-hidden="true" className="size-4" />
            Reset View
          </GhostButton>
        </div>
        <div className="space-y-1">
          <p className="font-medium">Loaded</p>
          <p className="text-muted-foreground">
            {flexibility.substationCount} Substations
          </p>
          <p className="text-success">
            {flexibility.mappedSubstationCount} mapped on map
          </p>
          <p className="pt-2 text-muted-foreground">
            Location DB: {flexibility.locationCount} entries
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailsPanel({
  asset,
  flexibility,
}: {
  asset: GridlineDashboardAsset;
  flexibility: GridlineDashboardFlexibility;
}) {
  const [overviewOpen, setOverviewOpen] = useState(true);
  const [identifierOpen, setIdentifierOpen] = useState(false);
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="space-y-6 overflow-y-auto p-4">
        <span className="grid size-10 place-items-center rounded-lg bg-secondary">
          <Building2 aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h3 className="text-base font-medium">
            {asset.name} {asset.voltage}
          </h3>
          <span className="mt-2 inline-flex rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
            {flexibility.assetType}
          </span>
        </div>
        <section className="border-t border-border pt-4">
          <button
            aria-expanded={overviewOpen}
            className="flex w-full items-center gap-2 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOverviewOpen((open) => !open)}
            type="button"
          >
            {overviewOpen ? (
              <ChevronDown aria-hidden="true" className="size-4" />
            ) : (
              <ChevronRight aria-hidden="true" className="size-4" />
            )}
            Overview
          </button>
          {overviewOpen ? (
            <dl className="mt-4 space-y-4 font-mono text-xs">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted-foreground">Name</dt>
                <dd className="text-right">
                  {asset.name} {asset.voltage}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted-foreground">Equipment</dt>
                <dd>{asset.equipmentCount} Items</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted-foreground">Voltage Levels</dt>
                <dd>{flexibility.voltageLevels.length}</dd>
              </div>
            </dl>
          ) : null}
        </section>
        <section className="border-y border-border py-4">
          <button
            aria-expanded={identifierOpen}
            className="flex w-full items-center gap-2 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setIdentifierOpen((open) => !open)}
            type="button"
          >
            {identifierOpen ? (
              <ChevronDown aria-hidden="true" className="size-4" />
            ) : (
              <ChevronRight aria-hidden="true" className="size-4" />
            )}
            Identifier
          </button>
          {identifierOpen ? (
            <dl className="mt-4 space-y-3 font-mono text-xs">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted-foreground">Asset ID</dt>
                <dd>{asset.id}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted-foreground">Region</dt>
                <dd>{flexibility.regionName}</dd>
              </div>
            </dl>
          ) : null}
        </section>
      </div>
    </div>
  );
}

function PlaceholderView({
  page,
  navItems,
  workspaces,
}: {
  page: GridlineDashboardPageId;
  navItems: GridlineDashboardNavItem[];
  workspaces: GridlineDashboardWorkspace[];
}) {
  const item = navItems.find((entry) => entry.id === page);
  const workspace = workspaces.find((entry) => entry.id === page);
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-medium tracking-tight">{item?.label}</h1>
      <p className="mt-3 max-w-xl font-mono text-sm text-muted-foreground">
        {workspace?.details.join(" ")}
      </p>
      <div className="mt-10 flex min-h-64 items-center justify-center rounded-xl bg-muted font-mono text-sm text-muted-foreground">
        Live packs for this workspace open from the published model.
      </div>
    </div>
  );
}

function MobileSheet({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <button
        aria-label={`Close ${title}`}
        className="absolute inset-0 bg-foreground/20"
        onClick={onClose}
        type="button"
      />
      <div className="absolute inset-x-0 bottom-0 flex h-4/5 flex-col rounded-t-xl border-t border-border bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-sm font-medium">{title}</h2>
          <IconButton label={`Close ${title}`} onClick={onClose}>
            <X aria-hidden="true" className="size-4" />
          </IconButton>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export function GridlineDashboard({
  brand = defaults.brand,
  company = defaults.company,
  date = defaults.date,
  searchPlaceholder = defaults.searchPlaceholder,
  user = defaults.user,
  navItems = defaults.navItems,
  workspaces = defaults.workspaces,
  model = defaults.model,
  modellingActions = defaults.modellingActions,
  regions = defaults.regions,
  flexibility = defaults.flexibility,
  assets = defaults.assets,
  voltageFilters = defaults.voltageFilters,
  initialPage = defaults.initialPage,
  className,
  ...props
}: GridlineDashboardProps) {
  return (
    <TooltipProvider>
      <GridlineDashboardInner
        assets={assets}
        brand={brand}
        className={className}
        company={company}
        date={date}
        flexibility={flexibility}
        initialPage={initialPage}
        model={model}
        modellingActions={modellingActions}
        navItems={navItems}
        regions={regions}
        searchPlaceholder={searchPlaceholder}
        user={user}
        voltageFilters={voltageFilters}
        workspaces={workspaces}
        {...props}
      />
    </TooltipProvider>
  );
}
