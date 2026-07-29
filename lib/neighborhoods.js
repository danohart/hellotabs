// Kept in lib/neighborhoods.json (and lib/relatedNeighborhoods.json below) so
// plain node scripts (e.g. scripts/discoverPlaces.js) can require() the same
// data without going through Next's ES module pipeline.
import neighborhoods from "./neighborhoods.json";
import relatedNeighborhoodsData from "./relatedNeighborhoods.json";

import { slugify } from "./slugify";

export const neighborhoodToSlug = neighborhoods.reduce((acc, neighborhood) => {
  acc[neighborhood] = slugify(neighborhood);
  return acc;
}, {});

export const slugToNeighborhood = neighborhoods.reduce((acc, neighborhood) => {
  acc[slugify(neighborhood)] = neighborhood;
  return acc;
}, {});

export const relatedNeighborhoods = relatedNeighborhoodsData;

export function getRelatedNeighborhoods(neighborhood) {
  return relatedNeighborhoods[neighborhood] || [];
}

export const POPULAR_NEIGHBORHOODS = [
  {
    name: "Logan Square",
    slug: "logan-square",
    description: "Craft cocktails & neighborhood bars",
  },
  {
    name: "Lakeview",
    slug: "lakeview",
    description: "Sports bars & casual hangouts",
  },
  {
    name: "West Loop",
    slug: "west-loop",
    description: "Upscale dining & cocktail lounges",
  },
  {
    name: "Wicker Park",
    slug: "wicker-park",
    description: "Hip bars & trendy spots",
  },
  {
    name: "Lincoln Park",
    slug: "lincoln-park",
    description: "Classic pubs & wine bars",
  },
  {
    name: "Roscoe Village",
    slug: "roscoe-village",
    description: "Cozy taverns & local favorites",
  },
  {
    name: "River North",
    slug: "river-north",
    description: "Upscale bars & late night",
  },
  {
    name: "Old Town",
    slug: "old-town",
    description: "Historic pubs & Irish bars",
  },
];

export default neighborhoods;
