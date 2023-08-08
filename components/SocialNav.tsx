import React from 'react';
import Link from 'next/link';
import {
  YouTubeIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
} from '@public/assets/social/index';

const SocialNav = () => {
  return (
    <nav>
      <ul className='social-icons flex gap-3'>
        <li>
          <Link href='' className='text-lg'>
            <YouTubeIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link target='_blank' href='https://github.com/Aun-Raza'>
            <GitHubIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link target='_blank' href='https://twitter.com/AunRaza1523417'>
            <TwitterIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link target='_blank' href='https://www.linkedin.com/in/aun--raza/'>
            <LinkedInIcon className='svg' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
