const express = require("express");
const { requireAuth } = require("../middleware/auth");
const { requireMongo } = require("../middleware/mongo");
const ctrl = require("../controllers/serviceConfigurationController");

const router = express.Router();

router.get("/:serviceSlug", requireMongo, ctrl.getByServiceSlug);
router.put("/:serviceSlug", requireAuth, requireMongo, ctrl.upsert);

module.exports = router;
