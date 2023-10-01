import React from 'react';
import SocialNav from './SocialNav';
import { InfoIcon } from '@public/assets/social/index';
import { Arrow as ArrowIcon } from '@public/assets/index';
import Link from 'next/link';

const About = () => {
  return (
    <section
      id='about'
      className='bg-white w-full lg:w-1/2 flex-grow text-center 2xl:py-36'
    >
      <div className='text-inherit sm:text-xl'>
        <div className='w-4/5 mx-auto'>
          <h2 className='heading-2 center'>
            <ArrowIcon className='inline fill-blue-900' /> About Me{' '}
            <ArrowIcon className='inline fill-blue-900 -rotate-180 md:hidden' />
          </h2>
          <p className='sm:text-left'>
            Beside programming, I love to read a lot of self-help books 📚
            because it gives me a stronger understanding about the world and
            productivity. I also enjoy playing video games on the occasion. 🕹️
          </p>
          <br />
          <p className='sm:text-left'>
            Here are the books that impacted my life:
          </p>
          <ul className='sm:text-left my-4 leading-9'>
            <li className='sm:ms-12'>⭐ Atomic Habits</li>
            <li className='sm:ms-12'>
              ⭐ How to Win Friends and Influence People
            </li>
            <li className='sm:ms-12'>
              ⭐ Soft Skills: The Software Developer&apos;s Life Manual
            </li>
            <li className='sm:ms-12'>
              ⭐ How I Found Freedom in an Unfree World
            </li>
            <li className='sm:ms-12'> ⭐ George Orwell 1984</li>
          </ul>
        </div>
        <div className='w-fit mt-10 sm:w-4/5 mx-auto'>
          <div>
            <div className='mt-5 px-3 flex gap-2 md:gap-16 border-b pb-4 border-slate-900 text-left w-fit'>
              <div className='info-block'>
                <div className='info'>
                  <h3>Name</h3>
                  <p>Aun Raza</p>
                </div>
                <div className='info'>
                  <h3>Email</h3>
                  <p>aunrazaq123@gmail.com</p>
                </div>
              </div>
              <div className='info-block'>
                <div className='info'>
                  <h3>Education</h3>
                  <p>Software Engineering</p>
                </div>
                <div className='info'>
                  <h3>Employment</h3>
                  <p>Open</p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center sm:justify-start md:gap-3'>
              <Link target='_blank' href='/AunRaza-Resume-2023.pdf'>
                <button className='btn'>
                  <InfoIcon className='svg' />
                  <span className='hidden sm:block'>Download CV</span>
                </button>
              </Link>
              <SocialNav />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
