const { sendAgencyNotification, sendAutoReply } = require("../utils/sendEmail");

// POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // ── Basic validation ────────────────────────────────────────
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: "Name is required." });
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ success: false, message: "A valid email address is required." });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: "Message is required." });
    }

    // ── Send both emails (fire & forget auto-reply to not block return) ───────
    await sendAgencyNotification({ name, email, phone, service, message });

    // Auto-reply is best-effort — don't fail the request if it bounces
    sendAutoReply({ name, email }).catch((err) =>
      console.warn("Auto-reply failed (non-critical):", err.message)
    );

    return res.status(200).json({
      success: true,
      message: "Your message has been sent! We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error("Contact form error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again or email us directly.",
    });
  }
};

module.exports = { submitContact };
