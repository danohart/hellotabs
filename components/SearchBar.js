import { useRouter } from "next/router";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

export default function SearchBar() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  function updateSearchInput(query) {
    setSearchInput(query.target.value);
  }

  return (
    <div className='w-1/2 mx-auto py-4 flex items-center'>
      <div className='w-4'>
        <SearchIcon className='h-5 w-5 text-gray-500' />
      </div>
      <div className='w-full pl-2'>
        <form
          onSubmit={() =>
            router.push({
              pathname: "/search/",
              query: { s: searchInput },
            })
          }
        >
          <input
            className='w-full bg-transparent border-b border-purple-500 hover:bg-purple-200 focus:bg-white p-2'
            onChange={updateSearchInput}
          />
        </form>
      </div>
    </div>
  );
}
