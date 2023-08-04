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
          <Link href=''>
            <YouTubeIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link href=''>
            <GitHubIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link href=''>
            <TwitterIcon className='svg' />
          </Link>
        </li>
        <li>
          <Link href=''>
            <LinkedInIcon className='svg' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
