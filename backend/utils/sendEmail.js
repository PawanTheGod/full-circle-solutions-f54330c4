const nodemailer = require("nodemailer");

// ── Transporter ──────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Gmail App Password (not your account password)
  },
});

// ── Send contact notification to the agency ──────────────────────────────────
const sendAgencyNotification = async ({ name, email, phone, service, message }) => {
  const serviceLabel = service || "Not specified";

  await transporter.sendMail({
    from: `"360° Marketing Agency" <${process.env.GMAIL_USER}>`,
    to: process.env.AGENCY_EMAIL,
    subject: `📬 New Contact Form Submission — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
        <h2 style="color: #1a1a2e; margin-bottom: 4px;">New Contact Request</h2>
        <p style="color: #666; margin-top: 0;">Someone filled out the contact form on your website.</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #1a1a2e;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0; font-weight: 600; color: #1a1a2e;"><a href="mailto:${email}" style="color: #e94560;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0; font-weight: 600; color: #1a1a2e;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="padding: 8px 0; font-weight: 600; color: #1a1a2e;">${serviceLabel}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="color: #888; font-size: 14px; margin-bottom: 8px;"><strong>Message:</strong></p>
        <p style="color: #1a1a2e; background: #fff; padding: 16px; border-left: 4px solid #e94560; border-radius: 4px; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="color: #aaa; font-size: 12px; text-align: center;">360° Marketing Agency · Internal Notification</p>
      </div>
    `,
  });
};

// ── Send auto-reply to the visitor ───────────────────────────────────────────
const sendAutoReply = async ({ name, email }) => {
  await transporter.sendMail({
    from: `"360° Marketing Agency" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}! 🎯`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #1a1a2e; border-radius: 8px; color: #fff;">
        <h2 style="color: #e94560; margin-bottom: 4px;">We received your message! 🎉</h2>
        <p style="color: #ccc; margin-top: 0;">Hi <strong>${name}</strong>, thank you for contacting <strong>360° Marketing Agency</strong>.</p>
        <p style="color: #ccc;">Our team will review your enquiry and get back to you within <strong style="color: #fff;">24 hours</strong> on business days.</p>
        <div style="background: #16213e; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="margin: 0 0 8px; color: #e94560; font-weight: 600;">While you wait, explore us:</p>
          <p style="margin: 4px 0; color: #aaa; font-size: 14px;">🌐 Website: <a href="http://localhost:5173" style="color: #e94560;">360marketing.in</a></p>
          <p style="margin: 4px 0; color: #aaa; font-size: 14px;">📧 Email: <a href="mailto:hello@360marketing.in" style="color: #e94560;">hello@360marketing.in</a></p>
          <p style="margin: 4px 0; color: #aaa; font-size: 14px;">📞 Phone: +91 98765 43210</p>
        </div>
        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 24px;">© 2025 360° Marketing Agency. All rights reserved.</p>
      </div>
    `,
  });
};

module.exports = { sendAgencyNotification, sendAutoReply };
