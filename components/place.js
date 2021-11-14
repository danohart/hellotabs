export default function Place({ place, day }) {
  return (
    <div className='p-6 w-full border-2 rounded mb-2 bg-white' key={place.name}>
      <h2 className='text-4xl font-bold'>{place.name}</h2>
      <div className='text-purple-500'>{place.address}</div>
      <div className='font-semibold'>
        {place.day.map((special) => {
          if (special.name === day)
            return <div key={special.name}>{special.drink_specials}</div>;
        })}
      </div>
    </div>
  );
}
