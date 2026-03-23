import { connectToDatabase } from "../lib/mongodb";
import neighborhoods from "../lib/neighborhoods";
import { slugify } from "../lib/slugify";

function generateSiteMap(places, neighborhoodSlugs) {
  const baseUrl = "https://www.hellochicago.co";

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Neighborhood Pages -->
  ${neighborhoodSlugs
    .map(
      (slug) => `
  <url>
    <loc>${baseUrl}/neighborhood/${slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}

  <!-- Place Pages -->
  ${places
    .map(
      (place) => `
  <url>
    <loc>${baseUrl}/place/${place.slug}</loc>
    ${place.lastUpdated ? `<lastmod>${new Date(place.lastUpdated).toISOString().split("T")[0]}</lastmod>` : ""}
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const { db } = await connectToDatabase();

  const places = await db
    .collection("eventPlaces")
    .find(
      { enabled: true, slug: { $exists: true, $ne: null } },
      { projection: { slug: 1, lastUpdated: 1 } }
    )
    .toArray();

  const neighborhoodSlugs = neighborhoods.map((n) => slugify(n));

  const sitemap = generateSiteMap(
    JSON.parse(JSON.stringify(places)),
    neighborhoodSlugs
  );

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
