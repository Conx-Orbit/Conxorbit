const mongoose = require("mongoose");
const ServiceConfiguration = require("../models/ServiceConfiguration");
const Solution = require("../models/Solution");
const { toPublic } = require("./solutionController");

const ALLOWED_SLUGS = ServiceConfiguration.schema.path("serviceSlug").enumValues;

function solutionId(doc) {
  if (!doc) return "";
  if (typeof doc === "string") return doc;
  return String(doc._id || doc.id || "");
}

function orderByIds(docs, ids) {
  const byId = new Map(docs.map((doc) => [solutionId(doc), doc]));
  return ids.map((id) => byId.get(String(id))).filter(Boolean);
}

async function loadConfig(serviceSlug, { publishedOnly = false } = {}) {
  const config = await ServiceConfiguration.findOne({ serviceSlug });
  if (!config) {
    return { serviceSlug, featuredSolutionIds: [] };
  }

  const orderedIds = (config.featuredSolutionIds || []).map(String);
  if (!orderedIds.length) {
    return { serviceSlug, featuredSolutionIds: [] };
  }

  const query = { _id: { $in: orderedIds } };
  if (publishedOnly) query.published = true;

  const rows = await Solution.find(query);
  const ordered = orderByIds(rows, orderedIds);
  return {
    serviceSlug: config.serviceSlug,
    featuredSolutionIds: ordered.map(toPublic),
  };
}

async function getByServiceSlug(req, res) {
  try {
    const serviceSlug = String(req.params.serviceSlug || "").trim();
    if (!ALLOWED_SLUGS.includes(serviceSlug)) {
      return res.status(400).json({ message: "Invalid service" });
    }
    const payload = await loadConfig(serviceSlug, { publishedOnly: true });
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function upsert(req, res) {
  try {
    const serviceSlug = String(req.params.serviceSlug || "").trim();
    if (!ALLOWED_SLUGS.includes(serviceSlug)) {
      return res.status(400).json({ message: "Invalid service" });
    }

    const rawIds = Array.isArray(req.body?.featuredSolutionIds)
      ? req.body.featuredSolutionIds
      : [];
    const featuredSolutionIds = [];
    const seen = new Set();
    for (const value of rawIds) {
      const id = String(value || "").trim();
      if (!id || seen.has(id)) continue;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: `Invalid solution id: ${id}` });
      }
      seen.add(id);
      featuredSolutionIds.push(id);
    }

    if (featuredSolutionIds.length) {
      const found = await Solution.find({ _id: { $in: featuredSolutionIds } }).select("_id");
      if (found.length !== featuredSolutionIds.length) {
        return res.status(400).json({ message: "One or more selected solutions do not exist" });
      }
    }

    await ServiceConfiguration.findOneAndUpdate(
      { serviceSlug },
      { serviceSlug, featuredSolutionIds },
      { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
    );

    const payload = await loadConfig(serviceSlug, { publishedOnly: false });
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ message: error.message || "Failed to save featured solutions" });
  }
}

module.exports = { getByServiceSlug, upsert };
