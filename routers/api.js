const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const posts = require("../model/posts");
const router = express.Router();

router.use(cors());

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send("Post add");
});

router.delete("/remove", bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.removePost(title, description);

  res.send("Post removido");
});

module.exports = router;
