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

const Skills = () => {
  return (
    <section>
      <h2 className='heading-2 text-center'>Technical Skills</h2>

      <div className={'grid grid-cols-5 gap-2 ' + oxanium.className}>
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
    </section>
  );
};

export default Skills;
