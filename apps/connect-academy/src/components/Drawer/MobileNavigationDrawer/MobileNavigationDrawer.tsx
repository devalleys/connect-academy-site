'use client';
import { useMobileNavStore } from '@/stores/useMobileNavStore';
import Link from 'next/link';
import React from 'react';

export const MobileNavigationDrawer: React.FC = () => {
  const { isDrawerOpen, closeDrawer } = useMobileNavStore();
  return (
    <div className={`md:hidden ${isDrawerOpen ? 'block' : 'hidden'}`}>
      <div
        className="fixed inset-0 z-[100] bg-black bg-opacity-50"
        onClick={closeDrawer}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-500 ease-in-out z-[101] ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={closeDrawer}
              className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="mt-4 px-4 space-y-2">
            <Link
              href="/"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              href="/training-courses"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              Training & Courses
            </Link>
            <Link
              href="/connect"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              Connect
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
