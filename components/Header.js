import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";

export default function Header({ title, minimal = false }) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [showSearch, setShowSearch] = useState(false);

  // Used on pages (like the redesigned home feed) that render their own
  // branding + navigation already covered by the bottom tab bar — only the
  // theme toggle still needs a home. Returned bare (no wrapping row/margin)
  // so the caller can place it inline with its own heading.
  if (minimal) {
    return <ThemeToggle />;
  }

  return (
    <>
      <div
        className={`flex flex-row items-center my-4 ${
          !isHome ? "justify-between" : "justify-center gap-6"
        }`}
      >
        <div
          className='font-extrabold uppercase flex items-center gap-2 cursor-pointer text-sm'
          onClick={() => router.back()}
        >
          {!isHome && (
            <>
              <Icon
                icon='ArrowLeftIcon'
                className='h-5 w-5 text-purple-800 dark:text-purple-400'
              />
              Back
            </>
          )}
        </div>
        <ThemeToggle />
        <div className='font-extrabold uppercase flex items-center gap-2 text-sm'>
          <button
            onClick={() => setShowSearch((s) => !s)}
            className='flex items-center'
            aria-label='Toggle search'
          >
            <Icon
              icon='SearchIcon'
              className={`h-5 w-5 transition-colors ${
                showSearch
                  ? "text-purple-500 dark:text-purple-800"
                  : "text-purple-800 dark:text-purple-400"
              }`}
            />
          </button>
          <Link to='/' href='/'>
            Home
          </Link>
          <Link to='/' href='/' aria-label='Go to home page'>
            <Icon
              icon='HomeIcon'
              className='h-5 w-5 text-purple-800 dark:text-purple-400'
            />
          </Link>
        </div>
      </div>

      {/* Expanding search bar */}
      {showSearch && (
        <div className='flex justify-center px-4 pb-2'>
          <div className='w-full md:w-1/2'>
            <SearchBar />
          </div>
        </div>
      )}

      {/* Logo — always shown, but only as a small wordmark */}
      <div className='flex flex-row items-center justify-center'>
        <header className='py-2'>
          <p className='text-center text-xs font-extrabold uppercase tracking-widest text-purple-400 dark:text-purple-400'>
            <Link href='/'>Hello Chicago</Link>
          </p>
          {/* title prop used on inner pages (e.g. neighborhood, place detail) */}
          {title && (
            <h1 className='text-center text-2xl font-bold mt-1'>{title}</h1>
          )}
        </header>
      </div>
    </>
  );
}
