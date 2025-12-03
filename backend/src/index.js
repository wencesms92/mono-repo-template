const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes (must be defined before serving static files)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend server is running" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the backend API! Endpoint hit!" });
});

// Serve static files from frontend
const frontendDistPath = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendDistPath));

// For SPA: all routes that are not /api should serve index.html
app.get("*", (req, res) => {
  // If the route starts with /api, it shouldn't reach here, but for safety:
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }
  // Serve index.html for all other routes (SPA routing)
  res.sendFile(path.join(frontendDistPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  console.log(`Serving static files from: ${frontendDistPath}`);
});
