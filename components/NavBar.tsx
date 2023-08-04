import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='sticky bg-white top-0 flex items-center  justify-between py-3 px-5'>
      <div className='flex gap-2 items-center'>
        <Image
          src='assets/stack_icon.svg'
          width={36}
          height={36}
          alt='stack icon'
        />
        <h2>Aun Raza</h2>
      </div>
      <ul className='flex gap-3'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
