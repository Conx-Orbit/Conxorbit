import { useEffect, useMemo, useState } from "react";
import { api } from "../api/client";
import { useAdminAuth } from "./AdminAuth";
import styles from "./admin.module.css";

export const SERVICE_OPTIONS = [
  { slug: "custom-ai-development", label: "Custom AI Development" },
  { slug: "workflow-analysis-consulting", label: "Workflow Analysis & Consulting" },
  { slug: "integration-services", label: "Integration Services" },
  { slug: "training-implementation", label: "Training & Implementation" },
  { slug: "construction-website-development", label: "Construction Website Development" },
];

function solutionKey(item) {
  return String(item?._id || item?.id || "");
}

export default function AdminServiceFeatured() {
  const { token } = useAdminAuth();
  const [serviceSlug, setServiceSlug] = useState(SERVICE_OPTIONS[0].slug);
  const [solutions, setSolutions] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const published = useMemo(
    () => (solutions || []).filter((item) => item.published !== false),
    [solutions]
  );

  const selectedSolutions = useMemo(() => {
    const byId = new Map(published.map((item) => [solutionKey(item), item]));
    return selectedIds.map((id) => byId.get(id)).filter(Boolean);
  }, [published, selectedIds]);

  useEffect(() => {
    let alive = true;
    api.admin.solutions
      .list(token)
      .then((rows) => {
        if (alive) setSolutions(Array.isArray(rows) ? rows : []);
      })
      .catch((err) => {
        if (alive) setError(err.message);
      });
    return () => {
      alive = false;
    };
  }, [token]);

  useEffect(() => {
    let alive = true;
    setSelectedIds([]);
    setLoading(true);
    setError("");
    api.admin.serviceConfigurations
      .get(token, serviceSlug)
      .then((data) => {
        if (!alive) return;
        const ids = (data?.featuredSolutionIds || []).map(solutionKey).filter(Boolean);
        setSelectedIds(ids);
      })
      .catch((err) => {
        if (!alive) return;
        setSelectedIds([]);
        setError(err.message);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [token, serviceSlug]);

  const toggleSolution = (id, checked) => {
    const key = String(id);
    setSelectedIds((current) => {
      if (checked) return current.includes(key) ? current : [...current, key];
      return current.filter((item) => item !== key);
    });
  };

  const move = (index, direction) => {
    setSelectedIds((current) => {
      const next = [...current];
      const target = index + direction;
      if (target < 0 || target >= next.length) return current;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const onSave = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");
    setSaving(true);
    try {
      const saved = await api.admin.serviceConfigurations.put(token, serviceSlug, {
        featuredSolutionIds: selectedIds,
      });
      setSelectedIds((saved?.featuredSolutionIds || []).map(solutionKey).filter(Boolean));
      setNotice("Featured solutions saved.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1>Service Featured Solutions</h1>
      <p className={styles.muted}>
        Choose published solutions for each service page. Order is preserved on the public featured
        section.
      </p>
      {error ? <p className={styles.error}>{error}</p> : null}
      {notice ? <p className={styles.noticeToast}>{notice}</p> : null}

      <form onSubmit={onSave}>
        <div className={styles.field} style={{ maxWidth: 420, marginBottom: 20 }}>
          <label htmlFor="serviceSlug">Service</label>
          <select
            id="serviceSlug"
            value={serviceSlug}
            onChange={(event) => setServiceSlug(event.target.value)}
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {loading ? <p className={styles.muted}>Loading configuration…</p> : null}

        <div className={styles.field} style={{ marginBottom: 20 }}>
          <span>Published solutions</span>
          <div className={styles.checkRow}>
            {published.length ? (
              published.map((item) => {
                const id = solutionKey(item);
                return (
                  <label key={id}>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(id)}
                      onChange={(event) => toggleSolution(id, event.target.checked)}
                    />
                    {item.name}
                  </label>
                );
              })
            ) : (
              <p className={styles.muted}>No published solutions available.</p>
            )}
          </div>
        </div>

        <div className={styles.field} style={{ marginBottom: 20 }}>
          <span>Selected order</span>
          {selectedSolutions.length ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Solution</th>
                  <th>Order</th>
                </tr>
              </thead>
              <tbody>
                {selectedSolutions.map((item, index) => (
                  <tr key={solutionKey(item)}>
                    <td>{item.name}</td>
                    <td className={styles.row}>
                      <button
                        type="button"
                        className={`${styles.btn} ${styles.btnSecondary}`}
                        disabled={index === 0}
                        onClick={() => move(index, -1)}
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        className={`${styles.btn} ${styles.btnSecondary}`}
                        disabled={index === selectedSolutions.length - 1}
                        onClick={() => move(index, 1)}
                      >
                        Down
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className={styles.muted}>No solutions selected.</p>
          )}
        </div>

        <button type="submit" className={styles.btn} disabled={saving || loading}>
          {saving ? "Saving…" : "Save Featured Solutions"}
        </button>
      </form>
    </div>
  );
}
