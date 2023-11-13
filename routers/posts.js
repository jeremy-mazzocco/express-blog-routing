const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

// index
router.get("/", postsController.index)


module.exports = router;