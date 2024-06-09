const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRols } = require("../middleware/auth");
const {
  getAllSeo,
  create_seo,
  update_seo,
} = require("../controllers/seoController");

router.route("/all-seo").get(getAllSeo);
router
  .route("/create-seo")
  .post(isAuthenticatedUser, authorizeRols("admin"), create_seo);
router
  .route("/update-seo")
  .put(isAuthenticatedUser, authorizeRols("admin"), update_seo);

module.exports = router;
