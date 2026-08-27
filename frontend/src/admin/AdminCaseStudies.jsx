import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";
import { useAdminAuth } from "./AdminAuth";
import AdminMediaField from "./AdminMediaField";
import styles from "./admin.module.css";

const CATEGORIES = ["client-system", "internal-product", "workflow-solution", "other"];
const EMPTY_CARD = { title: "", description: "" };

const EMPTY = {
  relatedSolutionId: "",
  solutionName: "",
  title: "",
  slug: "",
  category: "other",
  shortDescription: "",
  heroImage: { url: "", publicId: "" },
  problem: { title: "", description: "", cards: [] },
  solution: { title: "", description: "", cards: [] },
  cta: { title: "", description: "" },
  featured: false,
  published: true,
  sortOrder: 0,
};

function relatedKey(value) {
  if (!value) return "";
  if (typeof value === "object") return String(value._id || value.id || "");
  return String(value);
}

function solutionHeroTitle(sol) {
  const hero = sol?.hero || {};
  const combined = [hero.titleBefore, hero.titleHighlight, hero.titleAfter]
    .map((part) => String(part || "").trim())
    .filter(Boolean)
    .join(" ");
  return combined || String(sol?.name || "").trim();
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fromItem(item) {
  const problemCards = item.problem?.cards?.length
    ? item.problem.cards
    : item.problem?.points || [];
  const solutionCards = item.solution?.cards?.length
    ? item.solution.cards
    : item.solution?.points || [];
  return {
    ...EMPTY,
    ...item,
    relatedSolutionId: relatedKey(item.relatedSolutionId),
    solutionName: item.solutionName || item.relatedSolutionId?.name || "",
    heroImage: { url: "", publicId: "", ...(item.heroImage || {}) },
    problem: {
      title: item.problem?.title || "",
      description: item.problem?.description || "",
      cards: problemCards.length ? problemCards.map((card) => ({ ...EMPTY_CARD, ...card })) : [],
    },
    solution: {
      title: item.solution?.title || "",
      description: item.solution?.description || "",
      cards: solutionCards.length ? solutionCards.map((card) => ({ ...EMPTY_CARD, ...card })) : [],
    },
    cta: {
      title: item.cta?.title || "",
      description: item.cta?.description || item.cta?.body || "",
    },
  };
}

function applySolutionToForm(form, sol, { fillSlug }) {
  if (!sol) return form;
  const nextSlug = fillSlug || !form.slug ? `${sol.slug || slugify(sol.name)}-case-study` : form.slug;
  return {
    ...form,
    relatedSolutionId: String(sol._id),
    solutionName: sol.name || "",
    title: solutionHeroTitle(sol),
    shortDescription: sol.shortDescription || sol.hero?.description || "",
    category: CATEGORIES.includes(sol.category) ? sol.category : form.category || "other",
    slug: nextSlug,
  };
}

const cardBox = {
  marginBottom: "16px",
  padding: "16px",
  border: "1px solid rgba(255,255,255,.1)",
  borderRadius: "10px",
};

export default function AdminCaseStudies() {
  const { token } = useAdminAuth();
  const [items, setItems] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const selectedSolution = solutions.find((sol) => String(sol._id) === String(form.relatedSolutionId));

  const load = async () => {
    const [cases, sols] = await Promise.all([
      api.admin.caseStudies.list(token),
      api.admin.solutions.list(token),
    ]);
    setItems(cases);
    setSolutions(sols);
  };

  useEffect(() => {
    load().catch((err) => setError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const startEdit = (item) => {
    setEditId(item._id);
    const next = fromItem(item);
    const sol = solutions.find((row) => String(row._id) === next.relatedSolutionId);
    setForm(sol ? applySolutionToForm(next, sol, { fillSlug: false }) : next);
  };

  const reset = () => {
    setEditId(null);
    setForm(EMPTY);
  };

  const onSelectSolution = (id) => {
    const sol = solutions.find((row) => String(row._id) === String(id));
    if (!sol) {
      setForm({ ...EMPTY, relatedSolutionId: "" });
      return;
    }
    setForm((current) => applySolutionToForm({ ...current, relatedSolutionId: String(sol._id) }, sol, { fillSlug: !editId }));
  };

  const onSave = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      if (!form.relatedSolutionId) {
        throw new Error("Select a solution before saving this case study.");
      }
      const payload = {
        relatedSolutionId: form.relatedSolutionId,
        slug: form.slug,
        category: form.category,
        heroImage: form.heroImage,
        problem: {
          title: form.problem.title,
          description: form.problem.description,
          cards: (form.problem.cards || []).filter((card) => card.title || card.description),
        },
        solution: {
          title: form.solution.title,
          description: form.solution.description,
          cards: (form.solution.cards || []).filter((card) => card.title || card.description),
        },
        cta: form.cta,
        featured: form.featured,
        published: form.published,
        sortOrder: Number(form.sortOrder) || 0,
      };
      if (editId) await api.admin.caseStudies.update(token, editId, payload);
      else await api.admin.caseStudies.create(token, payload);
      reset();
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (id) => {
    if (!window.confirm("Delete this case study?")) return;
    await api.admin.caseStudies.remove(token, id);
    if (editId === id) reset();
    await load();
  };

  const updateSection = (section, key, value) => {
    setForm({ ...form, [section]: { ...form[section], [key]: value } });
  };

  const updateCard = (section, index, key, value) => {
    const cards = [...(form[section].cards || [])];
    cards[index] = { ...cards[index], [key]: value };
    updateSection(section, "cards", cards);
  };

  const addCard = (section) => {
    updateSection(section, "cards", [...(form[section].cards || []), { ...EMPTY_CARD }]);
  };

  const removeCard = (section, index) => {
    updateSection(
      section,
      "cards",
      (form[section].cards || []).filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <h1>Case studies</h1>
      {error ? <p className={styles.error}>{error}</p> : null}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Solution</th>
            <th>Slug</th>
            <th>Published</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.solutionName || item.relatedSolutionId?.name || item.title}</td>
              <td>{item.slug}</td>
              <td>{item.published ? "Yes" : "No"}</td>
              <td className={styles.row}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnSecondary}`}
                  onClick={() => startEdit(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnDanger}`}
                  onClick={() => onDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: 28 }}>{editId ? "Edit case study" : "New case study"}</h2>
      <form onSubmit={onSave} className={styles.grid2}>
        <label className={styles.field} style={{ gridColumn: "1 / -1" }}>
          <span>Related solution</span>
          <select
            value={form.relatedSolutionId || ""}
            onChange={(e) => onSelectSolution(e.target.value)}
            required
          >
            <option value="">Select a solution…</option>
            {solutions.map((sol) => (
              <option key={sol._id} value={sol._id}>
                {sol.name}
              </option>
            ))}
          </select>
        </label>

        {selectedSolution ? (
          <>
            <div className={styles.field} style={{ gridColumn: "1 / -1" }}>
              <span>Hero details from solution</span>
              <p className={styles.muted} style={{ margin: 0 }}>
                These values are copied from the selected solution and stored on the case study.
              </p>
              <p style={{ margin: "8px 0 0" }}>
                <strong>{form.solutionName}</strong>
              </p>
              {form.title ? <p className={styles.muted}>{form.title}</p> : null}
              {form.shortDescription ? <p className={styles.muted}>{form.shortDescription}</p> : null}
            </div>

            <label className={styles.field}>
              <span>Slug</span>
              <input
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                required
              />
            </label>

            <label className={styles.field}>
              <span>Category</span>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <div style={{ gridColumn: "1 / -1" }}>
              <AdminMediaField
                label="Hero mockup image"
                value={form.heroImage?.url || ""}
                folder="Conx-orbit/case-studies"
                onUploaded={({ url, publicId }) =>
                  setForm({ ...form, heroImage: { url, publicId } })
                }
                onClear={() => setForm({ ...form, heroImage: { url: "", publicId: "" } })}
              />
            </div>

            <h2 style={{ gridColumn: "1 / -1", marginBottom: 0 }}>The Problem</h2>
            <label className={styles.field} style={{ gridColumn: "1 / -1" }}>
              <span>Heading</span>
              <input
                value={form.problem.title}
                onChange={(e) => updateSection("problem", "title", e.target.value)}
              />
            </label>
            <label className={styles.field} style={{ gridColumn: "1 / -1" }}>
              <span>Description</span>
              <textarea
                value={form.problem.description}
                onChange={(e) => updateSection("problem", "description", e.target.value)}
              />
            </label>
            <div style={{ gridColumn: "1 / -1" }}>
              <h3>Problem cards</h3>
              {(form.problem.cards || []).map((card, index) => (
                <div key={`problem-${index}`} style={cardBox}>
                  <div className={styles.grid2}>
                    <label className={styles.field}>
                      <span>Card {index + 1} title</span>
                      <input
                        value={card.title || ""}
                        onChange={(e) => updateCard("problem", index, "title", e.target.value)}
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Description</span>
                      <textarea
                        value={card.description || ""}
                        onChange={(e) =>
                          updateCard("problem", index, "description", e.target.value)
                        }
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnSecondary}`}
                    onClick={() => removeCard("problem", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => addCard("problem")}
              >
                + Add Problem
              </button>
            </div>

            <h2 style={{ gridColumn: "1 / -1", marginBottom: 0 }}>Our Solution</h2>
            <label className={styles.field} style={{ gridColumn: "1 / -1" }}>
              <span>Heading</span>
              <input
                value={form.solution.title}
                onChange={(e) => updateSection("solution", "title", e.target.value)}
              />
            </label>
            <label className={styles.field} style={{ gridColumn: "1 / -1" }}>
              <span>Description</span>
              <textarea
                value={form.solution.description}
                onChange={(e) => updateSection("solution", "description", e.target.value)}
              />
            </label>
            <div style={{ gridColumn: "1 / -1" }}>
              <h3>Solution cards</h3>
              {(form.solution.cards || []).map((card, index) => (
                <div key={`solution-${index}`} style={cardBox}>
                  <div className={styles.grid2}>
                    <label className={styles.field}>
                      <span>Card {index + 1} title</span>
                      <input
                        value={card.title || ""}
                        onChange={(e) => updateCard("solution", index, "title", e.target.value)}
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Description</span>
                      <textarea
                        value={card.description || ""}
                        onChange={(e) =>
                          updateCard("solution", index, "description", e.target.value)
                        }
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnSecondary}`}
                    onClick={() => removeCard("solution", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => addCard("solution")}
              >
                + Add Solution
              </button>
            </div>

            <h2 style={{ gridColumn: "1 / -1", marginBottom: 0 }}>CTA</h2>
            <label className={styles.field} style={{ gridColumn: "1 / -1" }}>
              <span>Title</span>
              <input
                value={form.cta.title}
                onChange={(e) => updateSection("cta", "title", e.target.value)}
                placeholder={`See ${form.solutionName || "the solution"} in more detail.`}
              />
            </label>
            <label className={styles.field} style={{ gridColumn: "1 / -1" }}>
              <span>Description</span>
              <textarea
                value={form.cta.description}
                onChange={(e) => updateSection("cta", "description", e.target.value)}
                placeholder="Explore the full solution, its capabilities and the workflow it was designed around."
              />
            </label>
            <p className={styles.muted} style={{ gridColumn: "1 / -1", margin: 0 }}>
              Buttons are fixed: View Solution and Explore More Case Studies.
            </p>

            <label className={styles.field}>
              <span>Sort order</span>
              <input
                type="number"
                value={form.sortOrder}
                onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
              />
            </label>
            <div className={styles.checkRow}>
              <label>
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })}
                />
                Published
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                />
                Featured
              </label>
            </div>
          </>
        ) : (
          <p className={styles.muted} style={{ gridColumn: "1 / -1" }}>
            Select a solution first. The case study hero will use that solution’s name, title, and
            description.
          </p>
        )}

        <div className={styles.row} style={{ gridColumn: "1 / -1" }}>
          <button className={styles.btn} type="submit" disabled={saving || !form.relatedSolutionId}>
            {saving ? "Saving…" : editId ? "Update" : "Create"}
          </button>
          {editId ? (
            <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={reset}>
              Cancel
            </button>
          ) : null}
          <Link className={styles.muted} to="/admin/solutions">
            Manage solutions
          </Link>
        </div>
      </form>
    </div>
  );
}
