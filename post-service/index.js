const express = require("express");

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
];

const app = express();

app.get("/v1/posts", (req, res) => {
  console.log("Received request for posts", req.query);
  res.status(200).send(posts);
});

app.listen(8082, () => {
  console.log("Post service listening on port 8082");
});
