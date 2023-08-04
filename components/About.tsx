import React from 'react';
import Image from 'next/image';
import SocialNav from './SocialNav';
import { InfoIcon } from '@public/assets/social/index';

const About = () => {
  return (
    <section className='flex'>
      <div className='w-1/3'>Image</div>
      <div className='w-2/3'>
        <h2 className='heading-2'>About Me</h2>
        <p>
          I&apos;m an ambitious programmer based in Toronto, Canada, set to
          graduate in December 2023.
        </p>
        <br />
        <p>
          My passion lies in leveraging the power of code to solve complex
          problems and create innovative digital solutions.
        </p>
        <div className='mt-5 flex ps-2 gap-16'>
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
              <p>
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
          <button className='btn border border-gray-900'>
            <InfoIcon className='svg' />
            Resume
          </button>
          <SocialNav />
        </div>
      </div>
    </section>
  );
};

export default About;
