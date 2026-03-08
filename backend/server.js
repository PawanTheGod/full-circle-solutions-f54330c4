// server.js — 360 Marketing Agency Contact Backend
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ── CORS ──────────────────────────────────────────────────────────────────────
// Allow requests from the React frontend (localhost:5173 in dev)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// ── Body Parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);

// ── Health Check ──────────────────────────────────────────────────────────────
app.get("/api/health", (_, res) =>
  res.json({ success: true, status: "ok", timestamp: new Date().toISOString() })
);

// ── 404 Catch-all ─────────────────────────────────────────────────────────────
app.use("/api/*", (req, res) =>
  res.status(404).json({ success: false, message: `Route ${req.method} ${req.path} not found` })
);

// ── Global Error Handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({ success: false, message: "Internal server error" });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 360 Marketing Backend running`);
  console.log(`   ├── API:    http://localhost:${PORT}/api`);
  console.log(`   ├── Health: http://localhost:${PORT}/api/health`);
  console.log(`   └── Contact: POST http://localhost:${PORT}/api/contact\n`);
});

module.exports = app;
