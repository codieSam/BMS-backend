const {
  fetchBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blog.controller");

const router = require("express").Router();

router.route("/blogs").get(fetchBlog).post(createBlog);
router.route("/blogs/:id").delete(deleteBlog).patch(updateBlog);

module.exports = router;
