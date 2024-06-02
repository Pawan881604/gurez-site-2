const express = require("express");
const {
  createBlogCategore,
  getAllBlogCategores,
  deleteBlogCategore,
  updateBlogCategore,
  create_blog_sub_categore,
  get_all_blog_sub_categores,
} = require("../controllers/blogCategoreController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRols } = require("../middleware/auth");

router
  .route("/blog/create/categore")
  .post(isAuthenticatedUser, authorizeRols("admin"), createBlogCategore);

router
  .route("/blog/create/sub-categore")
  .post(isAuthenticatedUser, authorizeRols("admin"), create_blog_sub_categore);

router
  .route("/blog/update/categore/:id")
  .post(isAuthenticatedUser, authorizeRols("admin"), updateBlogCategore)
  .delete(isAuthenticatedUser, authorizeRols("admin"), deleteBlogCategore);
router.route("/blog/all-categore").get(getAllBlogCategores);
router.route("/blog/all-sub-categore").get(get_all_blog_sub_categores);

module.exports = router;
