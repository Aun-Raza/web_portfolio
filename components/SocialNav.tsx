import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialNav = () => {
  return (
    <nav>
      <ul className='social-icons flex gap-3'>
        <li>
          <Link href=''>
            <Image
              src='assets/social/youtube_icon.svg'
              width={25}
              height={25}
              alt='youtube'
            />
          </Link>
        </li>
        <li>
          <Link href=''>
            <Image
              src='assets/social/github_icon.svg'
              width={25}
              height={25}
              alt='github'
            />
          </Link>
        </li>
        <li>
          <Link href=''>
            <Image
              src='assets/social/twitter_icon.svg'
              width={25}
              height={25}
              alt='twitter'
            />
          </Link>
        </li>
        <li>
          <Link href=''>
            <Image
              src='assets/social/linkedin_icon.svg'
              width={25}
              height={25}
              alt='linkedin'
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
