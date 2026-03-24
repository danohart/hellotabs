import Link from "next/link";

const priceLabels = {
  PRICE_LEVEL_FREE: "Free",
  PRICE_LEVEL_INEXPENSIVE: "$",
  PRICE_LEVEL_MODERATE: "$$",
  PRICE_LEVEL_EXPENSIVE: "$$$",
  PRICE_LEVEL_VERY_EXPENSIVE: "$$$$",
};

function formatPlaceType(type) {
  if (!type) return null;
  return type
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function SimilarPlaces({ title, places }) {
  if (!places || places.length === 0) {
    return null;
  }

  return (
    <div className='mt-6 pt-6 border-t border-gray-200 dark:border-gray-600'>
      <h3 className='text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300'>
        {title}
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
        {places.map((place) => (
          <Link
            key={place._id}
            href={`/place/${place.slug || place._id}`}
            className='block p-3 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500 transition-colors'
          >
            <h4 className='font-semibold text-purple-600 dark:text-purple-400 text-sm truncate'>
              {place.name}
            </h4>
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
              {place.neighborhood}
            </p>
            {place.googlePlaces && (
              <div className='flex flex-wrap gap-1 mt-2'>
                {place.googlePlaces.primaryType && (
                  <span className='text-xs px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded'>
                    {formatPlaceType(place.googlePlaces.primaryType)}
                  </span>
                )}
                {place.googlePlaces.priceLevel && priceLabels[place.googlePlaces.priceLevel] && (
                  <span className='text-xs px-1.5 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded'>
                    {priceLabels[place.googlePlaces.priceLevel]}
                  </span>
                )}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
