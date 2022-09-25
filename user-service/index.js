const express = require("express");

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
  { id: 4, name: "Jane Smith" },
];

const app = express();
app.use(express.json());

app.get("/v1/users", (req, res) => {
  console.log("Received request for users", req.query);
  console.log({ headers: req.headers });
  res.status(200).json({
    items: users,
    total_count: users.length,
  });
});

app.get("/v1/users/:id", (req, res) => {
  console.log("Received request for user", req.params.id);
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.status(200).send(user);
});

app.post("/v1/users", (req, res) => {
  console.log("Received request to create user", req.body);

  const name = req.body.name;
  console.log("Received request to create user", name);
  if (!name) {
    return res.status(400).send("Name is required");
  }
  const user = { id: users.length + 1, name };
  users.push(user);
  res.status(201).send(user);
});

app.listen(8081, () => {
  console.log("User service listening on port 8081");
});
