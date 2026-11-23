import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import styles from "./GlanceModal.module.css";

const STORAGE_KEY = "conx-glance-modal-dismissed";

export default function GlanceModal({ content, open, onClose }) {
  const titleId = useId();
  const closeRef = useRef(null);
  const solutionViewportRef = useRef(null);
  const solutionCardRefs = useRef([]);
  const scrollYRef = useRef(0);
  const [activeSolution, setActiveSolution] = useState(0);
  const {
    badge,
    title,
    body,
    solutionsLabel,
    solutions = [],
    footerPrompt,
    primaryCta,
    secondaryCta,
    actions,
  } = content;

  useEffect(() => {
    if (!open) return undefined;

    setActiveSolution(0);
    if (solutions.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveSolution((current) => (current + 1) % solutions.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [open, solutions.length]);

  useEffect(() => {
    const viewport = solutionViewportRef.current;
    const card = solutionCardRefs.current[activeSolution + (solutions.length > 1 ? 1 : 0)];
    if (!open || !viewport || !card) return;

    viewport.scrollTo({
      left: card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [activeSolution, open, solutions.length]);

  useEffect(() => {
    if (!open) return undefined;

    scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    const { body: docBody, documentElement } = document;
    const prev = {
      overflow: docBody.style.overflow,
      position: docBody.style.position,
      top: docBody.style.top,
      width: docBody.style.width,
      paddingRight: docBody.style.paddingRight,
    };

    const scrollbar = window.innerWidth - documentElement.clientWidth;
    docBody.style.overflow = "hidden";
    docBody.style.position = "fixed";
    docBody.style.top = `-${scrollYRef.current}px`;
    docBody.style.width = "100%";
    if (scrollbar > 0) {
      docBody.style.paddingRight = `${scrollbar}px`;
    }

    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      docBody.style.overflow = prev.overflow;
      docBody.style.position = prev.position;
      docBody.style.top = prev.top;
      docBody.style.width = prev.width;
      docBody.style.paddingRight = prev.paddingRight;
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className={styles.header}>
          <p className={styles.badge}>{badge}</p>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          {body ? <p className={styles.body}>{body}</p> : null}
        </div>

        <section className={styles.solutions} aria-label={solutionsLabel}>
          <div className={styles.solutionsHeader}>
            <h3 className={styles.colLabel}>{solutionsLabel}</h3>
            {solutions.length > 1 ? (
              <div className={styles.carouselControls}>
                <button
                  type="button"
                  className={styles.carouselButton}
                  aria-label="Previous solution"
                  onClick={() =>
                    setActiveSolution(
                      (current) => (current - 1 + solutions.length) % solutions.length
                    )
                  }
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className={styles.carouselButton}
                  aria-label="Next solution"
                  onClick={() => setActiveSolution((current) => (current + 1) % solutions.length)}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : null}
          </div>
          <div ref={solutionViewportRef} className={styles.solutionViewport}>
            <div className={styles.solutionGrid}>
              {(solutions.length > 1
                ? [solutions[solutions.length - 1], ...solutions, solutions[0]]
                : solutions
              ).map((item, index) => {
                const isActive = index === activeSolution + (solutions.length > 1 ? 1 : 0);

                return (
                <article
                  key={`${item.title}-${index}`}
                  ref={(element) => {
                    solutionCardRefs.current[index] = element;
                  }}
                  className={`${styles.solutionCard} ${
                    isActive ? styles.activeSolutionCard : ""
                  }`}
                >
                  <div className={styles.preview}>
                    {item.image ? (
                      <img src={item.image} alt="" loading="lazy" />
                    ) : null}
                  </div>
                  <strong className={styles.solutionTitle}>{item.title}</strong>
                  <p className={styles.solutionBody}>{item.body}</p>
                  <div className={styles.cardActions}>
                    <Link
                      className={`${styles.demoBtn} btnMotion`}
                      to={item.demoHref || item.href}
                      onClick={onClose}
                    >
                      <span>{actions?.viewDemo || "View Demo"}</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                    <Link
                      className={`${styles.learnBtn} btnMotion`}
                      to={item.href}
                      onClick={onClose}
                    >
                      <span>{actions?.learnMore || "Learn More"}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <div className={styles.footer}>
          <p className={styles.footerPrompt}>{footerPrompt}</p>
          <div className={styles.footerActions}>
            {secondaryCta ? (
              <Link className={`${styles.secondary} btnMotion`} to={secondaryCta.href} onClick={onClose}>
                {secondaryCta.label}
              </Link>
            ) : null}
            {primaryCta ? (
              <Link className={`${styles.primary} btnMotion`} to={primaryCta.href} onClick={onClose}>
                <span>{primaryCta.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function wasGlanceModalDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function markGlanceModalDismissed() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}
