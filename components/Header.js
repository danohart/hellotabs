import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/solid";

export default function Header({ title }) {
  const router = useRouter();

  return (
    <div className='flex flex-row items-center justify-between'>
      <div
        className='font-extrabold uppercase flex items-center'
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className=' h-5 w-5 text-purple-800 dark:text-purple-400' />
        Back
      </div>
      <header className='py-4'>
        <h1 className='text-center text-4xl'>
          <Link to='/' href='/'>
            Hello Chicago
          </Link>
        </h1>
        <h2 className='text-center text-xl'>{title}</h2>
      </header>
      <div className='font-extrabold uppercase flex items-center'>
        <Link href='/'>Home</Link>
        <Link href='/'>
          <HomeIcon className=' h-5 w-5 text-purple-800 dark:text-purple-400' />
        </Link>
      </div>
    </div>
  );
}
