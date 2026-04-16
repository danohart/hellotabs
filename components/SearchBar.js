import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { trackEvent } from "../lib/analytics";

export default function SearchBar(props) {
  const router = useRouter();
  let [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function updateSearchInput(query) {
    setSearchInput(query.target.value);
  }

  function submitSearchQuery(event) {
    event.preventDefault();
    trackEvent("search", { search_term: searchInput });
    router.push({
      pathname: "/search/",
      query: "s=" + searchInput,
    });
  }

  return (
    <div className='w-3/4 mx-auto py-4 flex items-center'>
      <div className='w-4'>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='h-5 w-5 text-gray-500'
        />
      </div>
      <div className='w-full pl-2'>
        <form onSubmit={submitSearchQuery}>
          <input
            ref={inputRef}
            className='w-full bg-transparent border-b border-purple-500 hover:bg-purple-200 dark:hover:bg-purple-900 focus:bg-white dark:focus:bg-purple-400 dark:focus:text-slate-800 p-2'
            placeholder={props.placeholder || "Search for a particular place"}
            onChange={updateSearchInput}
          />
        </form>
      </div>
    </div>
  );
}
