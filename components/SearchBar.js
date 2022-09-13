import { useRouter } from "next/router";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

export default function SearchBar(props) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  function updateSearchInput(query) {
    setSearchInput(query.target.value);
  }

  function submitSearchQuery(event) {
    event.preventDefault();
    router.push({
      pathname: "/search/",
      query: "s=" + searchInput,
    });
  }

  return (
    <div className='w-3/4 mx-auto py-4 flex items-center'>
      <div className='w-4'>
        <SearchIcon className='h-5 w-5 text-gray-500' />
      </div>
      <div className='w-full pl-2'>
        <form onSubmit={submitSearchQuery}>
          <input
            className='w-full bg-transparent border-b border-purple-500 hover:bg-purple-200 dark:hover:bg-purple-900 focus:bg-white dark:focus:bg-purple-400 dark:focus:text-slate-800 p-2'
            placeholder={props.placeholder || "Search for a particular place"}
            onChange={updateSearchInput}
          />
        </form>
      </div>
    </div>
  );
}
