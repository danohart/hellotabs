import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

export default function Header({ title }) {
  const router = useRouter();

  return (
    <>
      <div
        className={`flex flex-row items-cente my-4 ${
          router.pathname !== "/" ? "justify-between" : "justify-center gap-6"
        }`}
      >
        <div
          className='font-extrabold uppercase flex items-center cursor-pointer text-sm'
          onClick={() => router.back()}
        >
          {router.pathname !== "/" && (
            <>
              <Icon icon='ArrowLeftIcon' />
              Back
            </>
          )}
        </div>
        <ThemeToggle />
        <div className='font-extrabold uppercase flex items-center gap-2 text-sm'>
          <Link to='/' href='/'>
            Home
          </Link>
          <Link to='/' href='/'>
            <Icon icon='HomeIcon' />
          </Link>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <header className='py-4'>
          <h1 className='text-center'>
            <Link to='/' href='/'>
              Hello Chicago
            </Link>
          </h1>
          <h2 className='text-center'>{title}</h2>
        </header>
      </div>
    </>
  );
}
