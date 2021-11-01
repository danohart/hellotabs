export default function Place(props) {
  return (
    <div className='p-6 w-full border-2 rounded mb-2 bg-white'>
      <h2 className='text-4xl font-bold'>{props.place.name}</h2>
      <div className='text-purple-500'>{props.place.address}</div>
      <div className='font-semibold'>
        {props.place.specials ? props.place.specials : "No Specials"}
      </div>
    </div>
  );
}
