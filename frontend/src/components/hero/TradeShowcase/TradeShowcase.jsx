import { useEffect, useState } from "react";
import Reveal from "../../common/Reveal";
import SectionBadge from "../../common/SectionBadge";
import facade from "../../../assets/tradeCards/facade.jfif";
import glass from "../../../assets/tradeCards/glass.jfif";
import aluminium from "../../../assets/tradeCards/aluminium.jfif";
import exterior from "../../../assets/tradeCards/exterior.webp";
import siteMonitoring from "../../../assets/tradeCards/site-monitoring.jpg";

import styles from "./TradeShowcase.module.css";

const TRADES = [
  {
    id: "facade-contractors",
    title: "Façade Contractors",
    tag: "Façade",
    description: "AI systems for drawings, quantities and project delivery",
    image: facade,
  },
  {
    id: "curtain-wall-fabricators",
    title: "Curtain Wall Fabricators",
    tag: "Fabrication",
    description: "Digital workflows connecting drawings with production",
    image: glass,
  },
  {
    id: "aluminium-manufacturers",
    title: "Aluminium Manufacturers",
    tag: "Manufacturing",
    description: "Automation for quotations, orders and production data",
    image: aluminium,
  },
  {
    id: "building-envelope-consultants",
    title: "Building Envelope Consultants",
    tag: "Engineering",
    description: "AI-assisted reviews and drawing revision workflows",
    image: exterior,
  },
  {
    id: "main-contractors",
    title: "Main Contractors",
    tag: "Construction",
    description: "Connected systems for site information and reporting",
    image: siteMonitoring,
  },
  {
    id: "project-developers",
    title: "Project Developers",
    tag: "Development",
    description: "Digital oversight across documents, progress and decisions",
    image: exterior,
  },
];

export default function TradeShowcase({ content }) {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  const { badge, title, body } = content;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((previous) => (previous + 1) % TRADES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [tick]);

  const goTo = (index) => {
    const nextIndex =
      ((index % TRADES.length) + TRADES.length) % TRADES.length;

    setActive(nextIndex);
    setTick((current) => current + 1);
  };

  const goPrev = () => goTo(active - 1);
  const goNext = () => goTo(active + 1);

  return (
    <Reveal
      as="section"
      className={styles.section}
      aria-label="Construction specialists we support"
    >
      <div className={`${styles.header} revealHead`}>
        <SectionBadge as="p">{badge}</SectionBadge>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div className={styles.stage}>
        {TRADES.map((trade, index) => {
          const offset = index - active;

          const wrapped =
            ((offset +
              TRADES.length +
              Math.floor(TRADES.length / 2)) %
              TRADES.length) -
            Math.floor(TRADES.length / 2);

          const isCenter = wrapped === 0;
          const isVisible = Math.abs(wrapped) <= 1;

          return (
            <article
              key={trade.id}
              className={`${styles.card} ${
                isCenter ? styles.cardActive : ""
              } interactiveCard mediaZoom`}
              style={{
                transform: `translateX(${wrapped * 72}%) translateZ(${
                  isCenter ? 60 : -40
                }px) rotateY(${wrapped * -18}deg) scale(${
                  isCenter ? 1 : 0.84
                })`,
                opacity: isVisible ? (isCenter ? 1 : 0.5) : 0,
                zIndex: 10 - Math.abs(wrapped),
                pointerEvents: isVisible ? "auto" : "none",
              }}
              onClick={() => goTo(index)}
              aria-hidden={!isVisible}
            >
              <img src={trade.image} alt="" />

              <div className={styles.overlay}>
                <span className={styles.tag}>{trade.tag}</span>
                <h3>{trade.title}</h3>
                <p>{trade.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.arrow} btnMotion`}
          aria-label="Previous trade"
          onClick={goPrev}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className={styles.dots} aria-label="Select a trade">
          {TRADES.map((trade, index) => (
            <button
              key={trade.id}
              type="button"
              className={index === active ? styles.dotActive : styles.dot}
              aria-label={`Show ${trade.title}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} btnMotion`}
          aria-label="Next trade"
          onClick={goNext}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </Reveal>
  );
}
