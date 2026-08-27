const mongoose = require("mongoose");

const serviceConfigurationSchema = new mongoose.Schema(
  {
    serviceSlug: {
      type: String,
      required: true,
      unique: true,
      enum: [
        "custom-ai-development",
        "workflow-analysis-consulting",
        "integration-services",
        "training-implementation",
        "construction-website-development",
      ],
      trim: true,
    },

    featuredSolutionIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Solution",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ServiceConfiguration",
  serviceConfigurationSchema
);