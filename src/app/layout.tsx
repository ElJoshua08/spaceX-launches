import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Outfit } from 'next/font/google';

import './globals.css';
import { ThemeToggle } from '@/components/theme-toggle';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'SpaceX Launches',
  description: 'View all detailed information about SpaceX launches',
};

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['200', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="dark:hidden fixed top-0 -z-10 h-full w-full bg-white">
            <div className="fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(177,64,82,0.69)] opacity-50 blur-[80px]"></div>
          </div>
          <div className="hidden dark:block fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,rgba(182,64,84,0.5)_100%)]" />
          <Header />
          {children}
          <div className="fixed bottom-4 left-4">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
