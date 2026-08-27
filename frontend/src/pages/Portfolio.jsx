import { useEffect, useMemo, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import PageShell from "../components/layout/PageShell/PageShell";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioFeatured from "../components/portfolio/PortfolioFeatured";
import PortfolioProof from "../components/portfolio/PortfolioProof";
import PortfolioClientSystems from "../components/portfolio/PortfolioClientSystems";
import PortfolioProductGrid from "../components/portfolio/PortfolioProductGrid";
import PortfolioIndustries from "../components/portfolio/PortfolioIndustries";
import SolutionsFinalCta from "../components/solutions/SolutionsFinalCta";
import { portfolioContent } from "../content/portfolioContent";
import { api, mediaUrl } from "../api/client";
import styles from "./Portfolio.module.css";

function publishedCaseStudyFor(row, caseStudyBySolutionId) {
  if (row?.publishedCaseStudy?.slug) return row.publishedCaseStudy;
  return caseStudyBySolutionId.get(String(row?._id || row?.id || "")) || null;
}

export default function Portfolio() {
  const [searchParams] = useSearchParams();
  const caseRedirect = searchParams.get("case");
  const [solutions, setSolutions] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let alive = true;
    Promise.all([api.getSolutions("?forPortfolio=1"), api.getCaseStudies().catch(() => [])])
      .then(([sols, cases]) => {
        if (!alive) return;
        setSolutions(sols || []);
        setCaseStudies(Array.isArray(cases) ? cases : []);
        setLoadError("");
      })
      .catch((err) => {
        if (!alive) return;
        setSolutions([]);
        setCaseStudies([]);
        setLoadError(err.message || "Failed to load portfolio data from API.");
      });
    return () => {
      alive = false;
    };
  }, []);

  const {
    meta,
    hero,
    featured,
    proof,
    clientSystems,
    internalProducts,
    workflowSolutions,
    industries,
    cta,
    featuredSlug,
  } = portfolioContent;

  const byCategory = useMemo(() => {
    const groups = {
      client_system: [],
      internal_product: [],
      workflow_solution: [],
    };
    const mapKey = {
      "client-system": "client_system",
      "internal-product": "internal_product",
      "workflow-solution": "workflow_solution",
    };
    solutions.forEach((row) => {
      const key = mapKey[row.category];
      if (groups[key]) groups[key].push(row);
    });
    return groups;
  }, [solutions]);

  const caseStudyBySolutionId = useMemo(() => {
    const map = new Map();
    caseStudies.forEach((study) => {
      const key = String(study.relatedSolutionId?._id || study.relatedSolutionId || "");
      if (key && !map.has(key)) map.set(key, study);
    });
    return map;
  }, [caseStudies]);

  const featuredContent = useMemo(() => {
    const featuredRow =
      solutions.find((row) => row.slug === featuredSlug) ||
      byCategory.client_system.find((row) => row.slug === "panel-x") ||
      solutions[0];
    if (!featuredRow) return featured;
    const relatedCase = publishedCaseStudyFor(featuredRow, caseStudyBySolutionId);
    return {
      ...featured,
      name: featuredRow.name,
      body: featuredRow.shortDescription || featuredRow.description,
      tags: featuredRow.tags || featured.tags,
      image: mediaUrl(featuredRow.hero?.mockup?.url || featuredRow.image) || featured.image,
      href: `/solutions/${featuredRow.slug}`,
      caseStudyHref: relatedCase?.slug ? `/case-studies/${relatedCase.slug}` : "",
    };
  }, [byCategory, caseStudyBySolutionId, featured, featuredSlug, solutions]);

  const clientSystemsContent = useMemo(() => {
    const items = byCategory.client_system.map((row, index, arr) => {
      const relatedCase = publishedCaseStudyFor(row, caseStudyBySolutionId);
      return {
        index: `${String(index + 1).padStart(2, "0")} / ${String(arr.length).padStart(2, "0")}`,
        name: row.name,
        body: row.shortDescription || row.description,
        tags: row.tags || [],
        badge: "CLIENT SYSTEM",
        confidential: row.confidential,
        confidentialLabel: row.confidentialLabel,
        image: mediaUrl(row.hero?.mockup?.url || row.image),
        href: `/solutions/${row.slug}`,
        caseStudyHref: relatedCase?.slug ? `/case-studies/${relatedCase.slug}` : "",
      };
    });
    return { ...clientSystems, items };
  }, [byCategory, caseStudyBySolutionId, clientSystems]);

  const internalContent = useMemo(() => {
    const cards = byCategory.internal_product.map((row) => {
      const relatedCase = publishedCaseStudyFor(row, caseStudyBySolutionId);
      return {
        label: "INTERNAL PRODUCT",
        status: "In Development",
        name: row.name,
        body: row.shortDescription || row.description,
        tags: row.tags || [],
        href: `/solutions/${row.slug}`,
        caseStudyHref: relatedCase?.slug ? `/case-studies/${relatedCase.slug}` : "",
        image: mediaUrl(row.hero?.mockup?.url || row.image),
      };
    });
    return { ...internalProducts, cards };
  }, [byCategory, caseStudyBySolutionId, internalProducts]);

  const workflowContent = useMemo(() => {
    const cards = byCategory.workflow_solution.map((row) => {
      const relatedCase = publishedCaseStudyFor(row, caseStudyBySolutionId);
      return {
        label: "WORKFLOW SOLUTION",
        status: "Capability",
        name: row.name,
        body: row.shortDescription || row.description,
        tags: row.tags || [],
        href: `/solutions/${row.slug}`,
        caseStudyHref: relatedCase?.slug ? `/case-studies/${relatedCase.slug}` : "",
        image: mediaUrl(row.hero?.mockup?.url || row.image),
      };
    });
    return { ...workflowSolutions, cards };
  }, [byCategory, caseStudyBySolutionId, workflowSolutions]);

  if (caseRedirect) {
    return <Navigate to={`/case-studies/${encodeURIComponent(caseRedirect)}`} replace />;
  }

  return (
    <PageShell atmosphere="cases">
      <SEO title={meta.title} description={meta.description} path="/portfolio" />
      <div className={styles.page}>
        <PortfolioHero content={hero} />
        {loadError ? (
          <p style={{ textAlign: "center", padding: 24 }}>{loadError}</p>
        ) : null}
        <PortfolioFeatured content={featuredContent} />
        <PortfolioProof content={proof} />
        <PortfolioClientSystems content={clientSystemsContent} />
        <PortfolioProductGrid content={internalContent} />
        <PortfolioProductGrid content={workflowContent} key="workflow-solutions" />
        <PortfolioIndustries content={industries} />
        <SolutionsFinalCta content={cta} />
      </div>
    </PageShell>
  );
}
