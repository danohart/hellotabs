export default function Pagination({ page, limit, totalPlaces, onPageChange }) {
  const numberOfPages = Math.ceil(totalPlaces / limit);

  const pageNumbers = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex flex-wrap flex-row justify-center space-x-2'>
      {page > 1 && (
        <div
          onClick={() => onPageChange(page - 1)}
          className='bg-purple-500 border-2 border-purple-500 mb-2 text-white font-bold py-2 px-4 rounded cursor-pointer'
        >
          Previous
        </div>
      )}

      {pageNumbers.map((number) => (
        <div
          key={number}
          onClick={() => onPageChange(number)}
          className={`bg-purple-500 border-2 border-purple-500 mb-2 text-white font-bold py-2 px-4 rounded cursor-pointer ${
            number === page
              ? "bg-transparent border-purple-300 text-purple-300"
              : ""
          }`}
        >
          {number}
        </div>
      ))}

      {page < numberOfPages && (
        <div
          onClick={() => onPageChange(page + 1)}
          className='bg-purple-500 border-2 border-purple-500 mb-2 text-white font-bold py-2 px-4 rounded cursor-pointer'
        >
          Next
        </div>
      )}
    </div>
  );
}
