import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Providers } from './providers';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aun Raza | Full-Stack MERN Developer',
  description:
    "Aun Raza's portfolio showcase his unique personality, technical skills, and finished projects (not school-related) to employers and viewers. Always feel free to contact Aun for any discussion about coding or life in general.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/assets/computer-icon.png' sizes='any' />
      </head>
      <body className={outfit.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
