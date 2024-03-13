import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Place from "../../components/Place";
import Loader from "../../components/Loader";
import Meta from "../../components/Meta";
import fetcher from "../../lib/fetcher";

import SearchBar from "../../components/SearchBar";

export default function SearchIndex() {
  const router = useRouter();
  let [amountOfPlaces, setAmountOfPlaces] = useState(10);

  const searchQuery = router.query.s;

  const { data, error } = useSWR("/api/search/" + searchQuery, fetcher);

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  const places = data.places;

  const bars = places.slice(0, amountOfPlaces);

  console.log(places);

  return (
    <div className='m-2'>
      <Meta title='Hello Chicago - Search' />
      <Header title={`Find: ${searchQuery}`} />

      <SearchBar placeholder={searchQuery} />
      <main>
        <div className='flex flex-col w-full items-center'>
          <div className='flex flex-col md:w-1/2'>
            {bars.length === 0 ? (
              <div>
                Nothing matching &quot;{searchQuery}&quot;. Try searching
                something else.
              </div>
            ) : (
              bars.map((bar) => (
                <Place place={bar} day={"allDays"} showDays={true} key={bar._id} />
              ))
            )}
            {bars && bars.length >= 10 && bars.length !== places.length ? (
              <div className='flex justify-center w-full'>
                <button
                  className='w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded'
                  onClick={showMorePlaces}
                >
                  See More
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
