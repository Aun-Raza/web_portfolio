import React from 'react';
import { Oxanium } from 'next/font/google';
import SocialNav from './SocialNav';
const oxanium = Oxanium({ subsets: ['latin'] });

const Home = () => {
  return (
    <header className={'flex ' + oxanium.className}>
      <div className='w-2/3'>
        <p className='text-4xl'>
          Hello, I&apos;m
          <br />
          <span className='text-7xl'>
            Aun <span className='text-blue-700 font-bold'>Raza</span>
          </span>
          <br />A{' '}
          <span className='font-semibold text-blue-900'>FULL-STACK</span> MERN
          Developer
        </p>
        <ul className='flex gap-5 ps-3 list-disc w-fit text-xl mt-1 mb-4'>
          <li>Enthusiastic</li>
          <li>Committed</li>
          <li>Hardworking</li>
        </ul>
        <SocialNav />
        <div className='flex mt-5'>
          <button className='btn bg-blue-700 text-white'>Hire Me</button>
          <button className='px-3 py-2 font-mono'>
            &#x2192; View my portfolio
          </button>
        </div>
      </div>
      {/* Add Image */}
      <div className='w-1/3'>Image</div>
    </header>
  );
};

export default Home;
