const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    panel: "ALOOZ Hosting Panel",
    uptime: process.uptime()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ALOOZ Panel running on port ${PORT}`);
});
