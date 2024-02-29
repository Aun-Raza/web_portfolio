import React from 'react';
import SocialNav from './SocialNav';
import { Arrow as ArrowIcon } from '@public/assets/index';
import Link from 'next/link';
import AboutDetail from './AboutDetail';

const About = () => {
  return (
    <section
      id='about'
      className='bg-white w-full lg:w-1/2 flex-grow text-center 2xl:py-36'
    >
      <div className='text-inherit sm:text-xl'>
        <h2 className='heading-2 center'>
          <ArrowIcon className='inline fill-blue-900' /> Mindset{' '}
          <ArrowIcon className='inline fill-blue-900 -rotate-180 md:hidden' />
        </h2>
        <div className='w-4/5 mx-auto'>
          <p className='sm:text-left'>
            I believe that colleges and universities, in general, struggle to
            keep up with the rapid changes and modernization of technology.
            However, at the end of the day, what matters most for success in
            your career is your drive and character. I&apos;ve noticed that many
            young developers are giving up because the market is a complete
            mess, but with that attitude, you won&apos;t get anywhere positive
            in life. The best we can do, with all the spare time we have, is to
            continuously learn and build amazing and interesting projects for
            everyone to see.
          </p>
          <p className='sm:text-left mt-8'>
            Here are some of the books that impacted my life positively:
          </p>
          <ul className='text-left my-4 leading-9 list-disc'>
            <li className='sm:ms-5'>
              Atomic Habits <span className='font-bold'>(James Clear)</span>
            </li>
            <li className='sm:ms-5'>
              Deep Work <span className='font-bold'>(Cal Newport)</span>
            </li>
            <li className='sm:ms-5'>
              Mastery <span className='font-bold'>(Robert Greene)</span>
            </li>
            <li className='sm:ms-5'>
              System Design Interview{' '}
              <span className='font-bold'>(Alex Xu)</span>
            </li>
            <li className='sm:ms-5'>
              The Pragmatic Programmer{' '}
              <span className='font-bold'>(Andy Hunt, Dave Thomas)</span>
            </li>
          </ul>
          <SocialNav />
        </div>
      </div>
    </section>
  );
};

export default About;
