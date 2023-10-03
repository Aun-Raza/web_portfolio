import About from '@components/About';
import Contact from '@components/Contact';
import Homepage from '@components/Home';
import Portfolio from '@components/Portfolio';
import Skills from '@components/Skills';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Homepage />
      <div className='lg:flex justify-evenly items-stretch'>
        <About />
        <div className='lg:w-1/2 xl:w-3/4'>
          <Image
            className='object-cover w-full h-full mx-auto my-auto'
            src='/aunraza_cntower.jpeg'
            width={632}
            height={324}
            alt='Aun Raza | CN Tower'
          />
        </div>
      </div>
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
