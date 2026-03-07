const express = require("express");
const rateLimit = require("express-rate-limit");
const { submitContact } = require("../controllers/contactController");

const router = express.Router();

// Rate limit: max 5 submissions per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many contact submissions. Please try again in an hour." },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact
router.post("/", contactLimiter, submitContact);

module.exports = router;
