import { Button } from "@/atoms/button";
import { unknownSlugCopy } from "../../content";
import styles from "../../style.module.css";

export default function UnknownStoryPage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">{unknownSlugCopy.story.title}</h1>
        <p className="jk-body mt-4">{unknownSlugCopy.story.body}</p>
        <div className="mt-6">
          <Button asChild>
            <a href={unknownSlugCopy.story.actionHref}>
              {unknownSlugCopy.story.actionLabel}
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
