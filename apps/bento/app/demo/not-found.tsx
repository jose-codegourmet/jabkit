import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { Tile } from "../_components/Bento";
import { PortalPageHeader } from "../_components/PortalPageHeader";
import { EmptyState } from "../_components/TileStates";

export const metadata: Metadata = {
  title: { absolute: "Page not found — DAYMARK demo" },
};

/** Unknown /demo/* routes stay inside the portal shell. */
export default function DemoNotFound() {
  return (
    <>
      <PortalPageHeader
        sub="The link may be old or mistyped."
        title="This page isn't on today's schedule."
      />
      <Tile kind="action">
        <EmptyState
          action={
            <Button asChild>
              <Link href="/demo">Back to the dashboard</Link>
            </Button>
          }
          imageId="ben-empty-day"
          message="Every part of the sample portal is in the menu."
        />
      </Tile>
    </>
  );
}
