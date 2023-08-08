import React from 'react';
import { Arrow as ArrowIcon, ExternalLink } from '@public/assets/index';
import Image from 'next/image';
import { GitHubIcon } from '@public/assets/social';
import Link from 'next/link';

const Portfolio = () => {
  type projectType = {
    id: number;
    title: string;
    technology: string[];
    file: string;
    links: { github: string; demo: string };
    desc: string;
  };

  const projects: projectType[] = [
    {
      id: 1,
      title: 'Pixel Tracker',
      technology: ['React', 'Node', 'GraphQL', 'MongoDB', 'JWT'],
      file: 'habit_tracker.png',
      links: {
        github: 'https://github.com/Aun-Raza/PixelHabitTracker',
        demo: '',
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
        'Jest',
        'MongoDB',
        'JWT',
        'TypeScript',
      ],
      file: 'quiz.png',
      links: { github: 'https://github.com/Aun-Raza/Geo-Quiz', demo: '' },
      desc: 'Developed a comprehensive MERN quiz app to prepare users for technical interviews. JS-Quiz supports Multiple-Choice and True-False format.',
    },
    {
      id: 3,
      title: 'ChatSphere',
      technology: [
        'React',
        'WebSocket',
        'Node',
        'Express',
        'MongoDB',
        'JWT',
        'TypeScript',
      ],
      file: 'chat.png',
      links: { github: 'https://github.com/Aun-Raza/ChatSphere', demo: '' },
      desc: 'Constructed a secure chat application ensuring user privacy through encrypted messages.',
    },
  ];

  function getTechnologyStack(id: number, technologies: string[]) {
    return (
      <div className='flex justify-center md:justify-start gap-2 flex-wrap'>
        {technologies.map((tech) => (
          <div key={tech + id} className='btn border border-gray-400'>
            {tech}
          </div>
        ))}
      </div>
    );
  }

  return (
    <section id='portfolio'>
      <h2 className='heading-2 center'>
        <ArrowIcon className='inline fill-blue-900' /> Portfolio{' '}
        <ArrowIcon className='inline fill-blue-900 rotate-180' />
      </h2>
      <div className='flex flex-col gap-5'>
        {projects.map(
          ({ id, title, file, technology, desc, links: { github, demo } }) => (
            <div
              key={id}
              className='flex flex-col-reverse md:flex-row items-stretch gap-2 md:w-11/12 w-full mx-auto border shadow-lg bg-white hover:scale-105 transition-all md:rounded-md cursor-pointer p-2'
            >
              <div className='md:w-1/2 flex-grow flex items-center'>
                <Image
                  src={`/assets/projects/${file}`}
                  width={250}
                  height={250}
                  alt={`${title} image`}
                  className='w-full rounded-md shadow-lg'
                />
              </div>
              <div className='md:w-1/2 flex-grow flex flex-col'>
                <h3 className='heading-3 mt-2 mx-auto md:w-full'>
                  <ArrowIcon className='inline fill-blue-600' />
                  {title}
                  <ArrowIcon className='inline fill-blue-600 -rotate-180 md:hidden' />
                </h3>
                <div className='flex-grow'>
                  <p className='text-center md:text-left'>{desc}</p>
                  <p className='mt-2'>
                    <span className='text-blue-600 block font-bold w-fit md:w-full mx-auto mb-2'>
                      Technology
                    </span>{' '}
                    {getTechnologyStack(id, technology)}
                  </p>
                </div>
                <div className='flex justify-center gap-2 py-2'>
                  <Link target='_blank' href={github} className='btn'>
                    <GitHubIcon /> Code
                  </Link>
                  <Link target='_blank' href={demo} className='btn'>
                    <ExternalLink /> Live Demo
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
