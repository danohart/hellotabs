import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Image from "next/image";
import Place from "../../components/Place";

import "tailwindcss/tailwind.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Search() {
  const router = useRouter();
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const searchQuery = router.query.s;

  const { data, error } = useSWR("/api/search/" + searchQuery, fetcher);

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
        <title>Little Tabs - Search</title>
        <meta name='description' content='Happy Hour in Chicago' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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

      <footer>
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
