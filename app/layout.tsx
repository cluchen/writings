import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://leerob.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Cynthia Chen',
    template: '%s | Cynthia Chen',
  },
  description: 'Frontend developer, optimist, community builder.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: 'email', url: 'mailto:cynuchen@gmail.com' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ccyn129' },
    { name: 'github', url: 'https://github.com/cluchen' },
    { name: 'goodreads', url: 'https://www.goodreads.com/user/show/119096263-cynthia-chen' },
  ];

  return (
    <footer className="mt-12">
      <div className="max-w-[60ch] mx-auto w-full">
        <div className="flex justify-start space-x-4 tracking-tight">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-5 text-sm text-gray-400">
          PS: This was a little one hour experiment to try out vibe-coding tools!
          <br />
          This site was forked from{' '}
          <a
            href="https://github.com/leerob/next-mdx-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            leerob
          </a>
          , coded with Codex, and deployed by Vercel.
        </div>
      </div>
    </footer>
  );
}
