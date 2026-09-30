import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { ctaBand } from "../_data/site";
import styles from "../style.module.css";
import { BenImage } from "./BenImage";
import { BentoGrid, Tile } from "./Bento";
import { Placeholder } from "./Placeholder";

/** Shared closing band: span-7 copy tile and span-5 image tile. Copy is always HTML. */
export function CtaBand({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="cta-band-heading"
      className={cn(styles.cta, styles.container, className)}
    >
      <BentoGrid>
        <Tile span={7} surfaceClassName={styles.ctaCopy} tone="chalk">
          <h2 className="jk-heading" id="cta-band-heading">
            {ctaBand.headline}
          </h2>
          <p className="jk-lead">
            {ctaBand.body.before}
            <Placeholder>{ctaBand.body.placeholder}</Placeholder>
            {ctaBand.body.after}
          </p>
          <div className={styles.actions}>
            <Button asChild size="lg">
              <Link href={ctaBand.primary.href}>{ctaBand.primary.label}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={ctaBand.secondary.href}>
                {ctaBand.secondary.label}
              </Link>
            </Button>
          </div>
        </Tile>
        <Tile flush span={5} surfaceClassName={styles.ctaMedia}>
          <BenImage
            alt="A business owner at a standing desk with a coffee, before the day starts"
            fit="cover"
            id={ctaBand.imageId}
            mobileId={ctaBand.mobileImageId}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Tile>
      </BentoGrid>
    </section>
  );
}
