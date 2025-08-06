import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Place from "../../components/Place";
import { getDay } from "../../lib/date";
import Loader from "../../components/Loader";
import fetcher from "../../lib/fetcher";
import Neighborhoods from "../../lib/neighborhoods";
import { hasActiveHappyHour } from "../../lib/time";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

const slugToNeighborhood = Neighborhoods.reduce((acc, neighborhood) => {
  acc[slugify(neighborhood)] = neighborhood;
  return acc;
}, {});

const neighborhoodToSlug = Neighborhoods.reduce((acc, neighborhood) => {
  acc[neighborhood] = slugify(neighborhood);
  return acc;
}, {});

export default function Neighborhood(props) {
  const router = useRouter();

  let [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const day = getDay();
  const neighborhoodParam = router.query.neighborhood;

  const neighborhood =
    slugToNeighborhood[neighborhoodParam] || neighborhoodParam;
  const slug = neighborhoodToSlug[neighborhood] || slugify(neighborhood);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      neighborhood &&
      neighborhoodParam !== slug
    ) {
      if (Neighborhoods.includes(neighborhood) && neighborhoodParam !== slug) {
        router.replace(`/neighborhood/${slug}`, undefined, { shallow: true });
      }
    }
  }, [neighborhood, neighborhoodParam, slug, router]);

  const { data, error } = useSWR(
    `/api/neighborhood/${neighborhood}?day=${day}`,
    fetcher
  );

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader pageInfo={props} />;
  let places = data.places;

  let activeSpecialsPlaces = places.filter((place) =>
    hasActiveHappyHour(place, day)
  );
  let otherPlaces = places.filter((place) => !hasActiveHappyHour(place, day));
  places = [...activeSpecialsPlaces, ...otherPlaces];

  const bars = places.slice(0, amountOfPlaces);

  return (
    <div className='m-2'>
      <Meta title={props.title} description={props.description} />
      <Header />
      <main>
        <div className='text-center text-2xl italic mb-8 mt-4'>{`Today's ${neighborhood} Specials`}</div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col md:w-1/2'>
            {bars.length === 0 ? (
              <div className='w-full text-center py-12 text-4xl'>
                No neighborhood{" "}
                <span className='font-bold'>&quot;{neighborhood}&quot;</span>{" "}
                has been found. Please go back and search again.
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
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Neighborhoods.map((neighb) => ({
    params: { neighborhood: slugify(neighb) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const neighborhood =
    slugToNeighborhood[params.neighborhood] || params.neighborhood;

  if (!Neighborhoods.includes(neighborhood)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: `Best Happy Hours in ${neighborhood}, // Hello Chicago`,
      description: `List of bars and restaurants in the ${neighborhood} neighborhood of Chicago that serve happy hour specials and deals.`,
      neighborhood,
      slug: slugify(neighborhood),
    },
  };
}
