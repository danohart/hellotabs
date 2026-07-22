import { useEffect } from "react";
import PlaceDetail from "../../components/PlaceDetail";
import Loader from "../../components/Loader";
import Meta from "../../components/Meta";
import JsonLd from "../../components/JsonLd";
import SimilarPlaces from "../../components/SimilarPlaces";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { isValidObjectId } from "../../lib/slugify";
import { findSimilarPlaces } from "../api/places/similar";
import { trackEvent } from "../../lib/analytics";

export async function getServerSideProps({ params, res }) {
  const { id } = params;
  const { db } = await connectToDatabase();

  let place;

  if (isValidObjectId(id)) {
    place = await db
      .collection("eventPlaces")
      .findOne({ _id: new ObjectId(id) });

    if (place && place.slug) {
      return {
        redirect: {
          destination: `/place/${place.slug}`,
          permanent: true,
        },
      };
    }
  } else {
    place = await db.collection("eventPlaces").findOne({ slug: id });
  }

  if (!place) {
    return { notFound: true };
  }

  // Fetch similar places using scored type matching
  const { similar: similarInNeighborhood, citywide: similarCitywide } =
    await findSimilarPlaces(db, place);

  return {
    props: {
      place: JSON.parse(JSON.stringify(place)),
      similarInNeighborhood: JSON.parse(JSON.stringify(similarInNeighborhood)),
      similarCitywide: JSON.parse(JSON.stringify(similarCitywide)),
    },
  };
}

export default function SinglePlace({ place, similarInNeighborhood, similarCitywide }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (place) {
      trackEvent("place_viewed", {
        place_name: place.name,
        neighborhood: place.neighborhood,
        slug: place.slug,
      });
    }
  }, []);

  if (!place) {
    return <Loader />;
  }

  // Build a richer description with actual deals if available
  const happyHourEvent = place.events?.find((e) => e.keywords === "happyHour");
  const hasMenu = happyHourEvent?.menu && happyHourEvent.menu.length > 0;

  let metaDescription;
  if (hasMenu && place.neighborhood) {
    const deals = happyHourEvent.menu.slice(0, 2).map(item =>
      item.price ? `$${item.price} ${item.name.toLowerCase()}` : item.name
    ).join(", ");
    metaDescription = `${place.name} happy hour in ${place.neighborhood}, Chicago. ${deals} and more daily specials. View times, menu & deals.`;
  } else if (place.neighborhood) {
    metaDescription = `Happy hour specials at ${place.name} in ${place.neighborhood}, Chicago. Daily drink and food deals with times and menu.`;
  } else {
    metaDescription = `Happy hour specials at ${place.name} in Chicago. Daily drink and food deals with times and menu.`;
  }

  return (
    <>
      <Meta
        title={`${place.name} Happy Hour - ${place.neighborhood || "Chicago"} Deals & Times`}
        description={metaDescription}
      />
      <JsonLd place={place} />
      <div className='flex flex-col items-center pb-24'>
        <div className='w-full md:w-1/2 px-4'>
          <PlaceDetail place={place} />

          <SimilarPlaces
            title={`Similar in ${place.neighborhood}`}
            places={similarInNeighborhood}
            section="neighborhood"
            fromPlace={place.name}
          />

          <SimilarPlaces
            title='Similar across Chicago'
            places={similarCitywide}
            section="citywide"
            fromPlace={place.name}
          />
        </div>
      </div>
    </>
  );
}
