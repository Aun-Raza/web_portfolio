import React from 'react';
import {
  HTML,
  CSS,
  JavaScript,
  React as ReactIcon,
  NextJS,
  TypeScript,
  Jest,
  DB,
  GraphQL,
} from '@public/assets/skills/index';
import { Oxanium } from 'next/font/google';
const oxanium = Oxanium({ subsets: ['latin'] });
import { Arrow as ArrowIcon } from '@public/assets/index';

const Skills = () => {
  return (
    <section className='bg-white pt-0'>
      <div className='container mx-auto'>
        <h2 className='heading-2 center'>
          <ArrowIcon className='inline fill-blue-900' /> Technical Skills{' '}
          <ArrowIcon className='inline fill-blue-900 rotate-180' />
        </h2>
        <div
          className={'flex flex-wrap justify-center gap-2 ' + oxanium.className}
        >
          <div className='skill_item'>
            <HTML className='text-4xl' />
            <h3 className='text-2xl font-semibold'>HTML5</h3>
          </div>
          <div className='skill_item'>
            <CSS className='text-4xl' />
            <h3 className='text-2xl font-semibold'>CSS3</h3>
          </div>
          <div className='skill_item'>
            <JavaScript className='text-4xl' />
            <h3 className='text-2xl font-semibold'>JS</h3>
          </div>
          <div className='skill_item'>
            <ReactIcon className='text-4xl' />
            <h3 className='text-2xl font-semibold'>React</h3>
          </div>
          <div className='skill_item'>
            <NextJS className='text-4xl' />
            <h3 className='text-2xl font-semibold'>NextJS</h3>
          </div>
          <div className='skill_item'>
            <TypeScript className='text-4xl fill-blue-500' />
            <h3 className='text-2xl font-semibold'>TS</h3>
          </div>
          <div className='skill_item'>
            <Jest className='text-4xl' />
            <h3 className='text-2xl font-semibold'>Jest</h3>
          </div>
          <div className='skill_item'>
            <DB className='text-4xl fill-green-400' />
            <h3 className='text-2xl font-semibold'>MongoDB</h3>
          </div>
          <div className='skill_item'>
            <GraphQL className='text-4xl' />
            <h3 className='text-2xl font-semibold'>GraphQL</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
