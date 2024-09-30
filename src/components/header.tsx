'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Launches', href: '/launches' },
    { name: 'Graphs', href: '/graphs' },
  ];

  return (
    <div className="w-full flex flex-row items-center justify-between p-2 h-[80px] ">
      <h1 className="text-2xl font-medium">
        <span className="text-3xl font-bold">SpaceX</span> Launches
      </h1>
      <NavBar navItems={navItems} />
    </div>
  );
};

interface NavItem {
  name: string;
  href: string;
}

const NavBar = ({ navItems }: { navItems: NavItem[] }) => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around gap-4 mr-10">
      {navItems.map((navItem) => (
        <Link
          key={navItem.name}
          href={navItem.href}
          className={cn(
            'text-lg font-normal text-secondary-foreground/70 transition-colors',
            {
              'text-primary': pathname === navItem.href,
              'hover:text-primary': pathname !== navItem.href,
            }
          )}
        >
          {navItem.name}
        </Link>
      ))}
    </nav>
  );
};
