"use client";

import {
  BarChartIcon,
  CalendarIcon,
  CaretSortIcon,
  CheckboxIcon,
  Component1Icon,
  Cross2Icon,
  DashboardIcon,
  HamburgerMenuIcon,
  PersonIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback } from "@/atoms/avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { Toaster, toast } from "@/atoms/toast";
import {
  type PortalIcon,
  portalNavGroups,
  staffProfile,
} from "../_data/portal";
import styles from "../navigation.module.css";
import { DemoNotice } from "./DemoNotice";
import { Logo } from "./Logo";
import { PortalBreadcrumbs } from "./PortalBreadcrumbs";
import { SiteFooter } from "./SiteChrome";

const icons: Record<PortalIcon, typeof DashboardIcon> = {
  dashboard: DashboardIcon,
  calendar: CalendarIcon,
  bookings: ReaderIcon,
  tasks: CheckboxIcon,
  customers: PersonIcon,
  reports: BarChartIcon,
  states: Component1Icon,
};

function isActive(pathname: string, href: string) {
  if (href === "/demo") return pathname === "/demo";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function PortalNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Portal">
      {portalNavGroups.map((group) => (
        <div className={styles.navGroup} key={group.id}>
          <p className={styles.navGroupLabel} id={`portal-group-${group.id}`}>
            {group.label}
          </p>
          <ul aria-labelledby={`portal-group-${group.id}`}>
            {group.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li key={item.id}>
                  <Link
                    aria-current={
                      isActive(pathname, item.href) ? "page" : undefined
                    }
                    className={styles.portalLink}
                    href={item.href}
                    onClick={onNavigate}
                  >
                    <Icon aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function ProfileControl() {
  const back = staffProfile.actions[1];
  return (
    <div className={styles.profile}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button className={styles.profileTrigger} type="button">
              <Avatar className={styles.avatar} size="default">
                <AvatarFallback className={styles.avatarFallback}>
                  {staffProfile.initials}
                </AvatarFallback>
              </Avatar>
              <span className={styles.profileText}>
                <span>{staffProfile.name}</span>
                <span>{staffProfile.role}</span>
              </span>
              <CaretSortIcon
                aria-hidden="true"
                style={{ marginLeft: "auto", flex: "none" }}
              />
              <span className="sr-only-text">, profile menu</span>
            </button>
          }
        />
        <DropdownMenuContent align="start" className="min-w-56" side="top">
          <DropdownMenuLabel>
            {staffProfile.name} · {staffProfile.role}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              toast.add({
                title: staffProfile.switchRoleMessage,
              })
            }
          >
            {staffProfile.actions[0].label}
          </DropdownMenuItem>
          <DropdownMenuItem
            render={<Link href={back.href}>{back.label}</Link>}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/**
 * Portal chrome for every /demo route: demo strip, grouped sidebar, breadcrumbs,
 * profile control, one Toaster and the compact footer. Pages render their own H1.
 */
export function PortalShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(pathname);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  if (path !== pathname) {
    setPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onMedia = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onMedia);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onMedia);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      menuButton.current?.focus();
    }
  }, [open]);

  return (
    <Toaster>
      <div className={styles.portal}>
        <DemoNotice variant="strip" />
        <div className={styles.portalBody}>
          <aside aria-label="Portal navigation" className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <div className={styles.sidebarLogo}>
                <Logo href="/demo" size="sm" />
              </div>
              <PortalNav />
              <ProfileControl />
            </div>
          </aside>

          <div className={styles.portalContent}>
            <div className={styles.portalTopbar}>
              <button
                aria-controls="portal-drawer"
                aria-expanded={open}
                className={navButtonClass}
                onClick={() => setOpen(true)}
                ref={menuButton}
                type="button"
              >
                <HamburgerMenuIcon aria-hidden="true" />
                Menu
              </button>
              <Logo href="/demo" size="sm" />
            </div>
            <div>
              <PortalBreadcrumbs />
              <main className={styles.portalMain} id="top" tabIndex={-1}>
                {children}
              </main>
            </div>
            <SiteFooter variant="compact" />
          </div>
        </div>

        {open ? (
          <div className={styles.drawer} id="portal-drawer">
            <button
              aria-label="Close menu"
              className={styles.drawerBackdrop}
              onClick={() => setOpen(false)}
              tabIndex={-1}
              type="button"
            />
            <div
              aria-label="Portal menu"
              aria-modal="true"
              className={styles.drawerPanel}
              role="dialog"
            >
              <div className={styles.drawerHead}>
                <Logo href="/demo" size="sm" />
                <button
                  className={navButtonClass}
                  onClick={() => setOpen(false)}
                  ref={closeButton}
                  type="button"
                >
                  <Cross2Icon aria-hidden="true" />
                  Close
                </button>
              </div>
              <PortalNav onNavigate={() => setOpen(false)} />
              <ProfileControl />
            </div>
          </div>
        ) : null}
      </div>
    </Toaster>
  );
}

const navButtonClass = styles.portalMenuButton;
