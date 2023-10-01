import React from 'react';
import { Oxanium } from 'next/font/google';
import SocialNav from './SocialNav';
import Link from 'next/link';
import Image from 'next/image';
const oxanium = Oxanium({ subsets: ['latin'] });

const Home = () => {
  return (
    <header
      id='home'
      className={
        'px-0 md:px-3 md:flex h-fit sm:h-screen container mx-auto ' +
        oxanium.className
      }
    >
      <div className='w-2/3 mx-auto'>
        <p className='text-3xl sm:text-5xl lg:text-7xl text-center sm:text-left'>
          Hello, I&apos;m
          <br />
          <span className='text-5xl sm:text-7xl lg:text-8xl'>
            Aun <span className='text-blue-700 font-bold'>Raza</span>
          </span>
          <br />A{' '}
          <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>
            FULL-STACK MERN
          </span>{' '}
          Developer
        </p>
        <ul className='flex flex-wrap leading-4 justify-center items-center sm:justify-start gap-5 md:gap-8 ps-3 list-disc w-fit text-xl md:text-2xl mt-1 mb-4'>
          <li>Enthusiastic</li>
          <li>Committed</li>
          <li>Hardworking</li>
        </ul>
        <div className='w-min sm:w-full mx-auto'>
          <SocialNav />
        </div>
        <div className='flex flex-wrap-reverse mt-5 justify-center sm:justify-start'>
          <Link href='#contact'>
            <button className='btn bg-blue-500 text-white'>Hire Me</button>
          </Link>
          <Link href='#portfolio'>
            <button className=' btn font-mono'>
              &#x2192; View my portfolio
            </button>
          </Link>
        </div>
      </div>
      <div className='md:w-1/3'>
        <div className='mt-3 mx-auto rounded-md bg-gradient-to-b from-blue-300 to-blue-900 p-1 w-fit'>
          <Image
            className='rounded-md w-unit-9xl'
            src='/aunraza_portrait.png'
            width={300}
            height={300}
            alt='Aun Raza (me)'
          />
        </div>
      </div>
    </header>
  );
};

export default Home;
