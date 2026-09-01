import { useEffect, useState } from "react";
import SEO from "../components/common/SEO";
import PageShell from "../components/layout/PageShell/PageShell";
import FacadeTradeHero from "../components/trades/FacadeTradeHero";
import FacadeWorkflow from "../components/trades/FacadeWorkflow";
import FacadeComplexity from "../components/trades/FacadeComplexity";
import FacadePanelX from "../components/trades/FacadePanelX";
import FacadeSolutions from "../components/trades/FacadeSolutions";
import FacadeAIWorkflow from "../components/trades/FacadeAIWorkflow";
import FacadeCTA from "../components/trades/FacadeCTA";
import { facadeContent } from "../content/siteContent";
import { api, mediaUrl } from "../api/client";

function categoryLabel(category) {
  const value = String(category || "").trim();
  if (!value) return "Solution";
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function FacadeSolution() {
  const { meta, hero, workflow, complexity, panelX, solutions, aiWorkflow, cta } = facadeContent;
  const [solutionCards, setSolutionCards] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let alive = true;
    api
      .getSolutions("?trade=facade")
      .then((rows) => {
        if (!alive) return;
        setSolutionCards(
          (rows || []).map((row) => ({
            badge: categoryLabel(row.category),
            title: row.name,
            body: row.shortDescription || row.description || "",
            href: `/solutions/${row.slug}`,
            ctaLabel: "View Solution",
            image: mediaUrl(row.hero?.mockup?.url || row.image),
          }))
        );
        setLoadError("");
      })
      .catch((err) => {
        if (!alive) return;
        setSolutionCards([]);
        setLoadError(err.message || "Failed to load related solutions.");
      });
    return () => {
      alive = false;
    };
  }, []);

  const solutionsContent = {
    ...solutions,
    cards: solutionCards,
  };

  return (
    <PageShell atmosphere="facade">
      <SEO title={meta.title} description={meta.description} path="/trades/facade" />
      <FacadeTradeHero content={hero} />
      <FacadeWorkflow content={workflow} />
      <FacadeComplexity content={complexity} />
      <FacadePanelX content={panelX} />
      {loadError ? <p style={{ textAlign: "center", padding: 24 }}>{loadError}</p> : null}
      <FacadeSolutions content={solutionsContent} />
      <FacadeAIWorkflow content={aiWorkflow} />
      <FacadeCTA content={cta} />
    </PageShell>
  );
}
