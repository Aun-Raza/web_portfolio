import React from 'react';
import { Oxanium } from 'next/font/google';
const oxanium = Oxanium({ subsets: ['latin'] });

const Footer = () => {
  return (
    <footer className={' text-black mt-3 py-2 flex ' + oxanium.className}>
      <p className='w-full me-5 text-center md:text-right'>
        ©2023 Aun Raza. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
