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
            Recently graduated from Centennial College last May. I am a
            Full-Stack Developer & Game Developer. Used to work for a
            small-sized company called SenseTech Solutions which primarily
            builds accessible software for people with disabilities using VR.
            When it comes to my soft skills, I am very ambitious and driven. I
            always want to become the best version of myself, and continue the
            path to learning until the day I die. I am always open to new ideas
            and new ways of doing things.
          </p>
          <p className='sm:text-left mt-8'>
            Here are some of the books 📚 that impacted my life positively:
          </p>
          <ul className='text-left my-4 leading-9 list-disc'>
            <li className='sm:ms-5'>
              Atomic Habits <span className='font-bold'>(James Clear)</span>
            </li>
            <li className='sm:ms-5'>
              Deep Work <span className='font-bold'>(Cal Newport)</span>
            </li>
            <li className='sm:ms-5'>
              How I Found Freedom in an Unfree World{' '}
              <span className='font-bold'>(Harry Browne)</span>
            </li>
            <li className='sm:ms-5'>
              How to Win Friends and Influence People{' '}
              <span className='font-bold'>(Dale Carnegie)</span>
            </li>
            <li className='sm:ms-5'>
              Mastery <span className='font-bold'>(Robert Greene)</span>
            </li>
            <li className='sm:ms-5'>
              Make It Stick <span className='font-bold'>(Peter Brown)</span>
            </li>
            <li className='sm:ms-5'>
              Soft Skills: The Software Developer&apos;s Life Manual{' '}
              <span className='font-bold'>(John Sonmez)</span>
            </li>
            <li className='sm:ms-5'>
              System Design Interview{' '}
              <span className='font-bold'>(Alex Xu)</span>
            </li>
            <li className='sm:ms-5'>
              The Power of Full Engagement{' '}
              <span className='font-bold'>(Jim Loehrm, Tony Schwartz)</span>
            </li>
            <li className='sm:ms-5'>
              The Pragmatic Programmer{' '}
              <span className='font-bold'>(Andy Hunt, Dave Thomas)</span>
            </li>
            <li className='sm:ms-5'>
              Wise Decision <span className='font-bold'>(Jim Loehr)</span>
            </li>
          </ul>
          <SocialNav />
        </div>
      </div>
    </section>
  );
};

export default About;
