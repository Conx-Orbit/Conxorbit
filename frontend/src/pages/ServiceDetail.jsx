import { useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import PageShell from "../components/layout/PageShell/PageShell";
import ServiceHero from "../components/services/ServiceHero";
import ServiceValue from "../components/services/ServiceValue";
import ServiceApproach from "../components/services/ServiceApproach";
import ServiceCapabilities from "../components/services/ServiceCapabilities";
import ServiceWhy from "../components/services/ServiceWhy";
import ServiceFinalCta from "../components/services/ServiceFinalCta";
import FeaturedSolutions from "../components/home/FeaturedSolutions/FeaturedSolutions";
import FAQAccordion from "../components/home/FAQAccordion/FAQAccordion";
import WorkflowDiscoveryModal from "../components/home/WorkflowDiscoveryModal/WorkflowDiscoveryModal";
import { getServicePage, serviceFaq } from "../content/servicePages";
import { workflowDiscoveryContent } from "../content/workflowDiscoveryContent";
import { api, mediaUrl } from "../api/client";
import styles from "./ServiceDetail.module.css";

function categoryLabel(category) {
  const value = String(category || "").trim();
  if (!value) return "Solution";
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function mapFeaturedCard(item) {
  const tags = Array.isArray(item.tags) ? item.tags : item.categories || [];
  return {
    badge: tags[0] || categoryLabel(item.category),
    image: mediaUrl(item.hero?.mockup?.url || item.image),
    title: item.name,
    description: item.shortDescription || item.description || "",
    href: `/solutions/${item.slug}`,
    cta: "View Solution",
  };
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const page = getServicePage(slug);
  const [featuredCards, setFeaturedCards] = useState([]);
  const [workflowOpen, setWorkflowOpen] = useState(false);

  useEffect(() => {
    if (!page?.slug) return undefined;
    let alive = true;
    api
      .getServiceConfiguration(page.slug)
      .then((data) => {
        if (!alive) return;
        setFeaturedCards((data?.featuredSolutionIds || []).map(mapFeaturedCard));
      })
      .catch(() => {
        if (alive) setFeaturedCards([]);
      });
    return () => {
      alive = false;
    };
  }, [page?.slug]);

  const featuredContent = useMemo(() => {
    if (!page?.featured) return null;
    return { ...page.featured, cards: featuredCards };
  }, [page?.featured, featuredCards]);

  if (!page) {
    return <Navigate to="/services/custom-ai-development" replace />;
  }

  const faq = page.faq || serviceFaq;

  return (
    <PageShell atmosphere="services">
      <SEO
        title={page.meta.title}
        description={page.meta.description}
        path={`/services/${page.slug}`}
      />
      <div className={styles.page}>
        <ServiceHero
          content={page.hero}
          onPrimaryCta={
            page.hero.primaryCta?.action === "open-workflow"
              ? () => setWorkflowOpen(true)
              : undefined
          }
        />
        <ServiceValue content={page.value} />
        <ServiceApproach content={page.approach} />
        <ServiceCapabilities content={page.capabilities} />
        {featuredContent && featuredCards.length ? (
          <FeaturedSolutions content={featuredContent} />
        ) : null}
        <ServiceWhy content={page.why} />
        <FAQAccordion content={faq} />
        <ServiceFinalCta content={page.cta} />
      </div>
      <WorkflowDiscoveryModal
        content={workflowDiscoveryContent}
        open={workflowOpen}
        onClose={() => setWorkflowOpen(false)}
      />
    </PageShell>
  );
}
