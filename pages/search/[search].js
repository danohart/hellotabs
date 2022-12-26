import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Place from "../../components/Place";
import fetcher from "../../lib/fetcher";

import "tailwindcss/tailwind.css";

export default function Search() {
  const router = useRouter();
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const searchQuery = router.query.s;

  const { data, error } = useSWR("/api/search/" + searchQuery, fetcher);

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  const places = data.places;

  const bars = places.slice(0, amountOfPlaces);

  return (
    <div className='m-2'>
      <Meta title='Hello Chicago - Search' />
      <Header title={`Find: ${searchQuery}`} />
      <main>
        <div className='flex flex-wrap w-full'>
          {bars.map((bar) => (
            <Place place={bar} day={"allDays"} key={bar._id} />
          ))}
          {bars && bars.length > 10 ? (
            <button
              className='w-50 justify-self-center bg-purple-500 text-white font-bold py-2 px-4 rounded'
              onClick={showMorePlaces}
            >
              See More
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
}
