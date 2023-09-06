import About from '@components/About';
import Contact from '@components/Contact';
import Homepage from '@components/Home';
import Portfolio from '@components/Portfolio';
import Skills from '@components/Skills';
import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <main>
      <Homepage />
      <div className='md:flex justify-evenly items-stretch '>
        <About />
        <Skills />
      </div>
      <Portfolio />
      <Contact />
    </main>
  );
}
