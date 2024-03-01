'use client';

import React, { useEffect, useState } from 'react';
import { Arrow as ArrowIcon } from '@public/assets/index';
import { Select, SelectItem } from '@nextui-org/react';

const Skills = () => {
  const props = {
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    className:
      'w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
  };
  const frontendIcon = (
    <svg viewBox='0 0 24 24' {...props} aria-hidden='true'>
      <path d='M21 2h-5v20h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM2 21c0 .6.4 1 1 1h11v-9H2v8zM2 3v8h12V2H3c-.6 0-1 .4-1 1z' />
    </svg>
  );

  const backendIcon = (
    <svg viewBox='0 0 24 24' {...props} aria-hidden='true'>
      <path d='M20 3H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2zm-5 5h-2V6h2zm4 0h-2V6h2zm1 5H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2zm-5 5h-2v-2h2zm4 0h-2v-2h2z' />
    </svg>
  );

  const languageIcon = (
    <svg viewBox='0 0 999.871 1000' {...props} aria-hidden='true'>
      <path d='M154.54 344c-5.334 5.333-9 12.667-11 22s-3 17.667-3 25c0 7.333-.668 11-2 11-1.334 1.333-7 6.333-17 15s-16.334 14.333-19 17c-10.668 9.333-20 8-28-4l-70-76c-6.668-8-6-16 2-24 1.332-1.333 7.332-6 18-14 10.666-8 17.332-13.333 20-16 4-4 13-6 27-6s26.332-4.667 37-14c9.332-9.333 15.332-22 18-38 2.666-16 6-26 10-30 1.332 0 4.332-2.333 9-7 4.666-4.667 13.332-12 26-22 12.666-10 26.332-20.333 41-31 89.332-60 151.332-92 186-96 81.332 0 130.666.667 148 2 8 0 5.332 2.667-8 8-80 34.667-130.668 60-152 76-53.334 37.333-65.334 75.333-36 114 22.666 30.667 35.332 46.667 38 48 5.332 5.333 4.666 10-2 14-1.334 1.333-14 13-38 35s-36.668 33.667-38 35c-9.334 5.333-15.334 6.667-18 4-28-32-51.668-52-71-60-19.334-8-41.668-4-67 12m286 26l410 476c12 14.667 11.332 27.333-2 38l-48 42c-14.668 9.333-27.334 8-38-4l-414-472c-5.334-5.333-5.334-12 0-20l72-62c8-5.333 14.666-4.667 20 2m554-202c10.666 69.333 5.332 124.667-16 166-33.334 58.667-84.668 79.333-154 62-37.334-8-70.668 2.667-100 32l-82 78-68-78 68-70c16-16 26.332-33.667 31-53 4.666-19.333 6.666-41 6-65-.668-24 1-43.333 5-58 8-37.333 54.666-74.667 140-112 8-4 14-3 18 3s4.666 11 2 15c-8 8-23.334 34.667-46 80-9.334 6.667-13.334 18.333-12 35 1.332 16.667 14.666 34.333 40 53 38.666 26.667 70.666 19.333 96-22 4-8 12.666-21.667 26-41 13.332-19.333 20.666-30.333 22-33 2.666-6.667 7-9.667 13-9 6 .667 9.666 6.333 11 17m-858 684l254-248 76 86-246 242c-13.334 13.333-26 14.667-38 4l-46-46c-14.668-12-14.668-24.667 0-38' />
    </svg>
  );

  const cloudIcon = (
    <svg viewBox='0 0 1024 1024' {...props}>
      <path d='M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z' />
    </svg>
  );

  const devOpsIcon = (
    <svg viewBox='0 0 640 512' {...props}>
      <path d='M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z' />
    </svg>
  );

  const databaseIcon = (
    <svg viewBox='0 0 700 1000' {...props}>
      <path d='M686 642c9.333-13.333 14-12.667 14 2v100c0 49.333-34.667 94.333-104 135s-151.333 61-246 61c-93.333 0-175-20.333-245-61S0 793.333 0 744V644c0-5.333 1.333-8.667 4-10 2.667-1.333 6 1.333 10 8 21.333 34.667 63 63.333 125 86s132.333 34 211 34 149-11.333 211-34 103.667-51.333 125-86m2-254c5.333-10.667 9.333-10.667 12 0v116c0 45.333-34 83.333-102 114s-150.667 46-248 46c-96 0-178.333-15.333-247-46S0 549.333 0 504V388c0-13.333 4.667-13.333 14 0 20 30.667 61.333 55.667 124 75s133.333 29 212 29 149.333-9.667 212-29 104.667-44.333 126-75M350 60c96 0 178.333 13 247 39s103 57 103 93v64c0 38.667-34.333 71.667-103 99s-151 41-247 41-178.333-13.667-247-41S0 294.667 0 256v-64c0-36 34.333-67 103-93s151-39 247-39' />
    </svg>
  );

  const categories = [
    { name: 'Languages', svg: languageIcon },
    { name: 'Frontend', svg: frontendIcon },
    { name: 'Backend', svg: backendIcon },
    { name: 'Databases & ORM', svg: databaseIcon },
    { name: 'DevOps Tools', svg: devOpsIcon },
    { name: 'Cloud', svg: cloudIcon },
  ];
  const items = [
    [
      { id: 12, label: 'Java' },
      { id: 13, label: 'Python3' },
      { id: 14, label: 'JavaScript (ES6)' },
      { id: 15, label: 'TypeScript' },
      { id: 16, label: 'C#' },
    ],
    [
      { id: 1, label: 'HTML5' },
      { id: 2, label: 'CSS3' },
      { id: 3, label: 'React' },
      { id: 4, label: 'Redux' },
      { id: 5, label: 'Bootstrap 5' },
      { id: 6, label: 'TailwindCSS' },
    ],
    [
      { id: 7, label: 'Spring Framework' },
      { id: 8, label: 'Spring Boot' },
      { id: 9, label: 'Node' },
      { id: 10, label: 'Express' },
      { id: 11, label: 'GraphQL' },
    ],
    [
      { id: 17, label: 'MySQL' },
      { id: 18, label: 'Hibernate' },
      { id: 19, label: 'Prisma' },
      { id: 20, label: 'MongoDB' },
      { id: 21, label: 'Mongoose' },
    ],
    [
      { id: 22, label: 'Jenkins' },
      { id: 23, label: 'Docker' },
      { id: 24, label: 'JUnit' },
      { id: 25, label: 'Jest' },
      { id: 26, label: 'GitHub Actions' },
    ],
    [
      { id: 100, label: 'Amazon Web Services (AWS)' },
      { id: 101, label: 'S3 Bucket' },
      { id: 102, label: 'S3 Objects' },
      { id: 103, label: 'Elastic Beanstalk' },
      { id: 104, label: 'IAM' },
      { id: 106, label: 'EC2' },
    ],
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <section
      id='skills'
      className='py-24 2xl:py-52 flex-grow h-fit sm:h-screen'
    >
      <div className='container mx-auto'>
        <h2 className='heading-2 center'>
          <ArrowIcon className='inline fill-blue-900' /> Skills
          <ArrowIcon className='inline fill-blue-900 rotate-180' />
        </h2>

        <div className='sm:flex sm:border rounded-lg shadow-lg'>
          <Select label='Select category' className='w-full px-6 sm:hidden'>
            {categories.map((category, index) => (
              <SelectItem
                key={category.name}
                value={category.name}
                textValue={category.name}
                onClick={() => setSelectedCategoryIndex(index)}
              >
                <div className='flex p-1'>
                  <div>{category.svg}</div>
                  <span className='ms-3'>{category.name}</span>
                </div>
              </SelectItem>
            ))}
          </Select>
          <aside
            id='default-sidebar'
            aria-label='Sidebar'
            className='hidden sm:block sm:w-1/4 p-2'
          >
            <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
              <ul className='space-y-2 font-medium'>
                {categories.map((category, index) => (
                  <li
                    key={category.name}
                    onClick={() => {
                      console.log(index);
                      setSelectedCategoryIndex(() => index);
                    }}
                    className={`skill-nav-selector group ${
                      index === selectedCategoryIndex ? 'bg-gray-200' : ''
                    }`}
                  >
                    <div>{category.svg}</div>
                    <span className='ms-3'>{category.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className='border-s shadow-xl sm:w-3/4 p-3 mt-5 sm:mt-0'>
            <div className='h-fit flex start flex-wrap justify-center sm:justify-start items-start gap-3 pb-14 sm:pb-0'>
              {items[selectedCategoryIndex].map((item) => (
                <div
                  key={item.id}
                  className='p-3 w-fit border h-fit flex items-center justify-center gap-3 font-semibold rounded-2xl'
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
