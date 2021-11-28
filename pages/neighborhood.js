import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Place from "../components/Place";
import getDay from "../lib/date";

import "tailwindcss/tailwind.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const router = useRouter();
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const day = getDay();
  const neighborhood = router.query.n;

  const { data, error } = useSWR("/api/neighborhood/" + neighborhood, fetcher);

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const places = data.places;

  const bars = places.slice(0, amountOfPlaces);

  return (
    <div className='m-2'>
      <Head>
        <title>Little Tabs - Neighborhood</title>
        <meta name='description' content='Happy Hour in Chicago' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header title={`Neighborhood Specials : ${neighborhood}`} />
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

      <footer className='flex justify-center w-full py-12'>
        <br />
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
