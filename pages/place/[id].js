import Place from "../../components/Place";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import JsonLd from "../../components/JsonLd";
import SimilarPlaces from "../../components/SimilarPlaces";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { isValidObjectId } from "../../lib/slugify";
import { findSimilarPlaces } from "../api/places/similar";

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
  if (!place) {
    return <Loader />;
  }

  const metaDescription = place.neighborhood
    ? `Happy hour specials at ${place.name} in ${place.neighborhood}, Chicago. View daily drink and food deals.`
    : `Happy hour specials at ${place.name} in Chicago. View daily drink and food deals.`;

  return (
    <>
      <Meta
        title={`${place.name} Happy Hour Specials | ${place.neighborhood || "Chicago"}`}
        description={metaDescription}
      />
      <JsonLd place={place} />
      <Header title='Everyday Specials' />
      <div className='flex flex-col items-center'>
        <div className='md:w-1/2'>
          <Place place={place} day='allDays' showDays={true} />

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
