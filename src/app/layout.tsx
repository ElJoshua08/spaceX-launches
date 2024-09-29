import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'SpaceX Launches',
  description: 'View all detailed information about SpaceX launches',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:hidden absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
          <div className="hidden dark:block absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
          {children}
          <div className="absolute bottom-4 left-4">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
