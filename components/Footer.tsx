import React from 'react';
import { Oxanium } from 'next/font/google';
const oxanium = Oxanium({ subsets: ['latin'] });

const Footer = () => {
  return (
    <footer
      className={'bg-gray-900 text-white mt-3 py-2 flex ' + oxanium.className}
    >
      <p className='container text-center sm:text-right p-3'>
        ©2023 Aun Raza. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
