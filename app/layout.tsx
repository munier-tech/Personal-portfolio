import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Welcome to my developer portfolio showcasing my projects and skills',
  viewport: 'width=device-width, initial-scale=1.0',
   icons: {
    icon: '/images.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light dark:bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
