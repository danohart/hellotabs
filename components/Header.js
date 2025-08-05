import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "./Icon";

export default function Header({ title }) {
  const router = useRouter();

  return (
    <>
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
            <Link href='/'>Hello Chicago</Link>
          </h1>
          <h2 className='text-center'>{title}</h2>
        </header>

        <div className='flex items-center gap-2'>
          <div className='font-extrabold uppercase flex items-center text-sm'>
            <Link href='/'>Home</Link>
            <Link href='/'>
              <Icon icon='HomeIcon' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
