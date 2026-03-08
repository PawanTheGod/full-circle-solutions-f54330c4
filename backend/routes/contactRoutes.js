const express = require("express")
const rateLimit = require("express-rate-limit")
const router = express.Router()

// Create a rate limiter for contact form submissions
// Limit to 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after 15 minutes"
    }
});

const { submitContact } = require("../controllers/contactController")

router.post("/", contactLimiter, submitContact)

module.exports = router