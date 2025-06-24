import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="relative h-[60px] w-[200px]">
              <Image
                src={'/connect_academy_logo.png'}
                alt="connect-academy-logo"
                width={150}
                height={200}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 bg-gray-200 rounded-3xl px-3 py-1">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>

                <Link
                  href="/about-us"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  href="/training-courses"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Training & Courses
                </Link>
                <Link
                  href="/connect"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
