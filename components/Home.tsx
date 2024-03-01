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
          Hello
          <br />
          <span className='text-5xl sm:text-7xl lg:text-8xl'>
            I&apos;m{' '}
            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-blue-500'>
              Aun Raza
            </span>
          </span>
          <br />A{' '}
          <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600'>
            FULL-STACK
            <br /> Developer
          </span>
        </p>
        <ul className='flex flex-wrap w-full leading-4 justify-center items-center sm:justify-start gap-5 md:gap-8 ps-3 list-disc w-fit text-xl md:text-2xl mt-3 mb-4'>
          <li className='list-none'>
            <span className='underline font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-blue-500'>
              A
            </span>
            mbitious
          </li>
          <li>
            <span className='underline font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-700 to-purple-500'>
              U
            </span>
            nique
          </li>
          <li>
            <span className='underline font-bold text-transparent bg-clip-text bg-gradient-to-l from-red-700 to-red-500'>
              N
            </span>
            atural
          </li>
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
              &#x2192; View my projects
            </button>
          </Link>
        </div>
      </div>
      <div className='md:w-1/3'>
        <div className='mt-3 mx-auto w-fit h-'>
          <Image
            className='rounded-3xl w-unit-8xl'
            src='/aunraza_portrait.png'
            width={433}
            height={577}
            alt='Aun Raza (me)'
          />
        </div>
      </div>
    </header>
  );
};

export default Home;
