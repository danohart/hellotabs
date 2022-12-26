import Meta from "./Meta";

export default function Loader({ pageInfo }) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Meta title={!pageInfo ? null : pageInfo.title} />
      <div className='font-bold text-4xl flex flex-row'>
        Get ready
        <div className='animate-[pulse_1s_ease-in-out_infinite]'>.</div>
        <div className='animate-[pulse_1.5s_ease-in-out_infinite]'>.</div>
        <div className='animate-[pulse_2s_ease-in-out_infinite]'>.</div>
      </div>
    </div>
  );
}
