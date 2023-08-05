import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='sticky bg-white top-0 flex items-center shadow-lg justify-between py-3 px-5'>
      <div className='flex gap-2 items-center'>
        <Image
          src='assets/stack_icon.svg'
          width={36}
          height={36}
          alt='stack icon'
        />
        <h2>Aun Raza</h2>
      </div>
      <ul className='flex gap-3'>
        <li>
          <Link href='' className='link-underline link-underline-black'>
            Home
          </Link>
        </li>
        <li>
          <Link href='' className='link-underline link-underline-black'>
            About
          </Link>
        </li>
        <li>
          <Link href='' className='link-underline link-underline-black'>
            Skills
          </Link>
        </li>
        <li>
          <Link href='' className='link-underline link-underline-black'>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href='' className='link-underline link-underline-black'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
