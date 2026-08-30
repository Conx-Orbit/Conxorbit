import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import SectionBadge from "../common/SectionBadge";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import styles from "./SolutionDetailHero.module.css";

export default function SolutionDetailHero({ solution }) {
  const { name, image, hero, shortDescription, mockupType } = solution;
  const {
    titleBefore,
    titleHighlight,
    titleAfter,
    description,
  } = hero || {};
  const reduced = usePrefersReducedMotion();
  const heroImage = hero?.mockup?.url || image;
  const beforeText = titleBefore?.trim();
  const highlightText = titleHighlight?.trim() || name;
  const afterText = titleAfter?.trim();

  const scrollToDemo = (event) => {
    event.preventDefault();
    const target = document.getElementById("demo");
    if (!target) return;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <Reveal as="section" className={styles.hero} eager aria-label={name}>
      <div className={`${styles.copy} heroStagger`}>
        <SectionBadge icon={false}>{name}</SectionBadge>
        <h1 className={styles.title}>
          {beforeText ? <>{beforeText}{" "}</> : null}
          <span className={styles.highlight}>{highlightText}</span>
          {afterText ? <>{" "}{afterText}</> : null}
        </h1>
        {shortDescription || description ? (
          <p className={styles.body}>{shortDescription || description}</p>
        ) : null}
        <div className={styles.actions}>
          <Link className={`${styles.primary} btnMotion`} to="/book-discovery">
            <span>Book a Discovery Call</span>
            <span aria-hidden="true">→</span>
          </Link>
          <button type="button" className={`${styles.secondary} btnMotion`} onClick={scrollToDemo}>
            <span className={styles.play} aria-hidden="true">
              ▶
            </span>
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <div className={styles.media}>
        {mockupType === "mobile" ? (
          <div className={`${styles.mobileMockup} interactiveCard`}>
            <img src={heroImage} alt={`${name} mockup`} loading="eager" />
          </div>
        ) : (
          <div className={`${styles.browser} interactiveCard`}>
            <div className={styles.chrome} aria-hidden="true">
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.url}>{name.toLowerCase().replace(/\s+/g, "")}.app</span>
            </div>
            <div className={`${styles.viewport} mediaZoom`}>
              <img src={heroImage} alt="" loading="eager" />
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}
