import type { ReactNode } from "react";
import { Button } from "@/atoms/button";
import { sampleImage } from "../_data/assets";
import styles from "../style.module.css";
import { ClaySurface } from "./ClaySurface";

export type PageIntroProps = {
  title: string;
  body: ReactNode;
  action?: { label: string; href: string };
  image?: ReactNode;
  backgroundId?: string;
  backgroundFit?: "cover" | "tile";
  className?: string;
};

export function PageIntro({
  title,
  body,
  action,
  image,
  backgroundId,
  backgroundFit = "cover",
  className,
}: PageIntroProps) {
  const background = backgroundId ? sampleImage(backgroundId, "") : null;
  const tiled = backgroundFit === "tile";

  return (
    <section
      className={className ? `${styles.intro} ${className}` : styles.intro}
      style={
        background
          ? {
              backgroundImage: `url("${background.src}")`,
              backgroundRepeat: tiled ? "repeat" : "no-repeat",
              backgroundSize: tiled ? "280px auto" : "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <ClaySurface className={styles.introCard} tone="cream">
        <h1 className="jk-heading">{title}</h1>
        {typeof body === "string" ? <p className="jk-body">{body}</p> : body}
        {action ? (
          <Button asChild>
            <a href={action.href}>{action.label}</a>
          </Button>
        ) : null}
        {image ? <div className={styles.introImage}>{image}</div> : null}
      </ClaySurface>
    </section>
  );
}
