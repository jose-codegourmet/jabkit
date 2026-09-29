import { Button } from "@/atoms/button";
import { ClaySurface } from "../../_components/ClaySurface";
import { notFoundCopy } from "./_page/content";
import styles from "./_page/routine-detail.module.css";

export default function RoutineNotFound() {
  return (
    <ClaySurface className={styles.missing}>
      <h1 className="jk-heading">{notFoundCopy.title}</h1>
      <p className="jk-body">{notFoundCopy.body}</p>
      <Button asChild>
        <a href={notFoundCopy.href}>{notFoundCopy.action}</a>
      </Button>
    </ClaySurface>
  );
}
