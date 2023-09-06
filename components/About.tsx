import React from 'react';
import SocialNav from './SocialNav';
import { InfoIcon } from '@public/assets/social/index';
import { Arrow as ArrowIcon } from '@public/assets/index';
import Link from 'next/link';

const About = () => {
  return (
    <section
      id='about'
      className='bg-white w-full md:w-1/2 flex-grow text-center 2xl:py-36'
    >
      <div className='text-inherit sm:text-xl'>
        <div className='w-4/5 mx-auto'>
          <h2 className='heading-2 center'>
            <ArrowIcon className='inline fill-blue-900' /> About Me{' '}
            <ArrowIcon className='inline fill-blue-900 -rotate-180 md:hidden' />
          </h2>
          <p className='sm:text-left'>
            I&apos;m an ambitious programmer based in Toronto, Canada, set to
            graduate in December 2023.
          </p>
          <br />
          <p className='sm:text-left'>
            My passion lies in leveraging the power of code to solve complex
            problems and create innovative digital solutions.
          </p>
        </div>
        <div className='w-fit sm:w-4/5 mx-auto'>
          <div className='center'>
            <div className='mt-5 px-3 flex gap-2 md:gap-16 border-b pb-4 border-slate-900 text-left'>
              <div className='info-block'>
                <div className='info'>
                  <h3>Name</h3>
                  <p>Aun Raza</p>
                </div>
                <div className='info'>
                  <h3>Email</h3>
                  <p className='text-sm break-words'>aunrazaq123@gmail.com</p>
                </div>
              </div>
              <div className='info-block'>
                <div className='info'>
                  <h3>Education</h3>
                  <p className='text-sm leading-4'>
                    Software Engineering Technology
                    <br />
                    (In-progress)
                  </p>
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
                  <span className='hidden sm:block'>Resume</span>
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
