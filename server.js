// Express
const express = require("express");
const app = express();

// Dotenv
const dotenv = require("dotenv");
dotenv.config();

// Public folder
app.use(express.static("public"));

// Routes
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);


// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });