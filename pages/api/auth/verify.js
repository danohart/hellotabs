export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body;

  // Server-side password check (NEXT_PUBLIC_PASS is accessible on server)
  if (password === process.env.NEXT_PUBLIC_PASS) {
    // Generate a simple session token
    const token = Buffer.from(`${Date.now()}-${Math.random()}`).toString(
      "base64"
    );

    return res.status(200).json({
      success: true,
      token: token,
      expires: Date.now() + 30 * 60 * 1000, // 30 minutes
    });
  }

  return res.status(401).json({ success: false, error: "Invalid password" });
}
