import Reveal from "../common/Reveal";
import SectionBadge from "../common/SectionBadge";
import styles from "./ServiceValue.module.css";

const ICONS = {
  compare: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="5" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  quote: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 4h12v16H6z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  boq: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18V10M10 18V6M16 18v-8M20 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  docs: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h7l4 4v12H7V4z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17.2 17.2L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9.5 12.2l1.8 1.8 3.4-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  site: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20h16M6 20V10l6-5 6 5v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12M7.5 7.5L12 3l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 13v7h14v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  standardize: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 6h12M8 12h12M8 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 6l1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  adoption: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18V9M10 18v-6M16 18V6M22 18H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 6.5l4-2 5 2 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  roles: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 20v-2a5 5 0 0110 0v2M14 20v-1.5a4 4 0 018 0V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  validate: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 15.5L21 21M7.5 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  transition: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h13M14 4l3 3-3 3M20 17H7M10 14l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ServiceValue({ content }) {
  const { badge, title, cards = [] } = content;

  return (
    <Reveal as="section" className={styles.section} aria-label={badge}>
      <div className={`${styles.header} revealHead`}>
        <SectionBadge>{badge}</SectionBadge>
        <h2>{title}</h2>
      </div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <article
            key={card.title}
            className={`${styles.card} interactiveCard cardReveal`}
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            <span className={styles.icon}>{ICONS[card.icon] || ICONS.compare}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
