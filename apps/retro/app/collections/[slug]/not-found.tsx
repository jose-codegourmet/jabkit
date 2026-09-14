import { Button } from "@/atoms/button";
import { unknownSlugCopy } from "../../content";
import styles from "../../style.module.css";

export default function UnknownCollectionPage() {
  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">{unknownSlugCopy.collection.title}</h1>
        <p className="jk-body mt-4">{unknownSlugCopy.collection.body}</p>
        <div className="mt-6">
          <Button asChild>
            <a href={unknownSlugCopy.collection.actionHref}>
              {unknownSlugCopy.collection.actionLabel}
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
