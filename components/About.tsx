import React from 'react';
import SocialNav from './SocialNav';
import { InfoIcon } from '@public/assets/social/index';
import { Arrow as ArrowIcon } from '@public/assets/index';
import Link from 'next/link';

const About = () => {
  return (
    <section id='about' className='bg-white md:w-1/2 flex-grow'>
      <div className='w-4/5 mx-auto'>
        <h2 className='heading-2 center'>
          <ArrowIcon className='inline fill-blue-900' /> About Me{' '}
          <ArrowIcon className='inline fill-blue-900 -rotate-180 md:hidden' />
        </h2>
        <p>
          I&apos;m an ambitious programmer based in Toronto, Canada, set to
          graduate in December 2023.
        </p>
        <br />
        <p>
          My passion lies in leveraging the power of code to solve complex
          problems and create innovative digital solutions.
        </p>
        <div className='mt-5 flex ps-2 gap-8 md:gap-16 center'>
          <div className='info-block'>
            <div className='info'>
              <h3>Name</h3>
              <p>Aun Raza</p>
            </div>
            <div className='info'>
              <h3>Email</h3>
              <p className='text-sm'>aunrazaq123@gmail.com</p>
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
        <hr className='mt-2 mb-3 h-0.5 bg-slate-900' />
        <div className='flex items-center gap-3'>
          <Link target='_blank' href='/AunRaza-Resume-2023.pdf'>
            <button className='btn'>
              <InfoIcon className='svg' />
              Resume
            </button>
          </Link>
          <SocialNav />
        </div>
      </div>
    </section>
  );
};

export default About;
