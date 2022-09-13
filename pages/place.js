import Place from "../components/Place";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import fetcher from "../lib/fetcher";
import Header from "../components/Header";
import Meta from "../components/Meta";

export default function SinglePlace() {
  const router = useRouter();
  const placeId = router.query.id
    ? router.query.id
    : router.asPath.split("=")[1];

  console.log("router", router.asPath.split("=")[1]);

  const { data, error } = useSWR("/api/place/" + placeId, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <>
      <Meta title={`${data.place.name} Daily Specials`} />
      <Header title='Everyday Specials' />
      <Place place={data.place} day='allDays' />
    </>
  );
}
