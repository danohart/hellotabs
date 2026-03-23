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

export const relatedNeighborhoods = {
  "Logan Square": ["Bucktown", "Wicker Park", "Humboldt Park", "Avondale"],
  "Bucktown": ["Logan Square", "Wicker Park", "Lincoln Park", "Ukrainian Village"],
  "Wicker Park": ["Bucktown", "Ukrainian Village", "West Town", "Logan Square"],
  "Lincoln Park": ["Lakeview", "Old Town", "Wrigleyville", "North Center", "Bucktown"],
  "Lakeview": ["Lincoln Park", "Wrigleyville", "North Center", "Roscoe Village", "Uptown"],
  "Wrigleyville": ["Lakeview", "Lincoln Park", "North Center", "Roscoe Village"],
  "West Loop": ["Near West Side", "University Village", "Loop", "West Town"],
  "River North": ["Near North Side", "Old Town", "Streeterville", "Loop"],
  "Old Town": ["Lincoln Park", "River North", "Near North Side", "Wrigleyville"],
  "Ukrainian Village": ["Wicker Park", "West Town", "Humboldt Park", "Bucktown"],
  "West Town": ["Wicker Park", "Ukrainian Village", "West Loop", "Noble Square"],
  "Humboldt Park": ["Logan Square", "Ukrainian Village", "Wicker Park", "Avondale"],
  "Avondale": ["Logan Square", "Irving Park", "North Center", "Humboldt Park"],
  "North Center": ["Lincoln Park", "Lakeview", "Roscoe Village", "Lincoln Square"],
  "Roscoe Village": ["North Center", "Lakeview", "Wrigleyville", "Lincoln Square"],
  "Lincoln Square": ["North Center", "Roscoe Village", "Andersonville", "Edgewater"],
  "Andersonville": ["Lincoln Square", "Edgewater", "Uptown", "Rogers Park"],
  "Edgewater": ["Andersonville", "Uptown", "Rogers Park", "Lincoln Square"],
  "Uptown": ["Edgewater", "Andersonville", "Lakeview", "Lincoln Square"],
  "Rogers Park": ["Edgewater", "Andersonville", "West Rogers Park"],
  "Near North Side": ["River North", "Streeterville", "Old Town", "Loop"],
  "Streeterville": ["Near North Side", "River North", "Loop"],
  "Loop": ["West Loop", "River North", "South Loop", "Near North Side"],
  "South Loop": ["Loop", "Printers Row", "Near West Side", "Bridgeport"],
  "Printers Row": ["South Loop", "Loop"],
  "Near West Side": ["West Loop", "University Village", "Pilsen", "South Loop"],
  "University Village": ["Near West Side", "Pilsen", "West Loop"],
  "Pilsen": ["University Village", "Near West Side", "Bridgeport"],
  "Bridgeport": ["Pilsen", "South Loop"],
  "Noble Square": ["West Town", "Wicker Park", "Ukrainian Village"],
  "West Rogers Park": ["Rogers Park", "Edgewater"],
  "Irving Park": ["Avondale", "North Center", "Portage Park"],
  "Portage Park": ["Irving Park", "Norwood Park", "Edison Park"],
  "Edison Park": ["Norwood Park", "Portage Park"],
  "Norwood Park": ["Edison Park", "Portage Park"],
  "Garfield Ridge": [],
};

export function getRelatedNeighborhoods(neighborhood) {
  return relatedNeighborhoods[neighborhood] || [];
}

export default neighborhoods;
