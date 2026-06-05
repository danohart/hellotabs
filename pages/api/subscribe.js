// pages/api/subscribe.js
const mailchimp = require("@mailchimp/mailchimp_marketing");
const { getPostHogClient } = require("../../lib/posthog-server");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, firstName, neighborhood } = req.body;

  if (!email || !EMAIL_REGEX.test(email)) {
    return res
      .status(400)
      .json({ error: "Please enter a valid email address." });
  }

  const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  const posthog = getPostHogClient();

  try {
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        ...(firstName ? { FNAME: firstName } : {}),
        ...(neighborhood ? { NEIGHBOR: neighborhood } : {}),
      },
      tags: ["website-signup"],
    });

    posthog.capture({
      distinctId: email,
      event: "email_subscription_completed",
      properties: {
        email,
        has_first_name: Boolean(firstName),
        neighborhood: neighborhood || null,
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    // Mailchimp wraps errors as JSON in err.response.text
    let parsed = null;
    try {
      parsed = JSON.parse(err.response?.text);
    } catch (_) {}

    const title = parsed?.title ?? "";
    const detail = parsed?.detail ?? "";

    // 400-class Mailchimp errors
    if (parsed?.status === 400) {
      if (title === "Member Exists") {
        posthog.capture({
          distinctId: email,
          event: "email_subscription_failed",
          properties: { email, reason: "already_subscribed" },
        });
        return res.status(400).json({
          error: "You're already on the list — check your inbox for deals!",
          code: "already_subscribed",
        });
      }
      if (
        title === "Invalid Resource" ||
        detail.toLowerCase().includes("email")
      ) {
        posthog.capture({
          distinctId: email,
          event: "email_subscription_failed",
          properties: { email, reason: "invalid_email" },
        });
        return res.status(400).json({
          error:
            "That email address doesn't look right. Please double-check it.",
          code: "invalid_email",
        });
      }
      posthog.capture({
        distinctId: email,
        event: "email_subscription_failed",
        properties: { email, reason: "bad_request" },
      });
      return res.status(400).json({
        error: "We couldn't add you to the list. Please try again.",
        code: "bad_request",
      });
    }

    // Anything else is a server-side failure
    posthog.capture({
      distinctId: email,
      event: "email_subscription_failed",
      properties: { email, reason: "server_error" },
    });
    console.error("[subscribe] Mailchimp API error:", detail || err.message);
    return res.status(500).json({
      error: "Something went wrong on our end. Please try again in a moment.",
      code: "server_error",
    });
  }
}
