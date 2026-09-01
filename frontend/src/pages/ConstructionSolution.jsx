import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import PageShell from "../components/layout/PageShell/PageShell";
import styles from "./ConstructionSolution.module.css";

export default function ConstructionSolution() {
  return (
    <PageShell atmosphere="construction">
      <SEO
        title="Construction Technology — Coming Soon | ConX Orbit"
        description="The ConX Orbit construction technology page is coming soon."
        path="/trades/construction"
      />
      <main className={styles.comingSoon}>
        <p className={styles.eyebrow}>Construction Technology</p>
        <h1>Coming soon</h1>
        <p className={styles.body}>
          We’re building something focused for construction teams. Check back soon.
        </p>
        <Link className={`${styles.link} btnMotion`} to="/">
          <span>Back to home</span>
          <span aria-hidden="true">→</span>
        </Link>
      </main>
    </PageShell>
  );
}
