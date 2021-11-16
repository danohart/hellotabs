import Link from "next/link";

export default function Header({ title }) {
  return (
    <header>
      <h1 className='text-center'>
        <Link to='/' href='/'>
          Little Tabs
        </Link>
      </h1>
      <h2 className='text-center'>{title}</h2>
    </header>
  );
}
