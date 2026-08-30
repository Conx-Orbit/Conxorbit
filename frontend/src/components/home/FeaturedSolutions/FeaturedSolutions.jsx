import { Link } from "react-router-dom";
import Reveal from "../../common/Reveal";
import SectionBadge from "../../common/SectionBadge";
import facade from "../../../assets/tradeCards/facade.jfif";
import quoteGen from "../../../assets/images/quote-generation.png";
import flatforge from "../../../assets/images/flatforge.png";
import styles from "./FeaturedSolutions.module.css";

const CARD_IMAGES = {
  quoteGen,
  facade,
  flatforge,
};

export default function FeaturedSolutions({ content }) {
  const {
    badge,
    titleBefore,
    titleHighlight,
    titleAfter,
    body,
    cards = [],
    viewAll,
  } = content;

  return (
    <Reveal as="section" className={styles.section} aria-label={badge}>
      <div className={`${styles.header} revealHead`}>
        <SectionBadge tone="light">{badge}</SectionBadge>
        <h2>
          {titleBefore}
          <span className={styles.highlight}>{titleHighlight}</span>
          {titleAfter}
        </h2>
        {body ? <p>{body}</p> : null}
      </div>

      <div className={styles.grid}>
        {cards.map((card) => {
          const src = card.image || CARD_IMAGES[card.imageKey];
          return (
            <article key={card.href || card.title} className={`${styles.card} interactiveCard cardReveal`}>
              <span className={styles.cardBadge}>
                <span className={styles.dot} aria-hidden="true" />
                {card.badge}
              </span>
              <div className={`${styles.mockup} mediaZoom`}>
                {src ? <img src={src} alt="" loading="lazy" /> : null}
              </div>
              <h3>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>
              <div className={styles.ctaSlot}>
                <Link className={`${styles.cta} linkDraw`} to={card.href}>
                  {card.cta}
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {viewAll ? (
        <div className={styles.viewAllRow}>
          <Link className={`${styles.viewAll} linkDraw`} to={viewAll.href}>
            {viewAll.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}
    </Reveal>
  );
}
