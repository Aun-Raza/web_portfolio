import React from 'react';
import Link from 'next/link';
import {
  YouTubeIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
} from '@public/assets/social/index';

const SocialNav = () => {
  return (
    <nav>
      <ul className='social-icons flex gap-3'>
        <li>
          <Link target='_blank' href='https://github.com/Aun-Raza'>
            <GitHubIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link target='_blank' href='https://www.instagram.com/aunraza_2'>
            <InstagramIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link target='_blank' href='https://www.linkedin.com/in/aun--raza/'>
            <LinkedInIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link target='_blank' href='https://twitter.com/AunRaza1523417'>
            <TwitterIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link
            target='_blank'
            href='https://www.youtube.com/@aunraza3678'
            className='text-lg'
          >
            <YouTubeIcon className='svg' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
