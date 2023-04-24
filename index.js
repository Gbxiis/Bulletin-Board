const PORT = 5000;
const express = require("express");
const apiRoute = require("./routers/api");
const path = require("path");
const app = express();

app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
