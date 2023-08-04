import React from 'react';

const Skills = () => {
  return (
    <section>
      <h2 className='heading-2 text-center'>Technical Skills</h2>
      <div className='flex gap-3'>
        <nav className='w-1/5'>
          <ul className='skill-categories'>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Databases</li>
            <li>Tools</li>
          </ul>
        </nav>
        <div className='w-4/5 skill-items grid grid-cols-4'>
          <div>HTML</div>
          <div>CSS</div>
          <div>JQuery</div>
          <div>React</div>
          <div>NextJS</div>
          <div>SASS</div>
          <div>TailwindCSS</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
