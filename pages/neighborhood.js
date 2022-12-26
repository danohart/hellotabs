import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Image from "next/image";
import Place from "../components/Place";
import getDay from "../lib/date";
import Loader from "../components/Loader";
import Head from "next/head";
import fetcher from "../lib/fetcher";

import "tailwindcss/tailwind.css";

export default function Neighborhood(props) {
  const router = useRouter();
  let [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const day = getDay();
  const neighborhood = router.query.n;

  const { data, error } = useSWR("/api/neighborhood/" + neighborhood, fetcher);

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  const places = data.places;

  const bars = places.slice(0, amountOfPlaces);
  console.log("proppppps", props);

  return (
    <div className='m-2'>
      <Head>
        <title>{`${props.title} Specials - Hello Chicago`}</title>
      </Head>
      <Header title={`Today's Neighborhood Specials : ${neighborhood}`} />
      <main>
        <div className='flex flex-wrap w-full'>
          {bars.length === 0 ? (
            <div className='w-full text-center py-12 text-4xl'>
              No neighborhood{" "}
              <span className='font-bold'>&quot;{neighborhood}&quot;</span> has
              been found. Please go back and search again.
            </div>
          ) : (
            bars.map((bar) => <Place place={bar} day={day} key={bar._id} />)
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
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("content", context.params);
  return {
    props: { title: "Bibs" }, // will be passed to the page component as props
  };
}
