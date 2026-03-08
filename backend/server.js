// server.js — 360 Marketing Agency Contact Backend

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

/* ─────────────────────────────────────────
   CORS Configuration
───────────────────────────────────────── */

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:8080",
  "http://localhost:8081",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.options("*", cors());

/* ─────────────────────────────────────────
   Body Parsers
───────────────────────────────────────── */

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

/* ─────────────────────────────────────────
   Base API Route
───────────────────────────────────────── */

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "360 Marketing API is running",
  });
});

/* ─────────────────────────────────────────
   Contact Routes
───────────────────────────────────────── */

app.use("/api/contact", contactRoutes);

/* ─────────────────────────────────────────
   Health Check
───────────────────────────────────────── */

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

/* ─────────────────────────────────────────
   404 Handler
───────────────────────────────────────── */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

/* ─────────────────────────────────────────
   Global Error Handler
───────────────────────────────────────── */

app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* ─────────────────────────────────────────
   Start Server
───────────────────────────────────────── */

app.listen(PORT, () => {
  console.log("\n🚀 360 Marketing Backend running");
  console.log(`   API Root  → http://localhost:${PORT}/api`);
  console.log(`   Health    → http://localhost:${PORT}/api/health`);
  console.log(`   Contact   → POST http://localhost:${PORT}/api/contact\n`);
});

module.exports = app;