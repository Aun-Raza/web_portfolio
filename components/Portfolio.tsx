'use client';

import React from 'react';
import { Arrow as ArrowIcon } from '@public/assets/index';
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Button,
} from '@nextui-org/react';

import Image from 'next/image';
import { LiveIcon } from '@public/assets/social';

const Portfolio = () => {
  type projectType = {
    id: number;
    title: string;
    technology: string[];
    file: { name: string; logo: string };
    links: { github: string; demo: string; video: string };
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
        name: 'habit_tracker.png',
        logo: 'square.png',
      },
      links: {
        github: 'https://github.com/Aun-Raza/PixelHabitTracker',
        demo: 'https://pixeltracker-7vq3.onrender.com',
        video: 'https://www.youtube.com/watch?v=o8DIh0qejXY',
      },
      desc: 'This is an everyday habit tracking app to encourage users to keep track of their habits and extend their habit streaks through a rewarding system. Everyday the user must check that they have completed their habits, so they can continue to transform their productivity.',
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
        video: 'https://www.youtube.com/watch?v=emlL-SYnnXk',
      },
      desc: 'This is a quiz platform designed for JavaScript developers. Users are encouraged to complete various quizzes to prepare themselves for technical interviews of their choosing. CRUD operations are built-in to the app, but can only be used by authenticated/authorized users.',
    },
    {
      id: 3,
      title: 'NoteDev',
      technology: [
        'NextTS',
        'React',
        'Prisma',
        'TypeScript',
        'NextUI',
        'Font-Awesome',
      ],
      file: {
        name: 'notedev.png',
        logo: 'note_icon.svg',
      },
      links: {
        github: 'https://github.com/Aun-Raza/notedev',
        demo: 'https://notedev-hazel.vercel.app',
        video: 'https://www.youtube.com/watch?v=S6baRTcF-pI',
      },
      desc: 'This is a versatile note management app built for software enthusiasts and developers to keep all of their notes in one centralized repository. The app uses the Debounce Design Pattern for updating the notes to improve efficiency.',
    },
  ];

  function getTechnologyStack(id: number, technologies: string[]) {
    return (
      <div className='text-sm md:text-md xl:text-lg flex justify-start gap-3 flex-wrap'>
        {technologies.map((tech) => (
          <div key={tech + id}>{tech}</div>
        ))}
      </div>
    );
  }

  return (
    <div className='bg-white'>
      <section id='portfolio' className='container mx-auto md:py-24'>
        <h2 className='heading-2 center'>
          <ArrowIcon className='inline fill-blue-900' /> Portfolio{' '}
          <ArrowIcon className='inline fill-blue-900 rotate-180' />
        </h2>
        <div className='w-full flex flex-col gap-3 sm:gap-10 font-sans'>
          {projects.map(
            ({
              id,
              title,
              file,
              technology,
              desc,
              links: { github, demo, video },
            }) => (
              <Card key={id} className='-z-0'>
                <CardHeader className='flex gap-3 sm:hidden'>
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
                <Divider className='sm:hidden' />
                <CardBody className='flex flex-col sm:flex-row sm:gap-5'>
                  <div className='w-fit flex flex-col'>
                    <CardHeader className='gap-3 w-fit hidden sm:flex px-0 py-2'>
                      <Image
                        alt='nextui logo'
                        height={40}
                        src={`/assets/projects/${file.logo}`}
                        width={40}
                        className='rounded-sm'
                      />
                      <div className='flex flex-col'>
                        <p>{title}</p>
                        <Link isExternal href={demo}>
                          <p className='text-small text-default-500'>{demo}</p>
                        </Link>
                      </div>
                    </CardHeader>
                    <div className='sm:pt-3 sm:px-1 grow flex flex-col'>
                      <h3 className='mb-2 font-semibold'>Description</h3>
                      <p className='h-auto mb-2 sm:mb-0  2xl:text-xl'>{desc}</p>
                      <h3 className='font-semibold mt-3 xl:mt-9'>Skills</h3>
                      {getTechnologyStack(id, technology)}
                      <div className='grow flex justify-center sm:justify-start items-end gap-3 h-full mt-4'>
                        <Button
                          as={Link}
                          isExternal={true}
                          href={github}
                          className='bg-black fill-white text-white'
                        >
                          <LiveIcon />
                          Github
                        </Button>
                        <Button
                          as={Link}
                          isExternal={true}
                          href={video}
                          color='danger'
                        >
                          <LiveIcon className='fill-white' />
                          Youtube Demo
                        </Button>
                        <Button
                          as={Link}
                          isExternal={true}
                          href={demo}
                          color='secondary'
                        >
                          <LiveIcon className='fill-white' />
                          Live
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Link isExternal href={demo}>
                    <Image
                      src={`/assets/projects/${file.name}`}
                      width={1920}
                      height={1080}
                      alt={`${title} image`}
                      className='object-cover rounded-xl grow mt-3 sm:mt-0 cursor-pointer'
                    />
                  </Link>
                </CardBody>
              </Card>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
