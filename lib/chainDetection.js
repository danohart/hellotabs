// lib/chainDetection.js
// Decides whether a discovered candidate is likely a chain vs. an
// independently-owned local business. This module only classifies — it's
// scripts/discoverPlaces.js that acts on the result: candidates flagged here
// with confidence "high" (blocklist or OSM brand match) are excluded from
// insertion outright, while "low"-confidence (LLM-only) flags still get
// inserted with `chainCheck` stored on the stub for manual review in
// pages/admin/stale.js.
//
// Three layers, cheapest/most-certain first:
//   1. Static blocklist match (free, instant, confidence "high")
//   2. OpenStreetMap `brand` tag, if lib/overpass.js found one for this
//      candidate (free, deterministic, confidence "high")
//   3. Claude Haiku classification (cheap, handles everything else, confidence "low")

const CHAIN_BLOCKLIST = require("./chainBlocklist");
const { normalizeName } = require("./placeMatching");

const NORMALIZED_BLOCKLIST = CHAIN_BLOCKLIST.map(normalizeName);

function checkBlocklist(name) {
  const normalized = normalizeName(name);
  if (!normalized) return false;
  return NORMALIZED_BLOCKLIST.some(
    (chain) => chain && (normalized === chain || normalized.includes(chain))
  );
}

async function classifyWithClaude({ name, address, types, apiKey }) {
  const key = apiKey || process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return {
      isChain: null,
      confidence: "low",
      source: "unavailable",
      reasoning: "No ANTHROPIC_API_KEY configured",
    };
  }

  const Anthropic = require("@anthropic-ai/sdk");
  const client = new Anthropic({ apiKey: key });

  const prompt = `You help a Chicago happy-hour/deals directory decide whether a business is independently/locally owned, or part of a regional/national chain (2+ locations under common ownership or branding — count Chicago-founded multi-location chains like Portillo's or Potbelly as chains too).

Business name: ${name}
Address: ${address || "unknown"}
Google place types: ${(types || []).join(", ") || "unknown"}

Respond with ONLY a JSON object, no other text:
{"isChain": true or false, "confidence": "high" or "low", "reasoning": "one short sentence"}`;

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 200,
      messages: [{ role: "user", content: prompt }],
    });

    const rawText = response.content[0]?.text || "";
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return {
        isChain: null,
        confidence: "low",
        source: "llm",
        reasoning: "Could not parse model response",
      };
    }

    const parsed = JSON.parse(jsonMatch[0]);
    return {
      isChain: Boolean(parsed.isChain),
      confidence: parsed.confidence === "high" ? "high" : "low",
      source: "llm",
      reasoning: parsed.reasoning || "",
    };
  } catch (err) {
    return {
      isChain: null,
      confidence: "low",
      source: "llm-error",
      reasoning: err.message,
    };
  }
}

// { name, address, types, osmBrand } -> { isChain, confidence, source, reasoning }
async function checkIfChain({ name, address, types = [], osmBrand, apiKey }) {
  if (checkBlocklist(name)) {
    return {
      isChain: true,
      confidence: "high",
      source: "blocklist",
      reasoning: `"${name}" matches a known chain name`,
    };
  }

  if (osmBrand) {
    return {
      isChain: true,
      confidence: "high",
      source: "osm-brand",
      reasoning: `OpenStreetMap tags this location with brand "${osmBrand}"`,
    };
  }

  return classifyWithClaude({ name, address, types, apiKey });
}

module.exports = { checkIfChain, checkBlocklist };
