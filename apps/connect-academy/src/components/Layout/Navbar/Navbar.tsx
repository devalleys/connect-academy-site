import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DesktopNavigation, MobileNavigation } from './components';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={'/connect_academy_logo_white_outline.png'}
                alt="connect-academy-logo"
                width={150}
                height={200}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <MobileNavigation />
            <DesktopNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};
