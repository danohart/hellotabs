import Place from "../../components/Place";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import fetcher from "../../lib/fetcher";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

export default function SinglePlace() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? "/api/place/" + id : null, fetcher);

  if (!router.isReady || !id) {
    return <Loader />;
  }

  if (error) {
    console.error("Error loading place:", error);
    return <div>Failed to load place. Please try again.</div>;
  }

  if (!data) {
    return <Loader />;
  }

  if (!data.success || !data.place) {
    return <div>Place not found.</div>;
  }

  return (
    <>
      <Meta title={`${data.place.name} Daily Specials`} />
      <Header title='Everyday Specials' />
      <div className='flex flex-col items-center'>
        <div className='md:w-1/2'>
          <Place place={data.place} day='allDays' showDays={true} />
        </div>
      </div>
    </>
  );
}
