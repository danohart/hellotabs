import Anthropic from "@anthropic-ai/sdk";

const EXTRACTION_PROMPT = `You are a data extraction assistant for a Chicago bar happy hour directory.

Analyze this image of a happy hour menu, chalkboard, or printed special and extract the structured information.

Return ONLY a JSON object wrapped in a \`\`\`json code block with this exact structure:
\`\`\`json
{
  "name": "Happy Hour",
  "description": "Brief description of the special if visible",
  "keywords": "happyHour",
  "eventSchedule": [
    {
      "byDay": ["MO", "TU", "WE", "TH", "FR"],
      "startTime": "1600",
      "endTime": "1900"
    }
  ],
  "menu": [
    {
      "name": "Draft Beer",
      "category": "Drink",
      "price": 4
    },
    {
      "name": "Well Cocktails",
      "category": "Drink",
      "price": 6
    }
  ]
}
\`\`\`

Rules:
- "byDay" must use these exact codes: MO=Monday, TU=Tuesday, WE=Wednesday, TH=Thursday, FR=Friday, SA=Saturday, SU=Sunday
- "startTime" and "endTime" must be 24-hour format as a 4-character string with NO colon, e.g. "1600" for 4pm, "2100" for 9pm
- "price" should be a number (dollars, no $ sign). Use null if no price is listed.
- "category" must be exactly "Drink" or "Food"
- "name" for the event should reflect what is written, defaulting to "Happy Hour"
- If multiple schedules exist (e.g., different days have different times), include multiple objects in eventSchedule
- If you cannot determine a value, omit that field rather than guessing
- Do not include any explanation outside the JSON block`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, imageBase64, mediaType } = req.body;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  if (!imageBase64) {
    return res.status(400).json({ error: "No image provided" });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mediaType || "image/jpeg",
                data: imageBase64,
              },
            },
            {
              type: "text",
              text: EXTRACTION_PROMPT,
            },
          ],
        },
      ],
    });

    const rawText = response.content[0]?.text || "";

    const jsonMatch =
      rawText.match(/```json\n([\s\S]*?)\n```/) ||
      rawText.match(/```json\n([\s\S]*?)```/) ||
      rawText.match(/(\{[\s\S]*\})/);

    if (!jsonMatch) {
      return res.status(422).json({
        error:
          "Could not extract structured data from image. Try a clearer photo or enter the details manually.",
        raw: rawText,
      });
    }

    const extracted = JSON.parse(jsonMatch[1]);

    return res.json({ success: true, event: extracted });
  } catch (error) {
    console.error("extract-special error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
