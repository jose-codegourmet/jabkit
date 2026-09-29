import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { ctaBand } from "../_data/site";
import styles from "../style.module.css";
import { ClayImage } from "./ClayImage";

export type CtaBandProps = {
  hideHowItWorksLink?: boolean;
  className?: string;
};

export function CtaBand({
  hideHowItWorksLink = false,
  className,
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="pillo-cta-heading"
      className={cn(styles.cta, className)}
    >
      <div className={styles.ctaCopy}>
        <h2 className="jk-heading" id="pillo-cta-heading">
          {ctaBand.headline}
        </h2>
        <p className="jk-body">{ctaBand.body}</p>
        <div className={styles.ctaActions}>
          <Button asChild>
            <a href={ctaBand.button.href}>{ctaBand.button.label}</a>
          </Button>
          {hideHowItWorksLink ? null : (
            <a className={styles.textLink} href={ctaBand.secondaryLink.href}>
              {ctaBand.secondaryLink.label}
            </a>
          )}
        </div>
      </div>
      <div className={styles.ctaFrame}>
        <ClayImage
          alt="A soft clay scene of a family routine board"
          className={styles.ctaImage}
          fluid
          id={ctaBand.imageId}
          mobileId={ctaBand.mobileImageId}
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>
    </section>
  );
}
