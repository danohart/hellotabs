import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import { trackEvent } from "../lib/analytics";

export default function SearchBar({ autoFocus = true, ...props }) {
  const router = useRouter();
  let [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when component mounts (skipped when the search bar is
    // permanently embedded in a page, e.g. the home hero, where popping the
    // keyboard open on every load would be unwanted).
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

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
    <div className='w-full mx-auto py-2'>
      <form onSubmit={submitSearchQuery} className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
          <Icon icon='SearchIcon' className='h-4 w-4 text-gray-400' />
        </div>
        <input
          ref={inputRef}
          className='w-full bg-white dark:bg-slate-700 rounded-full py-3 pl-11 pr-4 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400'
          placeholder={props.placeholder || "Search for a particular place"}
          onChange={updateSearchInput}
        />
      </form>
    </div>
  );
}
