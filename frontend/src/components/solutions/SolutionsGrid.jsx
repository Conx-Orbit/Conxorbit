import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import styles from "./SolutionsGrid.module.css";

export default function SolutionsGrid({ items = [] }) {
  if (!items.length) {
    return (
      <p className={styles.empty} role="status">
        No solutions match your filters.
      </p>
    );
  }

  return (
    <Reveal as="div" className={styles.wrap}>
      <div className={styles.grid}>
        {items.map((item) => {
          const caseStudySlug = item.publishedCaseStudy?.slug;
          return (
            <article
              key={item.slug}
              className={`${styles.card} interactiveCard cardReveal`}
            >
              <span className={styles.badge}>{item.badge}</span>
              <div className={`${styles.mockup} mediaZoom`}>
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <h2>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.tags}>
                {(item.tags || item.categories || []).map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.actions}>
                <Link className={styles.learnMore} to={`/solutions/${item.slug}`}>
                  Learn More
                </Link>
                {caseStudySlug ? (
                  <Link className={styles.learnMore} to={`/case-studies/${caseStudySlug}`}>
                    View Case Study
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Reveal>
  );
}
