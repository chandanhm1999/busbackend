const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());

// Helper function to read JSON file
function readJson(fileName) {
  const filePath = path.join(__dirname, "data", fileName);
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Endpoints
app.get("/routes", (req, res) => {
  const routes = readJson("routes.json");
  res.json(routes);
});

app.get("/stops", (req, res) => {
  const stops = readJson("stops.json");
  res.json(stops);
});

app.get("/trips", (req, res) => {
  const trips = readJson("trips.json");
  res.json(trips);
});

app.get("/buses", (req, res) => {
  const buses = readJson("buses.json");
  res.json(buses);
});

// root route
app.get("/", (req, res) => res.send("Apps worked successfully"));

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
