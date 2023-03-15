import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "./Icon";

export default function Header({ title }) {
  const router = useRouter();

  return (
    <div className='flex flex-row items-center justify-between'>
      <div
        className='font-extrabold uppercase flex items-center cursor-pointer text-sm'
        onClick={() => router.back()}
      >
        <Icon icon='ArrowLeftIcon' />
        Back
      </div>
      <header className='py-4'>
        <h1 className='text-center'>
          <Link to='/' href='/'>
            Hello Chicago
          </Link>
        </h1>
        <h2 className='text-center'>{title}</h2>
      </header>
      <div className='font-extrabold uppercase flex items-center text-sm'>
        <Link to='/' href='/'>
          Home
        </Link>
        <Link to='/' href='/'>
          <Icon icon='HomeIcon' />
        </Link>
      </div>
    </div>
  );
}
