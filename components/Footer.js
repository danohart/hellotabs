import Image from "next/image";

export default function Footer() {
  return (
    <footer className='text-sm w-3/4 mx-auto text-center py-12'>
      <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
        <img
          alt='Creative Commons License'
          src='https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png'
          className='mx-auto'
          width='80'
          height='15'
        />
      </a>
      <br />
      This work is licensed under a{" "}
      <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
        License
      </a>
      .
    </footer>
  );
}
