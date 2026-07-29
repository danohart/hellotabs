import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

// Google's CSS endpoint serves woff2 to modern browsers, but satori only
// accepts ttf/otf. An old-browser UA makes it fall back to a truetype src,
// which we then fetch and hand to ImageResponse. Cached at module scope so
// warm edge instances don't re-fetch on every request.
const fontCache = new Map();
async function loadInter(weight) {
  if (fontCache.has(weight)) return fontCache.get(weight);
  const promise = (async () => {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko)",
        },
      },
    ).then((res) => res.text());
    const match = css.match(/src: url\(([^)]+)\) format\('truetype'\)/);
    if (!match) throw new Error(`Failed to resolve Inter ${weight} font URL`);
    return fetch(match[1]).then((res) => res.arrayBuffer());
  })();
  fontCache.set(weight, promise);
  return promise;
}

// Same purple/rose category split as components/PlaceCard.js's SpecialPills,
// just bolder now that a real Inter weight is loaded instead of the default
// regular-only fallback font.
function DealPill({ label, category }) {
  const isFood = category === "Food";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px 26px",
        borderRadius: 14,
        fontSize: 32,
        fontWeight: 700,
        background: isFood ? "#fecdd3" : "#e9d5ff",
        color: isFood ? "#9f1239" : "#581c87",
      }}
    >
      {label}
    </div>
  );
}

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const neighborhood = searchParams.get("neighborhood");
  const deals = [1, 2, 3]
    .map((i) => ({
      label: searchParams.get(`deal${i}`),
      category: searchParams.get(`deal${i}cat`),
    }))
    .filter((d) => d.label);

  const [black, bold, semibold] = await Promise.all([
    loadInter(900),
    loadInter(700),
    loadInter(600),
  ]);

  const nameLength = (name || "").length;
  const nameFontSize = !name ? 56 : nameLength > 22 ? 60 : nameLength > 14 ? 72 : 88;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #4C1D6B 0%, #1E1030 100%)",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 900,
                letterSpacing: 1,
                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              Hello Chicago
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2,
                color: "rgba(255,255,255,0.65)",
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              Chicago&rsquo;s Happy Hour Deals
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 1,
              color: "#ffffff",
              textTransform: "uppercase",
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.4)",
            }}
          >
            Happy Hour
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: nameFontSize,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: -2,
              textTransform: name ? "uppercase" : "none",
            }}
          >
            {name || "Chicago's best happy hours, daily"}
          </div>
          {neighborhood && (
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: 1,
                color: "#fdba74",
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              {neighborhood}
            </div>
          )}
        </div>

        {deals.length > 0 && (
          <div style={{ display: "flex", gap: 16 }}>
            {deals.map((deal, i) => (
              <DealPill key={i} label={deal.label} category={deal.category} />
            ))}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: black, weight: 900, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
