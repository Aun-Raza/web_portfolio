import React from 'react';
import { Oxanium } from 'next/font/google';
const oxanium = Oxanium({ subsets: ['latin'] });

const Home = () => {
  return (
    <header className={'flex ' + oxanium.className}>
      <div className='w-2/3'>
        <p>
          Hello, I&apos;m
          <br />
          <span className='head_text'>Aun Raza</span>
          <br />A Full-Stack Developer
        </p>
        <ul className='flex gap-5 ps-3 list-disc w-fit'>
          <li>Enthusiastic</li>
          <li>Committed</li>
          <li>Hardworking</li>
        </ul>
        <div className='flex mt-3'>
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
