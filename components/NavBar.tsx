'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BurgerIcon, XIcon } from '@public/assets';

const NavBar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <nav className='text-inherit sm:text-xl sticky bg-white top-0 shadow-lg py-3 px-5 z-10'>
      <div className='flex items-center justify-between '>
        <ul className='flex gap-3 relative'>
          <li className='hidden md:block'>
            <Link href='#home' className='link-underline link-underline-black'>
              Home
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link href='#about' className='link-underline link-underline-black'>
              About
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='#skills'
              className='link-underline link-underline-black'
            >
              Skills
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='#portfolio'
              className='link-underline link-underline-black'
            >
              Portfolio
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='#contact'
              className='link-underline link-underline-black'
            >
              Contact
            </Link>
          </li>
          {toggleMobileNav ? (
            <XIcon
              onClick={() => setToggleMobileNav(false)}
              className='text-2xl md:hidden'
            />
          ) : (
            <BurgerIcon
              onClick={() => setToggleMobileNav(true)}
              className='text-2xl md:hidden'
            />
          )}
        </ul>
        <Link href='#home' className='btn'>
          <h2 className='ms-2 hover:scale-125 transition-all cursor-pointer'>
            aunraza.dev
          </h2>
        </Link>
      </div>
      {/* Mobile Navigation */}
      {toggleMobileNav && (
        <ul className='md:hidden mt-2 text-lg flex flex-col items-center text-center'>
          <li className='w-full border-t-2 p-2'>
            <Link
              href='#home'
              onClick={() => setToggleMobileNav(false)}
              className='link-underline link-underline-black'
            >
              Home
            </Link>
          </li>
          <li className='w-full border-t-2 p-2'>
            <Link
              href='#about'
              onClick={() => setToggleMobileNav(false)}
              className='link-underline link-underline-black'
            >
              About
            </Link>
          </li>
          <li className='w-full border-t-2 p-2'>
            <Link
              href='#skills'
              onClick={() => setToggleMobileNav(false)}
              className='link-underline link-underline-black'
            >
              Skills
            </Link>
          </li>
          <li className='w-full border-t-2 p-2'>
            <Link
              href='#portfolio'
              onClick={() => setToggleMobileNav(false)}
              className='link-underline link-underline-black'
            >
              Portfolio
            </Link>
          </li>
          <li className='w-full border-t-2 p-2'>
            <Link
              href='#contact'
              onClick={() => setToggleMobileNav(false)}
              className='link-underline link-underline-black'
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
