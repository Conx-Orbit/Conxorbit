const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    url: { type: String, default: "" },
    publicId: { type: String, default: "" },
  },
  { _id: false }
);

const seoSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    ogImage: { type: String, default: "" },
  },
  { _id: false }
);

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const caseStudySchema = new mongoose.Schema(
  {
    relatedSolutionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Solution",
      default: null,
    },

    solutionName: { type: String, default: "", trim: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    shortDescription: { type: String, default: "" },

    category: {
      type: String,
      enum: ["client-system", "internal-product", "workflow-solution", "other"],
      default: "other",
    },

    clientName: { type: String, default: "" },
    industry: { type: String, default: "" },
    trade: { type: String, default: "" },
    projectType: { type: String, default: "" },

    heroImage: { type: mediaSchema, default: () => ({}) },

    problem: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      cards: [cardSchema],
      points: [cardSchema],
    },

    solution: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      cards: [cardSchema],
      points: [cardSchema],
    },

    cta: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
    },

    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },

    seo: { type: seoSchema, default: () => ({}) },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CaseStudy", caseStudySchema);
