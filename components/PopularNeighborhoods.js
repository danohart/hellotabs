import Link from "next/link";

const POPULAR_NEIGHBORHOODS = [
  { name: "Logan Square", slug: "logan-square", description: "Craft cocktails & neighborhood bars" },
  { name: "Lakeview", slug: "lakeview", description: "Sports bars & casual hangouts" },
  { name: "West Loop", slug: "west-loop", description: "Upscale dining & cocktail lounges" },
  { name: "Wicker Park", slug: "wicker-park", description: "Hip bars & trendy spots" },
  { name: "Lincoln Park", slug: "lincoln-park", description: "Classic pubs & wine bars" },
  { name: "Roscoe Village", slug: "roscoe-village", description: "Cozy taverns & local favorites" },
  { name: "River North", slug: "river-north", description: "Upscale bars & late night" },
  { name: "Old Town", slug: "old-town", description: "Historic pubs & Irish bars" },
];

export default function PopularNeighborhoods() {
  return (
    <div className="my-8 px-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Browse Happy Hour by Neighborhood
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Find the best happy hour deals in Chicago's most popular neighborhoods
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {POPULAR_NEIGHBORHOODS.map((neighborhood) => (
          <Link
            key={neighborhood.slug}
            href={`/neighborhood/${neighborhood.slug}`}
            className="group block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400">
              {neighborhood.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {neighborhood.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
