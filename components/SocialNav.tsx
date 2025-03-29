import React from 'react';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
  ProfileIcon,
} from '@public/assets/social/index';

const SocialNav = () => {
  return (
    <nav>
      <ul className='flex gap-3'>
        <li>
          <Link target='_blank' href='https://github.com/Aun-Raza'>
            <GitHubIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link target='_blank' href='https://www.linkedin.com/in/aun--raza/'>
            <LinkedInIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link
            target='_blank'
            href='https://drive.google.com/file/d/13k8tsHjDS7aLRVQRm3d7PgOxFeu_Xu-E/view?usp=sharing'
          >
            <ProfileIcon className='svg' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
