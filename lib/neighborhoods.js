const neighborhoods = [
  "Garfield Ridge",
  "Lincoln Park",
  "Ukrainian Village",
  "Irving Park",
  "Lakeview",
  "Near North Side",
  "Printers Row",
  "Streeterville",
  "North Center",
  "Edison Park",
  "West Loop",
  "West Town",
  "Wicker Park",
  "Logan Square",
  "Wrigleyville",
  "Lincoln Square",
  "Edgewater",
  "Portage Park",
  "Old Town",
  "West Rogers Park",
  "River North",
  "Avondale",
  "Humboldt Park",
  "South Loop",
  "Bucktown",
  "Rogers Park",
  "Norwood Park",
  "Near West Side",
  "Bridgeport",
  "Loop",
  "Noble Square",
  "Andersonville",
  "Uptown",
  "University Village",
  "Roscoe Village",
  "Pilsen",
];

import { slugify } from "./slugify";

export const neighborhoodToSlug = neighborhoods.reduce((acc, neighborhood) => {
  acc[neighborhood] = slugify(neighborhood);
  return acc;
}, {});

export const slugToNeighborhood = neighborhoods.reduce((acc, neighborhood) => {
  acc[slugify(neighborhood)] = neighborhood;
  return acc;
}, {});

export default neighborhoods;
