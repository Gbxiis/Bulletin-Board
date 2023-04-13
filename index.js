const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let posts = [
  {
    id: "1",
    title: "Teste do Mural",
    description: "Descricao teste",
  },
];

app.get("/all", (rec, res) => {

    res.json(JSON.stringify(posts))
});

app.post("/new", (rec, res) => {});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
