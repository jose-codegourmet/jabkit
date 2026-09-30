"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/atoms/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/atoms/navigation-menu";
import { primaryNav, ticketsLink } from "../_data/site";
import navigation from "../navigation.module.css";
import { FrameLogo } from "./FrameLogo";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className={navigation.header}>
      <div className={navigation.headerGrid}>
        <div className={navigation.logoWordmark}>
          <FrameLogo />
        </div>
        <div className={navigation.logoSymbol}>
          <FrameLogo format="symbol" />
        </div>
        <NavigationMenu className={navigation.desktopNav} viewport={false}>
          <NavigationMenuList>
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href as Route} />}
                    className={navigation.navLink}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild className={navigation.ticketButton}>
          <Link href={ticketsLink.href as Route}>{ticketsLink.label}</Link>
        </Button>
        <div className={navigation.mobileMenu}>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
