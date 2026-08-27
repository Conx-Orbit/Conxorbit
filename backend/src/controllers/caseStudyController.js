const mongoose = require("mongoose");
const CaseStudy = require("../models/CaseStudy");
const Solution = require("../models/Solution");
const { CLOUDINARY_FOLDERS } = require("../config/folders");
const { asMedia, replaceMedia, syncReplacedMedia, clearMedia } = require("../utils/media");

const CATEGORIES = ["client-system", "internal-product", "workflow-solution", "other"];

function parseCards(value) {
  const source = Array.isArray(value) ? value : [];
  return source
    .map((card) => ({
      title: String(card?.title || "").trim(),
      description: String(card?.description || card?.body || "").trim(),
    }))
    .filter((card) => card.title || card.description);
}

function solutionHeroTitle(sol) {
  const hero = sol?.hero || {};
  const combined = [hero.titleBefore, hero.titleHighlight, hero.titleAfter]
    .map((part) => String(part || "").trim())
    .filter(Boolean)
    .join(" ");
  return combined || String(sol?.name || "").trim();
}

function relatedId(value) {
  if (!value) return null;
  if (typeof value === "object") return value._id || value.id || null;
  return value;
}

function parseBody(raw = {}) {
  const body = { ...raw };
  for (const key of ["problem", "solution", "heroImage", "seo", "cta"]) {
    if (typeof body[key] === "string") {
      try {
        body[key] = JSON.parse(body[key]);
      } catch {
        /* keep */
      }
    }
  }

  const category = String(body.category || "").trim();
  return {
    relatedSolutionId: relatedId(body.relatedSolutionId) || null,
    solutionName: String(body.solutionName || "").trim(),
    title: String(body.title || "").trim(),
    slug: String(body.slug || "").trim(),
    shortDescription: String(body.shortDescription || "").trim(),
    category: CATEGORIES.includes(category) ? category : "other",
    clientName: String(body.clientName || "").trim(),
    industry: String(body.industry || "").trim(),
    trade: String(body.trade || "").trim(),
    projectType: String(body.projectType || "").trim(),
    heroImage: asMedia(body.heroImage),
    problem: {
      title: String(body.problem?.title || "").trim(),
      description: String(body.problem?.description || body.problem?.body || "").trim(),
      cards: parseCards(body.problem?.cards || body.problem?.points),
      points: parseCards(body.problem?.cards || body.problem?.points),
    },
    solution: {
      title: String(body.solution?.title || "").trim(),
      description: String(body.solution?.description || body.solution?.body || "").trim(),
      cards: parseCards(body.solution?.cards || body.solution?.points),
      points: parseCards(body.solution?.cards || body.solution?.points),
    },
    cta: {
      title: String(body.cta?.title || "").trim(),
      description: String(body.cta?.description || body.cta?.body || "").trim(),
    },
    featured: body.featured === true || body.featured === "true",
    published: body.published !== false && body.published !== "false",
    sortOrder: Number(body.sortOrder) || 0,
    seo: body.seo && typeof body.seo === "object" ? body.seo : {},
  };
}

function applySolutionCopy(payload, sol) {
  if (!sol) return payload;
  payload.solutionName = sol.name || payload.solutionName;
  payload.title = solutionHeroTitle(sol) || payload.title;
  payload.shortDescription = String(sol.shortDescription || sol.hero?.description || "").trim();
  payload.projectType = payload.title;
  return payload;
}

