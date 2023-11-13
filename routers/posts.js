const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

// index
router.get("/", postsController.index)

// show
router.get("/:slug", postsController.show)

// create
router.post("/create", postsController.create)


module.exports = router;