import React from 'react';
import SocialNav from './SocialNav';

const AboutDetail = () => {
  return (
    <div className='w-fit mt-10 sm:w-4/5 mx-auto'>
      <div>
        <div className='mt-5 px-3 flex gap-2 md:gap-16 pb-4 text-left w-fit'>
          <div className='info-block'>
            <div className='info'>
              <h3>Name</h3>
              <p>Aun Raza</p>
            </div>
            <div className='info'>
              <h3>Email</h3>
              <p className='break-words'>aunrazaq123@gmail.com</p>
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
      </div>
    </div>
  );
};

export default AboutDetail;
