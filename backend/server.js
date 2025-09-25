const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "..", "public")));  

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/historia", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "historiapage.html"));
});

app.get("/jogadores", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "jogadorespage.html"));
});

app.get("/zarlak", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "zarlakpage.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
