import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import styles from "./FacadePanelX.module.css";

const FEATURE_ICONS = {
  dwg: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14 4v4h4M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tracking: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  field: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 7l1.2-2h3.6L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="13" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8h4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  measure: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 16l1.2-1.2M11 13l1.2-1.2M14 10l1.2-1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

function PanelMockup({ imageSrc }) {
  return (
    <figure className={styles.laptop}>
      <div className={styles.laptopLid}>
        <span className={styles.camera} aria-hidden="true" />
        <div className={styles.screen}>
          {imageSrc ? (
            <img src={imageSrc} alt="PanelX application dashboard" loading="lazy" />
          ) : (
            <span className={styles.screenPlaceholder}>Add the PanelX image URL</span>
          )}
        </div>
      </div>
      <div className={styles.laptopBase} aria-hidden="true">
        <span className={styles.trackpad} />
      </div>
    </figure>
  );
}

export default function FacadePanelX({ content }) {
  if (!content) return null;
  const { eyebrow, title, body, image, features = [], cta } = content;

  return (
    <Reveal as="section" className={styles.section} aria-label={eyebrow || title}>
      <div className={styles.inner}>
        <div className={`${styles.header} revealHead`}>
          {eyebrow ? (
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className={styles.title}>{title}</h2>
          {body ? <p className={styles.body}>{body}</p> : null}
        </div>

        <div className={`${styles.mockWrap} cardReveal`}>
          <PanelMockup imageSrc={image} />
        </div>

        <ul className={styles.features}>
          {features.map((item) => (
            <li key={item.title} className={`${styles.feature} cardReveal`}>
              <span className={styles.featureIcon}>
                {FEATURE_ICONS[item.icon] || FEATURE_ICONS.dwg}
              </span>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>

        {cta ? (
          <Link className={`${styles.cta} btnMotion cardReveal`} to={cta.href}>
            <span>{cta.label}</span>
            <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}
