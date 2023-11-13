const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");


// index
router.get("/", postsController.index)

// create
router.get("/create", postsController.create)

// show
router.get("/:slug", postsController.show)

// download
router.get("/:slug/download", postsController.download)



module.exports = router;