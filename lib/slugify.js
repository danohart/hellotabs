export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars except -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function unslugify(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generatePlaceSlug(name, neighborhood) {
  const nameSlug = slugify(name);
  const neighborhoodSlug = slugify(neighborhood);
  return `${nameSlug}-${neighborhoodSlug}`;
}

export function isValidObjectId(str) {
  return /^[a-f\d]{24}$/i.test(str);
}
