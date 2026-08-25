import { useEffect, useState } from "react";
import Reveal from "../common/Reveal";
import SectionBadge from "../common/SectionBadge";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import styles from "./SolutionHowItWorks.module.css";

export default function SolutionHowItWorks({ content }) {
  const badge = "HOW IT WORKS";
  const { title, steps = [] } = content || {};
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!steps.length) return undefined;
    setActive(0);
  }, [steps.length]);

  useEffect(() => {
    if (reduced || steps.length < 2 || active >= steps.length - 1) return undefined;
    const id = window.setTimeout(() => {
      setActive((prev) => Math.min(prev + 1, steps.length - 1));
    }, 2800);
    return () => window.clearTimeout(id);
  }, [active, reduced, steps.length]);

  if (!content) return null;

  return (
    <Reveal as="section" className={styles.section} aria-label={badge}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={`${styles.copy} revealHead`}>
            <SectionBadge variant="gold" size="sm">
              {badge}
            </SectionBadge>
            <h2>{title}</h2>
          </div>
          {steps.length ? (
            <p className={styles.meta}>
              {`${steps.length} STEPS · ONE WORKFLOW`}{" "}
              <span>
                {String(active + 1).padStart(2, "0")}/{String(steps.length).padStart(2, "0")}
              </span>
            </p>
          ) : null}
        </div>

        <div className={styles.trackWrap} aria-hidden="true">
          <div className={styles.track} />
          <div
            className={styles.progress}
            style={{ width: `${steps.length ? ((active + 1) / steps.length) * 100 : 0}%` }}
          />
        </div>

        <ol
          className={styles.stages}
          style={{
            gridTemplateColumns: `repeat(${Math.max(steps.length, 1)}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step, index) => {
            const on = index <= active;
            return (
              <li
                key={`${step.title}-${index}`}
                className={`${styles.stage} ${on ? styles.stageOn : styles.stageOff} cardReveal`}
              >
                <button
                  type="button"
                  className={styles.node}
                  onClick={() => setActive(index)}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  {on ? (
                    <span className={styles.nodeActive} aria-hidden="true" />
                  ) : (
                    <span className={styles.nodePlus} aria-hidden="true">
                      +
                    </span>
                  )}
                </button>
                <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Reveal>
  );
}