function toPublic(doc) {
  const row = doc.toObject ? doc.toObject() : doc;
  const heroUrl = row.heroImage?.url || "";
  const relatedDoc =
    row.relatedSolutionId && typeof row.relatedSolutionId === "object" && row.relatedSolutionId.slug
      ? row.relatedSolutionId
      : null;
  const problemCards = row.problem?.cards?.length ? row.problem.cards : row.problem?.points || [];
  const solutionCards = row.solution?.cards?.length ? row.solution.cards : row.solution?.points || [];

  return {
    ...row,
    id: row._id,
    relatedSolutionId: relatedDoc ? relatedDoc._id : row.relatedSolutionId,
    relatedSolution: relatedDoc
      ? {
          id: relatedDoc._id,
          slug: relatedDoc.slug,
          name: relatedDoc.name,
        }
      : null,
    solutionName: row.solutionName || relatedDoc?.name || row.title,
    heroImageUrl: heroUrl,
    mockupImageUrl: heroUrl,
    supportingImageUrl: "",
    problem: {
      title: row.problem?.title || "",
      description: row.problem?.description || "",
      cards: problemCards,
    },
    problemPoints: problemCards,
    solution: {
      title: row.solution?.title || "",
      description: row.solution?.description || "",
      cards: solutionCards,
    },
    solutionPoints: solutionCards,
    cta: {
      title: row.cta?.title || "",
      description: row.cta?.description || "",
    },
    displayOrder: row.sortOrder || 0,
  };
}

async function loadSolution(id) {
  if (!id || !mongoose.Types.ObjectId.isValid(String(id))) return null;
  return Solution.findById(id);
}

async function listPublic(_req, res) {
  try {
    const rows = await CaseStudy.find({ published: true })
      .populate("relatedSolutionId", "slug name category")
      .sort({ sortOrder: 1, title: 1 });
    return res.json(rows.map(toPublic));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getPublicBySlug(req, res) {
  try {
    const item = await CaseStudy.findOne({ slug: req.params.slug, published: true }).populate(
      "relatedSolutionId",
      "slug name category"
    );
    if (!item) return res.status(404).json({ message: "Not found" });
    return res.json(toPublic(item));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function listAdmin(_req, res) {
  try {
    const rows = await CaseStudy.find()
      .populate("relatedSolutionId", "slug name category")
      .sort({ sortOrder: 1, title: 1 });
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function create(req, res) {
  try {
    const payload = parseBody(req.body);
    if (!payload.relatedSolutionId) {
      return res.status(400).json({ message: "A related solution is required" });
    }
    const sol = await loadSolution(payload.relatedSolutionId);
    if (!sol) return res.status(400).json({ message: "Selected solution does not exist" });
    applySolutionCopy(payload, sol);

    if (!payload.slug) {
      payload.slug = `${sol.slug || "case-study"}-case-study`;
    }
    if (!payload.title) {
      return res.status(400).json({ message: "title is required" });
    }

    if (req.file) {
      payload.heroImage = await replaceMedia({
        fileBuffer: req.file.buffer,
        folder: CLOUDINARY_FOLDERS.caseStudies,
        resourceType: "image",
      });
    }

    const created = await CaseStudy.create(payload);
    return res.status(201).json(created);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message || "Failed to create case study" });
  }
}

async function update(req, res) {
  try {
    const existing = await CaseStudy.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Not found" });

    const payload = parseBody({ ...existing.toObject(), ...req.body });
    if (!payload.relatedSolutionId) {
      return res.status(400).json({ message: "A related solution is required" });
    }
    const sol = await loadSolution(payload.relatedSolutionId);
    if (!sol) return res.status(400).json({ message: "Selected solution does not exist" });
    applySolutionCopy(payload, sol);

    if (req.file) {
      payload.heroImage = await replaceMedia({
        fileBuffer: req.file.buffer,
        folder: CLOUDINARY_FOLDERS.caseStudies,
        resourceType: "image",
        previousPublicId: existing.heroImage?.publicId,
      });
    } else if (req.body.heroImage !== undefined) {
      let next = req.body.heroImage;
      if (typeof next === "string") {
        try {
          next = JSON.parse(next);
        } catch {
          next = {};
        }
      }
      payload.heroImage = await syncReplacedMedia(existing.heroImage, asMedia(next), "image");
    } else {
      payload.heroImage = asMedia(existing.heroImage);
    }

    Object.assign(existing, payload);
    await existing.save();
    return res.json(existing);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message || "Failed to update case study" });
  }
}

async function remove(req, res) {
  try {
    const existing = await CaseStudy.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Not found" });
    await clearMedia(existing.heroImage, "image");
    await existing.deleteOne();
    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  listPublic,
  getPublicBySlug,
  listAdmin,
  create,
  update,
  remove,
  toPublic,
};
