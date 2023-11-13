const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

// index
router.get("/", postsController.index)

// show
router.get("/:slug", postsController.show)


module.exports = router;