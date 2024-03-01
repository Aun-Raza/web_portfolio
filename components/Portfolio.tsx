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
import { GitHubIcon, LiveIcon } from '@public/assets/social';

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
      id: 3,
      title: 'NextGenVault',
      technology: [
        'React',
        'TypeScript',
        'Spring Boot',
        'Hibernate',
        'MySQL',
        'AWS',
        'S3',
        'EBS',
      ],
      file: {
        name: 'nextgenvault.png',
        logo: 'note_icon.svg',
      },
      links: {
        github: 'https://github.com/Aun-Raza/ecommerce',
        demo: 'http://nextgenvault.s3-website.ca-central-1.amazonaws.com/',
      },
      desc: 'An innovative e-commerce platform specializing in advanced tech gadgets, including movable desks, futuristic devices, and robot dogs. Serves as a centralized hub for enthusiasts to discover and purchase high-end, niche tech gadgets not commonly found in the market.',
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
      desc: 'An interactive quiz application designed to test and enhance users’ JavaScript knowledge, featuring Multiple-Choice and True-False questions. JS-Quiz stands as a testament to the effective application of the MERN stack in creating engaging educational tools.',
    },
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
      },
      desc: 'An alternative, gamified everyday habit tracking application utilizing the GraphQL stack. Enhances daily habit formation through an engaging, user-friendly interface and a rewarding points system.',
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
          <ArrowIcon className='inline fill-blue-900' /> Projects
          <ArrowIcon className='inline fill-blue-900 rotate-180' />
        </h2>
        <div className='w-full flex flex-col gap-3 sm:gap-10 font-sans'>
          {projects.map(
            (
              { id, title, file, technology, desc, links: { github, demo } },
              index
            ) => (
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
                <CardBody
                  className={`flex flex-col sm:flex-row sm:gap-5 ${
                    index % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
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
                          variant='flat'
                        >
                          <GitHubIcon />
                          Github
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
