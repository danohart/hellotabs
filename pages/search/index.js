import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PlaceCard from "../../components/PlaceCard";
import Loader from "../../components/Loader";
import Meta from "../../components/Meta";
import fetcher from "../../lib/fetcher";
import SearchBar from "../../components/SearchBar";
import BottomNav from "../../components/BottomNav";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";

const PRICE_LEVELS = [
  { value: "PRICE_LEVEL_INEXPENSIVE", label: "$" },
  { value: "PRICE_LEVEL_MODERATE", label: "$$" },
  { value: "PRICE_LEVEL_EXPENSIVE", label: "$$$" },
  { value: "PRICE_LEVEL_VERY_EXPENSIVE", label: "$$$$" },
];

const VIBE_OPTIONS = [
  { value: "outdoorSeating", label: "Outdoor" },
  { value: "goodForGroups", label: "Groups" },
  { value: "liveMusic", label: "Live Music" },
  { value: "goodForWatchingSports", label: "Sports" },
];

function toggleValue(arr, value) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium transition-colors text-sm ${
        active
          ? "bg-purple-500 text-white dark:bg-purple-800"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
      }`}
    >
      {children}
    </button>
  );
}

export default function SearchIndex() {
  const router = useRouter();
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const [filters, setFilters] = useState({
    price: [],
    specials: [],
    vibe: [],
  });

  const searchQuery = router.query.s;

  const { data, error } = useSWR(
    searchQuery ? "/api/search/" + searchQuery : null,
    fetcher
  );

  useScrollRestoration(`scroll:search:${searchQuery || ""}`, Boolean(data));

  function showMorePlaces() {
    setAmountOfPlaces((prev) => prev + 10);
  }

  function toggleFilter(group, value) {
    setFilters((prev) => ({
      ...prev,
      [group]: toggleValue(prev[group], value),
    }));
    setAmountOfPlaces(10);
  }

  // Reached directly (e.g. via the bottom nav's Search tab) with no query
  // yet — prompt for one instead of spinning on a fetch that never starts.
  if (!searchQuery) {
    return (
      <div className='m-2 pb-24'>
        <Meta title='Hello Chicago - Search' />
        <Header />
        <div className='flex flex-col items-center'>
          <div className='w-full md:w-1/2'>
            <SearchBar />
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  const allPlaces = data.places || [];

  // Apply client-side filters
  const filteredPlaces = allPlaces.filter((place) => {
    // Price: OR — match any selected price level
    if (filters.price.length > 0) {
      if (!filters.price.includes(place.googlePlaces?.priceLevel)) return false;
    }

    // Specials: OR — match any selected category across all events
    if (filters.specials.length > 0) {
      const menuCategories = place.events.flatMap((e) =>
        e.menu.map((m) => m.category)
      );
      if (!filters.specials.some((s) => menuCategories.includes(s)))
        return false;
    }

    // Vibe: AND — must match all selected attributes
    if (filters.vibe.length > 0) {
      if (
        !filters.vibe.every((v) => place.googlePlaces?.attributes?.[v] === true)
      )
        return false;
    }

    return true;
  });

  const visiblePlaces = filteredPlaces.slice(0, amountOfPlaces);

  return (
    <div className='m-2 pb-24'>
      <Meta title='Hello Chicago - Search' />
      <Header title={`Find: ${searchQuery}`} />
      <SearchBar placeholder={searchQuery} />
      <main>
        <div className='flex flex-col w-full items-center'>
          <div className='flex flex-col md:w-1/2 w-full'>

            {/* ── Filters ── */}
            <div className='py-4 space-y-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 w-14 shrink-0'>
                  Price
                </span>
                <div className='flex gap-2 flex-wrap'>
                  {PRICE_LEVELS.map(({ value, label }) => (
                    <FilterButton
                      key={value}
                      active={filters.price.includes(value)}
                      onClick={() => toggleFilter("price", value)}
                    >
                      {label}
                    </FilterButton>
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-2 flex-wrap'>
                <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 w-14 shrink-0'>
                  Specials
                </span>
                <div className='flex gap-2 flex-wrap'>
                  <FilterButton
                    active={filters.specials.includes("Food")}
                    onClick={() => toggleFilter("specials", "Food")}
                  >
                    Food
                  </FilterButton>
                  <FilterButton
                    active={filters.specials.includes("Drink")}
                    onClick={() => toggleFilter("specials", "Drink")}
                  >
                    Drinks
                  </FilterButton>
                </div>
              </div>

              <div className='flex items-center gap-2 flex-wrap'>
                <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 w-14 shrink-0'>
                  Vibe
                </span>
                <div className='flex gap-2 flex-wrap'>
                  {VIBE_OPTIONS.map(({ value, label }) => (
                    <FilterButton
                      key={value}
                      active={filters.vibe.includes(value)}
                      onClick={() => toggleFilter("vibe", value)}
                    >
                      {label}
                    </FilterButton>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Results ── */}
            {visiblePlaces.length === 0 ? (
              <div className='text-center text-gray-500 dark:text-gray-400 mt-6 text-sm'>
                {allPlaces.length === 0
                  ? `Nothing matching "${searchQuery}". Try searching something else.`
                  : "No results match the selected filters."}
              </div>
            ) : (
              visiblePlaces.map((place) => (
                <PlaceCard place={place} key={place._id} />
              ))
            )}

            {filteredPlaces.length > amountOfPlaces && (
              <div className='flex justify-center w-full mt-4'>
                <button
                  className='w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded'
                  onClick={showMorePlaces}
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
