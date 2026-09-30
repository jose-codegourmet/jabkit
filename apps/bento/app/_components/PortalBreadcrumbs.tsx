"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/atoms/breadcrumb";
import { getBooking } from "../_data/bookings";
import { breadcrumbLabels } from "../_data/portal";
import styles from "../navigation.module.css";

type Crumb = { label: string; href: Route };

function crumbsFor(pathname: string): Crumb[] {
  const parts = pathname.split("/").filter(Boolean);
  const crumbs: Crumb[] = [];
  for (let index = 1; index <= parts.length; index++) {
    const href = `/${parts.slice(0, index).join("/")}`;
    const known = breadcrumbLabels[href];
    if (known) {
      crumbs.push({ label: known, href: href as Route });
      continue;
    }
    if (parts[index - 2] === "bookings") {
      const booking = getBooking(parts[index - 1]);
      crumbs.push({
        label: booking?.customer ?? "Booking",
        href: href as Route,
      });
    }
  }
  return crumbs;
}

/**
 * "Dashboard / Bookings / Mara Quinn". On small screens this truncates to one link
 * back to the parent ("← Bookings").
 */
export function PortalBreadcrumbs() {
  const pathname = usePathname();
  const crumbs = crumbsFor(pathname);
  if (crumbs.length === 0) return null;
  const parent = crumbs.at(-2);
  const current = crumbs.at(-1);

  return (
    <div className={styles.crumbs}>
      <Breadcrumb className={styles.crumbsFull}>
        <BreadcrumbList>
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <Fragment key={crumb.href}>
                <BreadcrumbItem>
                  {last ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink render={<Link href={crumb.href} />}>
                      {crumb.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {last ? null : <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <nav aria-label="Breadcrumb, short">
        {parent ? (
          <Link className={styles.crumbsShort} href={parent.href}>
            <ArrowLeftIcon aria-hidden="true" />
            {parent.label}
          </Link>
        ) : (
          <span aria-current="page" className={styles.crumbsCurrent}>
            {current?.label}
          </span>
        )}
      </nav>
    </div>
  );
}
