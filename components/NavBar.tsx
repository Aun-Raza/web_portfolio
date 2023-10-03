'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BurgerIcon, XIcon } from '@public/assets';
import { Home, About, Skill, Portfolio, Contact } from '@public/assets/nav';

const NavBar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <nav className='text-inherit sm:text-xl sticky bg-white top-0 shadow-lg py-6 px-5 z-10'>
      <div className='flex items-center justify-between '>
        <ul className='flex gap-4 relative'>
          <li className='hidden md:block'>
            <Link
              href='#home'
              className='hover:fill-blue-400 hover:text-blue-400 link-underline link-underline-black flex gap-2 items-center'
            >
              <Home />
              Home
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='#about'
              className='hover:fill-blue-400 hover:text-blue-400 link-underline link-underline-black flex gap-2 items-center'
            >
              <About />
              About
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='#skills'
              className='hover:fill-blue-400 hover:text-blue-400 link-underline link-underline-black flex gap-2 items-center'
            >
              <Skill />
              Skills
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='#portfolio'
              className='hover:fill-blue-400 hover:text-blue-400 link-underline link-underline-black flex gap-2 items-center'
            >
              {' '}
              <Portfolio />
              Portfolio
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link
              href='#contact'
              className='hover:fill-blue-400 hover:text-blue-400 link-underline link-underline-black flex gap-2 items-center'
            >
              <Contact />
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
        <Link href='#home'>
          <h2 className='ms-2  cursor-pointer'>aunraza.dev</h2>
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
