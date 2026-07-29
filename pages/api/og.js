import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

// Purple/rose split mirrors components/PlaceCard.js's SpecialPills, inverted
// to light-on-dark since this renders against a dark purple gradient instead
// of a card background.
function DealPill({ label, category }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 20px",
        borderRadius: 12,
        fontSize: 28,
        fontWeight: 700,
        background: category === "Food" ? "#fecdd3" : "#e9d5ff",
        color: category === "Food" ? "#9f1239" : "#581c87",
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
          background: "linear-gradient(135deg, #6C51A6 0%, #7D5EBF 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#e9d5ff",
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
              letterSpacing: 3,
              color: "#c4b5fd",
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
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: name ? 72 : 56,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {name || "Chicago's best happy hours, daily"}
          </div>
          {neighborhood && (
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 600,
                color: "#e9d5ff",
                marginTop: 12,
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
    }
  );
}
