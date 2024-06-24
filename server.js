const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve React app
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use JSON Server for API routes
const router = jsonServer.router("data/questions.json");
const middlewares = jsonServer.defaults();

app.use("/api", middlewares, router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
