import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Providers } from './providers';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aun Raza',
  description:
    "Aun Raza's portfolio website detailing recent completed projects, and a little bit about me.",
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
        <link rel='icon' href='/assets/stack_icon.svg' sizes='any' />
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
