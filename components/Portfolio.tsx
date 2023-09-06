'use client';

import React from 'react';
import { Arrow as ArrowIcon } from '@public/assets/index';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from '@nextui-org/react';

import Image from 'next/image';

const Portfolio = () => {
  type projectType = {
    id: number;
    title: string;
    technology: string[];
    file: { name: string; logo: string };
    links: { github: string; demo: string };
    desc: string;
  };

  const projects: projectType[] = [
    {
      id: 1,
      title: 'Pixel Tracker',
      technology: [
        'React',
        'Node',
        'GraphQL',
        'Redux',
        'Mongoose',
        'DayJS',
        'ChartJS',
      ],
      file: {
        name: 'habit_tracker.jpg',
        logo: 'square.png',
      },
      links: {
        github: 'https://github.com/Aun-Raza/PixelHabitTracker',
        demo: 'https://pixeltracker-7vq3.onrender.com',
      },
      desc: 'Built an alternative gamified habit tracking application usingGraphQL stack. Pixel Habit Tracker encourages users to maintain their habit streaks through a rewarding points system.',
    },
    {
      id: 2,
      title: 'JS-Quiz',
      technology: [
        'React',
        'Node',
        'Express',
        'Mongoose',
        'JOI',
        'TypeScript',
        'Jest',
      ],
      file: {
        name: 'jsquiz.jpg',
        logo: 'js_icon.svg',
      },
      links: {
        github: 'https://github.com/Aun-Raza/Geo-Quiz',
        demo: 'https://js-quiz-q607.onrender.com',
      },
      desc: 'Developed a comprehensive MERN quiz app to prepare users for technical interviews. JS-Quiz supports Multiple-Choice and True-False format.',
    },
    {
      id: 3,
      title: 'ChatSphere',
      technology: [
        'React',
        'Node',
        'Express',
        'Mongoose',
        'TypeScript',
        'WebSocket',
      ],
      file: {
        name: 'chat.jpg',
        logo: 'ui.png',
      },
      links: { github: 'https://github.com/Aun-Raza/ChatSphere', demo: '' },
      desc: 'Constructed a secure chat application ensuring user privacy through encrypted messages.',
    },
  ];

  function getTechnologyStack(id: number, technologies: string[]) {
    return (
      <div className='flex justify-start gap-2 flex-wrap'>
        {technologies.map((tech) => (
          <div
            key={tech + id}
            className='btn border border-gray-400 cursor-pointer'
          >
            {tech}
          </div>
        ))}
      </div>
    );
  }

  return (
    <section id='portfolio' className='py-5 md:py-24'>
      <h2 className='heading-2 center'>
        <ArrowIcon className='inline fill-blue-900' /> Portfolio{' '}
        <ArrowIcon className='inline fill-blue-900 rotate-180' />
      </h2>
      <div className='flex flex-wrap justify-center gap-3 mx-auto'>
        {projects.map(
          ({ id, title, file, technology, desc, links: { github, demo } }) => (
            <Card key={id} className='max-w-[400px] -z-0'>
              <CardHeader className='flex gap-3'>
                <Image
                  alt='nextui logo'
                  height={40}
                  src={`/assets/projects/${file.logo}`}
                  width={40}
                  className='rounded-sm'
                />
                <div className='flex flex-col'>
                  <p className='text-md'>{title}</p>
                  <Link isExternal href={demo}>
                    <p className='text-small text-default-500'>{demo}</p>
                  </Link>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className='flex flex-col'>
                <p className='h-auto mb-2 sm:mb-0 sm:h-32'>{desc}</p>
                {getTechnologyStack(id, technology)}
                <Link isExternal href={demo}>
                  <Image
                    src={`/assets/projects/${file.name}`}
                    width={3840}
                    height={2043}
                    alt={`${title} image`}
                    className='w-full object-cover rounded-xl border border-gray-400 grow mt-3 cursor-pointer'
                  />
                </Link>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={github}>
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
