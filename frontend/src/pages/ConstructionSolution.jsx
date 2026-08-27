import { useEffect, useState } from "react";
import SEO from "../components/common/SEO";
import PageHero, { CTABand } from "../components/common/PageHero";
import FeatureList from "../components/common/FeatureList";
import PageShell from "../components/layout/PageShell/PageShell";
import FacadeSolutions from "../components/trades/FacadeSolutions";
import { constructionContent } from "../content/siteContent";
import { api, mediaUrl } from "../api/client";

function categoryLabel(category) {
  const value = String(category || "").trim();
  if (!value) return "Solution";
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function ConstructionSolution() {
  const { meta, hero, painPoints, capabilities, relatedSolutions, cta } = constructionContent;
  const [solutionCards, setSolutionCards] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let alive = true;
    api
      .getSolutions("?trade=construction")
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

  return (
    <PageShell atmosphere="construction">
      <SEO
        title={meta.title}
        description={meta.description}
        path="/case-studies/construction"
      />
      <PageHero {...hero} />
      <FeatureList
        title={painPoints.title}
        items={painPoints.items}
        variant="bullets"
        tone="light"
      />
      <FeatureList title={capabilities.title} items={capabilities.items} tone="dark" />
      {loadError ? <p style={{ textAlign: "center", padding: 24 }}>{loadError}</p> : null}
      <FacadeSolutions content={{ ...relatedSolutions, cards: solutionCards }} />
      <CTABand title={cta.title} body={cta.body} href={cta.href} label={cta.label} />
    </PageShell>
  );
}
